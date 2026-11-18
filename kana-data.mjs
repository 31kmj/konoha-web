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

function shuffled(values, random) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

export function createKanaQuiz(script, group, random = Math.random) {
  const entries = kanaRows(script, group).flat().filter(Boolean);
  const readings = [...new Set(entries.map(entry => entry.romaji))];
  return shuffled(entries, random).slice(0, 5).map(({ glyph, romaji }) => {
    const distractors = shuffled(readings.filter(value => value !== romaji), random).slice(0, 3);
    return { glyph, answer: romaji, choices: shuffled([romaji, ...distractors], random) };
  });
}
