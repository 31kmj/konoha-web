import { scenarios, vocabulary } from './content.mjs';
import { restoreConversation } from './practice.mjs';
import { quizCatalog, selectedQuizSet } from './quiz-catalog.mjs';
import { restoreReview, reviewCounts, reviewPool, reviewRound } from './review.mjs';
import { DAY_MS } from './review-levels.mjs';
import { currentTextQuestion, restoreTextQuiz, textQuizRound } from './text-quiz.mjs';
import { getStudySkill } from './study-skill.mjs';

function sceneAction({ scene, progress }, resume) {
  return {
    page: 'practice',
    sceneId: scene.id,
    focus: scene.level + ' · ' + scene.category,
    description: resume ? scene.title + ' · ' + (progress.answers.length + 1) + '번째 답변' : scene.goal,
    label: resume ? '회화 이어하기' : progress.ending ? '완료한 회화 보기' : '회화 시작'
  };
}

export function getStudyHome(snapshot, now = Date.now()) {
  const review = restoreReview(vocabulary, snapshot.review);
  const skill = getStudySkill({ ...snapshot, review }, now);
  const { level } = skill;
  const { studyWords } = reviewPool(vocabulary, review, now);
  const counts = reviewCounts(studyWords, review.records, now);
  const lessons = scenarios.map(scene => ({
    scene,
    progress: restoreConversation(scene, snapshot['answers:' + scene.id])
  }));
  const selected = lessons.find(({ scene }) => scene.id === snapshot.scene);
  const lessonOrder = selected ? [selected, ...lessons.filter(lesson => lesson !== selected)] : lessons;
  const unfinished = new Map();
  for (const lesson of lessonOrder) {
    if (lesson.progress.answers.length && !lesson.progress.ending) {
      unfinished.set('answers:' + lesson.scene.id, sceneAction(lesson, true));
    }
  }

  const activeReview = reviewRound(review.session);
  if (activeReview?.deck[activeReview.index]) {
    unfinished.set('review', {
      page: 'review',
      label: review.session.retry ? '오답 연습 이어하기' : '복습 이어하기',
      focus: '진행 중 · 단어 복습',
      description: '풀던 단어 세트에서 ' + (activeReview.index + 1) + '번째 문항을 이어가요.'
    });
  }

  const tests = Object.values(quizCatalog).map(quiz => {
    const selected = selectedQuizSet(quiz, key => snapshot[key], level);
    const orderedSets = [selected, ...quiz.sets.filter(set => set !== selected)];
    let answered = 0;
    for (const set of orderedSets) {
      const state = restoreTextQuiz(set.questions, snapshot[set.key]);
      answered += state.answers.length;
      if ((!state.retry && !state.answers.length) || !currentTextQuestion(set.questions, state)) continue;
      const { deck, progress } = textQuizRound(set.questions, state);
      const position = progress.answers.length + Number(!progress.awaitingNext);
      unfinished.set(set.key, {
        page: quiz.page, quizSetId: set.id, label: quiz.title + ' 이어하기',
        focus: set.label + ' · ' + quiz.title,
        description: deck.length + '문항 중 ' + position + '번째 문항을 이어가요.'
      });
    }
    return {
      page: quiz.page,
      title: quiz.title,
      answered,
      total: orderedSets.reduce((sum, set) => sum + set.questions.length, 0)
    };
  });

  const order = Array.isArray(snapshot.studyOrder) ? snapshot.studyOrder : [];
  const latest = order.find(key => unfinished.has(key));
  const resume = unfinished.get(latest) ?? unfinished.values().next().value;
  const nextLesson = lessons.find(({ scene, progress }) => scene.level === level && !progress.ending)
    || lessons.find(({ progress }) => !progress.ending)
    || lessons.find(({ scene }) => scene.level === level)
    || lessons[0];
  const action = resume ?? (counts.due ? {
    page: 'review', label: '단어 복습하기', focus: '오늘의 복습',
    description: '선택한 범위에서 ' + counts.due + '개 단어를 다시 떠올릴 시간이에요.'
  } : sceneAction(nextLesson, false));

  const date = new Date(now);
  const day = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / DAY_MS);
  const dailyWords = vocabulary.filter(word => word.level === level);
  const dailyWord = dailyWords[((day % dailyWords.length) + dailyWords.length) % dailyWords.length];

  return {
    action, level, skill, counts, dailyWord, tests,
    completedScenes: { count: lessons.filter(({ progress }) => progress.ending).length, total: lessons.length },
    practicedWords: { count: Object.keys(review.records).length, total: vocabulary.length },
    answeredQuestions: {
      count: tests.reduce((sum, quiz) => sum + quiz.answered, 0),
      total: tests.reduce((sum, quiz) => sum + quiz.total, 0)
    }
  };
}
