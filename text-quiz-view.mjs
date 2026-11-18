import { currentTextQuestion, restoreTextQuiz, scoreTextRound, startTextRetry, textQuizRound, updateTextQuizRound } from './text-quiz.mjs';
import { isQuizSelection, quizSelection, recommendedQuizSet } from './quiz-catalog.mjs';

export function setupTextQuiz({ load, save, saveStudy, storageKey, quiz, getSkill }) {
  const byId = suffix => document.getElementById(quiz.page + '-' + suffix);
  const selector = byId('set');
  const status = byId('status');
  const title = byId('topic');
  const prompt = byId('prompt');
  const romaji = byId('romaji');
  const choices = byId('choices');
  const feedback = byId('feedback');
  const translation = byId('ko');
  const explanation = byId('explanation');
  const next = byId('next');
  const reset = byId('reset');
  const retry = byId('retry');
  const passage = byId('passage');
  const follow = byId('follow');
  const recommendation = byId('recommendation');
  const autoOption = quiz.hasRecommendedSet ? document.createElement('option') : null;
  let active;
  let automatic;
  const read = () => restoreTextQuiz(active.questions, load(active.key));
  let state;

  if (autoOption) {
    autoOption.value = 'recommended';
    selector.append(autoOption);
  }
  for (const set of quiz.sets) {
    const option = document.createElement('option');
    option.value = set.id;
    option.textContent = set.label + ' · ' + set.questions.length + '문항';
    selector.append(option);
  }

  function showPassage(question, showCorrection) {
    passage.replaceChildren();
    const evidence = Array.isArray(question.evidence) ? question.evidence : [question.evidence];
    for (const [index, line] of question.passage.entries()) {
      const paragraph = document.createElement('div');
      paragraph.className = 'reading-line';
      const isEvidence = showCorrection && evidence.includes(index);
      if (isEvidence) {
        paragraph.classList.add('evidence');
        const label = document.createElement('p');
        label.className = 'category';
        label.textContent = '정답 근거';
        paragraph.append(label);
      }
      const japanese = document.createElement('p');
      japanese.lang = 'ja';
      japanese.className = 'line-ja';
      japanese.textContent = line[0];
      const pronunciation = document.createElement('p');
      pronunciation.lang = 'ja-Latn';
      pronunciation.className = 'line-romaji';
      pronunciation.textContent = line[1];
      paragraph.append(japanese, pronunciation);
      if (showCorrection) {
        const korean = document.createElement('p');
        korean.className = 'line-ko';
        korean.textContent = line[2];
        paragraph.append(korean);
      }
      passage.append(paragraph);
    }
  }

  function render(focus = false) {
    const skill = autoOption && getSkill();
    const level = skill?.level;
    ({ set: active, automatic } = quizSelection(quiz, load, level));
    selector.value = automatic ? 'recommended' : active.id;
    const { questions, key } = active;
    state = read();
    const { deck, progress } = textQuizRound(questions, state);
    const { awaitingNext, answers } = progress;
    const question = currentTextQuestion(questions, state);
    const isCorrect = awaitingNext && answers.at(-1) === question?.answer;
    const showCorrection = awaitingNext && !isCorrect;
    if (autoOption) {
      autoOption.textContent = '추천 수준 (' + level + ')';
      const target = recommendedQuizSet(quiz, load, level);
      const nextSet = target !== active && (target.level !== active.level
        || currentTextQuestion(target.questions, restoreTextQuiz(target.questions, load(target.key))));
      follow.hidden = Boolean(question) || !automatic || !nextSet;
      if (!follow.hidden) follow.textContent = target.label + ' 연습하기';
      const { assessment } = skill;
      const nextLevelNote = automatic && question && level !== active.level
        ? '이 세트를 마치면 ' + level + ' 수준을 추천해요.'
        : '';
      const scoreNote = assessment.score === null ? '' : assessment.level + ' 실력 점수 ' + assessment.score + '점 / 100';
      recommendation.hidden = !scoreNote && !nextLevelNote;
      recommendation.textContent = [scoreNote, nextLevelNote].filter(Boolean).join(' · ');
    }
    if (title) {
      title.hidden = !question?.title;
      title.textContent = question?.title ?? '';
    }
    if (romaji) {
      romaji.hidden = !question;
      romaji.textContent = (awaitingNext ? question?.romaji : question?.blankRomaji) ?? '';
    }
    prompt.hidden = !question;
    choices.hidden = !question || awaitingNext;
    feedback.hidden = !awaitingNext;
    explanation.hidden = !showCorrection;
    explanation.textContent = showCorrection ? question.explanation : '';
    if (translation) {
      translation.hidden = !showCorrection;
      translation.textContent = showCorrection ? question.ko : '';
    }
    next.hidden = !awaitingNext;
    reset.hidden = Boolean(question);
    retry.hidden = true;
    if (passage) passage.hidden = !question;
    choices.replaceChildren();
    if (!question) {
      const correct = scoreTextRound(deck, answers);
      retry.hidden = correct === deck.length;
      retry.classList.toggle('primary-button', !follow || follow.hidden);
      retry.classList.toggle('secondary-button', Boolean(follow && !follow.hidden));
      status.textContent = (state.retry ? '오답 연습 · ' : '') + deck.length + '문제 중 ' + correct + '개 맞혔어요.';
      if (state.retry) {
        status.textContent += ' 첫 풀이 ' + scoreTextRound(questions, state.answers) + '/' + questions.length;
      }
      if (focus) (follow && !follow.hidden ? follow : retry.hidden ? reset : retry).focus();
      return;
    }

    const position = answers.length + Number(!awaitingNext);
    status.textContent = (state.retry ? '오답 연습 · ' : '') + position + ' / ' + deck.length + ' · ' + question.level;
    prompt.textContent = passage ? question.prompt : (awaitingNext ? question.complete : question.sentence.join('（　）'));
    if (passage) showPassage(question, showCorrection);
    if (awaitingNext) {
      feedback.classList.toggle('correct', isCorrect);
      byId('verdict').textContent = isCorrect ? '맞았어요.' : '정답 · ' + question.choices[question.answer];
      next.textContent = position === deck.length ? '결과 보기' : quiz.nextLabel;
    } else {
      const isRetry = Boolean(state.retry);
      for (const [index, option] of question.choices.entries()) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'choice review-choice';
        if (question.choiceRomaji) {
          const japanese = document.createElement('span');
          japanese.lang = 'ja';
          japanese.textContent = option;
          const pronunciation = document.createElement('span');
          pronunciation.lang = 'ja-Latn';
          pronunciation.className = 'line-romaji';
          pronunciation.textContent = question.choiceRomaji[index];
          button.append(japanese, pronunciation);
        } else {
          button.lang = 'ko';
          button.textContent = option;
        }
        button.addEventListener('click', () => update(() => {
          if (active.key !== key) return false;
          const current = read();
          const { progress: currentProgress } = textQuizRound(questions, current);
          if (Boolean(current.retry) !== isRetry || currentProgress.awaitingNext
            || currentTextQuestion(questions, current)?.id !== question.id) return false;
          const value = updateTextQuizRound(current, { answers: [...currentProgress.answers, index], awaitingNext: true });
          const changes = { [key]: value };
          if (automatic) changes[quiz.selectionKey] = { recommended: active.id };
          const result = quiz.hasRecommendedSet && !isRetry
            ? { grammar: question, correct: index === question.answer, at: Date.now() }
            : undefined;
          saveStudy(changes, { ...result, activity: key });
          return true;
        }));
        choices.append(button);
      }
    }
    if (focus) (awaitingNext ? next : prompt).focus();
  }

  async function update(apply) {
    const expectedSet = active;
    const expectedMode = automatic;
    const run = () => {
      if (active === expectedSet && automatic === expectedMode && apply()) render(true);
    };
    try {
      if (navigator.locks) await navigator.locks.request(storageKey, run);
      else run();
    } catch {
      status.textContent = '문제 풀이를 저장하지 못했어요. 다시 시도해 주세요.';
    }
  }

  function selectSet(value, focus = false) {
    if (!isQuizSelection(quiz, value)) return;
    if (load(quiz.selectionKey) !== value) save(quiz.selectionKey, value);
    render(focus);
  }

  selector.addEventListener('change', () => selectSet(selector.value));
  follow?.addEventListener('click', () => selectSet('recommended', true));
  next.addEventListener('click', () => update(() => {
    const { questions, key } = active;
    const current = read();
    const { progress } = textQuizRound(questions, current);
    if (!progress.awaitingNext) return false;
    const value = updateTextQuizRound(current, { answers: progress.answers, awaitingNext: false });
    saveStudy({ [key]: value }, { activity: key });
    return true;
  }));
  retry.addEventListener('click', () => update(() => {
    const { questions, key } = active;
    const current = read();
    const updated = startTextRetry(questions, current);
    if (updated === current) return false;
    saveStudy({ [key]: updated }, { activity: key });
    return true;
  }));
  reset.addEventListener('click', () => update(() => {
    if (currentTextQuestion(active.questions, read())) return false;
    const changes = { [active.key]: { answers: [], awaitingNext: false } };
    if (automatic) changes[quiz.selectionKey] = { recommended: active.id };
    saveStudy(changes, { preserveGrammar: quiz.hasRecommendedSet });
    return true;
  }));
  window.addEventListener('storage', event => {
    if (event.key !== storageKey) return;
    const selection = quizSelection(quiz, load, autoOption ? getSkill().level : undefined);
    if (quiz.hasRecommendedSet || selection.set !== active || JSON.stringify(read()) !== JSON.stringify(state)) render();
  });
  render();
  return {
    render,
    openSet(id) {
      if (active.id === id) render();
      else selectSet(id);
    }
  };
}
