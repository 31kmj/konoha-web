import { vocabularyRows } from './vocabulary-rows.mjs';

export const n4Vocabulary = [
  ...vocabularyRows('pharmacy', `
pharmacy|薬局|やっきょく|yakkyoku|약국|近くに薬局はありますか。|Chikaku ni yakkyoku wa arimasu ka?|근처에 약국이 있나요?
pharmacist|薬剤師|やくざいし|yakuzaishi|약사|薬剤師に聞いてみます。|Yakuzaishi ni kiite mimasu.|약사에게 물어볼게요.
medicine|薬|くすり|kusuri|약|この薬について聞きたいです。|Kono kusuri ni tsuite kikitai desu.|이 약에 관해 묻고 싶어요.
headache|頭痛|ずつう|zutsū|두통|昨日から頭痛があります。|Kinō kara zutsū ga arimasu.|어제부터 두통이 있어요.
fever|熱|ねつ|netsu|열|今朝から熱があります。|Kesa kara netsu ga arimasu.|오늘 아침부터 열이 나요.
cough|せき|せき|seki|기침|夜になるとせきが出ます。|Yoru ni naru to seki ga demasu.|밤이 되면 기침이 나요.
sore-throat|のどが痛い|のどがいたい|nodo ga itai|목이 아프다|昨日からのどが痛いです。|Kinō kara nodo ga itai desu.|어제부터 목이 아파요.
runny-nose|鼻水|はなみず|hanamizu|콧물|朝から鼻水が出ます。|Asa kara hanamizu ga demasu.|아침부터 콧물이 나요.
stomach-ache|おなかが痛い|おなかがいたい|onaka ga itai|배가 아프다|食べたあとでおなかが痛くなりました。|Tabeta ato de onaka ga itaku narimashita.|먹고 나서 배가 아파졌어요.
medicine-form|錠剤|じょうざい|jōzai|알약, 정제|錠剤と粉薬があります。|Jōzai to konagusuri ga arimasu.|알약과 가루약이 있어요.
powder|粉薬|こなぐすり|konagusuri|가루약|粉薬は苦手です。|Konagusuri wa nigate desu.|가루약은 잘 못 먹어요.
after-food|食後|しょくご|shokugo|식후|袋に「食後」と書いてあります。|Fukuro ni “shokugo” to kaite arimasu.|봉투에 ‘식후’라고 적혀 있어요.
before-food|食前|しょくぜん|shokuzen|식전|これは食前ですか。|Kore wa shokuzen desu ka?|이건 식전에 먹나요?
directions|飲み方|のみかた|nomikata|복용법, 마시는 방법|薬の飲み方を確認します。|Kusuri no nomikata o kakunin shimasu.|약 복용법을 확인해요.
times|回|かい|kai|회, 번을 세는 단위|一日に何回ですか。|Ichinichi ni nankai desu ka?|하루에 몇 번인가요?
allergy|アレルギー|あれるぎー|arerugī|알레르기|薬のアレルギーがあります。|Kusuri no arerugī ga arimasu.|약물 알레르기가 있어요.
bandage|ばんそうこう|ばんそうこう|bansōkō|반창고|ばんそうこうを探しています。|Bansōkō o sagashiteimasu.|반창고를 찾고 있어요.
mask|マスク|ますく|masuku|마스크|子ども用のマスクはありますか。|Kodomo-yō no masuku wa arimasu ka?|어린이용 마스크가 있나요?
thermometer|体温計|たいおんけい|taionkei|체온계|体温計はどこにありますか。|Taionkei wa doko ni arimasu ka?|체온계는 어디에 있나요?
receipt-descriptor|説明書|せつめいしょ|setsumeisho|설명서|説明書も入っています。|Setsumeisho mo haitteimasu.|설명서도 들어 있어요.
`),
  ...vocabularyRows('luggage-storage', `
locker|コインロッカー|こいんろっかー|koin rokkā|물품 보관함|駅でコインロッカーを探します。|Eki de koin rokkā o sagashimasu.|역에서 물품 보관함을 찾아요.
storage|手荷物預かり所|てにもつあずかりじょ|tenimotsu azukarijo|수하물 보관소|手荷物預かり所は二階です。|Tenimotsu azukarijo wa nikai desu.|수하물 보관소는 2층이에요.
fee|利用料金|りようりょうきん|riyō ryōkin|이용 요금|利用料金はいくらですか。|Riyō ryōkin wa ikura desu ka?|이용 요금은 얼마인가요?
suitcase|スーツケース|すーつけーす|sūtsukēsu|여행 가방, 캐리어|このスーツケースは入りますか。|Kono sūtsukēsu wa hairimasu ka?|이 여행 가방이 들어가나요?
fit|入る|はいる|hairu|들어가다, 들어맞다|小さいかばんなら入ります。|Chiisai kaban nara hairimasu.|작은 가방이라면 들어가요.
put-in|入れる|いれる|ireru|넣다|かばんをロッカーに入れます。|Kaban o rokkā ni iremasu.|가방을 보관함에 넣어요.
retrieve|取り出す|とりだす|toridasu|꺼내다|あとで荷物を取り出します。|Ato de nimotsu o toridashimasu.|나중에 짐을 꺼낼게요.
available|空いている|あいている|aiteiru|비어 있다|一番下のロッカーが空いています。|Ichiban shita no rokkā ga aiteimasu.|맨 아래 보관함이 비어 있어요.
occupied|使用中|しようちゅう|shiyōchū|사용 중|このロッカーは使用中です。|Kono rokkā wa shiyōchū desu.|이 보관함은 사용 중이에요.
pin|暗証番号|あんしょうばんごう|anshō bangō|비밀번호, PIN|暗証番号を入力します。|Anshō bangō o nyūryoku shimasu.|비밀번호를 입력해요.
ticket-control|控え|ひかえ|hikae|보관용 표, 사본|荷物を受け取るとき、控えを見せます。|Nimotsu o uketoru toki, hikae o misemasu.|짐을 찾을 때 보관증을 보여 줘요.
coin|小銭|こぜに|kozeni|잔돈, 동전|小銭を持っていますか。|Kozeni o motteimasu ka?|동전을 가지고 있어요?
change-machine|両替機|りょうがえき|ryōgaeki|동전 교환기, 환전기|近くに両替機があります。|Chikaku ni ryōgaeki ga arimasu.|근처에 동전 교환기가 있어요.
open-until|営業時間|えいぎょうじかん|eigyō jikan|영업시간|営業時間を確認します。|Eigyō jikan o kakunin shimasu.|영업시간을 확인해요.
close-time|閉店|へいてん|heiten|폐점, 문 닫음|閉店までに戻ります。|Heiten made ni modorimasu.|문 닫기 전까지 돌아올게요.
return|戻る|もどる|modoru|돌아오다, 돌아가다|夕方までに駅に戻ります。|Yūgata made ni eki ni modorimasu.|저녁 무렵까지 역으로 돌아올게요.
collect|受け取る|うけとる|uketoru|받다, 수령하다|窓口で荷物を受け取ります。|Madoguchi de nimotsu o uketorimasu.|창구에서 짐을 받아요.
make-sure|確認する|かくにんする|kakunin suru|확인하다|ロッカーの番号を確認してください。|Rokkā no bangō o kakunin shite kudasai.|보관함 번호를 확인해 주세요.
operate|使い方|つかいかた|tsukaikata|사용법|この機械の使い方を教えてください。|Kono kikai no tsukaikata o oshiete kudasai.|이 기계 사용법을 알려 주세요.
today-only|当日|とうじつ|tōjitsu|당일|荷物は当日中にお受け取りください。|Nimotsu wa tōjitsuchū ni ouketori kudasai.|짐은 당일 안에 찾아 주세요.
`),
  ...vocabularyRows('restaurant', `
set-meal|定食|ていしょく|teishoku|정식, 세트 식사|焼き魚の定食にします。|Yakizakana no teishoku ni shimasu.|생선구이 정식으로 할게요.
extra-large|大盛り|おおもり|ōmori|곱빼기, 많은 양|ご飯を大盛りにできますか。|Gohan o ōmori ni dekimasu ka?|밥을 곱빼기로 해 주실 수 있나요?
ingredient|材料|ざいりょう|zairyō|재료|この料理の材料を教えてください。|Kono ryōri no zairyō o oshiete kudasai.|이 요리의 재료를 알려 주세요.
go-in|入っている|はいっている|haitteiru|들어 있다|このスープには卵が入っています。|Kono sūpu ni wa tamago ga haitteimasu.|이 수프에는 달걀이 들어 있어요.
remove|抜く|ぬく|nuku|빼다|サンドイッチからチーズを抜けますか。|Sandoitchi kara chīzu o nukemasu ka?|샌드위치에서 치즈를 뺄 수 있나요?
refill|おかわり|おかわり|okawari|한 그릇 더, 리필|ご飯のおかわりはできますか。|Gohan no okawari wa dekimasu ka?|밥을 더 받을 수 있나요?
serve|出す|だす|dasu|내다, 내놓다|お茶は食事のあとに出します。|Ocha wa shokuji no ato ni dashimasu.|차는 식사 뒤에 내요.
wait-in-line|並ぶ|ならぶ|narabu|줄을 서다|店の前に並んで待ちます。|Mise no mae ni narande machimasu.|가게 앞에 줄을 서서 기다려요.
full-house|満席|まんせき|manseki|만석|ただいま満席です。|Tadaima manseki desu.|현재 자리가 모두 찼습니다.
pay|支払う|しはらう|shiharau|지불하다, 결제하다|レジで代金を支払います。|Reji de daikin o shiharaimasu.|계산대에서 값을 지불해요.
`),
  ...vocabularyRows('shopping', `
look-for|探す|さがす|sagasu|찾다|黒い靴を探しています。|Kuroi kutsu o sagashiteimasu.|검은 신발을 찾고 있어요.
compare|比べる|くらべる|kuraberu|비교하다|二つのサイズを比べます。|Futatsu no saizu o kurabemasu.|두 가지 사이즈를 비교해요.
choose|選ぶ|えらぶ|erabu|고르다|先に色を選んでください。|Saki ni iro o erande kudasai.|먼저 색을 골라 주세요.
in-stock|在庫|ざいこ|zaiko|재고|この色の在庫はありますか。|Kono iro no zaiko wa arimasu ka?|이 색의 재고가 있나요?
exchange|交換|こうかん|kōkan|교환|別のサイズに交換できますか。|Betsu no saizu ni kōkan dekimasu ka?|다른 사이즈로 교환할 수 있나요?
return-product|返品|へんぴん|henpin|반품|返品にはレシートが必要です。|Henpin ni wa reshīto ga hitsuyō desu.|반품하려면 영수증이 필요해요.
discount|割引|わりびき|waribiki|할인|この商品は二割引です。|Kono shōhin wa niwari biki desu.|이 상품은 20퍼센트 할인해요.
fitting-room|試着室|しちゃくしつ|shichakushitsu|탈의실, 피팅룸|試着室はあちらです。|Shichakushitsu wa achira desu.|탈의실은 저쪽입니다.
tag|値札|ねふだ|nefuda|가격표|値札にサイズも書いてあります。|Nefuda ni saizu mo kaite arimasu.|가격표에 사이즈도 적혀 있어요.
gift-wrap|包む|つつむ|tsutsumu|싸다, 포장하다|プレゼント用に包んでください。|Purezento-yō ni tsutsunde kudasai.|선물용으로 포장해 주세요.
`)
];
