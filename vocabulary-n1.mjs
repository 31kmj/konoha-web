import { vocabularyRows } from './vocabulary-rows.mjs';

export const n1Vocabulary = [
  ...vocabularyRows('public-briefing', `
course-of-events|経緯|けいい|keii|일이 그렇게 된 경위|決定に至った経緯を説明します。|Kettei ni itatta keii o setsumei shimasu.|결정에 이르게 된 경위를 설명합니다.
purpose|趣旨|しゅし|shushi|취지, 기본 목적|説明会の趣旨をお伝えします。|Setsumeikai no shushi o otsutae shimasu.|설명회의 취지를 말씀드리겠습니다.
point-at-issue|論点|ろんてん|ronten|논점, 논의의 핵심 쟁점|論点を三つに整理しました。|Ronten o mittsu ni seiri shimashita.|논점을 세 가지로 정리했습니다.
accountability|説明責任|せつめいせきにん|setsumei sekinin|결정이나 행동을 설명할 책임|市には説明責任があります。|Shi ni wa setsumei sekinin ga arimasu.|시에는 설명할 책임이 있습니다.
transparency|透明性|とうめいせい|tōmeisei|투명성|選考の透明性を高める必要があります。|Senkō no tōmeisei o takameru hitsuyō ga arimasu.|선발 과정의 투명성을 높일 필요가 있습니다.
compromise|妥協点|だきょうてん|dakyōten|타협점|双方が受け入れられる妥協点を探ります。|Sōhō ga ukeirerareru dakyōten o sagurimasu.|양측이 받아들일 수 있는 타협점을 찾습니다.
consensus|合意形成|ごういけいせい|gōi keisei|합의 형성|関係者の間で合意形成を進めます。|Kankeisha no aida de gōi keisei o susumemasu.|관계자들 사이에서 합의 형성을 추진합니다.
measure|施策|しさく|shisaku|시책, 시행할 정책 조치|新しい防災施策の概要を示します。|Atarashii bōsai shisaku no gaiyō o shimeshimasu.|새 방재 시책의 개요를 제시합니다.
formulate|策定|さくてい|sakutei|계획이나 정책을 수립함|住民の意見を聞いて計画を策定します。|Jūmin no iken o kiite keikaku o sakutei shimasu.|주민의 의견을 듣고 계획을 수립합니다.
administrative-charge|所管|しょかん|shokan|행정상 담당하는 범위, 소관|公園の管理は環境課の所管です。|Kōen no kanri wa kankyōka no shokan desu.|공원 관리는 환경과 소관입니다.
jurisdiction|管轄|かんかつ|kankatsu|권한이 미치는 범위, 관할|この地区は別の事務所の管轄です。|Kono chiku wa betsu no jimusho no kankatsu desu.|이 구역은 다른 사무소의 관할입니다.
stake|利害|りがい|rigai|이익과 손해, 이해관계|立場によって利害が異なります。|Tachiba ni yotte rigai ga kotonarimasu.|입장에 따라 이해관계가 다릅니다.
briefing|住民説明会|じゅうみんせつめいかい|jūmin setsumeikai|주민 설명회|来週、住民説明会を開きます。|Raishū, jūmin setsumeikai o hirakimasu.|다음 주에 주민 설명회를 엽니다.
pros-and-cons|賛否|さんぴ|sanpi|찬성과 반대|提案に対する賛否が分かれています。|Teian ni taisuru sanpi ga wakareteimasu.|제안에 대한 찬반이 갈리고 있습니다.
merits|是非|ぜひ|zehi|옳고 그름, 시행 여부의 타당성|計画を実施することの是非を問います。|Keikaku o jisshi suru koto no zehi o toimasu.|계획을 시행하는 것이 옳은지 묻습니다.
reserve-judgment|留保|りゅうほ|ryūho|판단이나 권리 행사를 유보함|追加資料が出るまで判断を留保します。|Tsuika shiryō ga deru made handan o ryūho shimasu.|추가 자료가 나올 때까지 판단을 유보합니다.
concern|懸念|けねん|kenen|우려|騒音への懸念が示されました。|Sōon e no kenen ga shimesaremashita.|소음에 대한 우려가 제기됐습니다.
reaction|反響|はんきょう|hankyō|반향, 사람들의 반응|計画の発表は大きな反響を呼びました。|Keikaku no happyō wa ōkina hankyō o yobimashita.|계획 발표에 큰 반향이 일었습니다.
struggle-with|苦慮|くりょ|kuryo|어떻게 할지 깊이 고민함|担当課は人員の確保に苦慮しています。|Tantōka wa jin'in no kakuho ni kuryo shiteimasu.|담당 부서는 인력 확보에 어려움을 겪고 있습니다.
seek|模索|もさく|mosaku|해법이나 방향을 모색함|負担を減らす方法を模索しています。|Futan o herasu hōhō o mosaku shiteimasu.|부담을 줄일 방법을 모색하고 있습니다.
spillover|波及|はきゅう|hakyū|영향이 다른 곳으로 퍼짐, 파급|影響は周辺の地区にも波及します。|Eikyō wa shūhen no chiku ni mo hakyū shimasu.|영향은 주변 구역으로도 퍼집니다.
harmful-effect|弊害|へいがい|heigai|제도나 관행이 낳는 폐해|一律の規制には弊害もあります。|Ichiritsu no kisei ni wa heigai mo arimasu.|일률적인 규제에는 폐해도 있습니다.
effectiveness|実効性|じっこうせい|jikkōsei|실제로 효과를 내는 정도, 실효성|対策の実効性をどう確かめますか。|Taisaku no jikkōsei o dō tashikamemasu ka?|대책의 실효성을 어떻게 확인하나요?
arbitrary|恣意的|しいてき|shiiteki|객관적 기준 없이 자의적임|基準が曖昧だと恣意的な判断につながります。|Kijun ga aimai da to shiiteki na handan ni tsunagarimasu.|기준이 모호하면 자의적인 판단으로 이어집니다.
verification|検証|けんしょう|kenshō|검증|試行の結果をデータで検証します。|Shikō no kekka o dēta de kenshō shimasu.|시범 운영 결과를 데이터로 검증합니다.
consultation|諮問|しもん|shimon|전문 기관에 의견을 공식적으로 물음, 자문 요청|市長は計画案を審議会に諮問しました。|Shichō wa keikakuan o shingikai ni shimon shimashita.|시장은 계획안에 관해 심의회에 자문을 구했습니다.
advisory-report|答申|とうしん|tōshin|자문 요청에 대한 심의 기관의 공식 답변|審議会の答申が公表されました。|Shingikai no tōshin ga kōhyō saremashita.|심의회의 공식 답변이 공표됐습니다.
put-off|先送り|さきおくり|sakiokuri|결정이나 처리를 뒤로 미룸|結論は次回まで先送りになりました。|Ketsuron wa jikai made sakiokuri ni narimashita.|결론은 다음번까지 미뤄졌습니다.
come-to-terms|折り合い|おりあい|oriai|서로 양보해 타협함, 관계가 맞음|費用の配分で折り合いがつきました。|Hiyō no haibun de oriai ga tsukimashita.|비용 배분에서 합의점을 찾았습니다.
withdraw|撤回|てっかい|tekkai|이미 낸 의견이나 제안을 거둠, 철회|委員は先ほどの発言を撤回しました。|Iin wa sakihodo no hatsugen o tekkai shimashita.|위원은 조금 전 발언을 철회했습니다.
`),
  ...vocabularyRows('editorial-review', `
main-argument|論旨|ろんし|ronshi|글이나 논의의 핵심 주장|第二段落で論旨が明確になります。|Daini danraku de ronshi ga meikaku ni narimasu.|두 번째 문단에서 핵심 주장이 분명해집니다.
basis|論拠|ろんきょ|ronkyo|논거, 주장의 근거|筆者は統計を論拠にしています。|Hissha wa tōkei o ronkyo ni shiteimasu.|필자는 통계를 논거로 삼고 있습니다.
consequence|帰結|きけつ|kiketsu|논의나 일의 끝에 이르는 결과|その前提からどんな帰結が導かれますか。|Sono zentei kara donna kiketsu ga michibikaremasu ka?|그 전제에서 어떤 결론이 도출되나요?
premise|前提|ぜんてい|zentei|전제|議論の前提を確かめます。|Giron no zentei o tashikamemasu.|논의의 전제를 확인합니다.
inference|推論|すいろん|suiron|추론|この推論には別の根拠も必要です。|Kono suiron ni wa betsu no konkyo mo hitsuyō desu.|이 추론에는 다른 근거도 필요합니다.
concept|概念|がいねん|gainen|개념|最初にこの概念を定義します。|Saisho ni kono gainen o teigi shimasu.|먼저 이 개념을 정의합니다.
consistency|整合性|せいごうせい|seigōsei|앞뒤가 맞는 정도, 정합성|本文と結論の整合性を確認します。|Honbun to ketsuron no seigōsei o kakunin shimasu.|본문과 결론이 앞뒤가 맞는지 확인합니다.
contradiction|矛盾|むじゅん|mujun|모순|二つの説明には矛盾があります。|Futatsu no setsumei ni wa mujun ga arimasu.|두 설명 사이에 모순이 있습니다.
logical-leap|飛躍|ひやく|hiyaku|비약, 논리의 큰 건너뜀|この結論には論理の飛躍があります。|Kono ketsuron ni wa ronri no hiyaku ga arimasu.|이 결론에는 논리의 비약이 있습니다.
abstraction|抽象|ちゅうしょう|chūshō|공통 성질을 뽑아내는 추상|抽象と具体を行き来しながら説明します。|Chūshō to gutai o ikiki shinagara setsumei shimasu.|추상적인 설명과 구체적인 예를 오가며 설명합니다.
concretization|具体化|ぐたいか|gutaika|구체화|例を挙げて議論を具体化しました。|Rei o agete giron o gutaika shimashita.|예를 들어 논의를 구체화했습니다.
insinuation|暗示|あんじ|anji|직접 말하지 않고 넌지시 드러냄, 암시|最後の一文は変化を暗示しています。|Saigo no ichibun wa henka o anji shiteimasu.|마지막 한 문장은 변화를 암시합니다.
implication|含意|がんい|gan'i|말 속에 들어 있는 뜻, 함의|この表現の含意を考えてみましょう。|Kono hyōgen no gan'i o kangaete mimashō.|이 표현의 함의를 생각해 봅시다.
mention|言及|げんきゅう|genkyū|언급|筆者は費用にも言及しています。|Hissha wa hiyō ni mo genkyū shiteimasu.|필자는 비용도 언급하고 있습니다.
elaborate|敷衍|ふえん|fuen|뜻을 넓혀 자세히 풀어 설명함|講師はその主張を具体例で敷衍しました。|Kōshi wa sono shuchō o gutairei de fuen shimashita.|강사는 그 주장을 구체적인 예로 자세히 풀었습니다.
counterevidence|反証|はんしょう|hanshō|주장이 틀렸음을 보여 주는 증거, 반증|新しい観測がその仮説の反証になります。|Atarashii kansoku ga sono kasetsu no hanshō ni narimasu.|새로운 관측은 그 가설의 반증이 됩니다.
corroboration|裏付け|うらづけ|urazuke|주장을 뒷받침하는 근거|結論には十分な裏付けがありません。|Ketsuron ni wa jūbun na urazuke ga arimasen.|결론을 뒷받침할 근거가 충분하지 않습니다.
bias|偏り|かたより|katayori|치우침, 편향|回答者の年齢に偏りがあります。|Kaitōsha no nenrei ni katayori ga arimasu.|응답자의 연령에 편향이 있습니다.
preconception|先入観|せんにゅうかん|sennyūkan|선입관|先入観にとらわれずに読みます。|Sennyūkan ni torawarezu ni yomimasu.|선입관에 얽매이지 않고 읽습니다.
assert|断定|だんてい|dantei|단정|この資料だけでは原因を断定できません。|Kono shiryō dake de wa gen'in o dantei dekimasen.|이 자료만으로는 원인을 단정할 수 없습니다.
rebuttal|反論|はんろん|hanron|반론|筆者は想定される反論にも答えています。|Hissha wa sōtei sareru hanron ni mo kotaeteimasu.|필자는 예상되는 반론에도 답하고 있습니다.
reconsider|再考|さいこう|saikō|재고, 다시 생각함|資料を読み直して結論を再考します。|Shiryō o yominaoshite ketsuron o saikō shimasu.|자료를 다시 읽고 결론을 재고합니다.
succinct|端的|たんてき|tanteki|요점이 간결하고 분명함|論点を端的に述べます。|Ronten o tanteki ni nobemasu.|논점을 간결하고 분명하게 말합니다.
meticulous|緻密|ちみつ|chimitsu|빈틈없이 세밀함, 치밀함|緻密な分析が結論を支えています。|Chimitsu na bunseki ga ketsuron o sasaeteimasu.|치밀한 분석이 결론을 뒷받침합니다.
clear|明瞭|めいりょう|meiryō|명료함|前半の説明は簡潔で明瞭でした。|Zenhan no setsumei wa kanketsu de meiryō deshita.|앞부분 설명은 간결하고 명료했습니다.
ambiguous|曖昧|あいまい|aimai|모호함|結論の言い方が曖昧です。|Ketsuron no iikata ga aimai desu.|결론을 표현한 방식이 모호합니다.
one-sided|一面的|いちめんてき|ichimenteki|한쪽 면만 봄, 일면적임|費用だけを見るのは一面的です。|Hiyō dake o miru no wa ichimenteki desu.|비용만 보는 것은 한쪽 면만 보는 것입니다.
cover-comprehensively|網羅|もうら|mōra|빠짐없이 포괄함, 망라|関連する論文をすべて網羅するのは難しいです。|Kanren suru ronbun o subete mōra suru no wa muzukashii desu.|관련 논문을 모두 망라하기는 어렵습니다.
deviation|逸脱|いつだつ|itsudatsu|기준이나 정해진 범위를 벗어남|議論が本来の目的から逸脱しています。|Giron ga honrai no mokuteki kara itsudatsu shiteimasu.|논의가 본래의 목적에서 벗어나고 있습니다.
rephrase|言い換え|いいかえ|iikae|다른 말로 바꿔 설명함|後半は前の文の言い換えです。|Kōhan wa mae no bun no iikae desu.|뒷부분은 앞 문장을 다른 말로 풀어 쓴 것입니다.
`),
  ...vocabularyRows('visitor-policy', `
concentration|集中|しゅうちゅう|shūchū|집중, 한쪽에 몰림|週末は来訪者が中心部に集中します。|Shūmatsu wa raihōsha ga chūshinbu ni shūchū shimasu.|주말에는 방문객이 중심부에 몰립니다.
influx|流入|りゅうにゅう|ryūnyū|유입|午前中は駅からの人の流入が多いです。|Gozenchū wa eki kara no hito no ryūnyū ga ōi desu.|오전에는 역에서 유입되는 사람이 많습니다.
stagnation|滞留|たいりゅう|tairyū|흐름이 멈추고 한곳에 쌓임, 체류|通路に人が滞留しないよう誘導します。|Tsūro ni hito ga tairyū shinai yō yūdō shimasu.|통로에 사람들이 몰려 머물지 않도록 안내합니다.
circulation-path|動線|どうせん|dōsen|사람이나 물건이 움직이는 경로, 동선|入場と退場の動線を分けました。|Nyūjō to taijō no dōsen o wakemashita.|입장과 퇴장 동선을 나눴습니다.
stay|滞在|たいざい|taizai|어느 곳에 한동안 머무름, 체재|観光客の平均滞在時間を調べます。|Kankōkyaku no heikin taizai jikan o shirabemasu.|관광객의 평균 체류 시간을 조사합니다.
branch|分岐|ぶんき|bunki|길이나 흐름이 갈라짐, 분기|分岐に案内板を設置しました。|Bunki ni annaiban o setchi shimashita.|길이 갈라지는 곳에 안내판을 설치했습니다.
move-around|回遊|かいゆう|kaiyū|여러 곳을 돌아다님, 순회|通りを回遊しやすい地図を配ります。|Tōri o kaiyū shiyasui chizu o kubarimasu.|거리를 돌아보기 쉬운 지도를 나눠 줍니다.
restrain|抑制|よくせい|yokusei|억제|新制度で車の流入を抑制します。|Shinseido de kuruma no ryūnyū o yokusei shimasu.|새 제도로 차량 유입을 억제합니다.
guide|誘導|ゆうどう|yūdō|유도, 안내하여 이끎|係員が来場者を別の入口に誘導します。|Kakariin ga raijōsha o betsu no iriguchi ni yūdō shimasu.|직원이 방문객을 다른 입구로 안내합니다.
regulation|規制|きせい|kisei|규제, 일정한 제한|休日だけ車両の通行を規制します。|Kyūjitsu dake sharyō no tsūkō o kisei shimasu.|휴일에만 차량 통행을 제한합니다.
observe-rules|遵守|じゅんしゅ|junshu|규칙·법령을 지킴, 준수|利用者に規則の遵守を求めます。|Riyōsha ni kisoku no junshu o motomemasu.|이용자에게 규칙 준수를 요구합니다.
publicize|周知|しゅうち|shūchi|여러 사람에게 널리 알림|変更内容を住民に周知します。|Henkō naiyō o jūmin ni shūchi shimasu.|변경 내용을 주민들에게 널리 알립니다.
ensure-thoroughly|徹底|てってい|tettei|빠짐없이 실천하게 함, 철저히 함|現場での安全確認を徹底します。|Genba de no anzen kakunin o tettei shimasu.|현장의 안전 확인을 철저히 합니다.
transition|移行|いこう|ikō|다른 제도나 상태로 넘어감, 이행|来月から新しい方式に移行します。|Raigetsu kara atarashii hōshiki ni ikō shimasu.|다음 달부터 새 방식으로 전환합니다.
use-in-parallel|併用|へいよう|heiyō|둘 이상을 함께 사용함, 병용|紙の地図と電子案内を併用します。|Kami no chizu to denshi annai o heiyō shimasu.|종이 지도와 전자 안내를 함께 사용합니다.
buffer|緩衝|かんしょう|kanshō|충격이나 영향을 누그러뜨림, 완충|住宅と車道の間に緩衝帯を設けました。|Jūtaku to shadō no aida ni kanshōtai o mōkemashita.|주택과 차도 사이에 완충 지대를 마련했습니다.
readiness|受け入れ態勢|うけいれたいせい|ukeire taisei|사람 등을 맞이할 준비 상태|観光客の受け入れ態勢を整えます。|Kankōkyaku no ukeire taisei o totonoemasu.|관광객을 맞이할 준비를 갖춥니다.
cost|代償|だいしょう|daishō|어떤 결과를 얻기 위해 치르는 대가|利便性の向上には代償も伴います。|Ribensei no kōjō ni wa daishō mo tomonaimasu.|편리함이 높아지는 데는 대가도 따릅니다.
uneven-distribution|偏在|へんざい|henzai|일부 지역이나 집단에 치우쳐 존재함|案内所が中心部に偏在しています。|Annaijo ga chūshinbu ni henzai shiteimasu.|안내소가 중심부에 치우쳐 있습니다.
strain|逼迫|ひっぱく|hippaku|수요를 감당하기 어렵게 빠듯해짐|休日は駐車場の需給が逼迫します。|Kyūjitsu wa chūshajō no jukyū ga hippaku shimasu.|휴일에는 주차장 공급이 수요를 따라가기 어렵습니다.
`)
];
