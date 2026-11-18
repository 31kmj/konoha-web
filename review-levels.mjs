export const practiceLevels = Object.freeze(['N5', 'N4', 'N3', 'N2', 'N1']);
export const defaultLevel = 'N3';
export const DAY_MS = 24 * 60 * 60 * 1000;

export function isReviewScope(scope) {
  return scope === 'recommended' || scope === 'all' || practiceLevels.includes(scope);
}

export function isWordResult(result) {
  return Number.isSafeInteger(result?.at) && result.at >= 0
    && typeof result.correct === 'boolean' && ['choice', 'typed'].includes(result.mode);
}

export function restoreReviewLevels(saved) {
  const settings = {
    scope: isReviewScope(saved?.scope) ? saved.scope : 'recommended',
    level: practiceLevels.includes(saved?.level) ? saved.level : defaultLevel,
    changedAt: Number.isSafeInteger(saved?.changedAt) && saved.changedAt >= 0 ? saved.changedAt : 0
  };
  const previous = saved?.previousAssessment;
  if (previous?.level !== settings.level && practiceLevels.includes(previous?.level)
    && Number.isInteger(previous.score) && previous.score >= 0 && previous.score <= 100) {
    settings.previousAssessment = { level: previous.level, score: previous.score };
  }
  return settings;
}

export function wordsInReviewScope(words, { scope, level, topic }) {
  const target = scope === 'recommended' ? level : scope;
  if (target === 'all' && !topic) return words;
  return words.filter(word => (target === 'all' || word.level === target) && (!topic || word.scene === topic));
}

