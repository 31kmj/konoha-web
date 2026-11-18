import { vocabulary } from './content.mjs';
import { quizCatalog } from './quiz-catalog.mjs';
import { restoreReview } from './review.mjs';
import { isWordResult, practiceLevels, restoreReviewLevels } from './review-levels.mjs';
import { restoreTextQuiz } from './text-quiz.mjs';

const grammarSets = quizCatalog.grammar.sets;
const grammarById = new Map(grammarSets.flatMap(set => set.questions.map(question => [question.id, question])));
const recentPerArea = 12;
const minimumItems = 10;
const minimumNewItems = 4;
const promoteAt = 82;
const lowerAt = 45;

export function restoreGrammarEvidence(saved) {
  if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {};
  return Object.fromEntries(Object.entries(saved).flatMap(([id, result]) =>
    grammarById.has(id) && Number.isSafeInteger(result?.at) && result.at >= 0 && typeof result.correct === 'boolean'
      ? [[id, { at: result.at, correct: result.correct }]]
      : []));
}

export function grammarEvidenceFrom(snapshot) {
  const evidence = restoreGrammarEvidence(snapshot.grammarEvidence);
  for (const { key, questions } of grammarSets) {
    if (!snapshot[key]) continue;
    const { answers } = restoreTextQuiz(questions, snapshot[key]);
    for (const [index, answer] of answers.entries()) {
      const question = questions[index];
      evidence[question.id] ??= { at: 0, correct: answer === question.answer };
    }
  }
  return evidence;
}

function recentEvidence(entries) {
  return entries.sort((a, b) => b.at - a.at).slice(0, recentPerArea);
}

export function getStudySkill(snapshot, now = Date.now()) {
  const { level, changedAt, previousAssessment } = restoreReviewLevels(snapshot.review?.adaptive);
  const words = recentEvidence(vocabulary.flatMap(word => {
    if (word.level !== level) return [];
    const record = snapshot.review?.records?.[word.id];
    const recall = isWordResult(record?.recall) && record.recall.at <= now;
    const result = recall ? record.recall : record?.firstAnswer;
    if (!isWordResult(result) || result.at > now) return [];
    return [{ ...result, weight: recall ? (result.mode === 'typed' ? 3 : 2) : 1 }];
  }));
  const grammar = recentEvidence(Object.entries(grammarEvidenceFrom(snapshot)).flatMap(([id, result]) =>
    grammarById.get(id).level === level && result.at <= now ? [{ ...result, weight: 1 }] : []));
  const entries = [...words, ...grammar];
  const weight = entries.reduce((sum, result) => sum + result.weight, 0);
  const correct = entries.reduce((sum, result) => sum + (result.correct ? result.weight : 0), 0);
  const total = entries.length;
  const score = total ? Math.round(100 * (correct + 1) / (weight + 2)) : null;
  const fresh = entries.filter(result => result.at > changedAt).length;
  const ready = total >= minimumItems && fresh >= minimumNewItems;
  const assessment = total >= minimumNewItems || !previousAssessment ? { level, score } : previousAssessment;
  return { level, score, assessment, wordCount: words.length, grammarCount: grammar.length, total, ready };
}

export function applyStudyRecommendation(snapshot, answeredLevel, now) {
  const skill = getStudySkill(snapshot, now);
  if (answeredLevel !== skill.level || !skill.ready) return snapshot;
  const offset = skill.score >= promoteAt ? 1 : skill.score <= lowerAt ? -1 : 0;
  const nextLevel = practiceLevels[practiceLevels.indexOf(skill.level) + offset];
  if (!nextLevel || nextLevel === skill.level) return snapshot;
  const review = restoreReview(vocabulary, snapshot.review);
  return {
    ...snapshot,
    review: {
      ...review,
      adaptive: {
        ...review.adaptive,
        level: nextLevel,
        changedAt: now,
        previousAssessment: { level: skill.level, score: skill.score }
      }
    }
  };
}

export function recordGrammarResult(previous, snapshot, question, correct, now) {
  const grammarEvidence = grammarEvidenceFrom(previous);
  if (Object.hasOwn(grammarEvidence, question.id)) return { ...snapshot, grammarEvidence };
  grammarEvidence[question.id] = { at: now, correct };
  return applyStudyRecommendation({ ...snapshot, grammarEvidence }, question.level, now);
}
