import { vocabularyRows } from './vocabulary-rows.mjs';

export const expandedVocabulary = [
  ...vocabularyRows('cafe', `
morning|朝|あさ|asa|아침|朝は家でコーヒーを飲みます。|Asa wa ie de kōhī o nomimasu.|아침에는 집에서 커피를 마셔요.
noon|昼|ひる|hiru|낮, 정오|昼にこの店で会いましょう。|Hiru ni kono mise de aimashō.|정오에 이 가게에서 만나요.
night|夜|よる|yoru|밤|夜はコーヒーを飲みません。|Yoru wa kōhī o nomimasen.|밤에는 커피를 마시지 않아요.
chair|椅子|いす|isu|의자|この椅子に座ってもいいですか。|Kono isu ni suwatte mo ii desu ka?|이 의자에 앉아도 되나요?
small|小さい|ちいさい|chiisai|작다|小さいカップでお願いします。|Chiisai kappu de onegai shimasu.|작은 컵으로 부탁해요.
warm|温かい|あたたかい|atatakai|따뜻하다|温かいお茶をください。|Atatakai ocha o kudasai.|따뜻한 차를 주세요.
wait|待つ|まつ|matsu|기다리다|友達が来るまでここで待ちます。|Tomodachi ga kuru made koko de machimasu.|친구가 올 때까지 여기서 기다릴게요.
rest|休む|やすむ|yasumu|쉬다|歩き疲れたので、カフェで少し休みます。|Arukitsukareta node, kafe de sukoshi yasumimasu.|걸어서 지쳤으니 카페에서 잠깐 쉴게요.
now|今|いま|ima|지금|今、席は空いていますか。|Ima, seki wa aiteimasu ka?|지금 빈자리가 있나요?
open|開く|あく|aku|열리다, (가게가) 문을 열다|店は何時に開きますか。|Mise wa nanji ni akimasu ka?|가게는 몇 시에 문을 여나요?
`),
  ...vocabularyRows('directions', `
house|家|いえ|ie|집|家は公園の近くです。|Ie wa kōen no chikaku desu.|집은 공원 근처예요.
car|車|くるま|kuruma|자동차|今日は車で来ました。|Kyō wa kuruma de kimashita.|오늘은 차를 타고 왔어요.
bicycle|自転車|じてんしゃ|jitensha|자전거|学校まで自転車で行きます。|Gakkō made jitensha de ikimasu.|학교까지 자전거로 가요.
bus|バス|ばす|basu|버스|バスで博物館へ行きます。|Basu de hakubutsukan e ikimasu.|버스를 타고 박물관에 가요.
company|会社|かいしゃ|kaisha|회사|会社は駅の前です。|Kaisha wa eki no mae desu.|회사는 역 앞에 있어요.
hospital|病院|びょういん|byōin|병원|この近くに病院はありますか。|Kono chikaku ni byōin wa arimasu ka?|이 근처에 병원이 있나요?
right-side|右側|みぎがわ|migigawa|오른쪽 편|交番は道の右側にあります。|Kōban wa michi no migigawa ni arimasu.|파출소는 길 오른쪽에 있어요.
left-side|左側|ひだりがわ|hidarigawa|왼쪽 편|入口は建物の左側です。|Iriguchi wa tatemono no hidarigawa desu.|입구는 건물 왼쪽에 있어요.
stop-moving|止まる|とまる|tomaru|멈추다, 정차하다|バスは学校の前で止まります。|Basu wa gakkō no mae de tomarimasu.|버스는 학교 앞에서 멈춰요.
get-there|着く|つく|tsuku|도착하다|もうすぐ駅に着きます。|Mō sugu eki ni tsukimasu.|곧 역에 도착해요.
`),
  ...vocabularyRows('grocery', `
cucumber|きゅうり|きゅうり|kyūri|오이|きゅうりを二本買います。|Kyūri o nihon kaimasu.|오이 두 개를 사요.
tomato|トマト|とまと|tomato|토마토|このトマトは甘いです。|Kono tomato wa amai desu.|이 토마토는 달아요.
onion|玉ねぎ|たまねぎ|tamanegi|양파|玉ねぎはどこですか。|Tamanegi wa doko desu ka?|양파는 어디에 있나요?
potato|じゃがいも|じゃがいも|jagaimo|감자|じゃがいもを三つください。|Jagaimo o mittsu kudasai.|감자 세 개 주세요.
mushrooms|きのこ|きのこ|kinoko|버섯|きのこを入れてスープを作ります。|Kinoko o irete sūpu o tsukurimasu.|버섯을 넣어 수프를 만들어요.
tofu|豆腐|とうふ|tōfu|두부|豆腐もかごに入れます。|Tōfu mo kago ni iremasu.|두부도 바구니에 담아요.
one-item|一個|いっこ|ikko|한 개|りんごを一個買いました。|Ringo o ikko kaimashita.|사과를 한 개 샀어요.
expensive|高い|たかい|takai|가격이 비싸다, 높다|今日は魚が高いです。|Kyō wa sakana ga takai desu.|오늘은 생선이 비싸요.
heavy|重い|おもい|omoi|무겁다|この袋は少し重いです。|Kono fukuro wa sukoshi omoi desu.|이 봉투는 조금 무거워요.
one-bag|一袋|ひとふくろ|hitofukuro|한 봉지|じゃがいもを一袋ください。|Jagaimo o hitofukuro kudasai.|감자 한 봉지 주세요.
`),
  ...vocabularyRows('post-office', `
today|今日|きょう|kyō|오늘|今日、この手紙を出します。|Kyō, kono tegami o dashimasu.|오늘 이 편지를 부쳐요.
yesterday|昨日|きのう|kinō|어제|昨日、はがきを送りました。|Kinō, hagaki o okurimashita.|어제 엽서를 보냈어요.
weekend|週末|しゅうまつ|shūmatsu|주말|週末に手紙を書きます。|Shūmatsu ni tegami o kakimasu.|주말에 편지를 써요.
what-time|何時|なんじ|nanji|몇 시|郵便局は何時までですか。|Yūbinkyoku wa nanji made desu ka?|우체국은 몇 시까지 하나요?
phone|電話|でんわ|denwa|전화|郵便局に電話します。|Yūbinkyoku ni denwa shimasu.|우체국에 전화해요.
number|番号|ばんごう|bangō|번호|この紙に電話番号を書きます。|Kono kami ni denwa bangō o kakimasu.|이 종이에 전화번호를 적어요.
town|町|まち|machi|동네, 마을|この町には郵便局が二つあります。|Kono machi ni wa yūbinkyoku ga futatsu arimasu.|이 동네에는 우체국이 두 곳 있어요.
notebook|手帳|てちょう|techō|수첩|住所は手帳に書いてあります。|Jūsho wa techō ni kaite arimasu.|주소는 수첩에 적혀 있어요.
paper|紙|かみ|kami|종이|紙を一枚ください。|Kami o ichimai kudasai.|종이 한 장 주세요.
black|黒い|くろい|kuroi|검다|黒いペンで名前を書きます。|Kuroi pen de namae o kakimasu.|검은 펜으로 이름을 적어요.
`),
  ...vocabularyRows('train', `
round-trip|往復|おうふく|ōfuku|왕복|往復の切符を買いたいです。|Ōfuku no kippu o kaitai desu.|왕복 표를 사고 싶어요.
express|急行|きゅうこう|kyūkō|급행|この駅には急行が止まりますか。|Kono eki ni wa kyūkō ga tomarimasu ka?|이 역에 급행이 서나요?
all-stops|各駅停車|かくえきていしゃ|kakueki teisha|각 역 정차 열차|急行が来ないので、各駅停車に乗ります。|Kyūkō ga konai node, kakueki teisha ni norimasu.|급행이 오지 않아서 각 역에 서는 열차를 탈게요.
first-train|始発|しはつ|shihatsu|첫차|明日は始発で出かけます。|Ashita wa shihatsu de dekakemasu.|내일은 첫차를 타고 나가요.
pass-through|通過|つうか|tsūka|통과|この列車は次の駅を通過します。|Kono ressha wa tsugi no eki o tsūka shimasu.|이 열차는 다음 역에 정차하지 않고 지나갑니다.
rail-car|車両|しゃりょう|sharyō|차량, 열차 한 칸|後ろの車両が空いています。|Ushiro no sharyō ga aiteimasu.|뒤쪽 차량이 한산해요.
conductor|車掌|しゃしょう|shashō|열차 차장|乗り換えについて車掌に聞きました。|Norikae ni tsuite shashō ni kikimashita.|환승에 관해 차장에게 물었어요.
priority-seat|優先席|ゆうせんせき|yūsenseki|교통약자 우선석|ドアの近くに優先席があります。|Doa no chikaku ni yūsenseki ga arimasu.|문 근처에 교통약자 우선석이 있어요.
on-the-way|途中|とちゅう|tochū|도중, 가는 길|駅へ行く途中で友達に会いました。|Eki e iku tochū de tomodachi ni aimashita.|역에 가는 도중에 친구를 만났어요.
train-fare|運賃|うんちん|unchin|운임, 교통 요금|空港までの運賃はいくらですか。|Kūkō made no unchin wa ikura desu ka?|공항까지 요금은 얼마예요?
`),
  ...vocabularyRows('hotel', `
lodging|宿泊|しゅくはく|shukuhaku|숙박|宿泊の予約を確認してください。|Shukuhaku no yoyaku o kakunin shite kudasai.|숙박 예약을 확인해 주세요.
consecutive-nights|連泊|れんぱく|renpaku|같은 숙소에 연달아 묵음|連泊の場合、掃除は何時ですか。|Renpaku no baai, sōji wa nanji desu ka?|연박할 경우 청소는 몇 시에 하나요?
room-only|素泊まり|すどまり|sudomari|식사 없이 숙박만 함|今回は素泊まりで予約しました。|Konkai wa sudomari de yoyaku shimashita.|이번에는 식사 없이 숙박만 예약했어요.
non-smoking|禁煙|きんえん|kin’en|금연|禁煙の部屋をお願いします。|Kin’en no heya o onegai shimasu.|금연 객실로 부탁해요.
smoking|喫煙|きつえん|kitsuen|흡연|喫煙できる場所はありますか。|Kitsuen dekiru basho wa arimasu ka?|흡연할 수 있는 곳이 있나요?
airing|換気|かんき|kanki|환기|窓を開けて換気してもいいですか。|Mado o akete kanki shite mo ii desu ka?|창문을 열고 환기해도 되나요?
pillow|枕|まくら|makura|베개|枕をもう一つ借りられますか。|Makura o mō hitotsu kariraremasu ka?|베개를 하나 더 빌릴 수 있나요?
towel|タオル|たおる|taoru|수건|新しいタオルを一枚ください。|Atarashii taoru o ichimai kudasai.|새 수건 한 장 주세요.
lights-out|消灯|しょうとう|shōtō|소등|相部屋の消灯は十一時です。|Aibeya no shōtō wa jūichiji desu.|공용 객실의 소등은 11시입니다.
entryway|玄関|げんかん|genkan|현관|玄関で靴を脱いでください。|Genkan de kutsu o nuide kudasai.|현관에서 신발을 벗어 주세요.
`),
  ...vocabularyRows('restaurant', `
small-sharing-plate|取り皿|とりざら|torizara|덜어 먹는 앞접시|取り皿を三枚お願いします。|Torizara o sanmai onegai shimasu.|앞접시 세 장 부탁해요.
order-slip|注文票|ちゅうもんひょう|chūmonhyō|주문표|食べたい料理に印を付けて、注文票を渡してください。|Tabetai ryōri ni shirushi o tsukete, chūmonhyō o watashite kudasai.|먹고 싶은 요리에 표시한 뒤 주문표를 건네주세요.
appetizer|前菜|ぜんさい|zensai|전채, 식전 요리|前菜は野菜のサラダです。|Zensai wa yasai no sarada desu.|전채는 채소 샐러드예요.
main-dish|主菜|しゅさい|shusai|주 요리|主菜は魚と肉から選べます。|Shusai wa sakana to niku kara erabemasu.|주 요리는 생선과 고기 중에서 고를 수 있어요.
seasoning|味付け|あじつけ|ajitsuke|간을 맞춤, 양념한 맛|味付けは少し甘めです。|Ajitsuke wa sukoshi amame desu.|간이 조금 달게 되어 있어요.
spicy|辛い|からい|karai|맵다|辛い料理は苦手です。|Karai ryōri wa nigate desu.|매운 음식을 잘 못 먹어요.
mild-flavor|薄い|うすい|usui|맛이 연하다, 얇다|このスープは少し味が薄いです。|Kono sūpu wa sukoshi aji ga usui desu.|이 수프는 맛이 좀 싱거워요.
grill|焼く|やく|yaku|굽다|この魚は塩を振って焼きます。|Kono sakana wa shio o futte yakimasu.|이 생선은 소금을 뿌려서 구워요.
heat-up|温める|あたためる|atatameru|데우다|このお弁当を温めてもらえますか。|Kono obentō o atatamete moraemasu ka?|이 도시락을 데워 주실 수 있나요?
sell-out|売り切れる|うりきれる|urikireru|다 팔리다|今日のランチはもう売り切れました。|Kyō no ranchi wa mō urikiremashita.|오늘 점심 메뉴는 이미 다 팔렸어요.
`),
  ...vocabularyRows('pharmacy', `
stomach-organ|胃|い|i|위, 위장|昨日から胃が痛いです。|Kinō kara i ga itai desu.|어제부터 위가 아파요.
stomach-medicine|胃薬|いぐすり|igusuri|위장약|胃薬はどの棚にありますか。|Igusuri wa dono tana ni arimasu ka?|위장약은 어느 진열대에 있나요?
eye-drops|目薬|めぐすり|megusuri|안약|この目薬の使い方を教えてください。|Kono megusuri no tsukaikata o oshiete kudasai.|이 안약의 사용법을 알려 주세요.
topical-ointment|塗り薬|ぬりぐすり|nurigusuri|바르는 약|塗り薬を探しています。|Nurigusuri o sagashiteimasu.|바르는 약을 찾고 있어요.
medicated-patch|湿布|しっぷ|shippu|붙이는 파스, 찜질약|湿布の売り場はどこですか。|Shippu no uriba wa doko desu ka?|파스는 어디에서 팔아요?
gargle|うがい|うがい|ugai|목을 헹굼, 가글|うがいに使う薬を買いたいです。|Ugai ni tsukau kusuri o kaitai desu.|가글에 쓰는 약을 사고 싶어요.
dryness|乾燥|かんそう|kansō|건조|冬は手が乾燥しやすいです。|Fuyu wa te ga kansō shiyasui desu.|겨울에는 손이 쉽게 건조해져요.
appetite|食欲|しょくよく|shokuyoku|식욕|今朝は食欲がありませんでした。|Kesa wa shokuyoku ga arimasen deshita.|오늘 아침에는 식욕이 없었어요.
dislike-or-difficulty|苦手|にがて|nigate|서투름, 잘 못하거나 꺼림|粉薬を飲むのが苦手です。|Konagusuri o nomu no ga nigate desu.|가루약을 잘 못 먹어요.
itchy|かゆい|かゆい|kayui|가렵다|腕がかゆいです。|Ude ga kayui desu.|팔이 가려워요.
`),
  ...vocabularyRows('train-disruption', `
service-cut-off|不通|ふつう|futsū|불통, 교통편 운행이 끊김|大雨で一部の区間が不通になりました。|Ōame de ichibu no kukan ga futsū ni narimashita.|폭우로 일부 구간의 운행이 끊겼어요.
road-closure|通行止め|つうこうどめ|tsūkōdome|통행 금지|工事のため、駅前の道は通行止めです。|Kōji no tame, ekimae no michi wa tsūkōdome desu.|공사 때문에 역 앞 도로는 통행이 금지돼요.
traffic-jam|渋滞|じゅうたい|jūtai|교통 정체|渋滞でバスが遅れています。|Jūtai de basu ga okureteimasu.|교통 정체로 버스가 지연되고 있어요.
transit-connection|乗り継ぎ|のりつぎ|noritsugi|다른 교통편으로 갈아탐, 환승|次のバスへの乗り継ぎには、あと十分しかありません。|Tsugi no basu e no noritsugi ni wa, ato juppun shika arimasen.|다음 버스로 갈아타기까지 10분밖에 안 남았어요.
clearing-up|解消|かいしょう|kaishō|해소|駅前の混雑は昼過ぎに解消しました。|Ekimae no konzatsu wa hirusugi ni kaishō shimashita.|역 앞 혼잡은 정오가 지나 해소됐어요.
service-interval|運転間隔|うんてんかんかく|unten kankaku|운행 간격|現在、電車の運転間隔が広がっています。|Genzai, densha no unten kankaku ga hirogatteimasu.|현재 전철의 운행 간격이 길어지고 있습니다.
extra-service|増発|ぞうはつ|zōhatsu|증편, 운행 횟수를 늘림|祭りに合わせてバスを増発します。|Matsuri ni awasete basu o zōhatsu shimasu.|축제에 맞춰 버스를 증편해요.
detour-road|迂回路|うかいろ|ukairo|우회로|橋が通れないので、迂回路を使いました。|Hashi ga tōrenai node, ukairo o tsukaimashita.|다리를 건널 수 없어서 우회로를 이용했어요.
work-commute|通勤|つうきん|tsūkin|출퇴근|通勤には電車を使っています。|Tsūkin ni wa densha o tsukatteimasu.|출퇴근할 때는 전철을 이용해요.
school-commute|通学|つうがく|tsūgaku|통학|この路線は通学にも使われています。|Kono rosen wa tsūgaku ni mo tsukawareteimasu.|이 노선은 통학에도 이용돼요.
`),
  ...vocabularyRows('clinic', `
chronic-condition|持病|じびょう|jibyō|지병|持病があるので、問診票に記入しました。|Jibyō ga aru node, monshinhyō ni kinyū shimashita.|지병이 있어서 문진표에 적었어요.
medical-history|既往歴|きおうれき|kiōreki|과거 병력|既往歴の欄には、以前かかった病気を書きます。|Kiōreki no ran ni wa, izen kakatta byōki o kakimasu.|과거 병력 칸에는 예전에 앓았던 병을 적어요.
empty-stomach|空腹|くうふく|kūfuku|공복, 빈속|空腹のときに胃が痛くなります。|Kūfuku no toki ni i ga itaku narimasu.|빈속일 때 위가 아파져요.
blood-pressure|血圧|けつあつ|ketsuatsu|혈압|受付の後で血圧を測りました。|Uketsuke no ato de ketsuatsu o hakarimashita.|접수한 뒤에 혈압을 쟀어요.
blood-sample|採血|さいけつ|saiketsu|채혈|採血は別の部屋で行います。|Saiketsu wa betsu no heya de okonaimasu.|채혈은 다른 방에서 합니다.
waiting-time|待ち時間|まちじかん|machijikan|대기 시간|診察までの待ち時間はどのくらいですか。|Shinsatsu made no machijikan wa dono kurai desu ka?|진찰까지 대기 시간이 얼마나 되나요?
medical-department|診療科|しんりょうか|shinryōka|진료과|どの診療科を受診すればいいですか。|Dono shinryōka o jushin sureba ii desu ka?|어느 진료과에서 진료를 받으면 되나요?
insurance-card|保険証|ほけんしょう|hokenshō|보험증|保険証を受付で提示しました。|Hokenshō o uketsuke de teiji shimashita.|접수처에서 보험증을 보여 줬어요.
condition-course|経過|けいか|keika|시간이 지나며 나타나는 변화, 경과|一週間後に経過を確認します。|Isshūkan go ni keika o kakunin shimasu.|일주일 뒤에 경과를 확인합니다.
medical-interview|問診|もんしん|monshin|문진, 증상이나 병력을 물어봄|診察の前に看護師が問診します。|Shinsatsu no mae ni kangoshi ga monshin shimasu.|진찰 전에 간호사가 문진을 해요.
`),
  ...vocabularyRows('apartment-viewing', `
renewal-fee|更新料|こうしんりょう|kōshinryō|갱신료|契約を更新するときに更新料がかかります。|Keiyaku o kōshin suru toki ni kōshinryō ga kakarimasu.|계약을 갱신할 때 갱신료가 들어요.
brokerage|仲介|ちゅうかい|chūkai|중개|この会社は部屋の仲介をしています。|Kono kaisha wa heya no chūkai o shiteimasu.|이 회사는 집을 중개해요.
real-estate|不動産|ふどうさん|fudōsan|부동산|駅前の不動産会社で部屋を紹介してもらいました。|Ekimae no fudōsan gaisha de heya o shōkai shite moraimashita.|역 앞 부동산 업체에서 집을 소개받았어요.
guarantor|保証人|ほしょうにん|hoshōnin|보증인|この物件を借りるには保証人が必要ですか。|Kono bukken o kariru ni wa hoshōnin ga hitsuyō desu ka?|이 집을 빌리려면 보증인이 필요한가요?
common-use|共用|きょうよう|kyōyō|공용, 여럿이 함께 사용함|廊下は入居者の共用スペースです。|Rōka wa nyūkyosha no kyōyō supēsu desu.|복도는 입주자 공용 공간이에요.
location-amenities|立地|りっち|ritchi|입지, 위치 조건|駅に近くて立地がいいですね。|Eki ni chikakute ritchi ga ii desu ne.|역에 가까워서 입지가 좋네요.
bike-parking|駐輪場|ちゅうりんじょう|chūrinjō|자전거 주차장|駐輪場は建物の裏にあります。|Chūrinjō wa tatemono no ura ni arimasu.|자전거 주차장은 건물 뒤에 있어요.
on-site|現地|げんち|genchi|현지, 현장|内見の日は現地で待ち合わせましょう。|Naiken no hi wa genchi de machiawasemashō.|집을 보는 날은 현장에서 만나요.
natural-lighting|採光|さいこう|saikō|채광, 자연광을 들임|窓が二つあり、採光が良い部屋です。|Mado ga futatsu ari, saikō ga yoi heya desu.|창이 두 개라 채광이 좋은 방이에요.
soundproofing|防音|ぼうおん|bōon|방음|道路の音が気になるので、防音について聞きました。|Dōro no oto ga ki ni naru node, bōon ni tsuite kikimashita.|도로 소음이 신경 쓰여 방음에 관해 물었어요.
`),
  ...vocabularyRows('redelivery', `
acknowledged-receipt|受領|じゅりょう|juryō|수령, 공식적으로 받음|受領の確認ができたらメールを送ります。|Juryō no kakunin ga dekitara mēru o okurimasu.|수령 확인이 되면 메일을 보냅니다.
dispatch|発送|はっそう|hassō|발송|ご注文の商品は明日発送します。|Gochūmon no shōhin wa ashita hassō shimasu.|주문하신 상품은 내일 발송합니다.
parcel-pickup|集荷|しゅうか|shūka|택배 수거, 집하|家まで集荷に来てもらえますか。|Ie made shūka ni kite moraemasu ka?|집까지 택배를 수거하러 와 주실 수 있나요?
packing|梱包|こんぽう|konpō|물건을 보호해 포장함|割れ物なので、しっかり梱包しました。|Waremono na node, shikkari konpō shimashita.|깨지기 쉬운 물건이라 단단히 포장했어요.
shipping-form|伝票|でんぴょう|denpyō|전표, 택배 운송장|荷物に伝票を貼ってください。|Nimotsu ni denpyō o hatte kudasai.|택배에 운송장을 붙여 주세요.
addressee-name|宛名|あてな|atena|받는 사람 이름|宛名は会社名と担当者名を書いてください。|Atena wa kaishamei to tantōshamei o kaite kudasai.|받는 사람란에 회사명과 담당자명을 적어 주세요.
sender|差出人|さしだしにん|sashidashinin|보내는 사람, 발송인|差出人の住所が書いてありません。|Sashidashinin no jūsho ga kaite arimasen.|보낸 사람의 주소가 적혀 있지 않아요.
postage-due|着払い|ちゃくばらい|chakubarai|운송료 착불|この荷物は着払いで送ります。|Kono nimotsu wa chakubarai de okurimasu.|이 택배는 착불로 보낼게요.
prepaid-postage|元払い|もとばらい|motobarai|운송료 선불, 발송인 부담|送料は元払いでお願いします。|Sōryō wa motobarai de onegai shimasu.|배송료는 선불로 부탁드려요.
shipment-tracking|追跡|ついせき|tsuiseki|추적, 배송 조회|番号を入力して荷物を追跡できます。|Bangō o nyūryoku shite nimotsu o tsuiseki dekimasu.|번호를 입력해 배송 상황을 조회할 수 있어요.
`),
  ...vocabularyRows('work-handover', `
dual-duty|兼務|けんむ|kenmu|겸무, 역할을 겸함|来月から窓口業務も兼務します。|Raigetsu kara madoguchi gyōmu mo kenmu shimasu.|다음 달부터 창구 업무도 겸합니다.
division-of-work|分担|ぶんたん|buntan|분담|作業を三人で分担しましょう。|Sagyō o sannin de buntan shimashō.|작업을 세 사람이 나눠서 합시다.
incomplete-paperwork|不備|ふび|fubi|미비점, 서류의 결함|提出書類に不備があったため、差し戻されました。|Teishutsu shorui ni fubi ga atta tame, sashimodosaremashita.|제출 서류에 미비점이 있어 반려됐어요.
provisional-version|暫定版|ざんていばん|zanteiban|임시판|手順書はまだ暫定版です。|Tejunsho wa mada zanteiban desu.|절차서는 아직 임시판입니다.
alternative-plan|代替案|だいたいあん|daitai’an|대안, 대체 계획|予定どおりに進められない場合の代替案を用意します。|Yotei dōri ni susumerarenai baai no daitai’an o yōi shimasu.|예정대로 진행할 수 없을 때의 대안을 마련합니다.
executive-approval|決裁|けっさい|kessai|결재권자의 승인|この支出には部長の決裁が必要です。|Kono shishutsu ni wa buchō no kessai ga hitsuyō desu.|이 지출에는 부장의 결재가 필요해요.
compiling|取りまとめ|とりまとめ|torimatome|여러 내용을 모아 정리함|各部署の意見の取りまとめを担当します。|Kaku busho no iken no torimatome o tantō shimasu.|각 부서 의견을 취합하는 일을 맡습니다.
coordinator|調整役|ちょうせいやく|chōseiyaku|의견이나 일정을 조율하는 사람|会議の日程は調整役に相談してください。|Kaigi no nittei wa chōseiyaku ni sōdan shite kudasai.|회의 일정은 조율 담당자와 상의해 주세요.
priority-rating|優先度|ゆうせんど|yūsendo|우선도, 우선시하는 정도|優先度の高い依頼から処理します。|Yūsendo no takai irai kara shori shimasu.|우선도가 높은 요청부터 처리합니다.
in-operation|稼働|かどう|kadō|가동|新しいシステムは月曜から稼働します。|Atarashii shisutemu wa getsuyō kara kadō shimasu.|새 시스템은 월요일부터 가동됩니다.
backlog|滞り|とどこおり|todokōri|일이 막히거나 지연됨|担当を増やして、処理の滞りを解消しました。|Tantō o fuyashite, shori no todokōri o kaishō shimashita.|담당자를 늘려 처리 지연을 해소했어요.
pending-decision|懸案|けんあん|ken’an|미해결 사안|懸案は次の会議に持ち越します。|Ken’an wa tsugi no kaigi ni mochikoshimasu.|미해결 사안은 다음 회의에서 다루겠습니다.
cross-check|突き合わせ|つきあわせ|tsukiawase|두 자료를 맞대어 대조함|帳簿と領収書の突き合わせを行います。|Chōbo to ryōshūsho no tsukiawase o okonaimasu.|장부와 영수증을 대조합니다.
point-of-contact|連絡窓口|れんらくまどぐち|renraku madoguchi|연락 창구|引き継ぎ後の連絡窓口はこちらです。|Hikitsugigo no renraku madoguchi wa kochira desu.|인수인계 이후 연락 창구는 이쪽입니다.
`),
  ...vocabularyRows('contract-change', `
revision|改定|かいてい|kaitei|기준·요금·규정 등을 고쳐 정함, 개정|利用料金は四月に改定されます。|Riyō ryōkin wa shigatsu ni kaitei saremasu.|이용 요금은 4월에 개정됩니다.
agreement|合意|ごうい|gōi|합의|契約期間について双方が合意しました。|Keiyaku kikan ni tsuite sōhō ga gōi shimashita.|계약 기간에 관해 양측이 합의했어요.
special-provision|特約|とくやく|tokuyaku|특약|ペットの飼育に関する特約があります。|Petto no shiiku ni kansuru tokuyaku ga arimasu.|반려동물 사육에 관한 특약이 있어요.
interpretation|解釈|かいしゃく|kaishaku|해석|この条項の解釈について確認したいです。|Kono jōkō no kaishaku ni tsuite kakunin shitai desu.|이 조항의 해석을 확인하고 싶습니다.
waiver|免除|めんじょ|menjo|면제|条件を満たせば手数料が免除されます。|Jōken o mitaseba tesūryō ga menjo saremasu.|조건을 충족하면 수수료가 면제됩니다.
formal-acceptance|受理|じゅり|juri|서류·신청을 정식으로 접수함|解約の申請が受理されました。|Kaiyaku no shinsei ga juri saremashita.|해지 신청이 정식으로 접수됐습니다.
application-destination|申込先|もうしこみさき|mōshikomisaki|신청서를 내는 곳|申込先は案内の下に書いてあります。|Mōshikomisaki wa annai no shita ni kaite arimasu.|신청할 곳은 안내문 아래에 적혀 있습니다.
continuation|継続|けいぞく|keizoku|계속, 지속|現在の契約を継続したいです。|Genzai no keiyaku o keizoku shitai desu.|현재 계약을 계속 유지하고 싶습니다.
early-termination|途中解約|とちゅうかいやく|tochū kaiyaku|중도 해지|途中解約の条件を確認してください。|Tochū kaiyaku no jōken o kakunin shite kudasai.|중도 해지 조건을 확인해 주세요.
original-document|原本|げんぽん|genpon|원본|写しではなく、契約書の原本をご持参ください。|Utsushi de wa naku, keiyakusho no genpon o gojisan kudasai.|계약서 원본을 지참해 주세요.
photocopy|写し|うつし|utsushi|사본|署名後に契約書の写しをお渡しします。|Shomeigo ni keiyakusho no utsushi o owatashi shimasu.|서명 뒤 계약서 사본을 드립니다.
validity|効力|こうりょく|kōryoku|효력|新しい契約は来月から効力を持ちます。|Atarashii keiyaku wa raigetsu kara kōryoku o mochimasu.|새 계약은 다음 달부터 효력이 있습니다.
upper-limit-rate|上限額|じょうげんがく|jōgengaku|상한액, 최대 금액|補償の上限額はこちらに記載されています。|Hoshō no jōgengaku wa kochira ni kisai sareteimasu.|보상 상한액은 여기에 명시되어 있습니다.
`),
  ...vocabularyRows('tour-change', `
move-later|繰り下げ|くりさげ|kurisage|시간이나 순서를 뒤로 미룸|出発時刻の繰り下げをお知らせします。|Shuppatsu jikoku no kurisage o oshirase shimasu.|출발 시각이 늦춰졌음을 알려 드립니다.
replacement|差し替え|さしかえ|sashikae|다른 내용이나 물건으로 바꿔 끼움|集合場所が変わり、案内図の差し替えが必要です。|Shūgō basho ga kawari, annaizu no sashikae ga hitsuyō desu.|집합 장소가 바뀌어 안내도를 교체해야 합니다.
securing|確保|かくほ|kakuho|확보|別の日に三人分の席を確保しました。|Betsu no hi ni sannin bun no seki o kakuho shimashita.|다른 날짜에 세 사람 자리를 확보했어요.
backup-date|予備日|よびび|yobibi|예비일|雨の場合は予備日に実施します。|Ame no baai wa yobibi ni jisshi shimasu.|비가 오면 예비일에 실시합니다.
estimate|見積もり|みつもり|mitsumori|견적|人数を伝えて、見積もりを出してもらいました。|Ninzū o tsutaete, mitsumori o dashite moraimashita.|인원을 알려 주고 견적을 받았어요.
enrollment|申し込み|もうしこみ|mōshikomi|신청|申し込みは前日まで受け付けます。|Mōshikomi wa zenjitsu made uketsukemasu.|신청은 전날까지 받습니다.
originally-planned|当初|とうしょ|tōsho|당초, 처음|当初は午前中に見学する予定でした。|Tōsho wa gozenchū ni kengaku suru yotei deshita.|처음에는 오전에 견학할 예정이었어요.
staff-shortage|欠員|けついん|ketsuin|결원, 빠진 인원|案内係に欠員が出たため、一部の回を取りやめます。|Annaigakari ni ketsuin ga deta tame, ichibu no kai o toriyamemasu.|안내 인력에 결원이 생겨 일부 회차를 취소합니다.
event-management|運営|うんえい|un’ei|운영|見学会の運営は地元の団体が担当します。|Kengakukai no un’ei wa jimoto no dantai ga tantō shimasu.|견학 행사 운영은 지역 단체가 맡습니다.
postponement-in-order|順延|じゅんえん|jun’en|예정된 순서대로 다음 날 등으로 연기함|雨天で体育祭は翌日に順延されます。|Uten de taiikusai wa yokujitsu ni jun’en saremasu.|비로 체육대회가 다음 날로 연기됩니다.
in-alternation|交代制|こうたいせい|kōtaisei|교대로 진행하는 방식, 교대제|案内は交代制で、午後に担当者が替わります。|Annai wa kōtaisei de, gogo ni tantōsha ga kawarimasu.|안내는 교대제로, 오후에 담당자가 바뀝니다.
seating-plan|座席表|ざせきひょう|zasekihyō|좌석표, 좌석 배치도|当日の座席表を受付で確認してください。|Tōjitsu no zasekihyō o uketsuke de kakunin shite kudasai.|당일 좌석표는 접수처에서 확인해 주세요.
ahead-of-schedule|前倒し|まえだおし|maedaoshi|예정보다 앞당김|混雑を避けるため、集合時間を前倒しにしました。|Konzatsu o sakeru tame, shūgō jikan o maedaoshi ni shimashita.|혼잡을 피하려고 집합 시간을 앞당겼어요.
`),
  ...vocabularyRows('public-briefing', `
various-circumstances|諸般|しょはん|shohan|여러 가지 사정이나 조건|諸般の事情を考慮し、会場を変更しました。|Shohan no jijō o kōryo shi, kaijō o henkō shimashita.|여러 사정을 고려해 장소를 바꿨습니다.
controversy|論争|ろんそう|ronsō|논쟁|道路の整備計画を巡って論争が続いています。|Dōro no seibi keikaku o megutte ronsō ga tsuzuiteimasu.|도로 정비 계획을 둘러싸고 논쟁이 이어집니다.
editorial-tone|論調|ろんちょう|ronchō|논조, 의견을 전개하는 방향과 어조|計画に対する新聞の論調は分かれています。|Keikaku ni taisuru shinbun no ronchō wa wakareteimasu.|계획에 대한 신문들의 논조가 엇갈립니다.
questions-and-answers|質疑|しつぎ|shitsugi|질의, 의문이 있는 점을 물음|説明の後に質疑の時間を設けます。|Setsumei no ato ni shitsugi no jikan o mōkemasu.|설명 뒤에 질의 시간을 마련합니다.
argumentation|論証|ろんしょう|ronshō|근거를 들어 논리적으로 증명함|主張を裏付ける論証が十分かを検討します。|Shuchō o urazukeru ronshō ga jūbun ka o kentō shimasu.|주장을 뒷받침하는 논증이 충분한지 검토합니다.
reconcile-positions|折衷|せっちゅう|setchū|서로 다른 안에서 일부를 취해 절충함|両案を折衷した案が議題に上がりました。|Ryōan o setchū shita an ga gidai ni agarimashita.|두 안을 절충한 안이 의제로 올랐습니다.
formal-advisory|勧告|かんこく|kankoku|공식적인 권고|委員会は運用の見直しを勧告しました。|Iinkai wa un’yō no minaoshi o kankoku shimashita.|위원회는 운영 방식을 재검토하라고 권고했습니다.
codification|明文化|めいぶんか|meibunka|문서로 분명히 규정함, 명문화|手続きの基準を明文化しました。|Tetsuzuki no kijun o meibunka shimashita.|절차 기준을 문서에 명확하게 규정했습니다.
look-at-whole|俯瞰|ふかん|fukan|높은 곳에서 내려다봄, 전체를 조망함|地域全体を俯瞰すると、課題の関係が見えてきます。|Chiiki zentai o fukan suru to, kadai no kankei ga miete kimasu.|지역 전체를 조망하면 과제 사이의 관계가 보입니다.
public-hearing|公聴会|こうちょうかい|kōchōkai|공청회|公聴会で住民や専門家の意見を聞きます。|Kōchōkai de jūmin ya senmonka no iken o kikimasu.|공청회에서 주민과 전문가의 의견을 듣습니다.
negotiating|折衝|せっしょう|sesshō|이해가 다른 상대와 교섭함|用地を巡る地権者との折衝が続いています。|Yōchi o meguru chikensha to no sesshō ga tsuzuiteimasu.|용지를 둘러싼 토지 권리자와의 교섭이 이어집니다.
formal-proposal|提言|ていげん|teigen|정책이나 방안에 관해 의견을 제시함|審議会は市に改善策を提言しました。|Shingikai wa shi ni kaizensaku o teigen shimashita.|심의회는 시에 개선책을 제안했습니다.
official-reply|答弁|とうべん|tōben|의회 등에서 하는 공식 답변|担当者の答弁では、再検討の時期は示されませんでした。|Tantōsha no tōben de wa, saikentō no jiki wa shisaremasen deshita.|담당자의 답변에서는 재검토 시기가 제시되지 않았습니다.
subject-matter-expert|有識者|ゆうしきしゃ|yūshikisha|전문 지식과 식견을 가진 사람|有識者を交え、実施方法を検討しました。|Yūshikisha o majie, jisshi hōhō o kentō shimashita.|전문가들과 함께 실시 방법을 검토했습니다.
`),
  ...vocabularyRows('editorial-review', `
scrutinize|精査|せいさ|seisa|정밀하게 조사함|公開の前に引用箇所を精査します。|Kōkai no mae ni in’yō kasho o seisa shimasu.|공개 전에 인용 부분을 꼼꼼히 살핍니다.
overlook|看過|かんか|kanka|문제나 결함을 못 본 체하고 넘김|資料の取り違えは看過できません。|Shiryō no torichigae wa kanka dekimasen.|자료를 뒤바꾼 일은 그냥 넘길 수 없습니다.
scope-of-claim|射程|しゃてい|shatei|사정거리, 주장이나 이론이 미치는 범위|この研究の射程を冒頭で明示してください。|Kono kenkyū no shatei o bōtō de meiji shite kudasai.|이 연구가 다루는 범위를 서두에 명확히 밝혀 주세요.
compare-records|照合|しょうごう|shōgō|자료를 대조해 일치 여부를 확인함|数字を原資料と照合しました。|Sūji o genshiryō to shōgō shimashita.|수치를 원자료와 대조했습니다.
word-for-word|逐語|ちくご|chikugo|말 하나하나를 그대로 따름|逐語訳では自然な表現になりにくい。|Chikugoyaku de wa shizen na hyōgen ni narinikui.|직역만으로는 자연스러운 표현이 되기 어렵다.
found-here-and-there|散見|さんけん|sanken|곳곳에서 눈에 띔|原稿には根拠が示されていない箇所が散見されます。|Genkō ni wa konkyo ga shisarete inai kasho ga sanken saremasu.|원고에 근거가 제시되지 않은 부분이 곳곳에서 보입니다.
select-what-to-keep|取捨選択|しゅしゃせんたく|shusha sentaku|필요한 것을 고르고 나머지는 버림|紙幅に合わせ、具体例を取捨選択します。|Shifuku ni awase, gutairei o shusha sentaku shimasu.|지면에 맞춰 구체적인 사례를 추려요.
divergence|乖離|かいり|kairi|서로 벌어져 차이가 생김, 괴리|分析の結果と結論には乖離があります。|Bunseki no kekka to ketsuron ni wa kairi ga arimasu.|분석 결과와 결론 사이에 괴리가 있어요.
discrepancy|齟齬|そご|sogo|내용이나 이해가 서로 어긋남|本文と図表の間に齟齬がないか確認します。|Honbun to zuhyō no aida ni sogo ga nai ka kakunin shimasu.|본문과 도표 사이에 어긋나는 점이 있는지 확인합니다.
rewrite-draft|改稿|かいこう|kaikō|원고를 고쳐 다시 씀|取材を追加し、第二章を改稿しました。|Shuzai o tsuika shi, dainishō o kaikō shimashita.|취재를 보강해 2장을 고쳐 썼어요.
polish-writing|推敲|すいこう|suikō|문장과 어휘를 여러 번 다듬음|見出しと導入文を最後まで推敲しました。|Midashi to dōnyūbun o saigo made suikō shimashita.|제목과 도입문을 마지막까지 다듬었습니다.
fact-editing|校閲|こうえつ|kōetsu|원고의 사실과 표현 오류를 점검함|校閲で日付の誤りが見つかりました。|Kōetsu de hizuke no ayamari ga mitsukarimashita.|교열 과정에서 날짜 오류가 발견됐습니다.
textual-authority|典拠|てんきょ|tenkyo|인용이나 사실을 뒷받침하는 근거 자료|この記述の典拠を注に示してください。|Kono kijutsu no tenkyo o chū ni shimeshite kudasai.|이 서술의 근거 자료를 주석에 밝혀 주세요.
omit-reluctantly|割愛|かつあい|katsuai|아쉽지만 덜어 내거나 생략함|時間の都合で二つ目の事例は割愛します。|Jikan no tsugō de futatsume no jirei wa katsuai shimasu.|시간 관계상 두 번째 사례는 생략합니다.
`),
  ...vocabularyRows('visitor-policy', `
deterrence|抑止|よくし|yokushi|발생하거나 확산되는 일을 억제함|無断駐車の抑止に向け、案内を増やします。|Mudan chūsha no yokushi ni muke, annai o fuyashimasu.|무단 주차를 줄이기 위해 안내를 늘립니다.
become-permanent|恒常化|こうじょうか|kōjōka|일시적 현상이 상시화함|休日の渋滞が恒常化しています。|Kyūjitsu no jūtai ga kōjōka shiteimasu.|휴일의 교통 정체가 상시화하고 있습니다.
even-out-variation|平準化|へいじゅんか|heijunka|편차를 줄여 고르게 함|予約時間を分け、来場者数の平準化を図ります。|Yoyaku jikan o wake, raijōshasū no heijunka o hakarimasu.|예약 시간을 나눠 방문객 수의 시간대별 편차를 줄이려 합니다.
busy-and-quiet|繁閑|はんかん|hankan|바쁨과 한가함, 성수기와 비수기의 차이|季節ごとの繁閑に応じて運行本数を変えます。|Kisetsu goto no hankan ni ōjite unkō honsū o kaemasu.|계절별 수요 차이에 따라 운행 횟수를 조정합니다.
sparsity-and-density|疎密|そみつ|somitsu|성김과 빽빽함, 밀도의 차이|人の行き来の疎密を時間帯別に調べました。|Hito no ikiki no somitsu o jikantaibetsu ni shirabemashita.|사람들의 왕래가 얼마나 붐비거나 뜸한지 시간대별로 조사했습니다.
maximum|上限|じょうげん|jōgen|상한, 최대 한도|一時間当たりの入場者数に上限を設けます。|Ichijikan atari no nyūjōshasū ni jōgen o mōkemasu.|시간당 입장객 수에 상한을 둡니다.
overcrowding|過密|かみつ|kamitsu|지나치게 빽빽함, 과밀|特定の通りへの人の集中が過密状態を招いています。|Tokutei no tōri e no hito no shūchū ga kamitsu jōtai o maneiteimasu.|특정 거리에 사람이 몰려 과밀 상태가 빚어지고 있습니다.
side-effect|副作用|ふくさよう|fukusayō|부작용, 의도하지 않은 부수적 영향|規制の副作用として、近隣の道路が混むおそれがあります。|Kisei no fukusayō to shite, kinrin no dōro ga komu osore ga arimasu.|규제의 부작용으로 인근 도로가 혼잡해질 우려가 있습니다.
vulnerable|脆弱|ぜいじゃく|zeijaku|취약함, 쉽게 손상됨|この地区の交通網は災害に対して脆弱です。|Kono chiku no kōtsūmō wa saigai ni taishite zeijaku desu.|이 지역 교통망은 재해에 취약합니다.
bottleneck|目詰まり|めづまり|mezumari|통로가 막힘, 흐름이 정체됨|狭い通路で人の流れに目詰まりが生じます。|Semai tsūro de hito no nagare ni mezumari ga shōjimasu.|좁은 통로에서는 사람들의 이동 흐름이 막힙니다.
rectification|是正|ぜせい|zesei|잘못된 상태나 불균형을 바로잡음|交通手段の地域間格差を是正する方針です。|Kōtsū shudan no chiikikan kakusa o zesei suru hōshin desu.|교통수단의 지역 간 격차를 바로잡을 방침입니다.
in-stages|段階的|だんかいてき|dankaiteki|단계적으로 진행함|対策を段階的に導入し、影響を確認します。|Taisaku o dankaiteki ni dōnyū shi, eikyō o kakunin shimasu.|대책을 단계적으로 도입하고 영향을 확인합니다.
`)
];
