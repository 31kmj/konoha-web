import { normalizeKana } from './practice.mjs';
import { DAY_MS, isWordResult, restoreReviewLevels, wordsInReviewScope } from './review-levels.mjs';

export { DAY_MS };
const RETRY_MS = 10 * 60 * 1000;
const REVIEW_INTERVALS = [1, 3, 7, 14, 30];
const MAX_STAGE = REVIEW_INTERVALS.length;
const SET_SIZE = 5;

export function reviewPool(words, { records, adaptive }, now) {
  const recommended = adaptive.scope === 'recommended';
  const choiceScope = recommended ? { ...adaptive, scope: 'all' } : adaptive;
  const scopedWords = wordsInReviewScope(words, choiceScope);
  if (!recommended) return { studyWords: scopedWords, choiceWords: scopedWords };

  const studyWords = scopedWords.filter(word => word.level === adaptive.level || records[word.id]?.dueAt <= now);
  const studyLevels = new Set(studyWords.map(word => word.level));
  const choiceWords = scopedWords.filter(word => studyLevels.has(word.level));
  return { studyWords, choiceWords };
}

export function reviewCounts(words, records, now) {
  const studied = words.filter(word => records[word.id]);
  return {
    due: studied.filter(word => records[word.id].dueAt <= now).length,
    newWords: words.length - studied.length
  };
}

function shuffle(items, random) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const other = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}

export function createReviewSet(words, records, now, sessionId, random = Math.random, choiceWords = words) {
  const due = words.filter(word => records[word.id]?.dueAt <= now)
    .sort((first, second) => records[first.id].dueAt - records[second.id].dueAt);
  const unseen = words.filter(word => !records[word.id]);
  const queue = [...due, ...unseen].slice(0, SET_SIZE);

  const deck = queue.map(word => {
    const distractors = choiceWords.filter(other => other.id !== word.id && other.ko !== word.ko);
    const nearby = distractors.filter(other => other.scene === word.scene);
    const options = [...shuffle(nearby, random), ...shuffle(distractors.filter(other => other.scene !== word.scene), random)];
    const meanings = new Set([word.ko]);
    const choices = [word.id];
    for (const other of options) {
      if (choices.length === 4) break;
      if (meanings.has(other.ko)) continue;
      meanings.add(other.ko);
      choices.push(other.id);
    }
    const typed = records[word.id]?.stage >= 2 || choices.length < 2;
    return { id: word.id, choices: typed ? [] : shuffle(choices, random) };
  });

  return { id: sessionId, deck, index: 0, results: [] };
}

function validRecord(record) {
  return record && Number.isInteger(record.stage) && record.stage >= 0
    && record.stage <= MAX_STAGE && Number.isFinite(record.dueAt) && record.dueAt >= 0
    && (record.reviewedAt === undefined
      || (Number.isSafeInteger(record.reviewedAt) && record.reviewedAt >= 0 && record.reviewedAt <= record.dueAt));
}

function validRound(round, size) {
  return typeof round?.id === 'string' && round.id.length > 0
    && Number.isInteger(round.index) && round.index >= 0 && round.index <= size
    && Array.isArray(round.results) && round.results.length >= round.index
    && round.results.length <= Math.min(round.index + 1, size)
    && round.results.every(result => typeof result === 'boolean');
}

function missedDeck(session) {
  return session.deck.filter((_, index) => session.results[index] === false)
    .map(question => {
      if (!question.choices.length) return question;
      const [first, ...rest] = question.choices;
      return { ...question, choices: [...rest, first] };
    });
}

export function reviewRound(session) {
  if (!session?.retry) return session;
  return { ...session.retry, deck: missedDeck(session) };
}

export function canRetryReview(session) {
  if (!session || session.index !== session.deck.length || session.results.every(Boolean)) return false;
  if (!session.retry) return true;
  const round = reviewRound(session);
  return round.index === round.deck.length && round.results.some(result => !result);
}

export function startReviewRetry(state, retryId) {
  const session = state.session;
  if (!canRetryReview(session) || typeof retryId !== 'string' || !retryId
    || retryId === session.id || retryId === session.retry?.id) return state;
  return { ...state, session: { ...session, retry: { id: retryId, index: 0, results: [] } } };
}

export function restoreReview(words, saved) {
  const ids = new Set(words.map(word => word.id));
  const records = {};
  for (const id of ids) {
    const record = saved?.records?.[id];
    if (!validRecord(record)) continue;
    const { stage, dueAt, reviewedAt } = record;
    records[id] = { stage, dueAt };
    if (reviewedAt !== undefined) records[id].reviewedAt = reviewedAt;
    for (const key of ['firstAnswer', 'recall']) {
      const result = record[key];
      if (isWordResult(result) && result.at <= (reviewedAt ?? dueAt)) {
        records[id][key] = { at: result.at, correct: result.correct, mode: result.mode };
      }
    }
  }

  const adaptive = restoreReviewLevels(saved?.adaptive);
  const topic = saved?.adaptive?.topic;
  if (words.some(word => word.scene === topic)) adaptive.topic = topic;
  const state = { records, session: null, adaptive };
  const session = saved?.session;
  const deck = session?.deck;
  if (
    !Array.isArray(deck) || deck.length === 0 || deck.length > SET_SIZE
    || new Set(deck.map(question => question?.id)).size !== deck.length
    || !validRound(session, deck.length)
  ) return state;

  const validDeck = deck.every(question =>
    ids.has(question?.id) && Array.isArray(question.choices) && question.choices.length <= 4
    && new Set(question.choices).size === question.choices.length && question.choices.every(id => ids.has(id))
    && (question.choices.length === 0 || (question.choices.length >= 2 && question.choices.includes(question.id)))
  );
  if (!validDeck) return state;

  const restored = { id: session.id, deck, index: session.index, results: session.results };
  const retry = session.retry;
  if (retry && restored.index === deck.length) {
    const size = missedDeck(restored).length;
    if (size && retry.id !== restored.id && validRound(retry, size)) {
      restored.retry = { id: retry.id, index: retry.index, results: retry.results };
    }
  }
  return { ...state, session: restored };
}

export function isReviewAnswerCorrect(word, question, answer) {
  if (typeof answer !== 'string') return false;
  if (question.choices.length) return answer === word.id;
  const normalized = normalizeKana(answer);
  return [word.ja, word.reading, ...(word.aliases ?? [])]
    .some(form => normalizeKana(form) === normalized);
}

function updateRound(state, progress) {
  const session = state.session;
  const updated = session.retry
    ? { ...session, retry: { ...session.retry, ...progress } }
    : { ...session, ...progress };
  return { ...state, session: updated };
}

export function recordReviewAnswer(state, roundId, index, correct, now) {
  const round = reviewRound(state.session);
  if (!round || round.id !== roundId || round.index !== index || round.results.length !== index) return state;
  const question = round.deck[index];
  if (!question) return state;

  const updated = updateRound(state, { results: [...round.results, correct] });
  if (state.session.retry) return updated;

  const previous = state.records[question.id];
  const stage = previous?.stage ?? 0;
  const interval = stage ? REVIEW_INTERVALS[stage - 1] * DAY_MS : RETRY_MS;
  const lastReview = previous?.reviewedAt ?? (previous?.dueAt - interval);
  const delayed = previous && previous.dueAt <= now && now - lastReview >= DAY_MS;
  const nextStage = correct ? Math.min(stage + 1, MAX_STAGE) : 0;
  const delay = correct ? REVIEW_INTERVALS[nextStage - 1] * DAY_MS : RETRY_MS;
  const record = { stage: nextStage, dueAt: now + delay, reviewedAt: now };
  const result = { at: now, correct, mode: question.choices.length ? 'choice' : 'typed' };
  if (!previous) record.firstAnswer = result;
  else if (previous.firstAnswer) record.firstAnswer = previous.firstAnswer;
  if (delayed) {
    record.recall = result;
  } else if (previous?.recall) {
    record.recall = previous.recall;
  }

  return {
    ...updated,
    records: { ...state.records, [question.id]: record }
  };
}

export function advanceReview(state, roundId, index) {
  const round = reviewRound(state.session);
  if (!round || round.id !== roundId || round.index !== index || round.results.length !== index + 1) return state;
  return updateRound(state, { index: index + 1 });
}
