import { finish, line, mismatch, reply, turn } from './dialogue-data.mjs';

export const essentialScenarios = [
  {
    id: 'grocery', level: 'N5', category: '장보기', title: '마트에서 계산하기', partner: '계산대 직원',
    goal: '봉투가 필요한지 말하고 결제 방법을 고른 뒤 영수증을 받아요.',
    start: 'bag',
    steps: {
      bag: turn('袋は要りますか。|Fukuro wa irimasu ka?|봉투 필요하세요?', '필요하면 「袋をください」, 없어도 되면 「袋は要りません」이라고 해요.',
        reply('yes', '袋をください。|Fukuro o kudasai.|봉투 주세요.', 'quantity', '袋をお願いします', '袋が要ります'),
        reply('no', '袋は要りません。|Fukuro wa irimasen.|봉투는 필요 없어요.', 'own-bag', '袋はいりません', '袋は大丈夫です'),
        mismatch('price', '全部でいくらですか。|Zenbu de ikura desu ka?|전부 얼마인가요?', '총액을 묻는 말이에요. 먼저 봉투가 필요한지 답해 보세요.')),
      quantity: turn('袋は何枚ですか。|Fukuro wa nanmai desu ka?|봉투는 몇 장 드릴까요?', '봉투처럼 얇은 물건은 「枚」로 세어요.',
        reply('one', '一枚お願いします。|Ichimai onegai shimasu.|한 장 부탁해요.', 'pay', '一枚ください', '一枚でお願いします'),
        reply('two', '二枚ください。|Nimai kudasai.|두 장 주세요.', 'pay', '二枚お願いします'),
        mismatch('one-cup', '一杯ください。|Ippai kudasai.|한 잔 주세요.', '「杯」는 잔을 세는 단위예요. 여기서는 봉투를 세어 보세요.')),
      'own-bag': turn('商品はそのままでよろしいですか。|Shōhin wa sono mama de yoroshii desu ka?|물건은 그대로 드려도 될까요?', '「そのままで大丈夫です」는 그대로 괜찮다는 말이에요.',
        reply('as-is', 'はい、そのままで大丈夫です。|Hai, sono mama de daijōbu desu.|네, 그대로 괜찮아요.', 'pay', 'そのままで大丈夫です', 'そのままでお願いします'),
        mismatch('add', '卵を二つください。|Tamago o futatsu kudasai.|달걀 두 개 주세요.', '직원이 포장 여부를 확인하고 있어요. 물건을 그대로 받아도 되는지 답해 보세요.')),
      pay: turn('お支払いは現金ですか、カードですか。|Oshiharai wa genkin desu ka, kādo desu ka?|현금으로 결제하시나요, 카드로 하시나요?', '「現金で」나 「カードで」 뒤에 「お願いします」를 붙여요.',
        finish('cash', '現金でお願いします。|Genkin de onegai shimasu.|현금으로 부탁해요.', 'cash', '現金で払います', '現金で'),
        finish('card', 'カードでお願いします。|Kādo de onegai shimasu.|카드로 부탁해요.', 'card', 'カードで払います', 'カードで'),
        mismatch('store', '店内でお願いします。|Tennai de onegai shimasu.|매장에서 부탁해요.', '먹는 장소를 골랐을 때 쓰는 말이에요. 이번에는 결제 방법을 고르세요.'))
    },
    endings: {
      cash: line('現金をお預かりします。こちらがレシートです。|Genkin o oazukari shimasu. Kochira ga reshīto desu.|현금 받겠습니다. 여기 영수증입니다.'),
      card: line('カードをこちらにお願いします。お支払いが終わったらレシートをお渡しします。|Kādo o kochira ni onegai shimasu. Oshiharai ga owattara reshīto o owatashi shimasu.|카드를 여기 대 주세요. 결제가 끝나면 영수증을 드릴게요.')
    }
  },
  {
    id: 'post-office', level: 'N5', category: '우체국', title: '우체국에서 우편 보내기', partner: '우체국 직원',
    goal: '엽서나 편지를 보낼 곳을 말하고 주소와 우표를 확인해요.',
    start: 'item',
    steps: {
      item: turn('こんにちは。今日はどうされましたか。|Konnichiwa. Kyō wa dō saremashita ka?|안녕하세요. 오늘은 무슨 일로 오셨나요?', '보낼 물건 이름에 「を送りたいです」를 붙여요.',
        reply('card', 'このはがきを送りたいです。|Kono hagaki o okuritai desu.|이 엽서를 보내고 싶어요.', 'card-place', 'はがきを送りたいです', 'このはがきを送ります'),
        reply('letter', 'この手紙を送りたいです。|Kono tegami o okuritai desu.|이 편지를 보내고 싶어요.', 'letter-place', '手紙を送りたいです', 'この手紙を送ります'),
        mismatch('picture', '写真を撮ってください。|Shashin o totte kudasai.|사진을 찍어 주세요.', '우체국 창구예요. 어떤 우편을 보내려는지 말씀해 보세요.')),
      'card-place': turn('はがきはどちらへ送りますか。|Hagaki wa dochira e okurimasu ka?|엽서는 어디로 보내시나요?', '장소에 「へ送ります」를 붙여 보내는 곳을 말해요.',
        reply('korea', '韓国へ送ります。|Kankoku e okurimasu.|한국으로 보낼 거예요.', 'stamp', '韓国に送ります', '韓国です'),
        mismatch('last-week', '先週です。|Senshū desu.|지난주예요.', '시간을 묻는 질문이 아니에요. 엽서가 갈 장소를 답해 보세요.')),
      'letter-place': turn('手紙はどちらへ送りますか。|Tegami wa dochira e okurimasu ka?|편지는 어디로 보내시나요?', '예를 들어 일본 안이라면 도시 이름을 넣어 답해요.',
        reply('osaka', '大阪の友達に送ります。|Ōsaka no tomodachi ni okurimasu.|오사카에 있는 친구에게 보낼 거예요.', 'address', '大阪へ送ります', '大阪に送ります'),
        mismatch('write', 'ペンで書きます。|Pen de kakimasu.|펜으로 쓸게요.', '무엇으로 쓰는지가 아니라 편지가 갈 곳을 물었어요.')),
      stamp: turn('切手はお持ちですか。|Kitte wa omochi desu ka?|우표는 갖고 계시나요?', '우표가 없다면 「切手を一枚ください」라고 요청할 수 있어요.',
        finish('buy', 'いいえ、切手を一枚ください。|Iie, kitte o ichimai kudasai.|아니요, 우표 한 장 주세요.', 'stamp', '切手を一枚ください', '切手を一枚お願いします'),
        mismatch('letter', '封筒を二枚ください。|Fūtō o nimai kudasai.|편지 봉투 두 장 주세요.', '직원은 엽서에 사용할 우표가 있는지 확인하고 있어요.')),
      address: turn('封筒に住所は書きましたか。|Fūtō ni jūsho wa kakimashita ka?|봉투에 주소는 쓰셨나요?', '「書きました」는 이미 썼다는 뜻이에요.',
        finish('written', 'はい、ここに書きました。|Hai, koko ni kakimashita.|네, 여기에 썼어요.', 'address', 'ここに書きました', 'はい、書きました', '書きました'),
        mismatch('stamp', '昨日、切手を買いました。|Kinō, kitte o kaimashita.|어제 우표를 샀어요.', '주소를 적었는지 묻고 있어요. 「住所」와 「切手」를 구별해요.'))
    },
    endings: {
      stamp: line('はい。切手は右上に貼ってください。|Hai. Kitte wa migiue ni hatte kudasai.|네. 우표는 오른쪽 위에 붙여 주세요.'),
      address: line('住所を確認しました。こちらでお預かりします。|Jūsho o kakunin shimashita. Kochira de oazukari shimasu.|주소를 확인했습니다. 여기서 접수할게요.')
    }
  },
  {
    id: 'pharmacy', level: 'N4', category: '약국', title: '약사에게 증상 설명하기', partner: '약사',
    goal: '어디가 불편한지와 증상이 시작된 때를 말하고 궁금한 점을 약사에게 물어요.',
    start: 'symptom',
    steps: {
      symptom: turn('今日はどうされましたか。|Kyō wa dō saremashita ka?|오늘은 어떤 일로 오셨나요?', '「頭が痛い」는 머리가 아프다는 말이고, 「せきが出ます」는 기침이 난다는 말이에요.',
        reply('head', '頭が痛いです。|Atama ga itai desu.|머리가 아파요.', 'since', '頭が痛いんです', '頭痛があります'),
        reply('cough', 'せきが出ます。|Seki ga demasu.|기침이 나요.', 'when', 'せきが出るんです', '咳が出ます'),
        mismatch('buy', 'お茶をください。|Ocha o kudasai.|차 주세요.', '약사는 어떤 증상이 있는지 묻고 있어요.')),
      since: turn('頭痛はいつからですか。|Zutsū wa itsu kara desu ka?|두통은 언제부터 있었나요?', '「今朝から」는 오늘 아침부터예요.',
        reply('morning', '今朝からです。|Kesa kara desu.|오늘 아침부터예요.', 'allergy', '今朝から頭が痛いです', '朝からです'),
        mismatch('place', '駅の近くです。|Eki no chikaku desu.|역 근처예요.', '장소가 아니라 증상이 시작된 때를 말해 보세요.')),
      when: turn('どんなときにせきが出ますか。|Donna toki ni seki ga demasu ka?|어떤 때에 기침이 나나요?', '「夜になると」는 밤이 되면이라는 뜻이에요.',
        reply('night', '夜になるとせきが出ます。|Yoru ni naru to seki ga demasu.|밤이 되면 기침이 나요.', 'question', '夜によくせきが出ます', '夜に咳が出ます'),
        mismatch('fee', 'いくらかかりますか。|Ikura kakarimasu ka?|얼마인가요?', '지금은 비용보다 어떤 때에 기침이 나는지 확인하는 중이에요.')),
      allergy: turn('薬のアレルギーはありますか。|Kusuri no arerugī wa arimasu ka?|약물 알레르기가 있으세요?', '모른다면 「よく分かりません」이라고 솔직히 설명할 수 있어요.',
        finish('unsure', 'よく分かりません。|Yoku wakarimasen.|잘 모르겠어요.', 'check', '分かりません', 'わかりません'),
        mismatch('seasonal', '春によく旅行します。|Haru ni yoku ryokō shimasu.|봄에 자주 여행해요.', '여행하는 계절이 아니라 약물 알레르기에 관해 물었어요.')),
      question: turn('ほかに聞いておきたいことはありますか。|Hoka ni kiite okitai koto wa arimasu ka?|그 밖에 물어 두고 싶은 것이 있나요?', '복용 방법이 궁금하면 「飲み方」를 사용해요.',
        finish('directions', '薬の飲み方を教えてください。|Kusuri no nomikata o oshiete kudasai.|약 복용법을 알려 주세요.', 'directions', '飲み方を教えてください', 'どうやって飲めばいいですか'),
        mismatch('drink-tea', 'お茶を飲みました。|Ocha o nomimashita.|차를 마셨어요.', '이미 한 일을 말했어요. 약사에게 물어보고 싶은 점을 질문해 보세요.'))
    },
    endings: {
      check: line('分かりました。先にこれまで飲んだお薬について確認しましょう。|Wakarimashita. Saki ni kore made nonda okusuri ni tsuite kakunin shimashō.|알겠습니다. 먼저 지금까지 복용한 약에 관해 확인하죠.'),
      directions: line('はい。お渡しするお薬が決まったら、説明書を一緒に確認しましょう。|Hai. Owatashi suru okusuri ga kimattara, setsumeisho o issho ni kakunin shimashō.|네. 드릴 약이 정해지면 설명서를 함께 확인하죠.')
    }
  },
  {
    id: 'luggage-storage', level: 'N4', category: '짐 보관', title: '기차역에서 짐 맡기기', partner: '역 안내 직원',
    goal: '가방 크기에 맞는 보관 방법을 고르고 요금이나 찾는 시간을 확인해요.',
    start: 'storage',
    steps: {
      storage: turn('何をお探しですか。|Nani o osagashi desu ka?|무엇을 찾으시나요?', '보관함이 필요하면 「コインロッカー」, 맡길 곳이 필요하면 「手荷物預かり所」를 물어보세요.',
        reply('locker', 'コインロッカーはどこですか。|Koin rokkā wa doko desu ka?|물품 보관함은 어디인가요?', 'locker', 'ロッカーはどこですか', 'コインロッカーを探しています'),
        reply('counter', '手荷物預かり所はありますか。|Tenimotsu azukarijo wa arimasu ka?|수하물 보관소가 있나요?', 'counter', '荷物を預ける場所はありますか', '手荷物預かり所はどこですか'),
        mismatch('platform', '電車は何番線ですか。|Densha wa nanbansen desu ka?|전철은 몇 번 승강장인가요?', '열차를 타기 전에 가방을 맡길 곳을 물어보세요.')),
      locker: turn('お荷物の大きさはどのくらいですか。|Onimotsu no ōkisa wa dono kurai desu ka?|짐 크기가 어느 정도인가요?', '「小さいかばんです」처럼 크기와 종류를 말할 수 있어요.',
        reply('small', '小さいかばんです。|Chiisai kaban desu.|작은 가방이에요.', 'fee', '小さなかばんです', '小さいバッグです'),
        mismatch('number', 'ロッカーは何番ですか。|Rokkā wa nanban desu ka?|보관함 번호는 몇 번인가요?', '보관함을 고르기 전에 짐 크기를 확인하고 있어요.')),
      counter: turn('はい、二階にあります。何を預けますか。|Hai, nikai ni arimasu. Nani o azukemasu ka?|네, 2층에 있어요. 무엇을 맡기시나요?', '큰 여행 가방은 「大きいスーツケース」라고 해요.',
        reply('suitcase', '大きいスーツケースを一つお願いします。|Ōkii sūtsukēsu o hitotsu onegai shimasu.|큰 여행 가방 한 개 부탁해요.', 'hours', '大きいスーツケースです', 'スーツケースを一つ預けたいです'),
        mismatch('send', '韓国へ送りたいです。|Kankoku e okuritai desu.|한국으로 보내고 싶어요.', '이곳은 우체국이 아니에요. 어떤 짐을 보관할지 말해 보세요.')),
      fee: turn('小さいロッカーは改札の横にあります。|Chiisai rokkā wa kaisatsu no yoko ni arimasu.|작은 보관함은 개찰구 옆에 있어요.', '이용 요금은 「利用料金はいくらですか」로 물어요.',
        finish('how-much', '利用料金はいくらですか。|Riyō ryōkin wa ikura desu ka?|이용 요금은 얼마인가요?', 'fee', '料金はいくらですか', 'いくらですか'),
        mismatch('tomorrow', '昨日、駅に来ました。|Kinō, eki ni kimashita.|어제 역에 왔어요.', '그 보관함을 이용하려면 얼마인지 확인해 보세요.')),
      hours: turn('預ける前に、営業時間をご確認ください。|Azukeru mae ni, eigyō jikan o gokakunin kudasai.|맡기기 전에 영업시간을 확인해 주세요.', '「何時までに取りに来ればいいですか」로 몇 시까지 찾아야 하는지 물어요.',
        finish('when', '何時までに取りに来ればいいですか。|Nanji made ni tori ni kureba ii desu ka?|몇 시까지 찾으러 오면 되나요?', 'hours', '何時までに取りに来ればいいでしょうか', '何時までに受け取ればいいですか'),
        mismatch('size', 'この服は大きすぎます。|Kono fuku wa ōkisugimasu.|이 옷은 너무 커요.', '가방을 놓고 갈 때 오늘 몇 시까지 다시 와야 하는지 확인해 보세요.'))
    },
    endings: {
      fee: line('小さいロッカーは一回四百円です。|Chiisai rokkā wa ikkai yonhyaku en desu.|작은 보관함은 한 번에 400엔이에요.'),
      hours: line('午後八時までに、控えを持ってお越しください。|Gogo hachiji made ni, hikae o motte okoshi kudasai.|저녁 8시까지 보관증을 가지고 와 주세요.')
    }
  }
];
