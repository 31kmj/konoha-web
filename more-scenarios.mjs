export const additionalScenarios = [
  {
    id: 'restaurant',
    title: '식당에서 주문하기',
    category: '식당',
    level: 'N4',
    partner: '식당 직원',
    goal: '인원이나 포장 여부를 말하고 원하는 메뉴를 주문해요.',
    start: 'seating',
    steps: {
      seating: {
        prompt: ['店内でお召し上がりですか。', 'Tennai de omeshiagari desu ka?', '매장에서 드시나요?'],
        hint: '매장에서 먹을 때는 「店内で」, 포장할 때는 「持ち帰りで」라고 답해요.',
        options: [
          { id: 'table', line: ['はい、二人です。', 'Hai, futari desu.', '네, 두 명이에요.'], aliases: ['店内で二人です', 'はい店内でお願いします'], next: 'dine-order' },
          { id: 'to-go', line: ['持ち帰りでお願いします。', 'Mochikaeri de onegai shimasu.', '포장해 주세요.'], aliases: ['テイクアウトでお願いします', '持ち帰りです'], next: 'takeout-order' },
          { id: 'premature-payment', line: ['お会計をお願いします。', 'Okaikei o onegai shimasu.', '계산 부탁해요.'], feedback: '식사를 마친 뒤 계산할 때 쓰는 표현이에요. 지금은 식사 장소를 알려 주세요.' }
        ]
      },
      'dine-order': {
        prompt: ['どうぞ、こちらへ。ご注文はお決まりですか。', 'Dōzo, kochira e. Gochūmon wa okimari desu ka?', '이쪽으로 오세요. 주문은 정하셨나요?'],
        hint: '메뉴를 고른 뒤 「を一つお願いします」를 붙여 보세요.',
        options: [
          { id: 'noodles', line: ['うどんを一つお願いします。', 'Udon o hitotsu onegai shimasu.', '우동 하나 부탁해요.'], aliases: ['うどんを一つください', 'うどんをお願いします'], next: 'sides' },
          { id: 'curry-dine', line: ['カレーを一つお願いします。', 'Karē o hitotsu onegai shimasu.', '카레 하나 부탁해요.'], aliases: ['カレーを一つください', 'カレーをお願いします'], next: 'sides' },
          { id: 'wrong-time', line: ['今、何時ですか。', 'Ima, nanji desu ka?', '지금 몇 시인가요?'], feedback: '현재 시각을 묻는 말이에요. 주문할 음식을 알려 주세요.' }
        ]
      },
      'takeout-order': {
        prompt: ['お持ち帰りですね。何になさいますか。', 'Omochikaeri desu ne. Nani ni nasaimasu ka?', '포장이시군요. 무엇으로 하시겠어요?'],
        hint: '「お弁当」는 도시락이에요. 주문할 음식의 이름을 말해 보세요.',
        options: [
          { id: 'bento', line: ['お弁当を一つください。', 'Obentō o hitotsu kudasai.', '도시락 하나 주세요.'], aliases: ['お弁当を一つお願いします', 'お弁当をください'], next: 'utensils' },
          { id: 'curry-out', line: ['カレーを一つください。', 'Karē o hitotsu kudasai.', '카레 하나 주세요.'], aliases: ['カレーをお願いします', 'カレーを一つお願いします'], next: 'utensils' },
          { id: 'wrong-hotel', line: ['荷物を預けたいです。', 'Nimotsu o azuketai desu.', '짐을 맡기고 싶어요.'], feedback: '짐 보관을 요청하는 말이에요. 포장할 음식을 골라 보세요.' }
        ]
      },
      sides: {
        prompt: ['ほかにご注文はございますか。', 'Hoka ni gochūmon wa gozaimasu ka?', '더 주문하실 것이 있으신가요?'],
        hint: '물을 부탁하거나 「以上です」로 주문을 마무리할 수 있어요.',
        options: [
          { id: 'water', line: ['お水もお願いします。', 'Omizu mo onegai shimasu.', '물도 부탁해요.'], aliases: ['お水をください', '水をお願いします'], ending: 'bring-water' },
          { id: 'all', line: ['以上です。', 'Ijō desu.', '이상이요.'], aliases: ['これで全部です', 'いいえ以上です'], ending: 'kitchen' },
          { id: 'wrong-pickup', line: ['荷物を取りに来ました。', 'Nimotsu o tori ni kimashita.', '짐을 찾으러 왔어요.'], feedback: '맡긴 짐을 찾을 때 쓰는 말이에요. 추가 주문 여부를 알려 주세요.' }
        ]
      },
      utensils: {
        prompt: ['お箸はお付けしますか。', 'Ohashi wa otsuke shimasu ka?', '젓가락도 넣어 드릴까요?'],
        hint: '받을 때는 「お願いします」, 사양할 때는 「いりません」이라고 해요.',
        options: [
          { id: 'chopsticks', line: ['はい、お箸もお願いします。', 'Hai, ohashi mo onegai shimasu.', '네, 젓가락도 부탁해요.'], aliases: ['お箸をお願いします', 'はいお願いします'], ending: 'with-utensils' },
          { id: 'no-utensils', line: ['いいえ、いりません。', 'Iie, irimasen.', '아니요, 괜찮아요.'], aliases: ['お箸はいりません', 'いいえ結構です'], ending: 'kitchen' },
          { id: 'wrong-reservation', line: ['予約しています。', 'Yoyaku shiteimasu.', '예약했어요.'], feedback: '예약을 알리는 말이에요. 젓가락이 필요한지 답해 보세요.' }
        ]
      }
    },
    endings: {
      'bring-water': ['かしこまりました。すぐにお持ちします。', 'Kashikomarimashita. Sugu ni omochi shimasu.', '알겠습니다. 바로 가져다드릴게요.'],
      kitchen: ['かしこまりました。少々お待ちください。', 'Kashikomarimashita. Shōshō omachi kudasai.', '알겠습니다. 잠시만 기다려 주세요.'],
      'with-utensils': ['はい、お箸もお入れします。', 'Hai, ohashi mo oire shimasu.', '네, 젓가락도 넣어 드릴게요.']
    }
  },
  {
    id: 'shopping',
    title: '옷 가게에서 요청하기',
    category: '쇼핑',
    level: 'N4',
    partner: '매장 직원',
    goal: '옷을 입어 보거나 다른 색상을 요청하고 구매 여부를 말해요.',
    start: 'assist',
    steps: {
      assist: {
        prompt: ['何かお探しですか。', 'Nanika osagashi desu ka?', '찾으시는 게 있으신가요?'],
        hint: '입어 볼 때는 「試着」, 색상을 바꿔 보고 싶을 때는 「色違い」를 써요.',
        options: [
          { id: 'try-on', line: ['これを試着してもいいですか。', 'Kore o shichaku shite mo ii desu ka?', '이거 입어 봐도 될까요?'], aliases: ['試着してもいいですか', '試着をお願いします'], next: 'size' },
          { id: 'colors', line: ['色違いはありますか。', 'Irochigai wa arimasu ka?', '다른 색도 있나요?'], aliases: ['ほかの色はありますか', '別の色はありますか'], next: 'color-choice' },
          { id: 'wrong-transfer', line: ['どこで乗り換えますか。', 'Doko de norikaemasu ka?', '어디서 갈아타나요?'], feedback: '환승 장소를 묻는 말이에요. 옷을 입어 보거나 색상을 물어보세요.' }
        ]
      },
      size: {
        prompt: ['もちろんです。サイズはいかがですか。', 'Mochiron desu. Saizu wa ikaga desu ka?', '물론이죠. 사이즈는 어떠세요?'],
        hint: '더 큰 것을 원하면 「もう少し大きい」, 맞으면 「ちょうどいい」를 써요.',
        options: [
          { id: 'bigger', line: ['もう少し大きいサイズはありますか。', 'Mō sukoshi ōkii saizu wa arimasu ka?', '조금 더 큰 사이즈가 있나요?'], aliases: ['もう一つ上のサイズはありますか', '大きいサイズはありますか'], next: 'bigger-offer' },
          { id: 'fits', line: ['ちょうどいいです。', 'Chōdo ii desu.', '딱 맞아요.'], aliases: ['ぴったりです', 'サイズはちょうどいいです'], next: 'pay' },
          { id: 'wrong-price', line: ['少々お待ちください。', 'Shōshō omachi kudasai.', '잠시만 기다려 주세요.'], feedback: '기다려 달라는 말이에요. 입어 본 옷의 크기가 어떤지 알려 주세요.' }
        ]
      },
      'color-choice': {
        prompt: ['黒と青がございます。どちらをご覧になりますか。', 'Kuro to ao ga gozaimasu. Dochira o goran ni narimasu ka?', '검은색과 파란색이 있어요. 어느 쪽을 보시겠어요?'],
        hint: '「黒」는 검은색, 「青」는 파란색이에요.',
        options: [
          { id: 'black', line: ['黒を見せてください。', 'Kuro o misete kudasai.', '검은색을 보여 주세요.'], aliases: ['黒をお願いします', '黒を見たいです'], next: 'pay' },
          { id: 'blue', line: ['青を見せてください。', 'Ao o misete kudasai.', '파란색을 보여 주세요.'], aliases: ['青をお願いします', '青を見たいです'], next: 'pay' },
          { id: 'wrong-checkout', line: ['チェックアウトは何時ですか。', 'Chekkuauto wa nanji desu ka?', '체크아웃은 몇 시인가요?'], feedback: '호텔에서 쓰는 표현이에요. 보고 싶은 색을 알려 주세요.' }
        ]
      },
      'bigger-offer': {
        prompt: ['こちらが一つ上のサイズです。いかがですか。', 'Kochira ga hitotsu ue no saizu desu. Ikaga desu ka?', '이게 한 치수 더 큰 옷이에요. 어떠세요?'],
        hint: '살 때는 「これにします」, 더 생각하고 싶다면 「少し考えます」라고 해요.',
        options: [
          { id: 'buy-bigger', line: ['これにします。', 'Kore ni shimasu.', '이걸로 할게요.'], aliases: ['これをください', 'これをお願いします'], ending: 'counter' },
          { id: 'think-bigger', line: ['少し考えます。', 'Sukoshi kangaemasu.', '조금 생각해 볼게요.'], aliases: ['もう少し考えます', '少し考えてもいいですか'], ending: 'browse' },
          { id: 'wrong-order', line: ['紅茶をください。', 'Kōcha o kudasai.', '홍차 주세요.'], feedback: '음료를 주문하는 표현이에요. 이 옷을 살지 더 생각할지 답해 보세요.' }
        ]
      },
      pay: {
        prompt: ['こちらでよろしいですか。', 'Kochira de yoroshii desu ka?', '이걸로 하시겠어요?'],
        hint: '「これにします」로 결정하거나 「少し考えます」로 시간을 요청해 보세요.',
        options: [
          { id: 'buy', line: ['はい、これにします。', 'Hai, kore ni shimasu.', '네, 이걸로 할게요.'], aliases: ['これにします', 'これをください'], ending: 'counter' },
          { id: 'think', line: ['少し考えます。', 'Sukoshi kangaemasu.', '조금 생각해 볼게요.'], aliases: ['もう少し考えます', '今日は見るだけです'], ending: 'browse' },
          { id: 'wrong-station', line: ['何番線ですか。', 'Nanbansen desu ka?', '몇 번 승강장인가요?'], feedback: '승강장 번호를 묻는 말이에요. 지금 본 옷을 살지 답해 보세요.' }
        ]
      }
    },
    endings: {
      counter: ['ありがとうございます。レジへどうぞ。', 'Arigatō gozaimasu. Reji e dōzo.', '감사합니다. 계산대로 와 주세요.'],
      browse: ['かしこまりました。ごゆっくりご覧ください。', 'Kashikomarimashita. Goyukkuri goran kudasai.', '알겠습니다. 천천히 둘러보세요.']
    }
  },
  {
    id: 'directions',
    title: '길에서 목적지 찾기',
    category: '길 찾기',
    level: 'N5',
    partner: '지나가는 사람',
    goal: '가고 싶은 곳을 말하고 방향이나 걸리는 시간을 확인해요.',
    start: 'destination',
    steps: {
      destination: {
        prompt: ['こんにちは。どこに行きたいですか。', 'Konnichiwa. Doko ni ikitai desu ka?', '안녕하세요. 어디에 가고 싶으세요?'],
        hint: '「すみません」으로 말을 건 뒤 장소에 「はどこですか」를 붙여 보세요.',
        options: [
          { id: 'park', line: ['すみません、公園はどこですか。', 'Sumimasen, kōen wa doko desu ka?', '실례합니다, 공원은 어디인가요?'], aliases: ['公園はどこですか', '公園に行きたいです'], next: 'turn' },
          { id: 'museum', line: ['すみません、博物館はどこですか。', 'Sumimasen, hakubutsukan wa doko desu ka?', '실례합니다, 박물관은 어디인가요?'], aliases: ['博物館はどこですか', '博物館に行きたいです'], next: 'walking' },
          { id: 'wrong-cafe', line: ['ここで飲みます。', 'Koko de nomimasu.', '여기서 마실게요.'], feedback: '음료를 마실 장소를 말하는 표현이에요. 가고 싶은 장소를 알려 주세요.' }
        ]
      },
      turn: {
        prompt: ['まっすぐ行って、次の角を曲がってください。', 'Massugu itte, tsugi no kado o magatte kudasai.', '쭉 가서 다음 모퉁이에서 도세요.'],
        hint: '「右」와 「左」로 어느 쪽인지 확인해 보세요.',
        options: [
          { id: 'right', line: ['右ですか、左ですか。', 'Migi desu ka, hidari desu ka?', '오른쪽인가요, 왼쪽인가요?'], aliases: ['どちらに曲がりますか', '右に曲がりますか'], next: 'park-landmark' },
          { id: 'wrong-change', line: ['おつりはいりません。', 'Otsuri wa irimasen.', '거스름돈은 괜찮아요.'], feedback: '계산할 때 쓰는 말이에요. 모퉁이에서 어느 쪽으로 도는지 확인해 보세요.' }
        ]
      },
      walking: {
        prompt: ['博物館は橋の向こうにあります。', 'Hakubutsukan wa hashi no mukō ni arimasu.', '박물관은 다리 건너편에 있어요.'],
        hint: '도보 시간은 「歩いて何分」으로 물어볼 수 있어요.',
        options: [
          { id: 'ask-time', line: ['歩いて何分ですか。', 'Aruite nanpun desu ka?', '걸어서 몇 분인가요?'], aliases: ['歩いてどのくらいですか', 'ここから歩いて何分ですか'], next: 'museum-landmark' },
          { id: 'wrong-reserve', line: ['予約をお願いします。', 'Yoyaku o onegai shimasu.', '예약 부탁해요.'], feedback: '예약을 요청하는 표현이에요. 목적지까지 걸리는 시간을 물어보세요.' }
        ]
      },
      'park-landmark': {
        prompt: ['右です。公園の入口は交番の隣です。', 'Migi desu. Kōen no iriguchi wa kōban no tonari desu.', '오른쪽이에요. 공원 입구는 파출소 옆이에요.'],
        hint: '이해한 내용을 「交番の隣ですね」처럼 되짚어 확인해요.',
        options: [
          { id: 'confirm-park', line: ['交番の隣ですね。ありがとうございます。', 'Kōban no tonari desu ne. Arigatō gozaimasu.', '파출소 옆이군요. 감사합니다.'], aliases: ['交番の隣ですね', 'ありがとうございます'], ending: 'park-thanks' },
          { id: 'wrong-left', line: ['左に曲がりますね。', 'Hidari ni magarimasu ne.', '왼쪽으로 돌면 되는군요.'], feedback: '상대는 오른쪽이라고 했어요. 위치를 확인하거나 감사 인사를 해 보세요.' }
        ]
      },
      'museum-landmark': {
        prompt: ['十分ぐらいです。橋を渡ると、左に見えますよ。', 'Juppun gurai desu. Hashi o wataru to, hidari ni miemasu yo.', '10분 정도예요. 다리를 건너면 왼쪽에 보여요.'],
        hint: '「橋を渡って左ですね」로 방향을 되짚어 확인할 수 있어요.',
        options: [
          { id: 'confirm-museum', line: ['橋を渡って左ですね。ありがとうございます。', 'Hashi o watatte hidari desu ne. Arigatō gozaimasu.', '다리를 건너 왼쪽이군요. 감사합니다.'], aliases: ['橋を渡って左ですね', 'ありがとうございます'], ending: 'museum-thanks' },
          { id: 'wrong-side', line: ['橋の手前ですね。', 'Hashi no temae desu ne.', '다리 건너기 전이군요.'], feedback: '「手前」는 다리 건너기 전이에요. 상대는 다리를 건너라고 안내했어요.' }
        ]
      }
    },
    endings: {
      'park-thanks': ['はい。お気をつけて。', 'Hai. Oki o tsukete.', '네. 조심해서 가세요.'],
      'museum-thanks': ['どういたしまして。', 'Dō itashimashite.', '천만에요.']
    }
  }
];
