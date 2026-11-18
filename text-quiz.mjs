function restoreRound(questions, saved) {
  const answers = [];
  for (const index of Array.isArray(saved?.answers) ? saved.answers : []) {
    const question = questions[answers.length];
    if (!Number.isInteger(index) || !question?.choices[index]) break;
    answers.push(index);
  }
  return { answers, awaitingNext: saved?.awaitingNext === true && answers.length > 0 };
}

function missedQuestions(questions, answers) {
  return questions.filter((question, index) => index < answers.length && answers[index] !== question.answer);
}

export function restoreTextQuiz(questions, saved) {
  const full = restoreRound(questions, saved);
  if (!saved?.retry || Array.isArray(saved.retry) || typeof saved.retry !== 'object'
    || full.awaitingNext || full.answers.length !== questions.length) return full;

  const missed = missedQuestions(questions, full.answers);
  return missed.length ? { ...full, retry: restoreRound(missed, saved.retry) } : full;
}

export function textQuizRound(questions, state) {
  return state.retry
    ? { deck: missedQuestions(questions, state.answers), progress: state.retry }
    : { deck: questions, progress: state };
}

export function currentTextQuestion(questions, state) {
  const { deck, progress } = textQuizRound(questions, state);
  return deck[progress.answers.length - Number(progress.awaitingNext)];
}

export function scoreTextRound(deck, answers) {
  return answers.filter((answer, index) => answer === deck[index]?.answer).length;
}

export function startTextRetry(questions, state) {
  if (currentTextQuestion(questions, state) || !missedQuestions(questions, state.answers).length) return state;
  const { deck, progress } = textQuizRound(questions, state);
  if (scoreTextRound(deck, progress.answers) === deck.length) return state;
  return { ...state, retry: { answers: [], awaitingNext: false } };
}

export function updateTextQuizRound(state, progress) {
  return state.retry ? { ...state, retry: progress } : progress;
}
