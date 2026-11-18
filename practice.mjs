export function normalizeResponse(value) {
  return typeof value === 'string'
    ? value.normalize('NFKC').replace(/[\s、。，,.!?！？]/gu, '')
    : '';
}

export function normalizeKana(value) {
  return normalizeResponse(value).replace(/[ァ-ヶ]/gu, kana =>
    String.fromCharCode(kana.charCodeAt(0) - 0x60)
  );
}

export function findVocabulary(words, sceneId, query, level = 'all') {
  const normalizeSearch = value => normalizeKana(value).toLowerCase()
    .replace(/\p{Script=Latin}/gu, letter => letter.normalize('NFD').replace(/\p{M}/gu, ''))
    .replace(/['’ʼ-]/gu, '');
  const terms = query.normalize('NFKC').trim().split(/\s+/u).map(normalizeSearch).filter(Boolean);
  const available = level === 'all' ? words : words.filter(word => word.level === level);
  if (!terms.length && level === 'all' && sceneId) return available.filter(word => word.scene === sceneId);
  if (!terms.length) return available;

  const fullQuery = normalizeSearch(query);
  return available
    .map(word => ({ word, fields: [word.ja, word.reading, word.romaji, word.ko].map(normalizeSearch) }))
    .filter(({ fields }) => terms.every(term => fields.some(value => value.includes(term))))
    .sort((first, second) => Number(second.fields.includes(fullQuery)) - Number(first.fields.includes(fullQuery)))
    .map(({ word }) => word);
}

export function assessResponse(step, response, mode) {
  const input = normalizeResponse(response);
  const option = mode === 'choice'
    ? step.options.find(({ id }) => id === response)
    : input && step.options.find(({ line, aliases = [] }) =>
        [line[0], ...aliases].some(phrase => normalizeResponse(phrase) === input)
      );

  if (option?.next || option?.ending) {
    return { answer: option };
  }

  return {
    answer: null,
    feedback: option?.feedback ?? '등록된 표현과 일치하지 않아요. 힌트를 보고 다시 입력하거나 답변을 골라 보세요.'
  };
}

export function restoreConversation(scenario, savedAnswers) {
  const answers = [];
  const history = [];
  let step = scenario.steps[scenario.start];
  let ending = null;

  for (const answerId of Array.isArray(savedAnswers) ? savedAnswers : []) {
    if (!step) break;
    const { answer } = assessResponse(step, answerId, 'choice');
    if (!answer) break;

    history.push({ prompt: step.prompt, reply: answer.line });
    answers.push(answer.id);
    ending = answer.ending ? scenario.endings[answer.ending] : null;
    step = answer.next ? scenario.steps[answer.next] : null;
  }

  return { answers, history, step, ending };
}
