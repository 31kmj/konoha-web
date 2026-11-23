export const placementReference = Object.freeze({
  source: '코노하 진단용 자체 작성 문항',
  reviewStatus: 'internal-review',
  scope: '앱 안의 학습 시작 수준을 고르는 연습 진단'
});

function kana(id, script, prompt, readings, answer) {
  return {
    ...placementReference,
    id: 'placement-kana-' + id,
    area: 'kana', script, prompt, romaji: '',
    instruction: '이 글자의 발음을 골라 주세요.',
    choices: readings.map(text => ({ text })), answer
  };
}

function vocabulary(id, level, prompt, romaji, meanings, answer) {
  return {
    ...placementReference,
    id: 'placement-' + level.toLowerCase() + '-vocabulary-' + id,
    area: 'vocabulary', level, prompt, romaji,
    instruction: '일본어에 맞는 뜻을 골라 주세요.',
    choices: meanings.map(text => ({ text })), answer
  };
}

function grammar(id, level, prompt, romaji, options, answer) {
  return {
    ...placementReference,
    id: 'placement-' + level.toLowerCase() + '-grammar-' + id,
    area: 'grammar', level, prompt, romaji,
    instruction: '빈칸에 들어갈 표현을 골라 주세요.',
    choices: options.map(([text, reading]) => ({ text, romaji: reading })), answer
  };
}

export const placementKanaQuestions = [
  kana('hira-a', 'hiragana', 'あ', ['o', 'a', 'i', 'u'], 1),
  kana('hira-nu', 'hiragana', 'ぬ', ['ne', 'me', 'nu', 'no'], 2),
  kana('hira-kyo', 'hiragana', 'きょ', ['kyo', 'kya', 'gyo', 'sho'], 0),
  kana('kata-a', 'katakana', 'ア', ['ma', 'ya', 'i', 'a'], 3),
  kana('kata-shi', 'katakana', 'シ', ['tsu', 'shi', 'so', 'n'], 1),
  kana('kata-ryo', 'katakana', 'リョ', ['ryu', 'rō', 'ryo', 'yo'], 2)
];

export const placementLevelQuestions = {
  N5: [
    vocabulary('water', 'N5', '水', 'mizu', ['불', '물', '하늘', '산'], 1),
    vocabulary('friend', 'N5', '友達', 'tomodachi', ['음식', '방', '친구', '시간'], 2),
    grammar('wake-time', 'N5', '私は毎朝七時（　）起きます。', 'Watashi wa maiasa shichiji (___) okimasu.',
      [['に', 'ni'], ['で', 'de'], ['を', 'o'], ['と', 'to']], 0),
    grammar('not-expensive', 'N5', 'このかばんは、あまり（　）。', 'Kono kaban wa, amari (___).',
      [['高いです', 'takai desu'], ['高かったです', 'takakatta desu'], ['高くあります', 'takaku arimasu'], ['高くありません', 'takaku arimasen']], 3)
  ],
  N4: [
    vocabulary('ready', 'N4', '旅行の支度をします。', 'Ryokō no shitaku o shimasu.',
      ['여행을 준비해요.', '여행을 취소해요.', '여행을 마쳐요.', '여행을 선물해요.'], 0),
    vocabulary('in-time', 'N4', 'バスに間に合いました。', 'Basu ni ma ni aimashita.',
      ['버스를 놓쳤어요.', '버스에서 내렸어요.', '버스를 갈아탔어요.', '버스 시간에 맞췄어요.'], 3),
    grammar('experience', 'N4', '京都へ行った（　）があります。', 'Kyōto e itta (___) ga arimasu.',
      [['よう', 'yō'], ['こと', 'koto'], ['ため', 'tame'], ['まま', 'mama']], 1),
    grammar('simultaneous', 'N4', '料理を作り（　）、音楽も聞いています。同時に二つのことをしています。',
      'Ryōri o tsukuri(___), ongaku mo kiite imasu. Dōji ni futatsu no koto o shite imasu.',
      [['たい', 'tai'], ['そう', 'sō'], ['ながら', 'nagara'], ['すぎる', 'sugiru']], 2)
  ],
  N3: [
    vocabulary('suspend', 'N3', '安全のため、運転を見合わせます。', 'Anzen no tame, unten o miawasemasu.',
      ['안전을 위해 운행을 늘려요.', '안전을 위해 운행을 잠정 중단해요.', '안전을 위해 운행 시간을 알려요.', '안전을 위해 좌석을 바꿔요.'], 1),
    vocabulary('undertake', 'N3', 'その仕事を引き受けました。', 'Sono shigoto o hikiukemashita.',
      ['그 일을 잊어버렸어요.', '그 일을 미뤘어요.', '그 일을 거절했어요.', '그 일을 맡았어요.'], 3),
    grammar('new-ability', 'N3', '毎日練習して、日本語の新聞が読める（　）なりました。',
      'Mainichi renshū shite, nihongo no shinbun ga yomeru (___) narimashita.',
      [['ために', 'tame ni'], ['ことに', 'koto ni'], ['ように', 'yō ni'], ['そうに', 'sō ni']], 2),
    grammar('before-rain', 'N3', '雨が降らない（　）に、洗濯物を取り込みましょう。',
      'Ame ga furanai (___) ni, sentakumono o torikomimashō.',
      [['うち', 'uchi'], ['ため', 'tame'], ['とおり', 'tōri'], ['はず', 'hazu']], 0)
  ],
  N2: [
    vocabulary('interfere', 'N2', '騒音が仕事に差し支えています。', 'Sōon ga shigoto ni sashitsukaete imasu.',
      ['소음이 업무를 방해하고 있어요.', '소음이 일을 빨리 끝내 줘요.', '소음 때문에 일자리가 늘었어요.', '소음 문제를 이미 해결했어요.'], 0),
    vocabulary('prospect', 'N2', '来月には完成する見込みです。', 'Raigetsu ni wa kansei suru mikomi desu.',
      ['다음 달에는 완성을 포기할 거예요.', '다음 달에는 완성 여부를 잊을 거예요.', '다음 달에는 완성될 전망이에요.', '다음 달에는 완성품을 숨길 거예요.'], 2),
    grammar('despite', 'N2', '彼は忙しい（　）、いつも手伝ってくれる。',
      'Kare wa isogashii (___), itsumo tetsudatte kureru.',
      [['にあたって', 'ni atatte'], ['に先立って', 'ni sakidatte'], ['につれて', 'ni tsurete'], ['にもかかわらず', 'ni mo kakawarazu']], 3),
    grammar('cannot-allow', 'N2', '安全のため、いくら頼まれても、この危険な条件を認める（　）。',
      'Anzen no tame, ikura tanomarete mo, kono kiken na jōken o mitomeru (___).',
      [['にすぎない', 'ni suginai'], ['わけにはいかない', 'wake ni wa ikanai'], ['かのようだ', 'ka no yō da'], ['ようになっている', 'yō ni natte iru']], 1)
  ],
  N1: [
    vocabulary('inevitable', 'N1', 'やむを得ない事情で欠席しました。', 'Yamu o enai jijō de kesseki shimashita.',
      ['축하할 사정으로 결석했어요.', '예상대로 일정이 끝나 참석했어요.', '어쩔 수 없는 사정으로 결석했어요.', '별다른 이유 없이 일찍 도착했어요.'], 2),
    vocabulary('apprehension', 'N1', '計画の実現性に懸念を抱いている。', 'Keikaku no jitsugensei ni kenen o idaite iru.',
      ['계획의 실현 가능성을 우려하고 있어요.', '계획이 이미 실현되어 기뻐해요.', '계획을 실행할 권한을 넘겼어요.', '계획의 목적을 공개하고 있어요.'], 0),
    grammar('forced', 'N1', '地震で道路が寸断され、予定の変更を（　）。',
      'Jishin de dōro ga sundan sare, yotei no henkō o (___).',
      [['余儀なくした', 'yogi naku shita'], ['せざる', 'sezaru'], ['せんが', 'sen ga'], ['余儀なくされた', 'yogi naku sareta']], 3),
    grammar('regardless', 'N1', '結果がどうであっても、基準は公開されます。つまり、結果の（　）、基準は公開されます。',
      'Kekka ga dō de atte mo, kijun wa kōkai saremasu. Tsumari, kekka no (___), kijun wa kōkai saremasu.',
      [['いかんによっては', 'ikan ni yotte wa'], ['いかんにかかわらず', 'ikan ni kakawarazu'], ['いかんで', 'ikan de'], ['いかんによって', 'ikan ni yotte']], 1)
  ]
};
