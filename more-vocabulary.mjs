const entries = {
  cafe: [
    ['order', '注文', 'ちゅうもん', 'chūmon', '주문', '注文は決まりました。', 'Chūmon wa kimarimashita.', '주문할 것을 정했어요.'],
    ['hot', 'ホット', 'ほっと', 'hotto', '따뜻한 음료', 'ホットでお願いします。', 'Hotto de onegai shimasu.', '따뜻한 걸로 부탁해요.'],
    ['iced', 'アイス', 'あいす', 'aisu', '차가운 음료', 'アイスにします。', 'Aisu ni shimasu.', '차가운 걸로 할게요.'],
    ['seat', '席', 'せき', 'seki', '자리, 좌석', '席は空いていますか。', 'Seki wa aiteimasu ka?', '빈자리가 있나요?'],
    ['one-cup', '一杯', 'いっぱい', 'ippai', '한 잔', '紅茶を一杯ください。', 'Kōcha o ippai kudasai.', '홍차 한 잔 주세요.']
  ],
  train: [
    ['ticket', '切符', 'きっぷ', 'kippu', '표, 승차권', '切符はどこで買えますか。', 'Kippu wa doko de kaemasu ka?', '표는 어디에서 살 수 있나요?'],
    ['ticket-gate', '改札', 'かいさつ', 'kaisatsu', '개찰구', '改札の前で待ちます。', 'Kaisatsu no mae de machimasu.', '개찰구 앞에서 기다릴게요.'],
    ['one-way', '片道', 'かたみち', 'katamichi', '편도', '片道でお願いします。', 'Katamichi de onegai shimasu.', '편도로 부탁해요.'],
    ['last-train', '終電', 'しゅうでん', 'shūden', '막차', '終電は何時ですか。', 'Shūden wa nanji desu ka?', '막차는 몇 시인가요?'],
    ['get-off', '降りる', 'おりる', 'oriru', '내리다', '次の駅で降ります。', 'Tsugi no eki de orimasu.', '다음 역에서 내려요.']
  ],
  hotel: [
    ['reception', 'フロント', 'ふろんと', 'furonto', '호텔 프런트', 'フロントは一階にあります。', 'Furonto wa ikkai ni arimasu.', '프런트는 1층에 있어요.'],
    ['guest-room', '客室', 'きゃくしつ', 'kyakushitsu', '객실', '客室に戻ります。', 'Kyakushitsu ni modorimasu.', '객실로 돌아갈게요.'],
    ['check-in', 'チェックイン', 'ちぇっくいん', 'chekkuin', '체크인, 입실 수속', 'チェックインをお願いします。', 'Chekkuin o onegai shimasu.', '체크인 부탁해요.'],
    ['breakfast', '朝食', 'ちょうしょく', 'chōshoku', '아침 식사', '朝食は何時からですか。', 'Chōshoku wa nanji kara desu ka?', '아침 식사는 몇 시부터인가요?'],
    ['pick-up', '取りに来る', 'とりにくる', 'tori ni kuru', '찾으러 오다', '夕方、荷物を取りに来ます。', 'Yūgata, nimotsu o tori ni kimasu.', '저녁 무렵에 짐을 찾으러 올게요.']
  ],
  restaurant: [
    ['two-people', '二人', 'ふたり', 'futari', '두 사람', '二人ですが、席はありますか。', 'Futari desu ga, seki wa arimasu ka?', '두 명인데 자리가 있나요?'],
    ['udon', 'うどん', 'うどん', 'udon', '우동', 'うどんを一つお願いします。', 'Udon o hitotsu onegai shimasu.', '우동 하나 부탁해요.'],
    ['curry', 'カレー', 'かれー', 'karē', '카레', 'カレーにします。', 'Karē ni shimasu.', '카레로 할게요.'],
    ['bento', '弁当', 'べんとう', 'bentō', '도시락', 'お弁当を一つください。', 'Obentō o hitotsu kudasai.', '도시락 하나 주세요.'],
    ['water', 'お水', 'おみず', 'omizu', '물', 'お水もお願いします。', 'Omizu mo onegai shimasu.', '물도 부탁해요.'],
    ['chopsticks', '箸', 'はし', 'hashi', '젓가락', 'お箸をお願いします。', 'Ohashi o onegai shimasu.', '젓가락 부탁해요.'],
    ['check', '会計', 'かいけい', 'kaikei', '계산, 결제', 'お会計をお願いします。', 'Okaikei o onegai shimasu.', '계산 부탁해요.'],
    ['recommendation', 'おすすめ', 'おすすめ', 'osusume', '추천 메뉴, 추천', 'おすすめは何ですか。', 'Osusume wa nan desu ka?', '추천 메뉴는 뭔가요?'],
    ['additional', '追加', 'ついか', 'tsuika', '추가', '追加で注文してもいいですか。', 'Tsuika de chūmon shite mo ii desu ka?', '추가로 주문해도 될까요?'],
    ['bill-separately', '別々', 'べつべつ', 'betsubetsu', '따로따로', '別々に払えますか。', 'Betsubetsu ni haraemasu ka?', '따로 계산할 수 있나요?']
  ],
  shopping: [
    ['try-on', '試着', 'しちゃく', 'shichaku', '옷을 입어 봄', '試着してもいいですか。', 'Shichaku shite mo ii desu ka?', '입어 봐도 될까요?'],
    ['size', 'サイズ', 'さいず', 'saizu', '크기, 사이즈', 'このサイズで大丈夫です。', 'Kono saizu de daijōbu desu.', '이 크기면 괜찮아요.'],
    ['color-option', '色違い', 'いろちがい', 'irochigai', '같은 제품의 다른 색', '色違いを見せてください。', 'Irochigai o misete kudasai.', '다른 색 제품을 보여 주세요.'],
    ['just-right', 'ちょうどいい', 'ちょうどいい', 'chōdo ii', '딱 맞다, 알맞다', '長さはちょうどいいです。', 'Nagasa wa chōdo ii desu.', '길이는 딱 맞아요.'],
    ['bigger', '大きい', 'おおきい', 'ōkii', '크다', 'もう少し大きいものはありますか。', 'Mō sukoshi ōkii mono wa arimasu ka?', '조금 더 큰 것이 있나요?'],
    ['checkout-counter', 'レジ', 'れじ', 'reji', '계산대', 'レジはあちらです。', 'Reji wa achira desu.', '계산대는 저쪽이에요.'],
    ['price', '値段', 'ねだん', 'nedan', '가격', '値段を教えてください。', 'Nedan o oshiete kudasai.', '가격을 알려 주세요.'],
    ['receipt', 'レシート', 'れしーと', 'reshīto', '영수증', 'レシートをください。', 'Reshīto o kudasai.', '영수증 주세요.'],
    ['cash', '現金', 'げんきん', 'genkin', '현금', '現金で払います。', 'Genkin de haraimasu.', '현금으로 낼게요.'],
    ['show', '見せる', 'みせる', 'miseru', '보여 주다', '青いものを見せてください。', 'Aoi mono o misete kudasai.', '파란 것을 보여 주세요.']
  ],
  directions: [
    ['park', '公園', 'こうえん', 'kōen', '공원', 'この近くに公園はありますか。', 'Kono chikaku ni kōen wa arimasu ka?', '이 근처에 공원이 있나요?'],
    ['museum', '博物館', 'はくぶつかん', 'hakubutsukan', '박물관', '博物館まで歩いて行きます。', 'Hakubutsukan made aruite ikimasu.', '박물관까지 걸어가요.'],
    ['straight', 'まっすぐ', 'まっすぐ', 'massugu', '곧장, 똑바로', 'この道をまっすぐ行ってください。', 'Kono michi o massugu itte kudasai.', '이 길을 곧장 가세요.'],
    ['corner', '角', 'かど', 'kado', '모퉁이', '次の角を左に曲がります。', 'Tsugi no kado o hidari ni magarimasu.', '다음 모퉁이에서 왼쪽으로 돌아요.'],
    ['turn', '曲がる', 'まがる', 'magaru', '방향을 돌다', '信号のところで右に曲がります。', 'Shingō no tokoro de migi ni magarimasu.', '신호등 있는 곳에서 오른쪽으로 돌아요.'],
    ['bridge', '橋', 'はし', 'hashi', '다리', '橋を渡ってください。', 'Hashi o watatte kudasai.', '다리를 건너세요.'],
    ['police-box', '交番', 'こうばん', 'kōban', '파출소', '交番の隣にあります。', 'Kōban no tonari ni arimasu.', '파출소 옆에 있어요.'],
    ['entrance', '入口', 'いりぐち', 'iriguchi', '입구', '入口はどちらですか。', 'Iriguchi wa dochira desu ka?', '입구는 어디인가요?'],
    ['next-to', '隣', 'となり', 'tonari', '바로 옆', '駅の隣にあります。', 'Eki no tonari ni arimasu.', '역 바로 옆에 있어요.'],
    ['across', '向こう', 'むこう', 'mukō', '저편, 건너편', '橋の向こうに見えます。', 'Hashi no mukō ni miemasu.', '다리 건너편에 보여요.']
  ],
  'train-disruption': [
    ['suspension', '見合わせる', 'みあわせる', 'miawaseru', '보류하다, 일시 중단하다', '悪天候のため、運転を見合わせています。', 'Akutenkō no tame, unten o miawaseteimasu.', '악천후로 운행을 일시 중단하고 있어요.'],
    ['resume-service', '運転再開', 'うんてんさいかい', 'unten saikai', '운행 재개', '運転再開までお待ちください。', 'Unten saikai made omachi kudasai.', '운행을 재개할 때까지 기다려 주세요.'],
    ['outlook', '見込み', 'みこみ', 'mikomi', '전망, 가능성', 'もうすぐ到着する見込みです。', 'Mō sugu tōchaku suru mikomi desu.', '곧 도착할 전망이에요.'],
    ['time-estimate', 'めど', 'めど', 'medo', '가늠할 수 있는 목표나 전망', '再開のめどが立ちました。', 'Saikai no medo ga tachimashita.', '재개 시점의 윤곽이 잡혔어요.'],
    ['subway', '地下鉄', 'ちかてつ', 'chikatetsu', '지하철', '地下鉄に乗り換えます。', 'Chikatetsu ni norikaemasu.', '지하철로 갈아타요.'],
    ['boarding-point', '乗り場', 'のりば', 'noriba', '타는 곳', 'バス乗り場はどちらですか。', 'Basu noriba wa dochira desu ka?', '버스 타는 곳은 어디인가요?'],
    ['departure-time', '発車時刻', 'はっしゃじこく', 'hassha jikoku', '출발 시각', '発車時刻を確認しました。', 'Hassha jikoku o kakunin shimashita.', '출발 시각을 확인했어요.'],
    ['east-exit', '東口', 'ひがしぐち', 'higashiguchi', '동쪽 출구', '東口を出てください。', 'Higashiguchi o dete kudasai.', '동쪽 출구로 나가 주세요.'],
    ['road-congestion', '混む', 'こむ', 'komu', '붐비다, 막히다', '夕方は道路が混みます。', 'Yūgata wa dōro ga komimasu.', '저녁에는 도로가 막혀요.'],
    ['smoothly', '順調', 'じゅんちょう', 'junchō', '순조로움', '今のところ順調です。', 'Ima no tokoro junchō desu.', '현재로서는 순조로워요.']
  ],
  'hotel-problem': [
    ['breakdown', '故障', 'こしょう', 'koshō', '고장', 'エアコンが故障しました。', 'Eakon ga koshō shimashita.', '에어컨이 고장 났어요.'],
    ['air-conditioning', 'エアコン', 'えあこん', 'eakon', '에어컨', 'エアコンが動きません。', 'Eakon ga ugokimasen.', '에어컨이 작동하지 않아요.'],
    ['corridor', '廊下', 'ろうか', 'rōka', '복도', '廊下から声が聞こえます。', 'Rōka kara koe ga kikoemasu.', '복도에서 목소리가 들려요.'],
    ['unable-to-sleep', '眠れない', 'ねむれない', 'nemurenai', '잠들 수 없다', '音が気になって眠れません。', 'Oto ga ki ni natte nemuremasen.', '소리가 신경 쓰여 잠들 수 없어요.'],
    ['person-in-charge', '係の者', 'かかりのもの', 'kakari no mono', '담당 직원', '係の者が伺います。', 'Kakari no mono ga ukagaimasu.', '담당 직원이 방문하겠습니다.'],
    ['away', '外出中', 'がいしゅつちゅう', 'gaishutsuchū', '외출 중', '午後は外出中です。', 'Gogo wa gaishutsuchū desu.', '오후에는 외출 중이에요.'],
    ['after', '以降', 'いこう', 'ikō', '그 시점을 포함한 이후', '六時以降に戻ります。', 'Rokuji ikō ni modorimasu.', '6시 이후에 돌아올게요.'],
    ['additional-fee', '追加料金', 'ついかりょうきん', 'tsuika ryōkin', '추가 요금', '追加料金はかかりません。', 'Tsuika ryōkin wa kakarimasen.', '추가 요금은 들지 않아요.'],
    ['change', '変更', 'へんこう', 'henkō', '변경', '予約の変更をお願いします。', 'Yoyaku no henkō o onegai shimasu.', '예약 변경을 부탁해요.'],
    ['carry', '運ぶ', 'はこぶ', 'hakobu', '옮기다, 나르다', '荷物を部屋まで運びます。', 'Nimotsu o heya made hakobimasu.', '짐을 방까지 옮겨요.']
  ]
};

export const additionalVocabulary = Object.entries(entries).flatMap(([scene, words]) =>
  words.map(([id, ja, reading, romaji, ko, exampleJa, exampleRomaji, exampleKo]) => ({
    id: `travel-${id}`, scene, ja, reading, romaji, ko, example: [exampleJa, exampleRomaji, exampleKo]
  }))
);
