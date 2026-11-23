import { placementKanaQuestions, placementLevelQuestions } from './placement-bank.mjs';

const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
const maximumQuestions = 26;

export function createPlacement() {
  return { version: 1, answers: [] };
}

function replayPlacement(value) {
  if (value?.version !== 1 || !Array.isArray(value.answers) || value.answers.length > maximumQuestions
    || !Array.from(value.answers).every(answer => Number.isInteger(answer) && answer >= -1 && answer < 4)) return null;

  const answers = value.answers;
  const kana = { hiragana: { correct: 0, total: 3 }, katakana: { correct: 0, total: 3 } };
  let position = 0;
  for (const question of placementKanaQuestions) {
    if (position === answers.length) return { question };
    if (answers[position] === question.answer) kana[question.script].correct += 1;
    position += 1;
  }

  const assessments = [];
  for (const level of levels) {
    const questions = placementLevelQuestions[level];
    const correct = { vocabulary: 0, grammar: 0 };
    for (const question of questions) {
      if (position === answers.length) return { question };
      if (answers[position] === question.answer) correct[question.area] += 1;
      position += 1;
    }
    const totalCorrect = correct.vocabulary + correct.grammar;
    const passed = totalCorrect >= 3 && correct.vocabulary >= 1 && correct.grammar >= 1;
    assessments.push({
      level, correct: totalCorrect, total: questions.length,
      vocabularyCorrect: correct.vocabulary, grammarCorrect: correct.grammar, passed
    });
    if (!passed || level === 'N1') {
      if (position !== answers.length) return null;
      return {
        question: null,
        result: {
          recommendedLevel: level,
          kana,
          needsKanaPractice: kana.hiragana.correct < 2 || kana.katakana.correct < 2
            || kana.hiragana.correct + kana.katakana.correct < 5,
          levels: assessments,
          answeredCount: position,
          maximumQuestions
        }
      };
    }
  }
}

export function restorePlacement(value) {
  return replayPlacement(value) ? { version: 1, answers: [...value.answers] } : null;
}

export function placementQuestions(state) {
  const question = replayPlacement(state)?.question;
  if (!question) return null;
  const { id, area, level, script, prompt, romaji, instruction, choices } = question;
  return { id, area, level, script, prompt, romaji, instruction, choices: choices.map(choice => ({ ...choice })) };
}

export function answerPlacement(state, choiceIndex) {
  const replay = replayPlacement(state);
  if (!replay) throw new TypeError('Invalid placement state');
  if (!Number.isInteger(choiceIndex) || choiceIndex < -1 || choiceIndex >= 4) {
    throw new TypeError('Invalid placement answer');
  }
  return {
    version: 1,
    answers: replay.question ? [...state.answers, choiceIndex] : [...state.answers]
  };
}

export function placementResult(state) {
  return replayPlacement(state)?.result ?? null;
}
