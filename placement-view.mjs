import {
  answerPlacement, createPlacement, placementQuestions, placementResult, restorePlacement
} from './placement.mjs';

function element(tag, className, text = '') {
  const node = document.createElement(tag);
  node.className = className;
  node.textContent = text;
  return node;
}

function button(text, className, action) {
  const node = element('button', className, text);
  node.type = 'button';
  node.addEventListener('click', action);
  return node;
}

export function setupPlacement({ container, load, save, onApply }) {
  let savedAnswer = null;
  let restarting = false;
  let saving = false;

  function saveState(state) {
    save('placement', state);
  }

  function focusHeading() {
    container.querySelector('[data-placement-focus]')?.focus();
  }

  function start() {
    saveState(createPlacement());
    savedAnswer = null;
    restarting = false;
    render();
    focusHeading();
  }

  function showIntroduction() {
    const panel = element('div', 'panel placement-panel placement-introduction');
    const title = element('h2', '', '나에게 맞는 시작점 찾기');
    title.tabIndex = -1;
    title.dataset.placementFocus = '';
    panel.append(
      title,
      element('p', 'placement-lead', '문자 읽기와 어휘·문법을 살펴보고, 지금부터 공부할 순서를 정해요.'),
      element('p', 'placement-duration', '약 3~7분'),
      element('p', 'goal', '문자 읽기 6문항으로 시작해요. 어휘·문법은 수준에 따라 이어지며 전체 최대 26문항이에요.'),
      element('p', 'goal', '모르는 내용은 ‘모르겠어요’를 골라 주세요. 문항마다 답변을 저장하며, 중간에 나가도 이어서 풀 수 있어요.'),
      button('내 시작점 찾기', 'primary-button placement-primary', start)
    );
    container.replaceChildren(panel);
  }

  function submit(choice) {
    if (saving || savedAnswer) return;
    const state = restorePlacement(load('placement'));
    const question = state && placementQuestions(state);
    if (!question) return;
    saving = true;
    try {
      const next = answerPlacement(state, choice);
      saveState(next);
      savedAnswer = { question, choice, signature: JSON.stringify(next.answers) };
      render();
      container.querySelector('.placement-saved')?.focus();
    } finally {
      saving = false;
    }
  }

  function showQuestion(state, result) {
    const held = savedAnswer?.signature === JSON.stringify(state.answers) ? savedAnswer : null;
    const question = held?.question ?? placementQuestions(state);
    const position = state.answers.length + (held ? 0 : 1);
    const panel = element('div', 'panel placement-panel');
    const progress = element('p', 'placement-progress', position + '번째 문항 · 최대 26문항');
    const section = question.area === 'kana'
      ? (question.script === 'hiragana' ? '히라가나 읽기' : '가타카나 읽기')
      : question.level + (question.area === 'grammar' ? ' · 문장 완성' : ' · 어휘');
    panel.append(progress, element('p', 'placement-section', section));
    const instruction = element('h2', 'placement-instruction', question.instruction);
    instruction.tabIndex = -1;
    instruction.dataset.placementFocus = '';
    panel.append(instruction);
    const prompt = element('p', question.area === 'kana' ? 'placement-glyph' : 'placement-prompt', question.prompt);
    prompt.lang = 'ja';
    panel.append(prompt);
    if (question.romaji) {
      const romaji = element('p', 'line-romaji placement-romaji', question.romaji);
      romaji.lang = 'ja-Latn';
      panel.append(romaji);
    }
    if (question.area === 'kana') {
      panel.append(element('p', 'goal placement-reading-note', '글자를 보고 읽는 방법을 골라 주세요.'));
    }
    const choices = element('div', 'placement-choices');
    choices.setAttribute('role', 'group');
    choices.setAttribute('aria-label', '답변 선택');
    for (const [index, choice] of question.choices.entries()) {
      const option = button('', 'placement-choice', () => submit(index));
      const text = element('span', 'placement-choice-text', choice.text);
      if (question.area === 'kana') text.lang = 'ja-Latn';
      option.append(text);
      if (choice.romaji) {
        const pronunciation = element('span', 'line-romaji placement-romaji', choice.romaji);
        pronunciation.lang = 'ja-Latn';
        option.append(pronunciation);
      }
      option.disabled = Boolean(held);
      option.setAttribute('aria-pressed', String(held?.choice === index));
      choices.append(option);
    }
    panel.append(choices);
    if (held) {
      const status = element('p', 'placement-saved', held.choice === -1 ? '모르겠어요로 답변을 저장했어요.' : '답변을 저장했어요.');
      status.setAttribute('role', 'status');
      status.tabIndex = -1;
      panel.append(status, button(result ? '결과 보기' : '다음 문항', 'primary-button placement-primary', () => {
        savedAnswer = null;
        render();
        focusHeading();
      }));
    } else {
      panel.append(button('모르겠어요', 'secondary-button placement-skip', () => submit(-1)));
      panel.append(element('p', 'goal placement-autosave', '답변은 자동으로 저장돼요. 정답과 오답은 진단을 마친 뒤 결과에 반영해요.'));
    }
    container.replaceChildren(panel);
  }

  function showRestart() {
    const panel = element('div', 'panel placement-panel');
    const title = element('h2', '', '시작점을 다시 확인할까요?');
    title.tabIndex = -1;
    title.dataset.placementFocus = '';
    panel.append(title, element('p', 'placement-lead', '문자 읽기부터 새로 풀고, 새 결과로 학습 계획을 다시 만들 수 있어요.'));
    const actions = element('div', 'placement-actions');
    actions.append(
      button('처음부터 다시 진단', 'primary-button', start),
      button('결과로 돌아가기', 'secondary-button', () => { restarting = false; render(); focusHeading(); })
    );
    panel.append(actions);
    container.replaceChildren(panel);
  }

  function showResult(result) {
    const panel = element('div', 'panel placement-panel placement-result');
    const title = element('h2', '', '내 학습 시작점');
    title.tabIndex = -1;
    title.dataset.placementFocus = '';
    const level = element('p', 'placement-level', result.recommendedLevel);
    panel.append(
      title,
      element('p', 'placement-level-label', '코노하 앱의 추천 연습 수준'),
      level,
      element('p', 'placement-lead', result.needsKanaPractice
        ? '글자 읽기를 함께 연습하면서 어휘와 문장을 익히는 순서를 추천해요.'
        : '확인한 문자 읽기를 바탕으로, 어휘와 문장 연습을 이어가요.'),
      element('p', 'goal', result.answeredCount + '문항으로 확인한 시작점이에요. 평소 풀이에 따라 추천 난이도를 조정해요.')
    );
    const kanaScores = element('dl', 'placement-kana-scores');
    for (const [script, label] of [['hiragana', '히라가나'], ['katakana', '가타카나']]) {
      const score = result.kana[script];
      const card = element('div', 'placement-kana-score');
      card.append(element('dt', '', label), element('dd', '', score.correct + ' / ' + score.total));
      kanaScores.append(card);
    }
    panel.append(kanaScores);
    const details = element('details', 'placement-breakdown');
    details.append(element('summary', '', '수준별 풀이 결과'));
    const levels = element('dl', 'placement-level-scores');
    for (const score of result.levels) {
      if (!score.total) continue;
      const row = element('div', 'placement-level-score');
      row.append(
        element('dt', '', score.level),
        element('dd', '', score.correct + ' / ' + score.total + ' · 어휘 ' + score.vocabularyCorrect + '/2 · 문법 ' + score.grammarCorrect + '/2')
      );
      levels.append(row);
    }
    details.append(levels);
    panel.append(details);
    const actions = element('div', 'placement-actions');
    actions.append(
      button('내 학습 계획 만들기', 'primary-button placement-primary', () => onApply(result)),
      button('다시 진단하기', 'secondary-button', () => { restarting = true; render(); focusHeading(); })
    );
    panel.append(actions);
    container.replaceChildren(panel);
  }

  function render() {
    const state = restorePlacement(load('placement'));
    const result = state && placementResult(state);
    if (!state) {
      savedAnswer = null;
      restarting = false;
      showIntroduction();
    } else if (restarting && result) {
      showRestart();
    } else if (result && !savedAnswer) {
      showResult(result);
    } else {
      if (savedAnswer?.signature !== JSON.stringify(state.answers)) savedAnswer = null;
      if (result && !savedAnswer) showResult(result);
      else showQuestion(state, result);
    }
  }

  render();
  return { render };
}
