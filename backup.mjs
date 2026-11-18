import { scenarios, vocabulary } from './content.mjs';
import { restoreConversation } from './practice.mjs';
import { restoreReview } from './review.mjs';
import { isReviewScope, practiceLevels } from './review-levels.mjs';
import { isQuizSelection, quizSetsByKey, quizSubjectsBySelectionKey } from './quiz-catalog.mjs';
import { restoreGrammarEvidence } from './study-skill.mjs';
import { restoreTextQuiz } from './text-quiz.mjs';

const activityKeys = ['review', ...scenarios.map(({ id }) => `answers:${id}`), ...Object.keys(quizSetsByKey)];
const activityKeySet = new Set(activityKeys);
export const BACKUP_KEYS = [
  'scene', 'mode', 'supports', ...activityKeys, ...Object.keys(quizSubjectsBySelectionKey), 'grammarEvidence', 'studyOrder'
];
const backupFormat = 'konoha-travel-preview';

export function createBackup(snapshot) {
  return { format: backupFormat, version: 1, snapshot };
}

export function parseBackup(text) {
  const { format, version, snapshot } = JSON.parse(text) ?? {};
  if (format !== backupFormat || version !== 1 || !snapshot || typeof snapshot !== 'object' || Array.isArray(snapshot)) {
    throw new Error('Unsupported backup format');
  }

  const validated = {};
  for (const key of BACKUP_KEYS) {
    const value = snapshot[key];
    if (value == null) continue;

    if (key === 'scene') {
      if (!scenarios.some(scene => scene.id === value)) throw new Error('Invalid scene');
    } else if (key === 'mode') {
      if (!['typed', 'choice'].includes(value)) throw new Error('Invalid answer mode');
    } else if (key === 'supports') {
      if (typeof value.romaji !== 'boolean' || typeof value.translation !== 'boolean') throw new Error('Invalid study display');
    } else if (key === 'studyOrder') {
      if (!Array.isArray(value) || value.length > activityKeys.length || new Set(value).size !== value.length
        || !value.every(item => activityKeySet.has(item))) throw new Error('Invalid study order');
    } else if (key === 'grammarEvidence') {
      const restored = restoreGrammarEvidence(value);
      if (typeof value !== 'object' || Array.isArray(value) || Object.keys(restored).length !== Object.keys(value).length) {
        throw new Error('Invalid grammar evidence');
      }
      validated[key] = restored;
      continue;
    } else if (Object.hasOwn(quizSubjectsBySelectionKey, key)) {
      if (!isQuizSelection(quizSubjectsBySelectionKey[key], value)) throw new Error('Invalid quiz set');
    } else if (Object.hasOwn(quizSetsByKey, key)) {
      const restored = restoreTextQuiz(quizSetsByKey[key].questions, value);
      if (!Array.isArray(value.answers) || restored.answers.length !== value.answers.length
        || restored.awaitingNext !== value.awaitingNext
        || (value.retry !== undefined && (!restored.retry
          || !Array.isArray(value.retry.answers) || restored.retry.answers.length !== value.retry.answers.length
          || restored.retry.awaitingNext !== value.retry.awaitingNext))) throw new Error('Invalid text quiz state');
      validated[key] = restored;
      continue;
    } else if (key === 'review') {
      const restored = restoreReview(vocabulary, value);
      const { records, session, adaptive } = restored;
      if (typeof value !== 'object' || Array.isArray(value) || !value.records || typeof value.records !== 'object'
        || Array.isArray(value.records) || Object.keys(records).length !== Object.keys(value.records).length
        || Object.entries(value.records).some(([id, record]) => record?.firstAnswer !== undefined && !records[id].firstAnswer)
        || (value.session != null && !session)
        || (value.session?.retry !== undefined && !session?.retry)
        || (value.adaptive !== undefined && (
          !isReviewScope(value.adaptive?.scope) || !practiceLevels.includes(value.adaptive?.level)
          || adaptive.changedAt !== value.adaptive.changedAt
          || (value.adaptive.topic !== undefined && adaptive.topic !== value.adaptive.topic)
          || (value.adaptive.previousAssessment !== undefined && !adaptive.previousAssessment)
        ))) {
        throw new Error('Invalid word review state');
      }
      validated[key] = restored;
      continue;
    } else {
      const scenario = scenarios.find(item => key === `answers:${item.id}`);
      if (!Array.isArray(value) || restoreConversation(scenario, value).answers.length !== value.length) {
        throw new Error('Invalid conversation history');
      }
    }
    validated[key] = value;
  }
  return validated;
}
