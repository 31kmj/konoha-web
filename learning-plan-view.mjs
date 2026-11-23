import { getLearningPlan } from './learning-plan.mjs';

function element(tag, className, value) {
  const node = document.createElement(tag);
  node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}

export function setupLearningPlan({ container, readSnapshot, onLesson }) {
  function render() {
    const snapshot = readSnapshot();
    const plan = getLearningPlan(snapshot);
    container.replaceChildren();
    const summary = element('section', 'panel plan-summary');
    summary.append(element('h2', '', plan.weakScripts.length ? '문자 읽기부터 차근차근' : plan.level + '부터 시작하는 학습'));
    const intro = plan.result
      ? '첫 진단의 시작 추천은 ' + plan.result.recommendedLevel + '예요. 현재 연습 추천은 ' + plan.level + '예요.'
      : '지금 추천하는 연습 수준은 ' + plan.level + '예요. 시작 진단으로 문자 읽기와 어휘·문법을 따로 확인할 수 있어요.';
    summary.append(element('p', 'goal', intro));
    if (plan.result) {
      const reading = plan.result.kana;
      summary.append(element('p', 'goal', '첫 진단 · 히라가나 ' + reading.hiragana.correct + '/' + reading.hiragana.total
        + ' · 가타카나 ' + reading.katakana.correct + '/' + reading.katakana.total));
    }
    const test = element('a', 'text-link', '시작 진단 보기');
    test.href = '#placement';
    summary.append(test);
    container.append(summary);

    const daily = element('section', 'plan-daily');
    daily.append(element('h2', '', '오늘의 학습 순서'));
    const list = element('ol', 'plan-task-list');
    for (const task of plan.tasks) {
      const li = element('li', 'panel plan-task');
      li.append(element('h3', '', task.title), element('p', 'goal', task.description));
      const button = element('button', 'secondary-button', '학습 열기');
      button.type = 'button';
      button.addEventListener('click', () => onLesson(task));
      li.append(button);
      list.append(li);
    }
    daily.append(list);
    container.append(daily);

    const road = element('section', 'plan-road');
    road.append(element('h2', '', '가나부터 N1까지'));
    const kana = element('div', 'panel plan-stage');
    kana.append(element('h3', '', '문자 읽기'), element('p', 'goal', '기본 글자 읽기 · 히라가나 ' + plan.kana.hiragana.correct
      + '/46 · 가타카나 ' + plan.kana.katakana.correct + '/46'));
    kana.append(element('p', 'goal', '각 40자 이상을 읽기 퀴즈에서 맞히면 해당 문자의 기초 목표에 도달해요.'));
    const kanaLink = element('a', 'text-link', '글자표와 읽기 퀴즈');
    kanaLink.href = '#kana';
    kana.append(kanaLink);
    road.append(kana);
    for (const stage of plan.stages) {
      const section = element('div', 'panel plan-stage');
      if (stage.id === plan.level) section.setAttribute('aria-current', 'step');
      section.append(element('h3', '', stage.id + ' · ' + stage.state), element('p', 'goal', stage.goal));
      section.append(element('p', 'goal', '연습한 단어 ' + stage.practicedWords + '/' + stage.words
        + ' · 풀어 본 문장 ' + stage.practicedGrammar + '/' + stage.grammar));
      road.append(section);
    }
    road.append(element('p', 'goal', '단계는 코노하 내부 연습 난이도예요. 첫 진단은 시작점을 정하며, 이후 어휘·문법 풀이와 하루 이상 지난 회상으로 추천을 조정해요.'));
    road.append(element('p', 'goal', '한 단계 상향에는 82점 이상과 충분한 어휘·문법 기록, 다음 날 단어 2개 이상의 회상 성공이 필요해요. N1까지 학습할 수 있도록 각 단계의 자료를 계속 확장해요.'));
    container.append(road);
  }
  return { render };
}
