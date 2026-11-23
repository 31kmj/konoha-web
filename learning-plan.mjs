import { scenarios, vocabulary } from './content.mjs';
import { getKanaSkill } from './kana-data.mjs';
import { placementResult, restorePlacement } from './placement.mjs';
import { quizCatalog } from './quiz-catalog.mjs';
import { restoreReview } from './review.mjs';
import { practiceLevels } from './review-levels.mjs';
import { getStudySkill, grammarEvidenceFrom } from './study-skill.mjs';

const goals = {
  N5: '일상 단어와 짧은 문장으로 주문·인사·요청하기',
  N4: '동사 활용과 일상 대화를 익히고 짧은 안내 읽기',
  N3: '생활·여행·업무의 이유와 조건을 이해하고 설명하기',
  N2: '계약·업무의 조건을 비교하고 긴 문장의 요지 찾기',
  N1: '추상적인 주장과 함축, 글의 논리 관계를 파악하기'
};

export function shouldStartPlacement(snapshot) {
  if (snapshot.placement) return !placementResult(restorePlacement(snapshot.placement))
    || !placementResult(restorePlacement(snapshot.planStarted));
  const practiced = Object.keys(snapshot.review?.records ?? {}).length > 0;
  const answered = Object.entries(snapshot).some(([key, value]) =>
    (key.startsWith('answers:') && Array.isArray(value) && value.length > 0)
    || (key.startsWith('grammar') || key.startsWith('reading') || key.startsWith('listening')) && value?.answers?.length > 0);
  return !practiced && !answered && !Object.keys(snapshot.kanaProgress?.hiragana ?? {}).length
    && !Object.keys(snapshot.kanaProgress?.katakana ?? {}).length;
}

export function applyPlacementPlan(snapshot, now = Date.now()) {
  const state = restorePlacement(snapshot.placement);
  const result = state && placementResult(state);
  if (!result) return snapshot;
  if (JSON.stringify(restorePlacement(snapshot.planStarted)) === JSON.stringify(state)) return snapshot;
  const review = restoreReview(vocabulary, snapshot.review);
  const adaptive = { ...review.adaptive, level: result.recommendedLevel, changedAt: now };
  delete adaptive.previousAssessment;
  const scene = snapshot.scene ?? scenarios.find(item => item.level === result.recommendedLevel)?.id;
  return { ...snapshot, scene, planStarted: state, review: { ...review, adaptive } };
}

export function getLearningPlan(snapshot, now = Date.now()) {
  const state = restorePlacement(snapshot.planStarted);
  const result = state && placementResult(state);
  const skill = getStudySkill(snapshot, now);
  const kana = getKanaSkill(snapshot.kanaProgress, now);
  const weakScripts = ['hiragana', 'katakana'].filter(script =>
    !kana[script].ready && (!result || result.kana[script].correct < result.kana[script].total));
  const level = skill.level;
  const target = practiceLevels.indexOf(level);
  const grammarEvidence = grammarEvidenceFrom(snapshot);
  const stages = practiceLevels.map((id, index) => {
    const words = vocabulary.filter(word => word.level === id);
    const questions = quizCatalog.grammar.sets.filter(set => set.level === id).flatMap(set => set.questions);
    return {
      id, goal: goals[id], state: index === target ? '현재 추천' : index < target ? '기초 복습' : '다음 단계',
      words: words.length, practicedWords: words.filter(word => snapshot.review?.records?.[word.id]).length,
      grammar: questions.length, practicedGrammar: questions.filter(question => grammarEvidence[question.id]).length
    };
  });
  const tasks = [];
  if (weakScripts.length) {
    const script = weakScripts[0];
    tasks.push({ page: 'kana', script, title: (script === 'hiragana' ? '히라가나' : '가타카나') + ' 읽기 5문제',
      description: '아직 익숙하지 않은 글자를 먼저 연습해요.' });
  }
  tasks.push({ page: 'review', level, title: level + ' 단어 한 세트', description: '복습할 단어를 먼저, 새 단어와 함께 최대 5개씩 익혀요.' });
  tasks.push({ page: 'grammar', level, title: level + ' 문장 완성', description: '단어가 실제 문장에서 어떻게 쓰이는지 확인해요.' });
  tasks.push({ page: weakScripts.length ? 'practice' : 'reading', level,
    title: level + (weakScripts.length ? ' 짧은 회화' : ' 독해와 표현'),
    description: weakScripts.length ? '로마자 발음을 함께 보며 문장으로 답해요.' : '지문에서 답의 근거를 찾아요.' });
  return { result, level, skill, kana, weakScripts, stages, tasks };
}
