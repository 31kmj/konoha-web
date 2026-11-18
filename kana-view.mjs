import { createKanaQuiz, kanaGroups, kanaRows, kanaScripts } from './kana-data.mjs';

function element(tag, className, text = '') {
  const node = document.createElement(tag);
  node.className = className;
  node.textContent = text;
  return node;
}

export function setupKana(container) {
  container.innerHTML = `
    <div class="panel kana-study-panel">
      <div class="kana-controls">
        <div class="kana-script-switch" role="group" aria-label="문자 종류">
          <button type="button" data-script="hiragana" aria-pressed="true">히라가나</button>
          <button type="button" data-script="katakana" aria-pressed="false">가타카나</button>
        </div>
        <div class="kana-range-picker">
          <label for="kana-range">학습 범위</label>
          <select id="kana-range"></select>
        </div>
      </div>
      <div class="kana-mode-switch" role="group" aria-label="학습 방식">
        <button id="kana-chart-button" type="button" class="secondary-button" aria-pressed="true">글자표</button>
        <button id="kana-quiz-button" type="button" class="secondary-button" aria-pressed="false">읽기 퀴즈</button>
      </div>
      <div id="kana-chart-panel" class="kana-chart-panel">
        <table id="kana-chart" class="kana-chart"></table>
        <p id="kana-chart-note" class="goal" hidden></p>
      </div>
      <div id="kana-quiz-panel" class="kana-quiz-panel" hidden>
        <p id="kana-progress" class="goal" role="status"></p>
        <p id="kana-prompt">글자를 보고 로마자 발음을 고르세요.</p>
        <h2 id="kana-glyph" class="kana-glyph" lang="ja" tabindex="-1"></h2>
        <div id="kana-choices" class="kana-choices" role="group" aria-label="로마자 발음 보기"></div>
        <p id="kana-outcome" class="kana-outcome" role="status" tabindex="-1" hidden></p>
        <button id="kana-next" class="primary-button" type="button" hidden>다음 글자</button>
      </div>
    </div>`;

  const byId = id => container.querySelector('#' + id);
  const scriptButtons = [...container.querySelectorAll('[data-script]')];
  const range = byId('kana-range');
  const chart = byId('kana-chart');
  const chartNote = byId('kana-chart-note');
  const chartPanel = byId('kana-chart-panel');
  const chartButton = byId('kana-chart-button');
  const quizPanel = byId('kana-quiz-panel');
  const quizButton = byId('kana-quiz-button');
  const progress = byId('kana-progress');
  const prompt = byId('kana-prompt');
  const glyph = byId('kana-glyph');
  const choices = byId('kana-choices');
  const outcome = byId('kana-outcome');
  const next = byId('kana-next');
  let script = 'hiragana';
  let quiz = null;

  for (const [id, label] of Object.entries(kanaGroups)) {
    const choice = element('option', '', label);
    choice.value = id;
    range.append(choice);
  }

  function showChart() {
    quiz = null;
    chartPanel.hidden = false;
    quizPanel.hidden = true;
    chartButton.setAttribute('aria-pressed', 'true');
    quizButton.setAttribute('aria-pressed', 'false');
    chart.setAttribute('aria-label', kanaScripts[script] + ' ' + kanaGroups[range.value]);

    const body = document.createElement('tbody');
    for (const row of kanaRows(script, range.value)) {
      const line = document.createElement('tr');
      for (const item of row) {
        const cell = document.createElement('td');
        if (item) {
          const letter = element('span', 'kana-chart-glyph', item.glyph);
          letter.lang = 'ja';
          const reading = element('span', 'kana-roman', item.romaji);
          reading.lang = 'ja-Latn';
          cell.append(letter, reading);
        } else {
          cell.className = 'kana-chart-empty';
        }
        line.append(cell);
      }
      body.append(line);
    }
    chart.replaceChildren(body);
    const notes = script === 'hiragana'
      ? { basic: '조사 を의 발음은 보통 o예요.', voiced: 'じ와 ぢ는 ji, ず와 づ는 zu로 읽어요.', combined: '작은 ゃ・ゅ・ょ가 붙으면 앞 글자와 한 음절로 읽어요.' }
      : { basic: 'ヲ는 발음이 o이며, 가타카나 표기에서는 드물게 쓰여요.', voiced: 'ジ와 ヂ는 ji, ズ와 ヅ는 zu로 읽어요.', combined: '작은 ャ・ュ・ョ가 붙으면 앞 글자와 한 음절로 읽어요.' };
    chartNote.textContent = notes[range.value] ?? '';
    chartNote.hidden = !chartNote.textContent;
  }

  function showQuestion() {
    const question = quiz.questions[quiz.index];
    progress.textContent = `${quiz.questions.length}문제 중 ${quiz.index + 1}번째`;
    prompt.hidden = false;
    glyph.hidden = false;
    glyph.textContent = question.glyph;
    outcome.hidden = true;
    outcome.textContent = '';
    next.hidden = true;
    choices.replaceChildren(...question.choices.map(value => {
      const option = element('button', 'kana-option kana-roman', value);
      option.type = 'button';
      option.lang = 'ja-Latn';
      option.addEventListener('click', () => answerQuestion(value));
      return option;
    }));
    glyph.focus();
  }

  function answerQuestion(value) {
    if (quiz.answered) return;
    const { answer } = quiz.questions[quiz.index];
    quiz.answered = true;
    const correct = value === answer;
    if (correct) quiz.score++;
    for (const option of choices.children) {
      option.disabled = true;
      if (option.textContent === answer) option.dataset.result = 'correct';
      else if (option.textContent === value) option.dataset.result = 'incorrect';
    }
    outcome.dataset.result = correct ? 'correct' : 'incorrect';
    if (correct) {
      outcome.textContent = '맞았어요.';
    } else {
      const reading = element('strong', 'kana-roman', answer);
      reading.lang = 'ja-Latn';
      outcome.replaceChildren('정답은 ', reading, '예요.');
    }
    outcome.hidden = false;
    next.textContent = quiz.index + 1 === quiz.questions.length ? '결과 보기' : '다음 글자';
    next.hidden = false;
    outcome.focus();
  }

  function showQuiz() {
    quiz = { questions: createKanaQuiz(script, range.value), index: 0, score: 0, answered: false };
    chartPanel.hidden = true;
    quizPanel.hidden = false;
    chartButton.setAttribute('aria-pressed', 'false');
    quizButton.setAttribute('aria-pressed', 'true');
    showQuestion();
  }

  for (const button of scriptButtons) {
    button.addEventListener('click', () => {
      if (script === button.dataset.script) return;
      script = button.dataset.script;
      for (const item of scriptButtons) item.setAttribute('aria-pressed', String(item === button));
      showChart();
    });
  }
  range.addEventListener('change', showChart);
  chartButton.addEventListener('click', showChart);
  quizButton.addEventListener('click', () => { if (!quiz) showQuiz(); });
  next.addEventListener('click', () => {
    if (!quiz?.answered) return;
    if (quiz.index === quiz.questions.length) {
      showQuiz();
    } else if (++quiz.index < quiz.questions.length) {
      quiz.answered = false;
      showQuestion();
    } else {
      prompt.hidden = true;
      glyph.hidden = true;
      choices.replaceChildren();
      progress.textContent = '연습 완료';
      outcome.dataset.result = 'summary';
      outcome.textContent = `${quiz.questions.length}문제 중 ${quiz.score}개 맞혔어요.`;
      next.textContent = '다시 연습';
      outcome.focus();
    }
  });
  showChart();
}
