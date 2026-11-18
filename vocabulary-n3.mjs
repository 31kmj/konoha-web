import { vocabularyRows } from './vocabulary-rows.mjs';

export const n3Vocabulary = [
  ...vocabularyRows('clinic', `
internal-medicine|内科|ないか|naika|내과|内科の受付は二階です。|Naika no uketsuke wa nikai desu.|내과 접수는 2층이에요.
reception|受付|うけつけ|uketsuke|접수, 접수처|まず受付で名前を伝えてください。|Mazu uketsuke de namae o tsutaete kudasai.|먼저 접수처에 이름을 알려 주세요.
first-visit|初診|しょしん|shoshin|초진, 첫 진료|初診なので、問診票を書きます。|Shoshin na node, monshinhyō o kakimasu.|초진이라 문진표를 작성해요.
follow-up|再診|さいしん|saishin|재진|来週の再診を予約しました。|Raishū no saishin o yoyaku shimashita.|다음 주 재진을 예약했어요.
seek-exam|受診|じゅしん|jushin|진료를 받음|受診の予約を取りたいです。|Jushin no yoyaku o toritai desu.|진료 예약을 하고 싶어요.
questionnaire|問診票|もんしんひょう|monshinhyō|문진표|問診票に症状を書きます。|Monshinhyō ni shōjō o kakimasu.|문진표에 증상을 적어요.
symptom|症状|しょうじょう|shōjō|증상|症状はいつからですか。|Shōjō wa itsu kara desu ka?|증상이 언제부터 있었나요?
exam|診察|しんさつ|shinsatsu|진찰|診察までどのくらい待ちますか。|Shinsatsu made dono kurai machimasu ka?|진찰까지 얼마나 기다리나요?
physician|医師|いし|ishi|의사|医師に今の症状を伝えました。|Ishi ni ima no shōjō o tsutaemashita.|의사에게 현재 증상을 말씀드렸어요.
patient-card|診察券|しんさつけん|shinsatsuken|진찰권, 병원 등록 카드|受付で診察券を出します。|Uketsuke de shinsatsuken o dashimasu.|접수처에 병원 등록 카드를 내요.
referral|紹介状|しょうかいじょう|shōkaijō|진료 의뢰서, 소개장|紹介状は持っていますか。|Shōkaijō wa motteimasu ka?|진료 의뢰서를 가지고 계세요?
onset|発症|はっしょう|hasshō|증상이 처음 나타남, 발병|発症した日は覚えていますか。|Hasshō shita hi wa oboeteimasu ka?|증상이 처음 나타난 날을 기억하세요?
sluggish|だるい|だるい|darui|몸이 나른하다, 기운이 없다|三日前から体がだるいです。|Mikka mae kara karada ga darui desu.|사흘 전부터 몸이 나른해요.
dizziness|めまい|めまい|memai|현기증, 어지럼증|立つとめまいがします。|Tatsu to memai ga shimasu.|일어서면 어지러워요.
nausea|吐き気|はきけ|hakike|메스꺼움, 구역질|吐き気はありますか。|Hakike wa arimasu ka?|메스꺼움이 있나요?
diagnosis|診断|しんだん|shindan|진단|診断の結果を聞きました。|Shindan no kekka o kikimashita.|진단 결과를 들었어요.
test|検査|けんさ|kensa|검사|検査は何時からですか。|Kensa wa nanji kara desu ka?|검사는 몇 시부터인가요?
prescription|処方箋|しょほうせん|shohōsen|처방전|受付で処方箋を受け取りました。|Uketsuke de shohōsen o uketorimashita.|접수처에서 처방전을 받았어요.
translation-help|通訳|つうやく|tsūyaku|통역|通訳をお願いできますか。|Tsūyaku o onegai dekimasu ka?|통역을 부탁드릴 수 있을까요?
take-care|お大事に|おだいじに|odaiji ni|몸조리 잘하세요|お気をつけて。お大事に。|Oki o tsukete. Odaiji ni.|조심히 가세요. 몸조리 잘하세요.
`),
  ...vocabularyRows('apartment-viewing', `
viewing|内見|ないけん|naiken|임대·매매 주택을 직접 보러 감|土曜日に内見できますか。|Doyōbi ni naiken dekimasu ka?|토요일에 집을 보러 갈 수 있나요?
listing|物件|ぶっけん|bukken|부동산 매물|駅に近い物件を探しています。|Eki ni chikai bukken o sagashiteimasu.|역에 가까운 매물을 찾고 있어요.
rent|家賃|やちん|yachin|월세, 집세|家賃はいくらですか。|Yachin wa ikura desu ka?|월세는 얼마인가요?
deposit|敷金|しききん|shikikin|임대차 보증금|敷金は家賃の何か月分ですか。|Shikikin wa yachin no nankagetsubun desu ka?|보증금은 월세 몇 달치인가요?
key-money|礼金|れいきん|reikin|계약 때 집주인에게 내는 사례금|この物件は礼金がかかりません。|Kono bukken wa reikin ga kakarimasen.|이 매물은 사례금이 들지 않아요.
floor-plan|間取り|まどり|madori|방 배치, 평면 구조|間取りを見せてください。|Madori o misete kudasai.|평면도를 보여 주세요.
sunlight|日当たり|ひあたり|hiatari|채광, 햇빛이 드는 정도|午後の日当たりも確認したいです。|Gogo no hiatari mo kakunin shitai desu.|오후에 햇빛이 얼마나 드는지도 확인하고 싶어요.
nearest|最寄り|もより|moyori|가장 가까운 곳|最寄りの駅まで歩いて何分ですか。|Moyori no eki made aruite nanpun desu ka?|가장 가까운 역까지 걸어서 몇 분인가요?
service-charge|管理費|かんりひ|kanrihi|관리비|家賃とは別に管理費がかかります。|Yachin to wa betsu ni kanrihi ga kakarimasu.|월세와 별도로 관리비가 들어요.
building-age|築年数|ちくねんすう|chikunensū|준공 후 경과 연수|築年数はどのくらいですか。|Chikunensū wa dono kurai desu ka?|지은 지 몇 년 됐나요?
space|広さ|ひろさ|hirosa|넓이, 면적|部屋の広さを比べます。|Heya no hirosa o kurabemasu.|방의 넓이를 비교해요.
bathroom|浴室|よくしつ|yokushitsu|욕실|浴室に窓があります。|Yokushitsu ni mado ga arimasu.|욕실에 창문이 있어요.
closet-space|収納|しゅうのう|shūnō|수납, 수납공간|収納が多い部屋がいいです。|Shūnō ga ōi heya ga ii desu.|수납공간이 많은 방이 좋아요.
move-in|入居|にゅうきょ|nyūkyo|입주|いつから入居できますか。|Itsu kara nyūkyo dekimasu ka?|언제부터 입주할 수 있나요?
move-out|退去|たいきょ|taikyo|퇴거, 집을 비움|退去の日が決まりました。|Taikyo no hi ga kimarimashita.|집을 비울 날짜가 정해졌어요.
security|防犯|ぼうはん|bōhan|방범|防犯カメラはありますか。|Bōhan kamera wa arimasu ka?|방범 카메라가 있나요?
noise|騒音|そうおん|sōon|소음|窓を閉めると騒音が減ります。|Mado o shimeru to sōon ga herimasu.|창문을 닫으면 소음이 줄어요.
initial-costs|初期費用|しょきひよう|shoki hiyō|초기 비용, 입주 시 드는 비용|初期費用も含めて考えます。|Shoki hiyō mo fukumete kangaemasu.|초기 비용도 포함해 생각할게요.
candidates|候補|こうほ|kōho|후보|この部屋を候補に入れます。|Kono heya o kōho ni iremasu.|이 방을 후보에 넣을게요.
dimensions|寸法|すんぽう|sunpō|치수|洗濯機を置く場所の寸法を測ります。|Sentakuki o oku basho no sunpō o hakarimasu.|세탁기 놓을 곳의 치수를 재요.
`),
  ...vocabularyRows('train-disruption', `
suspension|運休|うんきゅう|unkyū|운휴, 운행하지 않음|強風のため一部の列車が運休です。|Kyōfū no tame ichibu no ressha ga unkyū desu.|강풍으로 일부 열차의 운행이 취소됐어요.
delay|遅延|ちえん|chien|지연|遅延の理由を教えてください。|Chien no riyū o oshiete kudasai.|지연 이유를 알려 주세요.
turnback-service|折り返し運転|おりかえしうんてん|orikaeshi unten|일부 구간에서 되돌아가는 운행|この区間は折り返し運転を行っています。|Kono kukan wa orikaeshi unten o okonatteimasu.|이 구간은 열차가 왕복으로 되돌아 운행하고 있어요.
normal-service|平常運転|へいじょううんてん|heijō unten|정상 운행|夕方には平常運転に戻りました。|Yūgata ni wa heijō unten ni modorimashita.|저녁 무렵에는 정상 운행으로 돌아갔어요.
via|経由|けいゆ|keiyu|경유|バスは空港経由です。|Basu wa kūkō keiyu desu.|버스는 공항을 경유해요.
direction|方面|ほうめん|hōmen|방면|大阪方面の電車は何番線ですか。|Ōsaka hōmen no densha wa nanbansen desu ka?|오사카 방면 전철은 몇 번 승강장인가요?
connection|接続|せつぞく|setsuzoku|접속, 교통편 연결|最終バスへの接続はありますか。|Saishū basu e no setsuzoku wa arimasu ka?|막차 버스로 갈아탈 연결편이 있나요?
rail-ticket|乗車券|じょうしゃけん|jōshaken|승차권|乗車券をなくしてしまいました。|Jōshaken o nakushite shimaimashita.|승차권을 잃어버렸어요.
express-ticket|特急券|とっきゅうけん|tokkyūken|특급권|この電車には特急券が必要です。|Kono densha ni wa tokkyūken ga hitsuyō desu.|이 전철에는 특급권이 필요해요.
reserved-seat|指定席|していせき|shiteiseki|지정석|指定席を二つ取りました。|Shiteiseki o futatsu torimashita.|지정석 두 자리를 예매했어요.
nonreserved-seat|自由席|じゆうせき|jiyūseki|자유석, 미지정 좌석|自由席は一号車です。|Jiyūseki wa ichigōsha desu.|자유석은 1호차예요.
board-train|乗車|じょうしゃ|jōsha|승차, 차에 탐|乗車の前に切符を用意します。|Jōsha no mae ni kippu o yōi shimasu.|타기 전에 표를 준비해요.
exit-train|降車|こうしゃ|kōsha|하차, 차에서 내림|降車する方を先に通してください。|Kōsha suru kata o saki ni tōshite kudasai.|내리시는 분들이 먼저 지나가게 해 주세요.
special-service|臨時|りんじ|rinji|임시|駅前から臨時バスが出ます。|Ekimae kara rinji basu ga demasu.|역 앞에서 임시 버스가 출발해요.
crowding|混雑|こんざつ|konzatsu|혼잡|朝は駅が混雑します。|Asa wa eki ga konzatsu shimasu.|아침에는 역이 혼잡해요.
be-delayed|遅れる|おくれる|okureru|늦다, 지연되다|電車が十分遅れています。|Densha ga juppun okureteimasu.|전철이 10분 지연되고 있어요.
make-it|間に合う|まにあう|maniau|시간에 맞다, 늦지 않다|このバスなら約束に間に合います。|Kono basu nara yakusoku ni maniaimasu.|이 버스라면 약속에 늦지 않아요.
detour|迂回|うかい|ukai|우회|工事のためバスは迂回します。|Kōji no tame basu wa ukai shimasu.|공사 때문에 버스가 우회해요.
service-status|運行状況|うんこうじょうきょう|unkō jōkyō|운행 상황|出発前に運行状況を確認します。|Shuppatsu mae ni unkō jōkyō o kakunin shimasu.|출발 전에 운행 상황을 확인해요.
track|線路|せんろ|senro|선로|線路の点検が続いています。|Senro no tenken ga tsuzuiteimasu.|선로 점검이 계속되고 있어요.
`),
  ...vocabularyRows('hotel-problem', `
equipment|設備|せつび|setsubi|설비|客室の設備を確認してください。|Kyakushitsu no setsubi o kakunin shite kudasai.|객실 설비를 확인해 주세요.
furnishings|備品|びひん|bihin|비품|備品が足りないときはお知らせください。|Bihin ga tarinai toki wa oshirase kudasai.|비품이 부족하면 알려 주세요.
repair|修理|しゅうり|shūri|수리|修理にはどのくらいかかりますか。|Shūri ni wa dono kurai kakarimasu ka?|수리에는 얼마나 걸리나요?
inspection|点検|てんけん|tenken|점검|午後に点検に伺います。|Gogo ni tenken ni ukagaimasu.|오후에 점검하러 찾아뵐게요.
strange-noise|異音|いおん|ion|이상한 소리, 이상음|エアコンから異音がします。|Eakon kara ion ga shimasu.|에어컨에서 이상한 소리가 나요.
leak|水漏れ|みずもれ|mizumore|누수, 물이 샘|洗面台の下で水漏れしています。|Senmendai no shita de mizumore shiteimasu.|세면대 아래에서 물이 새고 있어요.
no-hot-water|お湯が出ない|おゆがでない|oyu ga denai|온수가 나오지 않는다|シャワーのお湯が出ないんですが。|Shawā no oyu ga denai n desu ga.|샤워기에서 온수가 안 나오는데요.
outage|停電|ていでん|teiden|정전|先ほど一時的に停電しました。|Sakihodo ichijiteki ni teiden shimashita.|조금 전 잠시 정전이 됐어요.
cleaning|清掃|せいそう|seisō|청소|清掃は午後にお願いします。|Seisō wa gogo ni onegai shimasu.|청소는 오후에 부탁드려요.
handle-issue|対応|たいおう|taiō|대응, 처리|すぐに対応してもらえますか。|Sugu ni taiō shite moraemasu ka?|바로 처리해 주실 수 있나요?
malfunction|不具合|ふぐあい|fuguai|작동 이상, 문제|カードキーに不具合があるようです。|Kādo kī ni fuguai ga aru yō desu.|카드 키에 문제가 있는 것 같아요.
restore-service|復旧|ふっきゅう|fukkyū|복구|インターネットは復旧しましたか。|Intānetto wa fukkyū shimashita ka?|인터넷은 복구됐나요?
inconvenience|不便|ふべん|fuben|불편|ご不便をおかけしました。|Gofuben o okake shimashita.|불편을 끼쳐 드렸습니다.
spare|予備|よび|yobi|예비, 여분|予備のカードはありますか。|Yobi no kādo wa arimasu ka?|여분의 카드가 있나요?
room-temperature|室温|しつおん|shitsuon|실내 온도|室温がなかなか下がりません。|Shitsuon ga nakanaka sagarimasen.|실내 온도가 좀처럼 내려가지 않아요.
remote|リモコン|りもこん|rimokon|리모컨|リモコンが反応しません。|Rimokon ga hannō shimasen.|리모컨이 반응하지 않아요.
blanket|毛布|もうふ|mōfu|담요|毛布をもう一枚お願いできますか。|Mōfu o mō ichimai onegai dekimasu ka?|담요를 한 장 더 부탁드릴 수 있을까요?
heating|暖房|だんぼう|danbō|난방|暖房をつけても暖かくなりません。|Danbō o tsukete mo atatakaku narimasen.|난방을 켜도 따뜻해지지 않아요.
cooling|冷房|れいぼう|reibō|냉방|冷房の温度を下げたいです。|Reibō no ondo o sagetai desu.|냉방 온도를 낮추고 싶어요.
room-move|部屋替え|へやがえ|heyagae|객실을 바꿈|可能でしたら部屋替えをお願いします。|Kanō deshitara heyagae o onegai shimasu.|가능하다면 객실 변경을 부탁드려요.
`),
  ...vocabularyRows('lost-property', `
left-behind|忘れ物|わすれもの|wasuremono|두고 온 물건, 분실물|車内に忘れ物をしました。|Shanai ni wasuremono o shimashita.|차 안에 물건을 두고 왔어요.
forget-to-take|置き忘れる|おきわすれる|okiwasureru|놓아둔 채 잊고 오다|網棚にかばんを置き忘れました。|Amidana ni kaban o okiwasuremashita.|짐 선반에 가방을 두고 왔어요.
on-board|車内|しゃない|shanai|차량 안, 차내|車内を探しても見つかりませんでした。|Shanai o sagashite mo mitsukarimasen deshita.|차 안을 찾아봐도 찾지 못했어요.
front-car|先頭車両|せんとうしゃりょう|sentō sharyō|맨 앞 차량|先頭車両の左側に座っていました。|Sentō sharyō no hidarigawa ni suwatteimashita.|맨 앞 칸 왼쪽에 앉아 있었어요.
feature|特徴|とくちょう|tokuchō|특징|かばんの色や特徴を教えてください。|Kaban no iro ya tokuchō o oshiete kudasai.|가방의 색이나 특징을 알려 주세요.
handle|持ち手|もちて|mochite|들고 잡는 손잡이|傘の持ち手は木でできています。|Kasa no mochite wa ki de dekiteimasu.|우산 손잡이는 나무로 되어 있어요.
umbrella-stand|傘立て|かさたて|kasatate|우산꽂이|傘立てに青い傘が残っています。|Kasatate ni aoi kasa ga nokotteimasu.|우산꽂이에 파란 우산이 남아 있어요.
waiting-room|待合室|まちあいしつ|machiaishitsu|대기실, 대합실|駅の待合室で十分ほど待っていました。|Eki no machiaishitsu de juppun hodo matteimashita.|역 대합실에서 10분쯤 기다렸어요.
recognition-mark|目印|めじるし|mejirushi|알아보는 데 쓰는 표시|白いシールが目印です。|Shiroi shīru ga mejirushi desu.|흰 스티커가 알아볼 표시예요.
have-an-idea|心当たり|こころあたり|kokoroatari|짐작이 가는 것, 짚이는 데|どこに置いたか心当たりはありますか。|Doko ni oita ka kokoroatari wa arimasu ka?|어디에 뒀는지 짐작 가는 곳이 있나요?
loss|紛失|ふんしつ|funshitsu|잃어버림, 분실|駅で定期券を紛失しました。|Eki de teikiken o funshitsu shimashita.|역에서 정기권을 분실했어요.
report|届け出|とどけで|todokede|관계 기관에 알리는 신고|紛失の届け出は窓口でできます。|Funshitsu no todokede wa madoguchi de dekimasu.|분실 신고는 창구에서 할 수 있어요.
keep-in-storage|保管|ほかん|hokan|보관|見つかった物は窓口で保管しています。|Mitsukatta mono wa madoguchi de hokan shiteimasu.|찾은 물건은 창구에서 보관하고 있어요.
claim-item|引き取る|ひきとる|hikitoru|물건을 찾아가거나 인수하다|夕方、窓口で傘を引き取ります。|Yūgata, madoguchi de kasa o hikitorimasu.|저녁 무렵에 창구에서 우산을 찾아갈게요.
as-soon-as-found|見つかり次第|みつかりしだい|mitsukari shidai|찾는 대로, 발견되는 즉시|見つかり次第、ご連絡します。|Mitsukari shidai, gorenraku shimasu.|찾는 대로 연락드리겠습니다.
`),
  ...vocabularyRows('redelivery', `
parcel-service|宅配便|たくはいびん|takuhaibin|택배, 집으로 배달하는 소포 서비스|本を宅配便で送りました。|Hon o takuhaibin de okurimashita.|책을 택배로 보냈어요.
missed-delivery-slip|不在票|ふざいひょう|fuzaihyō|부재중 배송 안내서|郵便受けに不在票が入っていました。|Yūbin'uke ni fuzaihyō ga haitteimashita.|우편함에 부재중 배송 안내서가 들어 있었어요.
redelivery-service|再配達|さいはいたつ|saihaitatsu|재배송|明日の再配達をお願いします。|Ashita no saihaitatsu o onegai shimasu.|내일 다시 배달해 주세요.
tracking-slip-number|送り状番号|おくりじょうばんごう|okurijō bangō|운송장 번호|送り状番号は不在票に記載されています。|Okurijō bangō wa fuzaihyō ni kisai sareteimasu.|운송장 번호는 부재중 배송 안내서에 적혀 있어요.
delivery|配達|はいたつ|haitatsu|배달, 배송|今日は何時ごろ配達されますか。|Kyō wa nanji goro haitatsu saremasu ka?|오늘 몇 시쯤 배달되나요?
service-depot|営業所|えいぎょうしょ|eigyōsho|영업소, 지점|営業所で荷物を受け取ります。|Eigyōsho de nimotsu o uketorimasu.|영업소에서 택배를 받을게요.
recipient|受取人|うけとりにん|uketorinin|받는 사람, 수취인|受取人の名前を確認してください。|Uketorinin no namae o kakunin shite kudasai.|받는 사람의 이름을 확인해 주세요.
bring-back|持ち戻る|もちもどる|mochimodoru|배송하지 못한 물건을 다시 가져오다|不在だったため、荷物を営業所に持ち戻りました。|Fuzai datta tame, nimotsu o eigyōsho ni mochimodorimashita.|받는 분이 계시지 않아 택배를 영업소로 가져왔습니다.
hold-for-pickup|取り置き|とりおき|torioki|나중에 찾도록 따로 보관함|明日まで取り置きをお願いできますか。|Ashita made torioki o onegai dekimasu ka?|내일까지 따로 보관해 주실 수 있나요?
choose-a-time|時間指定|じかんしてい|jikan shitei|받을 시간대를 지정함|時間指定はできますか。|Jikan shitei wa dekimasu ka?|받을 시간을 지정할 수 있나요?
morning|午前中|ごぜんちゅう|gozenchū|오전 중, 오전 시간대|午前中なら家にいます。|Gozenchū nara ie ni imasu.|오전이라면 집에 있어요.
evening|夕方|ゆうがた|yūgata|저녁 무렵|夕方に帰る予定です。|Yūgata ni kaeru yotei desu.|저녁 무렵에 돌아올 예정이에요.
return-home|帰宅|きたく|kitaku|귀가|六時ごろに帰宅します。|Rokuji goro ni kitaku shimasu.|6시쯤 집에 돌아와요.
delivery-destination|届け先|とどけさき|todokesaki|물건이 배달될 곳|届け先の住所を確認します。|Todokesaki no jūsho o kakunin shimasu.|배달받을 주소를 확인해요.
pickup-location|受け取り場所|うけとりばしょ|uketori basho|물건을 받을 장소, 수령 장소|受け取り場所を営業所に変更できますか。|Uketori basho o eigyōsho ni henkō dekimasu ka?|수령 장소를 영업소로 바꿀 수 있나요?
`)
];
