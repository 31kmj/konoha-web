import { scenarios, vocabulary } from './content.mjs';
import { advanceReview, canRetryReview, createReviewSet, isReviewAnswerCorrect, recordReviewAnswer, restoreReview, reviewCounts, reviewPool, reviewRound, startReviewRetry } from './review.mjs';
import { isReviewScope } from './review-levels.mjs';

export function setupWordReview({ load, saveStudy, getSkill, storageKey }) {
  const byId = id => document.getElementById(id);
  const prompt = byId('review-prompt');
  const status = byId('review-status');
  const start = byId('review-start');
  const allTopics = byId('review-all-topics');
  const retry = byId('review-retry');
  const form = byId('review-form');
  const input = byId('review-input');
  const result = byId('review-feedback');
  const meaning = byId('review-answer-ko');
  const exampleTranslation = byId('review-example-ko');
  const choices = byId('review-choices');
  const next = byId('review-next');
  const scope = byId('review-scope');
  const topic = byId('review-topic');
  const scopeNote = byId('review-scope-note');
  const recommendation = byId('review-recommendation');
  const evidence = byId('review-evidence');
  const change = byId('review-level-change');
  const wordById = new Map(vocabulary.map(word => [word.id, word]));
  const sceneNames = new Map(scenarios.map(scene => [scene.id, scene.category]));
  let state;
  let round;
  let composing = false;
  let updating = false;

  for (const [id, name] of sceneNames) {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = name;
    topic.append(option);
  }

  function currentQuestion() {
    return round?.deck[round.index];
  }

  function updateCounts() {
    const now = Date.now();
    const { studyWords } = reviewPool(vocabulary, state, now);
    const { due, newWords } = reviewCounts(studyWords, state.records, now);
    const { scope, topic, level } = state.adaptive;
    const questionActive = Boolean(currentQuestion());
    const blockedTopic = scope === 'recommended' && topic && !studyWords.length;
    byId('review-due').textContent = due;
    byId('review-unseen').textContent = newWords;
    start.disabled = !due && !newWords;
    allTopics.hidden = questionActive || !blockedTopic;
    start.hidden = questionActive || !allTopics.hidden;
    const empty = byId('review-empty');
    empty.hidden = questionActive || !start.disabled;
    if (blockedTopic) {
      empty.textContent = '이 상황에는 ' + level + ' 새 단어가 없어요.';
    } else {
      empty.textContent = studyWords.length
        ? '지금 풀 수 있는 단어를 모두 연습했어요.'
        : '이 상황에 해당하는 단어가 이 수준에는 없어요. 수준이나 상황을 바꿔 보세요.';
    }
  }

  function render({ focus = false, levelChange } = {}) {
    const previous = round;
    state = restoreReview(vocabulary, load('review'));
    const first = state.session;
    round = reviewRound(first);
    const question = currentQuestion();
    const isRetry = Boolean(first?.retry);
    const word = question && wordById.get(question.id);
    const answered = question && round.results.length > round.index;
    const correct = answered && round.results[round.index];
    const showCorrection = answered && !correct;
    const isChoice = question?.choices.length > 0;
    const { level, wordCount, grammarCount, assessment } = getSkill();
    scope.options[0].textContent = '추천 수준 (' + level + ')';
    scope.value = state.adaptive.scope;
    topic.value = state.adaptive.topic ?? '';
    const useRecommendation = state.adaptive.scope === 'recommended';
    scopeNote.hidden = !question && !useRecommendation;
    scopeNote.textContent = question
      ? '현재 문항은 ' + sceneNames.get(word.scene) + ' · ' + word.level + '이에요. 바꾼 범위는 다음 세트부터 적용돼요.'
      : '복습할 때가 된 단어를 먼저 풀어요. 새 단어는 ' + level + '에서 골라요.';
    recommendation.textContent = assessment.score === null
      ? '첫 풀이부터 실력 점수를 계산해요.'
      : assessment.level + ' 실력 점수 ' + assessment.score + '점 / 100';
    evidence.textContent = level + ' 풀이 · 어휘 ' + wordCount + '개 · 문법 ' + grammarCount + '문항';
    change.textContent = levelChange ? '추천 수준을 ' + levelChange + '로 조정했어요.' : '';
    updateCounts();
    retry.hidden = !canRetryReview(first);
    for (const button of [start, allTopics]) {
      button.classList.toggle('primary-button', retry.hidden);
      button.classList.toggle('secondary-button', !retry.hidden);
    }
    next.hidden = !answered;
    prompt.hidden = !question;
    byId('review-reading').hidden = !isChoice;
    form.hidden = !question || isChoice || answered;
    result.hidden = !answered;
    meaning.hidden = !showCorrection;
    meaning.textContent = showCorrection ? word.ko : '';
    exampleTranslation.hidden = !showCorrection;
    exampleTranslation.textContent = showCorrection ? word.example[2] : '';
    choices.hidden = !isChoice || answered;
    choices.replaceChildren();
    if (answered || previous?.id !== round?.id || previous?.index !== round?.index) {
      input.value = '';
    }

    if (!question) {
      if (round) {
        const correct = round.results.filter(Boolean).length;
        const score = `${round.deck.length}문제 중 ${correct}개 맞혔어요.`;
        const firstScore = first.results.filter(Boolean).length + '/' + first.deck.length;
        status.textContent = isRetry ? '오답 연습 · ' + score + ' 첫 풀이 ' + firstScore : score;
        start.textContent = '다음 세트 시작';
      } else {
        start.textContent = '복습 시작';
        status.textContent = '한 번에 최대 5개를 연습해요.';
      }
      if (focus) ([retry, allTopics, start].find(button => !button.hidden && !button.disabled) ?? status).focus();
      return;
    }

    const method = isChoice ? '한국어 뜻 고르기' : '일본어 직접 쓰기';
    status.textContent = (isRetry ? '오답 연습 · ' : '') + `${round.index + 1} / ${round.deck.length} · ${method}`;
    prompt.lang = isChoice ? 'ja' : 'ko';
    prompt.textContent = isChoice ? word.ja : word.ko;
    byId('review-reading').textContent = isChoice ? word.romaji : '';

    if (answered) {
      result.classList.toggle('correct', correct);
      byId('review-verdict').textContent = correct
        ? '맞았어요.'
        : isRetry ? '오답이에요. 아래 예문에서 쓰임을 확인해 보세요.' : '다시 복습할 단어로 저장했어요.';
      byId('review-answer-ja').textContent = word.ja;
      byId('review-answer-romaji').textContent = word.romaji;
      byId('review-example-ja').textContent = word.example[0];
      byId('review-example-romaji').textContent = word.example[1];
      next.textContent = round.index + 1 === round.deck.length ? '결과 보기' : '다음 문제';
    } else if (isChoice) {
      for (const id of question.choices) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'choice review-choice';
        button.textContent = wordById.get(id).ko;
        button.addEventListener('click', () => submit(id));
        choices.append(button);
      }
    }
    if (focus) (answered ? result : prompt).focus();
  }

  async function update(transform, { focus = true, word, remember = false } = {}) {
    if (updating) return;
    updating = true;
    const apply = () => {
      const current = restoreReview(vocabulary, load('review'));
      const now = Date.now();
      const updated = transform(current, now);
      let level = current.adaptive.level;
      if (updated !== current) {
        const before = word && current.records[word.id];
        const after = word && updated.records[word.id];
        const newResult = after && (after.firstAnswer !== before?.firstAnswer || after.recall !== before?.recall);
        const snapshot = saveStudy({ review: updated }, {
          at: now,
          wordLevel: newResult ? word.level : undefined,
          activity: remember ? 'review' : undefined
        });
        level = snapshot.review.adaptive.level;
      }
      render({ focus: focus && updated !== current, levelChange: current.adaptive.level !== level && level });
    };
    try {
      if (navigator.locks) await navigator.locks.request(storageKey, apply);
      else apply();
    } catch {
      byId('review-error').textContent = '퀴즈 진행을 저장하지 못했어요. 다시 시도해 주세요.';
    } finally {
      updating = false;
    }
  }

  function submit(answer) {
    const question = currentQuestion();
    if (!question) return;
    const { id, index } = round;
    byId('review-error').textContent = '';
    const word = wordById.get(question.id);
    const correct = isReviewAnswerCorrect(word, question, answer);
    update((current, now) => recordReviewAnswer(current, id, index, correct, now), { word, remember: true });
  }

  scope.addEventListener('change', () => {
    const selected = scope.value;
    if (isReviewScope(selected)) {
      update(current => ({ ...current, adaptive: { ...current.adaptive, scope: selected } }), { focus: false });
    }
  });

  function selectTopic(id, levelScope) {
    if (id && !sceneNames.has(id)) return;
    update(current => {
      const adaptive = { ...current.adaptive };
      if (id) adaptive.topic = id;
      else delete adaptive.topic;
      if (isReviewScope(levelScope)) adaptive.scope = levelScope;
      return { ...current, adaptive };
    }, { focus: false });
  }

  function startNextSet(includeAllTopics = false) {
    update((current, now) => {
      const active = reviewRound(current.session);
      if (active?.deck[active.index]) return current;
      const adaptive = { ...current.adaptive };
      if (includeAllTopics) {
        if (adaptive.scope !== 'recommended' || !adaptive.topic) return current;
        delete adaptive.topic;
      }
      const nextState = { ...current, adaptive };
      const { studyWords, choiceWords } = reviewPool(vocabulary, nextState, now);
      const session = createReviewSet(studyWords, current.records, now, crypto.randomUUID(), Math.random, choiceWords);
      return session.deck.length ? { ...nextState, session } : current;
    }, { remember: true });
  }

  topic.addEventListener('change', () => selectTopic(topic.value));
  start.addEventListener('click', () => startNextSet());
  allTopics.addEventListener('click', () => startNextSet(true));
  retry.addEventListener('click', () => {
    const completedId = round?.id;
    update(current => {
      if (reviewRound(current.session)?.id !== completedId) return current;
      return startReviewRetry(current, crypto.randomUUID());
    }, { remember: true });
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!composing && input.value.trim()) submit(input.value);
  });
  input.addEventListener('compositionstart', () => { composing = true; });
  input.addEventListener('compositionend', () => { composing = false; });
  byId('review-reveal').addEventListener('click', () => submit(null));
  next.addEventListener('click', () => {
    if (!currentQuestion()) return;
    const { id, index } = round;
    update(current => advanceReview(current, id, index), { remember: true });
  });
  window.addEventListener('storage', event => {
    if (event.key === storageKey && JSON.stringify(restoreReview(vocabulary, load('review'))) !== JSON.stringify(state)) render();
  });
  window.addEventListener('focus', updateCounts);
  window.setInterval(updateCounts, 30_000);
  render();
  return { render, selectTopic };
}
