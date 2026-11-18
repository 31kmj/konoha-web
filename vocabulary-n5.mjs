import { vocabularyRows } from './vocabulary-rows.mjs';

export const n5Vocabulary = [
  ...vocabularyRows('grocery', `
bag|袋|ふくろ|fukuro|봉투, 봉지|袋を一枚ください。|Fukuro o ichimai kudasai.|봉투 한 장 주세요.
egg|卵|たまご|tamago|달걀|卵はどこですか。|Tamago wa doko desu ka?|달걀은 어디에 있나요?
bread|パン|ぱん|pan|빵|パンを二つ買います。|Pan o futatsu kaimasu.|빵을 두 개 살게요.
apple|りんご|りんご|ringo|사과|りんごを一つください。|Ringo o hitotsu kudasai.|사과 한 개 주세요.
vegetables|野菜|やさい|yasai|채소|毎日、野菜を食べます。|Mainichi, yasai o tabemasu.|매일 채소를 먹어요.
fruit|果物|くだもの|kudamono|과일|果物はあちらです。|Kudamono wa achira desu.|과일은 저쪽에 있어요.
meat|肉|にく|niku|고기|肉と野菜を買います。|Niku to yasai o kaimasu.|고기와 채소를 살 거예요.
fish|魚|さかな|sakana|생선, 물고기|今日は魚を食べます。|Kyō wa sakana o tabemasu.|오늘은 생선을 먹어요.
salt|塩|しお|shio|소금|塩はありますか。|Shio wa arimasu ka?|소금 있어요?
sugar|砂糖|さとう|satō|설탕|砂糖を少し入れます。|Satō o sukoshi iremasu.|설탕을 조금 넣어요.
rice|米|こめ|kome|쌀|この米をください。|Kono kome o kudasai.|이 쌀로 주세요.
milk-fresh|牛乳|ぎゅうにゅう|gyūnyū|우유|冷たい牛乳を飲みます。|Tsumetai gyūnyū o nomimasu.|차가운 우유를 마셔요.
basket|かご|かご|kago|바구니|かごは入口にあります。|Kago wa iriguchi ni arimasu.|바구니는 입구에 있어요.
cheap|安い|やすい|yasui|싸다|こちらのほうが安いです。|Kochira no hō ga yasui desu.|이쪽이 더 싸요.
new|新しい|あたらしい|atarashii|새롭다, 새것이다|新しい店ができました。|Atarashii mise ga dekimashita.|새 가게가 생겼어요.
buy|買う|かう|kau|사다|帰りにパンを買います。|Kaeri ni pan o kaimasu.|돌아오는 길에 빵을 사요.
need|要る|いる|iru|필요하다|袋は要りますか。|Fukuro wa irimasu ka?|봉투 필요하세요?
total|全部|ぜんぶ|zenbu|전부, 모두|全部でいくらですか。|Zenbu de ikura desu ka?|전부 얼마인가요?
two|二つ|ふたつ|futatsu|두 개|みかんを二つください。|Mikan o futatsu kudasai.|귤 두 개 주세요.
tangerine|みかん|みかん|mikan|귤|みかんを食べます。|Mikan o tabemasu.|귤을 먹어요.
`),
  ...vocabularyRows('post-office', `
post-office|郵便局|ゆうびんきょく|yūbinkyoku|우체국|郵便局は駅の前です。|Yūbinkyoku wa eki no mae desu.|우체국은 역 앞이에요.
postcard|はがき|はがき|hagaki|엽서|このはがきを送ります。|Kono hagaki o okurimasu.|이 엽서를 보낼게요.
stamp|切手|きって|kitte|우표|切手を一枚ください。|Kitte o ichimai kudasai.|우표 한 장 주세요.
letter|手紙|てがみ|tegami|편지|友達に手紙を書きます。|Tomodachi ni tegami o kakimasu.|친구에게 편지를 써요.
envelope|封筒|ふうとう|fūtō|봉투, 편지 봉투|封筒に手紙を入れます。|Fūtō ni tegami o iremasu.|봉투에 편지를 넣어요.
address|住所|じゅうしょ|jūsho|주소|ここに住所を書いてください。|Koko ni jūsho o kaite kudasai.|여기에 주소를 써 주세요.
name|名前|なまえ|namae|이름|名前はローマ字で書きます。|Namae wa rōmaji de kakimasu.|이름은 로마자로 써요.
country|国|くに|kuni|나라|国の名前も書きます。|Kuni no namae mo kakimasu.|나라 이름도 써요.
korea|韓国|かんこく|kankoku|한국|韓国へ送りたいです。|Kankoku e okuritai desu.|한국으로 보내고 싶어요.
send|送る|おくる|okuru|보내다|家族に写真を送ります。|Kazoku ni shashin o okurimasu.|가족에게 사진을 보내요.
write|書く|かく|kaku|쓰다|ここに名前を書きます。|Koko ni namae o kakimasu.|여기에 이름을 써요.
stamp-attach|貼る|はる|haru|붙이다|右上に切手を貼ります。|Migiue ni kitte o harimasu.|오른쪽 위에 우표를 붙여요.
mailbox|ポスト|ぽすと|posuto|우체통|駅の前にポストがあります。|Eki no mae ni posuto ga arimasu.|역 앞에 우체통이 있어요.
box|箱|はこ|hako|상자|小さい箱が欲しいです。|Chiisai hako ga hoshii desu.|작은 상자가 필요해요.
pen|ペン|ぺん|pen|펜|ペンを貸してください。|Pen o kashite kudasai.|펜을 빌려 주세요.
sheet|一枚|いちまい|ichimai|한 장|はがきを一枚ください。|Hagaki o ichimai kudasai.|엽서 한 장 주세요.
next-day|明日|あした|ashita|내일|明日、郵便局へ行きます。|Ashita, yūbinkyoku e ikimasu.|내일 우체국에 가요.
friend|友達|ともだち|tomodachi|친구|友達にプレゼントを送ります。|Tomodachi ni purezento o okurimasu.|친구에게 선물을 보내요.
arrive|届く|とどく|todoku|배달되다, 닿다|いつ届きますか。|Itsu todokimasu ka?|언제 도착하나요?
photo|写真|しゃしん|shashin|사진|写真を一枚送ります。|Shashin o ichimai okurimasu.|사진 한 장을 보내요.
`),
  ...vocabularyRows('cafe', `
menu|メニュー|めにゅー|menyū|메뉴판|メニューを見せてください。|Menyū o misete kudasai.|메뉴판을 보여 주세요.
tea-green|お茶|おちゃ|ocha|차|温かいお茶をください。|Atatakai ocha o kudasai.|따뜻한 차 주세요.
juice|ジュース|じゅーす|jūsu|주스|ジュースもあります。|Jūsu mo arimasu.|주스도 있어요.
hot-water|お湯|おゆ|oyu|따뜻한 물, 뜨거운 물|お湯を少しください。|Oyu o sukoshi kudasai.|따뜻한 물을 조금 주세요.
cake|ケーキ|けーき|kēki|케이크|ケーキを一つください。|Kēki o hitotsu kudasai.|케이크 한 개 주세요.
ice-cream|アイスクリーム|あいすくりーむ|aisukurīmu|아이스크림|アイスクリームにします。|Aisukurīmu ni shimasu.|아이스크림으로 할게요.
sandwich|サンドイッチ|さんどいっち|sandoitchi|샌드위치|サンドイッチを食べます。|Sandoitchi o tabemasu.|샌드위치를 먹어요.
spoon|スプーン|すぷーん|supūn|숟가락|スプーンをください。|Supūn o kudasai.|숟가락 주세요.
cup|カップ|かっぷ|kappu|컵|このカップは小さいです。|Kono kappu wa chiisai desu.|이 컵은 작아요.
hot|熱い|あつい|atsui|뜨겁다|このお茶は熱いです。|Kono ocha wa atsui desu.|이 차는 뜨거워요.
cold|冷たい|つめたい|tsumetai|차갑다|冷たい水をください。|Tsumetai mizu o kudasai.|찬물 주세요.
sweet|甘い|あまい|amai|달다|このケーキは甘いです。|Kono kēki wa amai desu.|이 케이크는 달아요.
bitter|苦い|にがい|nigai|쓰다|このコーヒーは少し苦いです。|Kono kōhī wa sukoshi nigai desu.|이 커피는 조금 써요.
tasty|おいしい|おいしい|oishii|맛있다|ここのパンはおいしいです。|Koko no pan wa oishii desu.|이곳의 빵은 맛있어요.
eat|食べる|たべる|taberu|먹다|ここで食べてもいいですか。|Koko de tabete mo ii desu ka?|여기서 먹어도 되나요?
drink|飲む|のむ|nomu|마시다|朝はお茶を飲みます。|Asa wa ocha o nomimasu.|아침에는 차를 마셔요.
sit|座る|すわる|suwaru|앉다|窓の近くに座ります。|Mado no chikaku ni suwarimasu.|창문 가까이에 앉아요.
table|テーブル|てーぶる|tēburu|테이블|あのテーブルは空いていますか。|Ano tēburu wa aiteimasu ka?|저 테이블은 비어 있나요?
again|もう一度|もういちど|mō ichido|다시 한 번|もう一度お願いします。|Mō ichido onegai shimasu.|다시 한 번 부탁드려요.
slowly|ゆっくり|ゆっくり|yukkuri|천천히|ゆっくり話してください。|Yukkuri hanashite kudasai.|천천히 말해 주세요.
`),
  ...vocabularyRows('directions', `
right|右|みぎ|migi|오른쪽|次の角を右に曲がります。|Tsugi no kado o migi ni magarimasu.|다음 모퉁이에서 오른쪽으로 돌아요.
left|左|ひだり|hidari|왼쪽|左に公園があります。|Hidari ni kōen ga arimasu.|왼쪽에 공원이 있어요.
front|前|まえ|mae|앞|駅の前で会いましょう。|Eki no mae de aimashō.|역 앞에서 만나요.
behind|後ろ|うしろ|ushiro|뒤|店の後ろに入口があります。|Mise no ushiro ni iriguchi ga arimasu.|가게 뒤에 입구가 있어요.
near|近く|ちかく|chikaku|근처|近くにコンビニがあります。|Chikaku ni konbini ga arimasu.|근처에 편의점이 있어요.
far|遠い|とおい|tōi|멀다|ここから駅は遠いですか。|Koko kara eki wa tōi desu ka?|여기서 역은 먼가요?
road|道|みち|michi|길, 도로|この道をまっすぐ行きます。|Kono michi o massugu ikimasu.|이 길을 쭉 가요.
exit|出口|でぐち|deguchi|출구|出口はあそこです。|Deguchi wa asoko desu.|출구는 저쪽이에요.
toilet|トイレ|といれ|toire|화장실|トイレはどこですか。|Toire wa doko desu ka?|화장실은 어디인가요?
map|地図|ちず|chizu|지도|地図を見てもいいですか。|Chizu o mite mo ii desu ka?|지도를 봐도 될까요?
school|学校|がっこう|gakkō|학교|学校の隣に公園があります。|Gakkō no tonari ni kōen ga arimasu.|학교 옆에 공원이 있어요.
bank|銀行|ぎんこう|ginkō|은행|銀行の前にバスが止まります。|Ginkō no mae ni basu ga tomarimasu.|은행 앞에 버스가 서요.
convenience|コンビニ|こんびに|konbini|편의점|コンビニは右側です。|Konbini wa migigawa desu.|편의점은 오른쪽이에요.
walk|歩く|あるく|aruku|걷다|ここから十分歩きます。|Koko kara juppun arukimasu.|여기서 10분 걸어요.
go|行く|いく|iku|가다|バスで駅へ行きます。|Basu de eki e ikimasu.|버스로 역에 가요.
cross|渡る|わたる|wataru|건너다|橋を渡ってください。|Hashi o watatte kudasai.|다리를 건너 주세요.
here|ここ|ここ|koko|여기|ここは駅の前です。|Koko wa eki no mae desu.|여기는 역 앞이에요.
there|あそこ|あそこ|asoko|저기|あそこに公園があります。|Asoko ni kōen ga arimasu.|저기에 공원이 있어요.
where|どこ|どこ|doko|어디|今、どこにいますか。|Ima, doko ni imasu ka?|지금 어디에 있나요?
between|間|あいだ|aida|사이|銀行と学校の間にあります。|Ginkō to gakkō no aida ni arimasu.|은행과 학교 사이에 있어요.
`)
];
