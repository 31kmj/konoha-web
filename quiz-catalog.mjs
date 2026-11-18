import { contentStatus } from './content.mjs';
import { everydayN3Reading, everydayN3Scripts } from './everyday-n3.mjs';
import { grammarQuestions } from './grammar.mjs';
import { grammarByLevel } from './grammar-bank.mjs';
import { expandedGrammarByLevel } from './grammar-expansion.mjs';
import { listeningQuestions } from './listening.mjs';
import { listeningByLevel } from './listening-bank.mjs';
import { readingQuestions } from './reading.mjs';
import { readingByLevel } from './reading-bank.mjs';
import { defaultLevel, practiceLevels } from './review-levels.mjs';
import { currentTextQuestion, restoreTextQuiz } from './text-quiz.mjs';

const everydayN3 = { id: 'N3-everyday', label: 'N3 생활 실전', level: 'N3' };

function subject(page, title, nextLabel, legacy, byLevel, additionalSets = []) {
  const groups = practiceLevels.flatMap(level => [
    { id: level, label: level, level, questions: byLevel[level] },
    ...additionalSets.filter(set => set.level === level)
  ]);
  const sets = groups.map(set => ({
    ...set,
    key: page + ':' + set.id,
    questions: set.questions.map(question => ({ ...question, level: set.level, ...contentStatus }))
  }));
  sets.push({
    id: 'mixed',
    label: '종합 연습',
    key: page,
    questions: legacy.map(question => ({ ...question, ...contentStatus }))
  });
  return { page, title, nextLabel, selectionKey: page + ':set', sets, hasRecommendedSet: page === 'grammar' };
}

export const quizCatalog = {
  grammar: subject('grammar', '문장 완성', '다음 문장', grammarQuestions, grammarByLevel,
    practiceLevels.map(level => ({ id: level + '-expanded', label: level + ' 문법 확장', level, questions: expandedGrammarByLevel[level] }))),
  reading: subject('reading', '독해', '다음 지문', readingQuestions, readingByLevel, [
    { ...everydayN3, questions: everydayN3Reading }
  ]),
  listening: subject('listening', '대본 연습', '다음 대본', listeningQuestions, listeningByLevel, [
    { ...everydayN3, questions: everydayN3Scripts }
  ])
};

export const quizSetsByKey = Object.fromEntries(
  Object.values(quizCatalog).flatMap(({ sets }) => sets.map(set => [set.key, set]))
);
export const quizSubjectsBySelectionKey = Object.fromEntries(
  Object.values(quizCatalog).map(quiz => [quiz.selectionKey, quiz])
);

export function isQuizSelection(quiz, value) {
  if (quiz.sets.some(set => set.id === value)) return true;
  return quiz.hasRecommendedSet && (value === 'recommended' || Boolean(value && !Array.isArray(value)
    && quiz.sets.some(set => set.level && set.id === value.recommended)));
}

export function recommendedQuizSet(quiz, load, level) {
  const sets = quiz.sets.filter(set => set.level === level);
  return sets.find(set => currentTextQuestion(set.questions, restoreTextQuiz(set.questions, load(set.key)))) ?? sets[0];
}

export function quizSelection(quiz, load, level = defaultLevel) {
  const value = load(quiz.selectionKey);
  const manual = quiz.sets.find(set => set.id === value);
  if (manual) return { set: manual, automatic: false };
  const answers = load(quiz.page)?.answers;
  if (!quiz.hasRecommendedSet || (value == null && Array.isArray(answers))) {
    const id = Array.isArray(answers) ? 'mixed' : defaultLevel;
    return { set: quiz.sets.find(set => set.id === id), automatic: false };
  }

  const pinned = quiz.sets.find(set => set.level && set.id === value?.recommended);
  const legacy = quiz.sets.find(set => set.id === defaultLevel);
  const resumeLegacy = value == null && load(legacy.key)?.answers?.length > 0;
  return { set: pinned ?? (resumeLegacy ? legacy : recommendedQuizSet(quiz, load, level)), automatic: true };
}

export function selectedQuizSet(quiz, load, level) {
  return quizSelection(quiz, load, level).set;
}
