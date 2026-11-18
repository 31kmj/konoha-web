// ID | 일본어와 로마자 문장(@는 빈칸) | 정답 선택지(1~3) | 일본어/로마자 보기 세 쌍 | 해석 | 해설
function grammarRows(text) {
  return text.trim().split('\n').map(line => {
    const [id, japanese, pronunciation, key, first, second, third, ko, explanation] = line.trim().split('|');
    const sentence = japanese.split('@');
    const options = [first, second, third].map(option => option.split('/'));
    const choices = options.map(([value]) => value);
    const choiceRomaji = options.map(([, value]) => value);
    const answer = Number(key) - 1;
    return {
      id: 'expansion-' + id, sentence, choices, choiceRomaji, answer, ko, explanation,
      blankRomaji: pronunciation.replace('@', '(___)'),
      romaji: pronunciation.replace('@', choiceRomaji[answer]),
      complete: sentence.join(choices[answer])
    };
  });
}

export const expandedGrammarByLevel = {
  N5: grammarRows(`
topic-wa|こちら@山田さんです。|Kochira @ Yamada-san desu.|1|は/wa|で/de|に/ni|이쪽은 야마다 씨예요.|소개하려는 사람이나 사물을 화제로 삼을 때 「は」를 붙여요. 조사 「は」는 wa로 읽어요.
also-mo|姉は学生です。私@学生です。|Ane wa gakusei desu. Watashi @ gakusei desu.|2|へ/e|も/mo|を/o|언니는 학생이에요. 저도 학생이에요.|앞에서 말한 것과 같은 점이 있을 때 「も」를 붙여요. 「私も」는 ‘나도’라는 뜻이에요.
belongs-to|この傘は田中さん@です。|Kono kasa wa Tanaka-san @ desu.|3|まで/made|に/ni|の/no|이 우산은 다나카 씨 거예요.|「田中さんの傘」에서 「傘」가 문맥상 분명하면 「田中さんの」만으로도 ‘다나카 씨 것’이라는 뜻이 돼요.
direction-particle|毎朝、学校@歩いて行きます。|Maiasa, gakkō @ aruite ikimasu.|2|と/to|へ/e|が/ga|매일 아침 학교로 걸어가요.|이동 방향을 나타내는 「へ」는 조사로 쓰일 때 e로 읽어요. 「学校へ」는 ‘학교로’라는 뜻이에요.
starts-at|お店は朝九時@午後六時までです。|Omise wa asa kuji @ gogo rokuji made desu.|1|から/kara|と/to|を/o|가게는 오전 9시부터 오후 6시까지예요.|범위의 시작에 「から」, 끝에 「まで」를 붙여요.
destination-limit|電車で終点@行きます。途中では降りません。|Densha de shūten @ ikimasu. Tochū de wa orimasen.|3|で/de|が/ga|まで/made|전철로 종점까지 가요. 중간에는 내리지 않아요.|이동이 끝나는 지점을 「まで」로 나타내요. 「終点まで」는 ‘종점까지’라는 뜻이에요.
na-modifier|ここは静か@町です。|Koko wa shizuka @ machi desu.|1|な/na|く/ku|を/o|여기는 조용한 동네예요.|「静か」처럼 な형용사로 명사를 꾸밀 때는 「な」를 넣어요.
i-negative|この水は全然冷た@です。ぬるいです。|Kono mizu wa zenzen tsumeta@ desu. Nurui desu.|2|かった/katta|くない/kunai|くて/kute|이 물은 전혀 차갑지 않아요. 미지근해요.|い형용사 「冷たい」에서 「い」를 「くない」로 바꾸면 부정형이 돼요.
invitation|土曜日、一緒に映画を見@か。|Doyōbi, issho ni eiga o mi@ ka?|3|るのに/ru noni|ましたの/mashita no|ません/masen|토요일에 같이 영화 보지 않을래요?|「動詞のます形」에서 「ます」 대신 「ませんか」를 쓰면 상대를 정중하게 초대할 수 있어요.
past-copula|昨日は日曜日@。今日は月曜日です。|Kinō wa nichiyōbi @. Kyō wa getsuyōbi desu.|1|でした/deshita|ます/masu|ではありません/de wa arimasen|어제는 일요일이었어요. 오늘은 월요일이에요.|명사 뒤의 「です」를 「でした」로 바꾸면 과거 일을 나타낼 수 있어요.
negative-request|ここで写真を撮らない@。撮影は禁止です。|Koko de shashin o toranai @. Satsuei wa kinshi desu.|3|からです/kara desu|ことがあります/koto ga arimasu|でください/de kudasai|이곳에서 사진을 찍지 말아 주세요. 촬영은 금지입니다.|동사의 「ない」형에 「でください」를 붙이면 어떤 행동을 하지 말아 달라는 요청이 돼요.
likes-music|私は日本の音楽@好きです。|Watashi wa Nihon no ongaku @ suki desu.|2|に/ni|が/ga|を/o|저는 일본 음악을 좋아해요.|「好きです」의 대상에는 보통 「が」를 붙여요. 「音楽が好き」는 ‘음악을 좋아하다’라는 뜻이에요.
`),
  N4: grammarRows(`
prohibited-action|危ないので、黄色い線を越えて@。|Abunai node, kiiroi sen o koete @.|1|はいけません/wa ikemasen|もかまいません/mo kamaimasen|みてください/mite kudasai|위험하니 노란 선을 넘어가면 안 돼요.|동사의 て형 뒤 「はいけません」은 금지를 나타내요. 위험하다는 앞부분과 어울려요.
optional-action|名前の記入は任意です。名前を書か@入れます。|Namae no kinyū wa nin’i desu. Namae o kaka@ hairemasu.|2|なければ/nakereba|なくても/nakute mo|ないように/nai yō ni|이름은 원하는 사람만 적으면 돼요. 이름을 적지 않아도 들어갈 수 있어요.|「～なくても」는 그 행동을 하지 않는 경우에도 뒤의 내용이 성립함을 나타내요.
past-experience|高校のときに一度だけ京都に行った@。|Kōkō no toki ni ichido dake Kyōto ni itta @.|3|ほうがいいです/hō ga ii desu|つもりです/tsumori desu|ことがあります/koto ga arimasu|고등학교 때 한 번 교토에 가 본 적이 있어요.|동사의 た형 뒤 「ことがある」는 이전에 경험한 일을 나타내요.
example-actions|休日はよく、本を読んだり音楽を@します。|Kyūjitsu wa yoku, hon o yondari ongaku o @ shimasu.|2|聞いて/kiite|聞いたり/kiitari|聞けば/kikeba|쉬는 날에는 책을 읽거나 음악을 듣곤 해요.|「～たり、～たりする」는 여러 행동 중 대표적인 것을 예로 들어요.
intended-plan|来年は日本で勉強する@です。そのために今、日本語を勉強しています。|Rainen wa Nihon de benkyō suru @ desu. Sono tame ni ima, nihongo o benkyō shiteimasu.|1|つもり/tsumori|ところ/tokoro|ばかり/bakari|내년에는 일본에서 공부할 계획이에요. 그러려고 지금 일본어를 공부하고 있어요.|동사의 기본형 뒤 「つもり」는 자신이 하려는 계획을 나타내요.
looks-like-rain|空が急に暗くなりました。今にも雨が降り@です。|Sora ga kyū ni kuraku narimashita. Ima ni mo ame ga furi@ desu.|3|よう/yō|かもしれない/kamoshirenai|そう/sō|하늘이 갑자기 어두워졌어요. 당장이라도 비가 올 것 같아요.|눈앞의 상황을 보고 예측할 때 동사의 ます형에서 「ます」를 빼고 「そう」를 붙여요.
try-a-method|前に習ったやり方を忘れました。今度はこのやり方を試して@。|Mae ni naratta yarikata o wasuremashita. Kondo wa kono yarikata o tameshite @.|1|みます/mimasu|あります/arimasu|います/imasu|전에 배운 방법을 잊어버렸어요. 이번에는 이 방법을 써 볼게요.|「～てみる」는 어떤 행동을 직접 해 본다는 뜻이에요. 「試してみる」는 ‘시험 삼아 해 보다’예요.
own-decision|何で通うか迷いましたが、明日から自転車で通う@。|Nani de kayou ka mayoimashita ga, ashita kara jitensha de kayou @.|2|ところでした/tokoro deshita|ことにしました/koto ni shimashita|ことがありました/koto ga arimashita|무엇을 타고 다닐지 고민했지만, 내일부터 자전거로 다니기로 했어요.|「～ことにする」는 비교하거나 고민한 뒤 스스로 정한 일을 말할 때 써요.
automatic-consequence|このボタンを押す@、ドアが自動で開きます。|Kono botan o osu @, doa ga jidō de akimasu.|3|だけど/dakedo|にしても/ni shite mo|と/to|이 버튼을 누르면 문이 자동으로 열려요.|「～と」로 어떤 조작이나 조건에 이어 자동으로 일어나는 결과를 나타낼 수 있어요.
only-just-started|会議は今始まった@です。資料はまだ配られていません。|Kaigi wa ima hajimatta @ desu. Shiryō wa mada kubarareteimasen.|2|かわり/kawari|ばかり/bakari|ように/yō ni|회의가 방금 시작됐어요. 자료는 아직 배부되지 않았어요.|동사의 た형 뒤 「ばかり」는 그 행동이 일어난 지 얼마 되지 않았다는 뜻이에요.
too-much|塩を入れ@。このスープはしょっぱくて飲めません。|Shio o ire@. Kono sūpu wa shoppakute nomemasen.|1|すぎました/sugimashita|てもいいです/te mo ii desu|ましょう/mashō|소금을 너무 많이 넣었어요. 이 수프는 짜서 못 마셔요.|동사의 ます형에서 「ます」를 빼고 「すぎる」를 붙이면 행동이나 양이 지나쳤다는 뜻이 돼요.
less-than-before|前の店の料理は高かったですが、この店の料理はそれ@高くありません。|Mae no mise no ryōri wa takakatta desu ga, kono mise no ryōri wa sore @ takaku arimasen.|3|へ/e|や/ya|ほど/hodo|전 가게 음식은 비쌌지만, 이 가게 음식은 그만큼 비싸지 않아요.|「Aほど～ない」는 A와 같은 정도에는 미치지 않는다는 뜻이에요.
`),
  N3: grammarRows(`
established-rule|この図書館では、本を二週間以内に返す@います。|Kono toshokan de wa, hon o nishūkan inai ni kaesu @ imasu.|1|ことになって/koto ni natte|つもりで/tsumori de|ことがあって/koto ga atte|이 도서관에서는 책을 2주 안에 반납하게 되어 있어요.|「～ことになっている」는 이미 정해진 규칙이나 절차를 말해요.
every-time|この曲を聞く@、初めて日本に行ったときのことを思い出します。|Kono kyoku o kiku @, hajimete Nihon ni itta toki no koto o omoidashimasu.|2|かわりに/kawari ni|たびに/tabi ni|ためには/tame ni wa|이 곡을 들을 때마다 처음 일본에 갔던 때가 생각나요.|「～たびに」는 앞의 행동이 일어날 때마다 뒤의 일이 반복된다는 뜻이에요.
unwelcome-cause|目覚ましが鳴らなかった@、電車に乗り遅れました。|Mezamashi ga naranakatta @, densha ni noriokuremashita.|3|うちに/uchi ni|おきに/oki ni|せいで/sei de|알람이 울리지 않는 바람에 전철을 놓쳤어요.|「～せいで」는 좋지 않은 결과의 원인을 지목할 때 써요.
more-than-one|この店では服@、靴やかばんも売っています。|Kono mise de wa fuku @, kutsu ya kaban mo utteimasu.|1|だけでなく/dake de naku|だけなのに/dake na noni|を抜きにして/o nuki ni shite|이 가게에서는 옷뿐만 아니라 신발과 가방도 팔아요.|「Aだけでなく、Bも」는 A에 더해 B도 포함된다는 뜻이에요.
varies-by-season|季節@開館時間が変わります。夏は冬より一時間長く開いています。|Kisetsu @ kaikan jikan ga kawarimasu. Natsu wa fuyu yori ichijikan nagaku aiteimasu.|2|をきっかけに/o kikkake ni|によって/ni yotte|のかわりに/no kawari ni|계절에 따라 개관 시간이 달라져요. 여름에는 겨울보다 한 시간 더 엽니다.|「～によって」는 기준이 달라질 때 결과도 다르다는 뜻으로 쓰여요.
strong-inference|窓が全部閉まっているのに机がぬれています。天井から水が漏れた@。|Mado ga zenbu shimatte iru noni tsukue ga nureteimasu. Tenjō kara mizu ga moreta @.|3|ところにします/tokoro ni shimasu|ように頼みます/yō ni tanomimasu|に違いありません/ni chigai arimasen|창문은 모두 닫혀 있는데 책상이 젖어 있어요. 천장에서 물이 샌 게 틀림없어요.|「～に違いない」는 관찰한 상황 등 근거를 바탕으로 강하게 추측할 때 써요.
exception-possible|人気の店でも、昼なら必ず混む@。平日のお昼は空いている日もあります。|Ninki no mise demo, hiru nara kanarazu komu @. Heijitsu no ohiru wa aite iru hi mo arimasu.|1|とは限りません/to wa kagirimasen|に決まっています/ni kimatteimasu|ことになっています/koto ni natteimasu|인기 있는 가게도 점심시간에 꼭 붐비는 건 아니에요. 평일 점심에도 한산한 날이 있어요.|「～とは限らない」는 어떤 판단이 항상 들어맞지는 않음을 나타내요.
contrast-numbers|去年の参加者は百人だった@、今年は二百人です。|Kyonen no sankasha wa hyakunin datta @, kotoshi wa nihyakunin desu.|2|たびに/tabi ni|のに対して/no ni taishite|ことによって/koto ni yotte|작년 참가자는 100명이었던 데 비해 올해는 200명이에요.|「Aのに対して、B」는 두 사실의 차이를 대조해 보여 줘요.
in-the-middle|大事な説明をしている@、急に停電が起きました。|Daiji na setsumei o shite iru @, kyū ni teiden ga okimashita.|3|うちなら/uchi nara|つもりで/tsumori de|最中に/saichū ni|중요한 설명을 한창 하는 도중에 갑자기 정전이 났어요.|「～最中に」는 한창 어떤 일을 할 때 다른 일이 끼어드는 상황에 잘 어울려요.
nearly-missed|友人が声をかけてくれなければ、駅を通り過ぎる@。|Yūjin ga koe o kakete kurenakereba, eki o tōrisugiru @.|1|ところでした/tokoro deshita|ことにしました/koto ni shimashita|つもりでした/tsumori deshita|친구가 말을 걸어 주지 않았다면 역을 지나칠 뻔했어요.|동사의 기본형 뒤 「ところだった」는 실제로는 피했지만 거의 벌어질 뻔한 일을 말해요.
considering-age|この建物は築四十年の@、設備が新しいですね。|Kono tatemono wa chiku yonjūnen no @, setsubi ga atarashii desu ne.|2|せいで/sei de|わりに/wari ni|ために/tame ni|이 건물은 지은 지 40년 된 것치고 설비가 새것이네요.|「～わりに」는 주어진 조건에서 보통 예상하는 것과 다른 결과를 나타내요.
more-precise-description|あの映画は怖い@悲しかったです。怖い場面はほとんどありません。|Ano eiga wa kowai @ kanashikatta desu. Kowai bamen wa hotondo arimasen.|3|ほどには/hodo ni wa|せいで/sei de|というより/to iu yori|그 영화는 무섭다기보다 슬펐어요. 무서운 장면은 거의 없어요.|「AというよりB」는 상황을 A보다 B로 말하는 편이 더 적절하다는 뜻이에요.
`),
  N2: grammarRows(`
matching-experience|参加者の経験@、研修内容を変えます。初めての人には基本用語から説明します。|Sankasha no keiken @, kenshū naiyō o kaemasu. Hajimete no hito ni wa kihon yōgo kara setsumei shimasu.|1|に応じて/ni ōjite|を挟んで/o hasande|に先立って/ni sakidatte|참가자의 경험에 맞춰 연수 내용을 바꿉니다. 처음인 사람에게는 기본 용어부터 설명합니다.|「～に応じて」는 조건이나 상황에 맞춰 다르게 대응한다는 뜻이에요.
issue-in-dispute|公園の開発計画@、住民の間で賛否が分かれています。|Kōen no kaihatsu keikaku @, jūmin no aida de sanpi ga wakareteimasu.|2|を兼ねて/o kanete|をめぐって/o megutte|をもって/o motte|공원 개발 계획을 둘러싸고 주민들 사이에서 찬반이 갈립니다.|「～をめぐって」는 그 일이나 문제를 중심으로 의견 차이나 논의가 이어짐을 나타내요.
prior-briefing|新サービスの提供開始@、来月から説明会を開きます。提供開始は再来月です。|Shin sābisu no teikyō kaishi @, raigetsu kara setsumeikai o hirakimasu. Teikyō kaishi wa saraigetsu desu.|3|と同時に/to dōji ni|が済んでから/ga sunde kara|に先立って/ni sakidatte|새 서비스 제공에 앞서 다음 달부터 설명회를 엽니다. 서비스는 다다음 달에 시작합니다.|「～に先立って」는 중요한 일을 시작하기 전에 먼저 하는 일을 안내할 때 써요.
turning-point|引っ越し@、近所の清掃活動に参加するようになりました。|Hikkoshi @, kinjo no seisō katsudō ni sanka suru yō ni narimashita.|1|を機に/o ki ni|のわりに/no wari ni|に限り/ni kagiri|이사를 계기로 동네 청소 활동에 참여하게 됐어요.|「～を機に」는 한 사건을 계기로 생활이나 행동이 바뀌었음을 나타내요.
open-to-everyone|参加条件はありません。年齢や職業@、どなたでも参加できます。|Sanka jōken wa arimasen. Nenrei ya shokugyō @, donata demo sanka dekimasu.|2|に沿って/ni sotte|にかかわらず/ni kakawarazu|に先んじて/ni sakinjite|참가 조건은 없어요. 나이와 직업에 관계없이 누구나 참여할 수 있어요.|「～にかかわらず」는 앞의 조건이 결과나 판단에 영향을 주지 않음을 나타내요.
through-training|三か月の研修@、接客に必要な技術を身につけました。|Sankagetsu no kenshū @, sekkyaku ni hitsuyō na gijutsu o mi ni tsukemashita.|3|をよそに/o yoso ni|と引き換えに/to hikikae ni|を通じて/o tsūjite|3개월의 연수를 통해 접객에 필요한 기술을 익혔어요.|「～を通じて」는 무엇을 경험하거나 어떤 경로를 거쳐 결과를 얻었는지 나타내요.
concessive-repair|修理した@、また同じ箇所から水が漏れ始めました。一度は止まっただけに残念です。|Shūri shita @, mata onaji kasho kara mizu ga morehajimemashita. Ichido wa tomatta dake ni zannen desu.|1|ものの/monono|以上は/ijō wa|と仮定して/to katei shite|수리했지만 같은 곳에서 또 물이 새기 시작했어요. 한 번은 멈췄던 터라 아쉽습니다.|「～ものの」는 앞의 사실을 인정하면서 기대와 어긋나는 결과를 이어 말해요.
risk-of-leak|確認せず資料を送ると、古い数字が社外に出@。|Kakunin sezu shiryō o okuru to, furui sūji ga shagai ni de@.|2|かねます/kanemasu|かねません/kanemasen|るべきです/ru beki desu|확인하지 않고 자료를 보내면 예전 수치가 사외로 나갈 우려가 있어요.|「～かねない」는 좋지 않은 일이 일어날 가능성을 말해요. 「～かねる」는 어떤 일을 하기 어렵다는 뜻이에요.
had-no-choice|代わりの会場が見つからず、イベントを延期せ@。|Kawari no kaijō ga mitsukarazu, ibento o enki se@.|3|ずに済みました/zu ni sumimashita|ずにいられます/zu ni iraremasu|ざるを得ませんでした/zaru o emasen deshita|대체 장소를 찾지 못해 행사를 연기할 수밖에 없었어요.|다른 방법이 없어 해야 하는 일은 「～ざるを得ない」로 나타내요. 「する」는 「せざるを得ない」가 돼요.
after-comparing|両方の見積もりを比べた@、発注先を決めます。|Ryōhō no mitsumori o kurabeta @, hatchūsaki o kimemasu.|1|上で/ue de|つもりで/tsumori de|まま/mama|두 견적을 비교한 뒤 발주할 곳을 정합니다.|「～た上で」는 앞의 일을 먼저 한 뒤 그 결과를 바탕으로 판단하거나 행동한다는 뜻이에요.
responsibility-after-acceptance|責任者を引き受けた@、最後まで進捗を見届ける責任があります。|Sekininsha o hikiuketa @, saigo made shinchoku o mitodokeru sekinin ga arimasu.|2|ことなく/koto naku|以上は/ijō wa|どころか/dokoro ka|책임자를 맡은 이상, 진행 상황을 끝까지 지켜볼 책임이 있어요.|「～以上は」는 이미 성립한 사실을 바탕으로 그에 따른 책임이나 당연한 결과를 말해요.
depends-on-venue|会場が使えるかどうか@、日程を変更する可能性があります。|Kaijō ga tsukaeru ka dō ka @, nittei o henkō suru kanōsei ga arimasu.|3|に沿って/ni sotte|にかけて/ni kakete|次第で/shidai de|장소를 사용할 수 있는지에 따라 일정을 바꿀 수도 있습니다.|「～次第で」는 앞에서 제시한 조건에 따라 결과나 결정이 달라질 수 있다는 뜻이에요.
`),
  N1: grammarRows(`
regardless-of-reason|契約書では、理由の@、期限を過ぎた申請は一切受理しないと定めています。|Keiyakusho de wa, riyū no @, kigen o sugita shinsei wa issai juri shinai to sadameteimasu.|1|いかんにかかわらず/ikan ni kakawarazu|いかんで/ikan de|いかんに応じて/ikan ni ōjite|계약서에는 어떤 사유든 기한을 넘긴 신청은 일절 받지 않는다고 규정되어 있습니다.|「～のいかんにかかわらず」는 앞의 내용이 어떠하든 같은 기준을 적용한다는 격식 있는 표현이에요.
forced-to-suspend|線路が冠水し、安全に運行できなくなったため、鉄道会社は全線の運休@。|Senro ga kansui shi, anzen ni unkō dekinaku natta tame, tetsudō gaisha wa zensen no unkyū @.|2|をものともせずに済みました/o mono tomo sezu ni sumimashita|を余儀なくされました/o yogi naku saremashita|を禁じ得ませんでした/o kinji emasen deshita|선로가 침수돼 안전하게 운행할 수 없게 되자 철도 회사는 전 구간 운행을 중단할 수밖에 없었습니다.|「～を余儀なくされる」는 외부 사정 탓에 어쩔 수 없이 그 일을 겪거나 선택한다는 뜻이에요.
unable-to-suppress-anger|何度も改善を求めたのに放置されていたと知り、憤り@。|Nando mo kaizen o motometa noni hōchi sareteita to shiri, ikidōri @.|3|を余儀なくされます/o yogi naku saremasu|に即しています/ni sokushiteimasu|を禁じ得ません/o kinji emasen|여러 번 개선을 요구했는데도 방치됐다는 걸 알고 분노를 금할 수 없습니다.|「～を禁じ得ない」는 감정이 저절로 일어나 억누르기 어렵다는 뜻이에요.
not-even-one-second|緊急の作業なので、一秒@無駄にはできません。|Kinkyū no sagyō na node, ichibyō @ muda ni wa dekimasen.|1|たりとも/tari tomo|を皮切りに/o kawakiri ni|に即して/ni sokushite|긴급한 작업이라 단 1초도 허비할 수 없습니다.|「一～たりとも」는 가장 작은 단위조차 허용되지 않음을 강조해요. 주로 부정 표현과 함께 써요.
unique-craft-perspective|何十年も修理を手がけてきた職人@視点が、この解説には生きています。|Nanjūnen mo shūri o tegakete kita shokunin @ shiten ga, kono kaisetsu ni wa ikiteimasu.|2|を限りとする/o kagiri to suru|ならではの/nara de wa no|と引き換えの/to hikikae no|수십 년 동안 수리를 해 온 장인만의 관점이 이 해설에 살아 있습니다.|「～ならではの」는 그 사람이나 집단에 고유하거나 그 대상이라서 가능한 특징을 강조해요.
based-on-actual-conditions|机上の理屈だけで決めず、現場の実態@判断すべきです。|Kijō no rikutsu dake de kimezu, genba no jittai @ handan subeki desu.|3|を皮切りに/o kawakiri ni|をよそに/o yoso ni|に即して/ni sokushite|탁상공론만으로 결정하지 말고 현장의 실태에 맞춰 판단해야 합니다.|「～に即して」는 실제 사정이나 기준에 맞게 행동한다는 뜻이에요.
first-stop-on-tour|来月の東京公演@、東京を含む全国五都市で順に公演を行います。|Raigetsu no Tōkyō kōen @, Tōkyō o fukumu zenkoku go toshi de jun ni kōen o okonaimasu.|1|を皮切りに/o kawakiri ni|をよそに/o yoso ni|を抜きにして/o nuki ni shite|다음 달 도쿄 공연을 시작으로 도쿄를 포함한 전국 다섯 도시에서 차례로 공연합니다.|「～を皮切りに」는 앞의 일이 연속해서 진행될 일들의 첫 순서라는 뜻이에요.
combined-effects|運賃の値下げが増便@、利用者はさらに増えました。二つの施策に相乗効果があったと見られます。|Unchin no nesage ga zōbin @, riyōsha wa sara ni fuemashita. Futatsu no shisaku ni sōjō kōka ga atta to miraremasu.|2|にひきかえ/ni hikikae|と相まって/to aimatte|を尻目に/o shirime ni|운임 인하와 증편이 맞물려 이용자가 더 늘었습니다. 두 대책에 상승효과가 있었던 것으로 보입니다.|「～と相まって」는 둘 이상의 요소가 어우러져 어떤 결과를 낳았음을 나타내요.
reaching-that-scale|参加者が千人@、小さな会場一つでは対応しきれません。|Sankasha ga sennin @, chiisana kaijō hitotsu de wa taiō shikiremasen.|3|をよそに/o yoso ni|に比べて/ni kurabete|ともなると/to mo naru to|참가자가 1,000명이나 되면 작은 장소 한 곳으로는 감당할 수 없습니다.|「～ともなると」는 어느 정도나 지위에 이르면 상황이 그에 맞게 달라진다는 뜻이에요.
missed-chance-regret|一言知らせてくれれば迎えに行った@、彼は結局一人で歩いて帰ったそうです。|Hitokoto shirasete kurereba mukae ni itta @, kare wa kekkyoku hitori de aruite kaetta sō desu.|1|ものを/mono o|までで/made de|からには/kara ni wa|한마디만 알려 줬으면 데리러 갔을 텐데, 그는 결국 혼자 걸어서 돌아갔다고 해요.|「～ものを」는 다른 결과가 가능했는데 실제로는 그러지 못했다는 아쉬움이나 불만을 담아요.
inevitably-engages|店主の温かな描写は、読み手を引き込ま@。|Tenshu no atataka na byōsha wa, yomite o hikikoma@.|2|ずにはいられません/zu ni wa iraremasen|ずにはおきません/zu ni wa okimasen|ずじまいでした/zu jimai deshita|가게 주인을 따뜻하게 그려 낸 묘사는 독자를 끌어들이고야 맙니다.|「～ずにはおかない」는 표현이나 사건이 어떤 반응을 반드시 일으킨다는 뜻이에요. 「～ずにはいられない」는 행동 주체 스스로 충동을 억제하지 못할 때 써요.
needless-to-explain|全員がすでに事情を知っているので、改めて説明する@。|Zen’in ga sude ni jijō o shitteiru node, aratamete setsumei suru @.|3|に足ります/ni tarimasu|以外にありません/igai ni arimasen|までもありません/made mo arimasen|모두 이미 사정을 알고 있으니 새삼 설명할 필요까지는 없습니다.|「～までもない」는 해당 행동을 굳이 할 필요가 없다는 뜻이에요.
`)
};
