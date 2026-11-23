import { scenarios, turnsPerScenario, vocabulary } from './content.mjs';
import { assessResponse, findVocabulary, restoreConversation } from './practice.mjs';
import { setupWordReview } from './review-view.mjs';
import { BACKUP_KEYS } from './backup.mjs';
import { setupBackup } from './backup-view.mjs';
import { quizCatalog } from './quiz-catalog.mjs';
import { setupTextQuiz } from './text-quiz-view.mjs';
import { setupOffline } from './pwa.mjs';
import { getStudyHome } from './home.mjs';
import { setupNavigation } from './site-nav.mjs';
import { setupKana } from './kana-view.mjs';
import { setupPlacement } from './placement-view.mjs';
import { setupLearningPlan } from './learning-plan-view.mjs';
import { applyPlacementPlan, shouldStartPlacement } from './learning-plan.mjs';
import { quizSelection } from './quiz-catalog.mjs';
import { defaultLevel, restoreReviewLevels } from './review-levels.mjs';
import { applyStudyRecommendation, getStudySkill, grammarEvidenceFrom, recordGrammarResult } from './study-skill.mjs';

const byId = id => document.getElementById(id);
const sceneButtons = byId('scene-buttons');
const sceneLevel = byId('scene-level');
const mobileScene = byId('mobile-scene');
const messages = byId('messages');
const choices = byId('choices');
const typedForm = byId('typed-form');
const responseInput = byId('response-input');
const feedback = byId('feedback');
const feedbackTranslation = byId('feedback-translation');
const hint = byId('hint');
const hintText = byId('hint-text');
const progress = byId('progress');
const choiceMode = byId('mode-choice');
const typedMode = byId('mode-typed');
const storagePrefix = 'konoha-travel-preview-v1:';
const storageKey = storagePrefix + 'snapshot';
const storageNotice = byId('storage-notice');
const vocabSearch = byId('vocab-search');
const vocabLevel = byId('vocab-level');
const vocabTopic = byId('vocab-topic');
const vocabMore = byId('vocab-more');
const vocabClear = byId('vocab-clear');
const vocabReviewLink = byId('vocab-review-link');
const wordList = byId('word-list');
const wordsPerPage = 24;
const showRomaji = byId('show-romaji');
const showTranslation = byId('show-translation');
let storageFallback = null;
let composing = false;

function showStorageNotice() {
  storageNotice.textContent = '이 브라우저에서 진행을 저장할 수 없어요. 현재 탭에서 계속 연습할 수 있어요.';
  storageNotice.hidden = false;
}

function readSavedValue(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? 'null');
  } catch {
    return null;
  }
}

function readSnapshot() {
  if (storageFallback) return storageFallback;
  const snapshot = readSavedValue(storageKey);
  if (snapshot && typeof snapshot === 'object' && !Array.isArray(snapshot)) return snapshot;
  const legacy = BACKUP_KEYS.map(key => [key, readSavedValue(storagePrefix + key)]);
  return Object.fromEntries(legacy.filter(([, value]) => value !== null));
}

function restoreSnapshot(snapshot) {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(snapshot));
    storageFallback = null;
    storageNotice.hidden = true;
    return true;
  } catch {
    showStorageNotice();
    return false;
  }
}

function load(key) {
  return readSnapshot()[key] ?? null;
}

function saveStudy(changes, { at, wordLevel, grammar, correct, preserveGrammar, activity } = {}) {
  const previous = readSnapshot();
  let snapshot = { ...previous, ...changes };
  if (wordLevel) snapshot = applyStudyRecommendation(snapshot, wordLevel, at);
  if (grammar) snapshot = recordGrammarResult(previous, snapshot, grammar, correct, at);
  if (preserveGrammar) snapshot.grammarEvidence = grammarEvidenceFrom(previous);
  if (activity) {
    const order = Array.isArray(previous.studyOrder) ? previous.studyOrder : [];
    snapshot.studyOrder = [activity, ...order.filter(key => key !== activity)];
  }
  if (!restoreSnapshot(snapshot)) storageFallback = snapshot;
  byId('site-level').textContent = shouldStartPlacement(snapshot) ? '진단 전' : restoreReviewLevels(snapshot.review?.adaptive).level;
  return snapshot;
}

function save(key, value) {
  return saveStudy({ [key]: value });
}

function renderSupports() {
  const supports = load('supports');
  showRomaji.checked = supports?.romaji !== false;
  showTranslation.checked = supports?.translation !== false;
  document.body.classList.toggle('hide-romaji', !showRomaji.checked);
  document.body.classList.toggle('hide-translations', !showTranslation.checked);
}

const initialScene = scenarios.find(item => item.level === defaultLevel) ?? scenarios[0];
let scene = scenarios.find(item => item.id === load('scene')) ?? initialScene;
let mode = load('mode') === 'typed' ? 'typed' : 'choice';
let session;
let vocabularyResults = [];
let home;

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}

function appendJapanese(container, [ja, romaji], tag = 'p') {
  const japanese = element(tag, 'line-ja', ja);
  japanese.lang = 'ja';
  const pronunciation = element(tag, 'line-romaji', romaji);
  pronunciation.lang = 'ja-Latn';
  container.append(japanese, pronunciation);
}

function message(line, speaker) {
  const isLearner = speaker === 'learner';
  const article = element('article', 'message');
  article.dataset.speaker = speaker;
  const bubble = element('div', 'bubble');
  appendJapanese(bubble, line);
  article.append(element('p', 'speaker', isLearner ? '나' : scene.partner), bubble);
  return article;
}

function wordCard(word) {
  const card = element('details', 'word');
  card.dataset.word = word.id;
  const label = element('summary', 'word-label');
  appendJapanese(label, [word.ja, word.romaji], 'span');
  label.append(element('span', 'line-ko', word.ko), element('span', 'word-level', word.level));
  const example = element('div', 'word-example');
  const reading = element('p', 'reading', '읽기 ');
  const kana = element('span', null, word.reading);
  kana.lang = 'ja';
  reading.append(kana);
  example.append(reading);
  appendJapanese(example, word.example);
  example.append(element('p', 'line-ko', word.example[2]));
  card.append(label, example);
  return card;
}

function appendVocabulary(focus = false) {
  const offset = wordList.childElementCount;
  const cards = vocabularyResults.slice(offset, offset + wordsPerPage).map(wordCard);
  wordList.append(...cards);
  const shown = wordList.childElementCount;
  const total = vocabularyResults.length;
  byId('vocab-description').textContent = `표현 ${total}개` + (shown < total ? ` · ${shown}개 표시 중` : '');
  vocabMore.hidden = shown >= total;
  if (focus) cards[0]?.firstElementChild.focus();
}

function renderVocabulary() {
  const words = vocabTopic.value ? vocabulary.filter(word => word.scene === vocabTopic.value) : vocabulary;
  vocabularyResults = findVocabulary(words, null, vocabSearch.value, vocabLevel.value);
  byId('vocab-empty').hidden = vocabularyResults.length > 0;
  vocabClear.hidden = !vocabSearch.value.trim() && vocabLevel.value === 'all' && !vocabTopic.value;
  vocabReviewLink.hidden = !vocabTopic.value || !vocabularyResults.length;
  wordList.replaceChildren();
  appendVocabulary();
}

function renderStudyHome() {
  const snapshot = readSnapshot();
  home = getStudyHome(snapshot);
  const { action, dailyWord, counts, tests, completedScenes, practicedWords, answeredQuestions } = home;
  byId('site-level').textContent = shouldStartPlacement(snapshot) ? '진단 전' : home.level;
  byId('home-focus').textContent = action.focus;
  byId('home-action-copy').textContent = action.description;
  byId('home-action').href = '#' + action.page;
  byId('home-action').firstElementChild.textContent = action.label;
  const { skill } = home;
  const { assessment } = skill;
  byId('home-skill-score').textContent = assessment.score === null ? '측정 중' : assessment.score + '점';
  byId('home-skill-level').textContent = '추천 ' + skill.level;
  byId('home-skill-evidence').textContent = assessment.level !== skill.level
    ? assessment.level + ' 기준 · ' + skill.level + ' 풀이 기록을 모으는 중'
    : skill.total
      ? skill.level + ' 기준 · 어휘 ' + skill.wordCount + '개 · 문법 ' + skill.grammarCount + '문항'
      : '평소 어휘·문법 풀이로 실력 점수를 계산해요.';
  byId('home-practice-detail').textContent = `${completedScenes.total}개 상황`;
  byId('home-review-detail').textContent = counts.due ? `복습할 단어 ${counts.due}개` : `새 단어 ${counts.newWords}개`;
  byId('home-vocab-detail').textContent = `표현 ${practicedWords.total}개`;
  for (const quiz of tests) byId(`home-${quiz.page}-detail`).textContent = `${quiz.total}문항`;

  for (const [name, { count, total }] of Object.entries({
    scenes: completedScenes, words: practicedWords, quizzes: answeredQuestions
  })) {
    byId(`home-${name}-count`).textContent = `${count} / ${total}`;
    const bar = byId(`home-${name}-bar`);
    bar.max = total;
    bar.value = count;
  }

  byId('home-word-ja').textContent = dailyWord.ja;
  byId('home-word-romaji').textContent = dailyWord.romaji;
  byId('home-word-ko').textContent = dailyWord.ko;
}

function renderMode() {
  const typed = mode === 'typed';
  choiceMode.setAttribute('aria-pressed', String(!typed));
  typedMode.setAttribute('aria-pressed', String(typed));
  typedForm.hidden = !typed;
  choices.hidden = typed;
}

function showConversationCorrection(step, explanation = '') {
  feedback.textContent = explanation;
  feedbackTranslation.hidden = !step;
  feedbackTranslation.textContent = step?.prompt[2] ?? '';
  hint.hidden = !step;
  hintText.textContent = step?.hint ?? '';
  if (!step) hint.open = false;
}

function renderSession({ focusPrompt = false } = {}) {
  const { step, ending, answers, history } = session;
  progress.value = answers.length;
  byId('step-label').textContent = ending ? '완료' : `${answers.length + 1} / ${turnsPerScenario}`;
  byId('response-panel').hidden = Boolean(ending);
  byId('complete-panel').hidden = !ending;
  showConversationCorrection();
  responseInput.value = '';
  choices.replaceChildren();

  const transcript = history.flatMap(turn => [message(turn.prompt, 'partner'), message(turn.reply, 'learner')]);
  const currentMessage = message(ending ?? step.prompt, 'partner');
  currentMessage.tabIndex = -1;
  messages.replaceChildren(...transcript, currentMessage);

  if (!ending) {
    for (const option of step.options) {
      const button = element('button', 'choice');
      button.type = 'button';
      appendJapanese(button, option.line, 'span');
      button.addEventListener('click', () => submitAnswer(option.id, 'choice'));
      choices.append(button);
    }
  }

  if (focusPrompt) {
    currentMessage.focus();
  }
}

function availableScenes() {
  return sceneLevel.value === 'all' ? scenarios : scenarios.filter(item => item.level === sceneLevel.value);
}

function openScene(id, { persist = true } = {}) {
  scene = scenarios.find(item => item.id === id) ?? initialScene;
  if (persist) save('scene', scene.id);
  session = restoreConversation(scene, load(`answers:${scene.id}`));
  if (sceneLevel.value !== 'all') sceneLevel.value = scene.level;
  const available = availableScenes();
  const visible = new Set(available.map(item => item.id));
  mobileScene.replaceChildren(...available.map(item => {
    const option = element('option', null, `${item.category} · ${item.level}`);
    option.value = item.id;
    return option;
  }));
  mobileScene.value = scene.id;
  for (const button of sceneButtons.children) {
    button.hidden = !visible.has(button.dataset.scene);
    button.setAttribute('aria-pressed', String(button.dataset.scene === scene.id));
  }
  byId('practice-title').textContent = scene.title;
  byId('practice-category').textContent = `${scene.level} · ${scene.category}`;
  byId('practice-goal').textContent = scene.goal;
  renderSession();
}

function submitAnswer(response, responseMode) {
  if (!session.step) return;
  const result = assessResponse(session.step, response, responseMode);
  if (!result.answer) {
    showConversationCorrection(session.step, result.feedback);
    return;
  }
  session = restoreConversation(scene, [...session.answers, result.answer.id]);
  const key = `answers:${scene.id}`;
  saveStudy({ [key]: session.answers }, { activity: key });
  renderSession({ focusPrompt: true });
}

function setMode(value) {
  mode = value;
  save('mode', mode);
  showConversationCorrection();
  renderMode();
  if (value === 'typed') responseInput.focus();
}

for (const item of scenarios) {
  const button = element('button', 'scene-button');
  button.type = 'button';
  button.dataset.scene = item.id;
  button.setAttribute('aria-controls', 'dialogue');
  button.append(element('strong', null, item.category), element('span', 'scene-meta', item.level));
  button.addEventListener('click', () => {
    if (scene.id !== item.id) openScene(item.id);
  });
  sceneButtons.append(button);
  const option = element('option', null, item.category);
  option.value = item.id;
  vocabTopic.append(option);
}

sceneLevel.addEventListener('change', () => {
  const available = availableScenes();
  openScene((available.includes(scene) ? scene : available[0]).id);
});
mobileScene.addEventListener('change', () => openScene(mobileScene.value));
choiceMode.addEventListener('click', () => setMode('choice'));
typedMode.addEventListener('click', () => setMode('typed'));
vocabSearch.addEventListener('input', renderVocabulary);
vocabLevel.addEventListener('change', renderVocabulary);
vocabTopic.addEventListener('change', renderVocabulary);
vocabMore.addEventListener('click', () => appendVocabulary(true));
vocabClear.addEventListener('click', () => {
  vocabSearch.value = '';
  vocabLevel.value = 'all';
  vocabTopic.value = '';
  renderVocabulary();
  vocabSearch.focus();
});

byId('home-action').addEventListener('click', () => {
  if (home.action.sceneId) openScene(home.action.sceneId);
  if (home.action.quizSetId) quizViews[home.action.page].openSet(home.action.quizSetId);
});
byId('home-word-link').addEventListener('click', () => {
  vocabSearch.value = home.dailyWord.ja;
  vocabLevel.value = home.dailyWord.level;
  vocabTopic.value = home.dailyWord.scene;
  renderVocabulary();
  const card = [...wordList.children].find(item => item.dataset.word === home.dailyWord.id);
  if (card) card.open = true;
});
byId('scene-vocab-link').addEventListener('click', () => {
  vocabSearch.value = '';
  vocabLevel.value = 'all';
  vocabTopic.value = scene.id;
  renderVocabulary();
});
byId('scene-review-link').addEventListener('click', () => {
  reviewView.selectTopic(scene.id, 'all');
});
vocabReviewLink.addEventListener('click', () => {
  reviewView.selectTopic(vocabTopic.value, vocabLevel.value);
});
for (const toggle of [showRomaji, showTranslation]) {
  toggle.addEventListener('change', () => {
    save('supports', { romaji: showRomaji.checked, translation: showTranslation.checked });
    renderSupports();
  });
}
responseInput.addEventListener('compositionstart', () => { composing = true; });
responseInput.addEventListener('compositionend', () => { composing = false; });
typedForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!composing) submitAnswer(responseInput.value, 'typed');
});

byId('restart').addEventListener('click', () => {
  save(`answers:${scene.id}`, []);
  session = restoreConversation(scene, []);
  renderSession({ focusPrompt: true });
});
byId('next-scene').addEventListener('click', () => {
  const available = availableScenes();
  const next = (available.indexOf(scene) + 1) % available.length;
  openScene(available[next].id);
  messages.lastElementChild.focus();
});

window.addEventListener('storage', event => {
  if (event.key !== storageKey) return;
  renderStudyHome();
  renderSupports();
  const current = load(`answers:${scene.id}`);
  if (JSON.stringify(current ?? []) === JSON.stringify(session.answers)) return;
  session = restoreConversation(scene, current);
  renderSession();
});

progress.max = turnsPerScenario;
renderMode();
renderSupports();
openScene(scene.id, { persist: false });
renderVocabulary();
const getSkill = () => getStudySkill(readSnapshot());
const reviewView = setupWordReview({ load, saveStudy, getSkill, storageKey });
const quizViews = Object.fromEntries(Object.entries(quizCatalog).map(([page, quiz]) =>
  [page, setupTextQuiz({
    load, save, saveStudy, storageKey, quiz, getSkill
  })]));
const kanaView = setupKana(byId('kana-study'), { load, save, onProgress: () => planView.render() });
const placementView = setupPlacement({
  container: byId('placement-study'), load, save,
  onApply() {
    saveStudy(applyPlacementPlan(readSnapshot()));
    openScene(load('scene'), { persist: false });
    reviewView.render();
    for (const view of Object.values(quizViews)) view.render();
    planView.render();
    location.hash = 'plan';
  }
});
const planView = setupLearningPlan({
  container: byId('learning-plan'), readSnapshot,
  onLesson(task) {
    if (task.page === 'kana') kanaView.open(task.script, 'basic');
    const quiz = quizCatalog[task.page];
    if (quiz) {
      const selected = quizSelection(quiz, load, getSkill().level);
      const saved = load(selected.set.key);
      if (!saved?.answers?.length && !load(quiz.selectionKey)) {
        quizViews[task.page].openSet(quiz.hasRecommendedSet ? 'recommended' : task.setId);
      }
    }
    if (task.page === 'practice' && task.sceneId) openScene(task.sceneId);
    location.hash = task.page;
  }
});
setupBackup({
  readSnapshot,
  restoreSnapshot,
  storageKey,
  refresh() {
    mode = load('mode') === 'typed' ? 'typed' : 'choice';
    renderMode();
    renderSupports();
    openScene(load('scene'), { persist: false });
    reviewView.render();
    for (const view of Object.values(quizViews)) view.render();
    kanaView.refresh();
    placementView.render();
    planView.render();
    renderStudyHome();
  }
});

if (shouldStartPlacement(readSnapshot())) location.hash = 'placement';
setupNavigation(page => {
  renderStudyHome();
  if (page === 'review') reviewView.render();
  if (page === 'placement') placementView.render();
  if (page === 'plan') planView.render();
  quizViews[page]?.render();
});
window.addEventListener('focus', () => {
  renderStudyHome();
  if (location.hash === '#plan') planView.render();
});
setupOffline();
