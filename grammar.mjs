const entries = [
  {
    id: 'subway-condition',
    level: 'N3',
    sentence: ['地下鉄に', '、二十分ほどで着きます。'],
    blankRomaji: 'Chikatetsu ni (___), nijuppun hodo de tsukimasu.',
    choiceRomaji: ['noreba', 'noru tame ni', 'notte kara ni'],
    choices: ['乗れば', '乗るために', '乗ってからに'],
    answer: 0,
    romaji: 'Chikatetsu ni noreba, nijuppun hodo de tsukimasu.',
    ko: '지하철을 타면 20분 정도면 도착해요.',
    explanation: '「乗る → 乗れば」의 ば형으로 조건을 나타냅니다. 「乗るために」는 지하철을 타는 것이 목적일 때 쓰는 표현이에요.'
  },
  {
    id: 'appears-broken',
    level: 'N3',
    sentence: ['エアコンが動かない', '。一度見ていただけますか。'],
    blankRomaji: 'Eakon ga ugokanai (___). Ichido mite itadakemasu ka?',
    choiceRomaji: ['sō ni shimasu', 'yō desu', 'koto ni shimasu'],
    choices: ['そうにします', 'ようです', 'ことにします'],
    answer: 1,
    romaji: 'Eakon ga ugokanai yō desu. Ichido mite itadakemasu ka?',
    ko: '에어컨이 작동하지 않는 것 같아요. 한번 봐 주시겠어요?',
    explanation: '동사의 보통형 뒤 「ようです」는 관찰한 상황을 근거로 추측할 때 씁니다. 「ことにします」는 스스로 내린 결정을 나타내요.'
  },
  {
    id: 'until-eight',
    level: 'N3',
    sentence: ['八時ちょうどでも、それより遅くても大丈夫です。八時', 'なら、部屋に戻っています。'],
    blankRomaji: 'Hachiji chōdo demo, sore yori osokute mo daijōbu desu. Hachiji (___) nara, heya ni modotteimasu.',
    choiceRomaji: ['izen', 'yori mae', 'ikō'],
    choices: ['以前', 'より前', '以降'],
    answer: 2,
    romaji: 'Hachiji chōdo demo, sore yori osokute mo daijōbu desu. Hachiji ikō nara, heya ni modotteimasu.',
    ko: '8시 정각도 좋고 그보다 늦어도 괜찮아요. 8시부터는 방에 돌아와 있을 거예요.',
    explanation: '「以降」는 기준 시점과 그 뒤를 포함해요. 이 문장에서는 8시부터 방문할 수 있다는 조건을 제시합니다.'
  },
  {
    id: 'could-you-carry',
    level: 'N3',
    sentence: ['荷物が重くて一人では持てません。部屋まで運んで', 'か。'],
    blankRomaji: 'Nimotsu ga omokute hitori de wa motemasen. Heya made hakonde (___) ka?',
    choiceRomaji: ['itadakemasu', 'sashiagemasu', 'shimaimasu'],
    choices: ['いただけます', 'さしあげます', 'しまいます'],
    answer: 0,
    romaji: 'Nimotsu ga omokute hitori de wa motemasen. Heya made hakonde itadakemasu ka?',
    ko: '짐이 무거워 혼자 들 수 없어요. 객실까지 옮겨 주실 수 있나요?',
    explanation: '「～ていただけますか」는 상대에게 정중하게 부탁하는 표현이에요. 「～てさしあげる」는 내가 남을 위해 하는 행동을 말해요.'
  },
  {
    id: 'pending-resumption',
    level: 'N3',
    sentence: ['運転再開のめどが', '。あとどのくらいかかるか、まだ分かりません。'],
    blankRomaji: 'Unten saikai no medo ga (___). Ato dono kurai kakaru ka, mada wakarimasen.',
    choiceRomaji: ['tachimashita', 'tatteimasen', 'tateba ii desu'],
    choices: ['立ちました', '立っていません', '立てばいいです'],
    answer: 1,
    romaji: 'Unten saikai no medo ga tatteimasen. Ato dono kurai kakaru ka, mada wakarimasen.',
    ko: '운행 재개 시점을 가늠할 수 없어요. 아직 얼마나 걸릴지 몰라요.',
    explanation: '「めどが立つ」는 대략적인 전망이 서는 것을 뜻해요. 뒤 문장에서 시점이 불확실하다고 했으므로 부정형이 맞아요.'
  },
  {
    id: 'traffic-possibility',
    level: 'N3',
    sentence: ['夕方は道が混む', 'から、早めに出ましょう。'],
    blankRomaji: 'Yūgata wa michi ga komu (___) kara, hayame ni demashō.',
    choiceRomaji: ['koto ga dekiru', 'koto ni shita', 'kamoshirenai'],
    choices: ['ことができる', 'ことにした', 'かもしれない'],
    answer: 2,
    romaji: 'Yūgata wa michi ga komu kamoshirenai kara, hayame ni demashō.',
    ko: '저녁에는 도로가 막힐 수도 있으니 일찍 출발해요.',
    explanation: '「かもしれない」는 확실하지 않은 가능성을 나타냅니다. 도로가 막힐 가능성을 고려해 일찍 출발하자고 제안하는 문장이에요.'
  },
  {
    id: 'permission-fitting',
    level: 'N4',
    sentence: ['この服を試着して', 'ですか。'],
    blankRomaji: 'Kono fuku o shichaku shite (___) desu ka?',
    choiceRomaji: ['mo ii', 'moraitai', 'mimashita'],
    choices: ['もいい', 'もらいたい', 'みました'],
    answer: 0,
    romaji: 'Kono fuku o shichaku shite mo ii desu ka?',
    ko: '이 옷을 입어 봐도 될까요?',
    explanation: '「동사의 て형＋もいいですか」는 상대에게 허락을 구할 때 사용해요.'
  },
  {
    id: 'where-transfer',
    level: 'N4',
    sentence: ['どこで', 'いいですか。'],
    blankRomaji: 'Doko de (___) ii desu ka?',
    choiceRomaji: ['norikaenagara', 'norikaereba', 'norikaeta koto ga'],
    choices: ['乗り換えながら', '乗り換えれば', '乗り換えたことが'],
    answer: 1,
    romaji: 'Doko de norikaereba ii desu ka?',
    ko: '어디서 갈아타면 되나요?',
    explanation: '「乗り換える → 乗り換えれば」에 「いいですか」를 붙여 어떻게 하면 좋을지 물어요.'
  },
  {
    id: 'request-coffee',
    level: 'N5',
    sentence: ['コーヒー', '一杯ください。'],
    blankRomaji: 'Kōhī (___) ippai kudasai.',
    choiceRomaji: ['de', 'e', 'o'],
    choices: ['で', 'へ', 'を'],
    answer: 2,
    romaji: 'Kōhī o ippai kudasai.',
    ko: '커피 한 잔 주세요.',
    explanation: '「を」는 「ください」로 요청하는 물건을 나타내요. 「一杯」는 한 잔을 뜻해요.'
  }
];

export const grammarQuestions = entries.map(question => ({
  ...question,
  complete: question.sentence.join(question.choices[question.answer])
}));
