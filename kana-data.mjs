export const kanaScripts = Object.freeze({ hiragana: '히라가나', katakana: '가타카나' });

export const kanaReference = Object.freeze({
  source: '국제교류기금 IRODORI 입문 1과의 가나 표를 대조해 자체 작성',
  url: 'https://md.jpf.go.jp/userfiles/file/2022/Nihongo/IRODORI%20PDF/05.-%20X_L01_es.pdf',
  reviewStatus: 'internal-review'
});

const basic = [
  ['あ い う え お', 'a i u e o'],
  ['か き く け こ', 'ka ki ku ke ko'],
  ['さ し す せ そ', 'sa shi su se so'],
  ['た ち つ て と', 'ta chi tsu te to'],
  ['な に ぬ ね の', 'na ni nu ne no'],
  ['は ひ ふ へ ほ', 'ha hi fu he ho'],
  ['ま み む め も', 'ma mi mu me mo'],
  ['や - ゆ - よ', 'ya - yu - yo'],
  ['ら り る れ ろ', 'ra ri ru re ro'],
  ['わ - - - を', 'wa - - - o'],
  ['ん - - - -', 'n - - - -']
];

const voiced = [
  ['が ぎ ぐ げ ご', 'ga gi gu ge go'],
  ['ざ じ ず ぜ ぞ', 'za ji zu ze zo'],
  ['だ ぢ づ で ど', 'da ji zu de do'],
  ['ば び ぶ べ ぼ', 'ba bi bu be bo'],
  ['ぱ ぴ ぷ ぺ ぽ', 'pa pi pu pe po']
];

const combined = [
  ['きゃ きゅ きょ', 'kya kyu kyo'],
  ['ぎゃ ぎゅ ぎょ', 'gya gyu gyo'],
  ['しゃ しゅ しょ', 'sha shu sho'],
  ['じゃ じゅ じょ', 'ja ju jo'],
  ['ちゃ ちゅ ちょ', 'cha chu cho'],
  ['にゃ にゅ にょ', 'nya nyu nyo'],
  ['ひゃ ひゅ ひょ', 'hya hyu hyo'],
  ['びゃ びゅ びょ', 'bya byu byo'],
  ['ぴゃ ぴゅ ぴょ', 'pya pyu pyo'],
  ['みゃ みゅ みょ', 'mya myu myo'],
  ['りゃ りゅ りょ', 'rya ryu ryo']
];

const rowsByGroup = { vowels: basic.slice(0, 1), basic, voiced, combined };
const recallInterval = 24 * 60 * 60 * 1000;
const minimumBasicCorrect = 40;

export const kanaGroups = Object.freeze({
  basic: '기본 글자 46개',
  vowels: '모음 5개',
  voiced: '탁음·반탁음 25개',
  combined: '요음 33개'
});

const toKatakana = hiragana => [...hiragana].map(char =>
  String.fromCodePoint(char.codePointAt(0) + 0x60)).join('');

export function kanaRows(script, group) {
  return rowsByGroup[group].map(([text, readings]) => {
    const romaji = readings.split(' ');
    return text.split(' ').map((hiragana, index) => hiragana === '-' ? null : {
      glyph: script === 'katakana' ? toKatakana(hiragana) : hiragana,
      romaji: romaji[index]
    });
  });
}

const glyphsByScript = Object.fromEntries(Object.keys(kanaScripts).map(script => [script,
  new Set(['basic', 'voiced', 'combined'].flatMap(group => kanaRows(script, group).flat().filter(Boolean).map(item => item.glyph)))
]));

function isRecord(value) {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}

function isKanaResult(value) {
  return isRecord(value) && Object.keys(value).length === 2
    && Object.hasOwn(value, 'correct') && Object.hasOwn(value, 'at')
    && typeof value.correct === 'boolean' && Number.isSafeInteger(value.at)
    && value.at >= 0 && value.at <= 8_640_000_000_000_000;
}

export function restoreKanaProgress(saved) {
  return Object.fromEntries(Object.keys(kanaScripts).map(script => {
    const records = isRecord(saved?.[script]) ? saved[script] : {};
    return [script, Object.fromEntries(Object.entries(records).filter(([glyph, result]) =>
      glyphsByScript[script].has(glyph) && isKanaResult(result)
    ).map(([glyph, result]) => [glyph, { correct: result.correct, at: result.at }]))];
  }));
}

export function isKanaProgress(saved) {
  return isRecord(saved) && Object.keys(saved).every(script => Object.hasOwn(kanaScripts, script)
    && isRecord(saved[script]) && Object.entries(saved[script]).every(([glyph, result]) =>
      glyphsByScript[script].has(glyph) && isKanaResult(result)));
}

export function recordKanaResult(saved, script, glyph, correct, now = Date.now()) {
  const progress = restoreKanaProgress(saved);
  if (!Object.hasOwn(kanaScripts, script) || !glyphsByScript[script].has(glyph)
    || !isKanaResult({ correct, at: now })) return progress;
  const previous = progress[script][glyph];
  if (previous && now - previous.at < recallInterval) return progress;
  progress[script][glyph] = { correct, at: now };
  return progress;
}

export function getKanaSkill(saved, now = Date.now()) {
  const progress = restoreKanaProgress(saved);
  const scripts = Object.fromEntries(Object.keys(kanaScripts).map(script => {
    const results = kanaRows(script, 'basic').flat().filter(Boolean)
      .map(({ glyph }) => progress[script][glyph]).filter(result => result && result.at <= now);
    const correct = results.filter(result => result.correct).length;
    return [script, {
      seen: results.length,
      correct,
      total: 46,
      score: results.length ? Math.round(100 * correct / 46) : null,
      ready: correct >= minimumBasicCorrect
    }];
  }));
  const seen = scripts.hiragana.seen + scripts.katakana.seen;
  const correct = scripts.hiragana.correct + scripts.katakana.correct;
  return {
    ...scripts,
    seen,
    correct,
    total: 92,
    score: seen ? Math.round(100 * correct / 92) : null,
    ready: scripts.hiragana.ready && scripts.katakana.ready
  };
}

function shuffled(values, random) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

export function createKanaQuiz(script, group, random = Math.random, progress, now = Date.now()) {
  const entries = kanaRows(script, group).flat().filter(Boolean);
  const readings = [...new Set(entries.map(entry => entry.romaji))];
  const records = restoreKanaProgress(progress)[script];
  const priority = ({ glyph }) => {
    const record = records[glyph];
    if (!record) return 0;
    if (now - record.at >= recallInterval) return record.correct ? 2 : 1;
    return 3;
  };
  const queue = shuffled(entries, random).sort((first, second) => priority(first) - priority(second));
  return queue.slice(0, 5).map(({ glyph, romaji }) => {
    const distractors = shuffled(readings.filter(value => value !== romaji), random).slice(0, 3);
    return { glyph, answer: romaji, choices: shuffled([romaji, ...distractors], random) };
  });
}
