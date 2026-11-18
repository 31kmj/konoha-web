import { finish, line, mismatch, reply, turn } from './dialogue-data.mjs';

export const intermediateScenarios = [
  {
    id: 'train-disruption',
    title: '운행 중단 때 이동 방법 찾기',
    category: '운행 중단',
    level: 'N3',
    partner: '역무원',
    goal: '전철이 멈춘 상황에서 다른 노선과 소요 시간을 확인해요.',
    start: 'announcement',
    steps: {
      announcement: {
        prompt: ['ただいま、この路線は運転を見合わせています。', 'Tadaima, kono rosen wa unten o miawasete imasu.', '현재 이 노선은 운행을 일시 중단하고 있습니다.'],
        hint: '급하면 「別の行き方」를, 기다릴 수 있다면 「運転再開」 시각을 물어보세요.',
        options: [
          { id: 'alternative', line: ['急いでいるので、別の行き方を教えていただけますか。', 'Isoide iru node, betsu no ikikata o oshiete itadakemasu ka?', '급해서 그런데, 다른 가는 방법을 알려 주실 수 있나요?'], aliases: ['別の行き方はありますか', 'ほかの路線で行けますか'], next: 'other-line' },
          { id: 'wait', line: ['運転再開の見込みはありますか。', 'Unten saikai no mikomi wa arimasu ka?', '운행 재개 전망이 있나요?'], aliases: ['いつ運転が再開しますか', '運転はいつ再開しますか'], next: 'no-estimate' },
          { id: 'no-delay', line: ['遅れはないんですね。', 'Okure wa nain desu ne.', '지연은 없는 거군요.'], feedback: '「見合わせる」는 상황을 지켜보며 일시적으로 중단한다는 뜻이에요. 대체 경로나 재개 시점을 확인해 보세요.' }
        ]
      },
      'other-line': {
        prompt: ['地下鉄に乗れば、二十分ほどで着きます。', 'Chikatetsu ni noreba, nijuppun hodo de tsukimasu.', '지하철을 타면 20분 정도면 도착합니다.'],
        hint: '지하철 입구를 찾으려면 「入口はどちら」를 사용해 보세요.',
        options: [
          { id: 'entrance', line: ['地下鉄の入口はどちらですか。', 'Chikatetsu no iriguchi wa dochira desu ka?', '지하철 입구는 어느 쪽인가요?'], aliases: ['地下鉄の入口はどこですか', '地下鉄にはどこから入れますか'], next: 'street' },
          { id: 'wrong-minute', line: ['二時間もかかるんですね。', 'Nijikan mo kakarun desu ne.', '두 시간이나 걸리는군요.'], feedback: '「二十分ほど」는 약 20분이에요. 지하철을 타려면 입구부터 확인해 보세요.' }
        ]
      },
      'no-estimate': {
        prompt: ['申し訳ありません。今のところ、再開のめどは立っていません。', 'Mōshiwake arimasen. Ima no tokoro, saikai no medo wa tatte imasen.', '죄송합니다. 현재로서는 재개 시점을 가늠할 수 없습니다.'],
        hint: '재개 시간이 정해지지 않았으니 대체 수단을 물어볼 수 있어요.',
        options: [
          { id: 'bus', line: ['それなら、駅前からバスで行けますか。', 'Sore nara, ekimae kara basu de ikemasu ka?', '그렇다면 역 앞에서 버스로 갈 수 있나요?'], aliases: ['駅前からバスで行けますか', 'バスで行く方法はありますか'], next: 'bus-stop' },
          { id: 'wrong-resume', line: ['すぐに再開するんですね。', 'Sugu ni saikai surun desu ne.', '곧 재개하는 거군요.'], feedback: '「めどは立っていません」은 시점이 아직 불확실하다는 뜻이에요. 다른 이동 수단을 물어보세요.' }
        ]
      },
      street: {
        prompt: ['東口を出て、道路を渡ったところにあります。', 'Higashiguchi o dete, dōro o watatta tokoro ni arimasu.', '동쪽 출구를 나와 도로를 건너면 있어요.'],
        hint: '「東口を出て」 뒤에 무엇을 해야 하는지 다시 말해 보세요.',
        options: [
          { id: 'confirm-east', line: ['東口を出て、道路を渡ればいいんですね。', 'Higashiguchi o dete, dōro o watareba iin desu ne.', '동쪽 출구로 나가 도로를 건너면 되는군요.'], aliases: ['東口を出て道路を渡るんですね', '東口から出て道を渡ればいいんですね'], ending: 'subway-confirmed' },
          { id: 'wrong-exit', line: ['西口から出ればいいんですね。', 'Nishiguchi kara dereba iin desu ne.', '서쪽 출구로 나가면 되는군요.'], feedback: '「東口」는 동쪽 출구예요. 출구를 나온 뒤 도로를 건너요.' }
        ]
      },
      'bus-stop': {
        prompt: ['はい。駅前の三番乗り場から出ます。道路が混んでいなければ、三十分ほどです。', 'Hai. Ekimae no sanban noriba kara demasu. Dōro ga konde inakereba, sanjuppun hodo desu.', '네. 역 앞 3번 정류장에서 출발합니다. 도로가 막히지 않으면 30분 정도예요.'],
        hint: '「三番乗り場」와 「三十分」을 구별해서 확인해 보세요.',
        options: [
          { id: 'confirm-bus', line: ['三番乗り場からで、順調なら三十分ほどですね。', 'Sanban noriba kara de, junchō nara sanjuppun hodo desu ne.', '3번 정류장에서 타고, 순조로우면 30분 정도군요.'], aliases: ['三番乗り場ですね', '混んでいなければ三十分ほどですね'], ending: 'bus-confirmed' },
          { id: 'wrong-fixed', line: ['必ず三十分で着くんですね。', 'Kanarazu sanjuppun de tsukun desu ne.', '반드시 30분 안에 도착하는군요.'], feedback: '도로가 막히지 않을 때 약 30분이라는 조건이 있었어요. 정류장이나 예상 시간을 다시 확인해 보세요.' }
        ]
      }
    },
    endings: {
      'subway-confirmed': ['はい、そのとおりです。', 'Hai, sono tōri desu.', '네, 맞습니다.'],
      'bus-confirmed': ['はい。発車時刻は乗り場の案内をご確認ください。', 'Hai. Hassha jikoku wa noriba no annai o gokakunin kudasai.', '네. 출발 시각은 정류장 안내를 확인해 주세요.']
    }
  },
  {
    id: 'hotel-problem',
    title: '객실 문제를 설명하고 해결하기',
    category: '객실 문제',
    level: 'N3',
    partner: '호텔 직원',
    goal: '문제를 설명하고 수리나 객실 변경 조건을 확인해요.',
    start: 'problem',
    steps: {
      problem: {
        prompt: ['フロントでございます。いかがなさいましたか。', 'Furonto de gozaimasu. Ikaga nasaimashita ka?', '프런트입니다. 무슨 일이 있으셨나요?'],
        hint: '고장이면 「動かない」, 소음이면 「うるさくて眠れない」를 사용해 보세요.',
        options: [
          { id: 'ac', line: ['部屋のエアコンが動かないようです。', 'Heya no eakon ga ugokanai yō desu.', '객실 에어컨이 작동하지 않는 것 같아요.'], aliases: ['エアコンが動かないんですが', 'エアコンが故障しているようです'], next: 'maintenance' },
          { id: 'noise', line: ['廊下がうるさくて眠れないんですが。', 'Rōka ga urusakute nemurenai n desu ga.', '복도가 시끄러워서 잠을 잘 수가 없는데요.'], aliases: ['廊下の音がうるさくて眠れません', '廊下がうるさいんですが'], next: 'room-options' },
          { id: 'wrong-breakfast', line: ['朝食はおいしかったです。', 'Chōshoku wa oishikatta desu.', '아침 식사는 맛있었어요.'], feedback: '식사에 대한 감상이에요. 도움이 필요한 객실 문제를 구체적으로 알려 주세요.' }
        ]
      },
      maintenance: {
        prompt: ['係の者を向かわせます。今、お部屋にいらっしゃいますか。', 'Kakari no mono o mukawasemasu. Ima, oheya ni irasshaimasu ka?', '담당 직원을 보내겠습니다. 지금 객실에 계신가요?'],
        hint: '지금 객실에 있다고 답하거나, 잠시 외출 중이라면 방문 시각을 조정해 보세요.',
        options: [
          { id: 'in-room', line: ['はい、部屋にいます。どのくらいで来られますか。', 'Hai, heya ni imasu. Dono kurai de koraremasu ka?', '네, 방에 있어요. 얼마쯤 걸려 오실 수 있나요?'], aliases: ['はい部屋にいます', 'いつ頃来られますか'], next: 'wait-room' },
          { id: 'out-room', line: ['今は外出中です。八時以降にお願いできますか。', 'Ima wa gaishutsuchū desu. Hachiji ikō ni onegai dekimasu ka?', '지금은 외출 중이에요. 8시 이후에 부탁드려도 될까요?'], aliases: ['八時以降にお願いできますか', '外出中なので八時以降に来てください'], next: 'later' },
          { id: 'wrong-rail', line: ['改札の前にいます。', 'Kaisatsu no mae ni imasu.', '개찰구 앞에 있어요.'], feedback: '호텔 직원에게는 지금 객실에 있는지와 방문 가능한 시각이 필요해요.' }
        ]
      },
      'room-options': {
        prompt: ['申し訳ありません。静かなお部屋をご用意できますが、階が変わります。', 'Mōshiwake arimasen. Shizuka na oheya o goyōi dekimasu ga, kai ga kawarimasu.', '죄송합니다. 조용한 객실을 마련해 드릴 수 있지만, 층이 달라집니다.'],
        hint: '방을 옮기려면 추가 요금이나 짐을 옮기는 방법을 확인해 보세요.',
        options: [
          { id: 'cost', line: ['部屋を変えると、追加料金はかかりますか。', 'Heya o kaeru to, tsuika ryōkin wa kakarimasu ka?', '방을 바꾸면 추가 요금이 드나요?'], aliases: ['追加料金はかかりますか', '部屋の変更に料金はかかりますか'], next: 'no-charge' },
          { id: 'bag-help', line: ['荷物を運ぶのを手伝っていただけますか。', 'Nimotsu o hakobu no o tetsudatte itadakemasu ka?', '짐 옮기는 것을 도와주실 수 있나요?'], aliases: ['荷物を運んでいただけますか', '荷物を運ぶのを手伝ってもらえますか'], next: 'porter' },
          { id: 'wrong-floor', line: ['同じ階なんですね。', 'Onaji kai nan desu ne.', '같은 층이군요.'], feedback: '「階が変わります」는 층이 달라진다는 말이에요. 변경 조건을 더 물어보세요.' }
        ]
      },
      'wait-room': {
        prompt: ['十分ほどで伺います。', 'Juppun hodo de ukagaimasu.', '10분 정도 후에 방문하겠습니다.'],
        hint: '「部屋で待っています」로 방문을 기다리겠다고 답해 보세요.',
        options: [
          { id: 'accept-wait', line: ['分かりました。部屋で待っています。', 'Wakarimashita. Heya de matte imasu.', '알겠습니다. 방에서 기다릴게요.'], aliases: ['部屋で待っています', '部屋でお待ちしています'], ending: 'visit' },
          { id: 'wrong-ten-hours', line: ['十時間もかかるんですか。', 'Jūjikan mo kakarun desu ka?', '10시간이나 걸리나요?'], feedback: '「十分」은 여기서 10분을 뜻해요. 방에서 기다리겠다고 답해 보세요.' }
        ]
      },
      later: {
        prompt: ['承知しました。八時半ごろではいかがでしょうか。', 'Shōchi shimashita. Hachiji han goro de wa ikaga deshō ka?', '알겠습니다. 8시 반쯤은 어떠세요?'],
        hint: '시간이 괜찮으면 「八時半で大丈夫です」라고 답해요.',
        options: [
          { id: 'accept-later', line: ['八時半で大丈夫です。お願いします。', 'Hachiji han de daijōbu desu. Onegai shimasu.', '8시 반이면 괜찮아요. 부탁드려요.'], aliases: ['八時半で大丈夫です', '八時半でお願いします'], ending: 'visit' },
          { id: 'wrong-two', line: ['二時半ですね。', 'Niji han desu ne.', '2시 반이군요.'], feedback: '직원은 「八時半」, 8시 반을 제안했어요. 그 시각으로 방문을 요청해 보세요.' }
        ]
      },
      'no-charge': {
        prompt: ['今回は追加料金はいただきません。', 'Konkai wa tsuika ryōkin wa itadakimasen.', '이번에는 추가 요금을 받지 않겠습니다.'],
        hint: '비용 조건을 확인했다면 「部屋の変更をお願いします」로 요청해 보세요.',
        options: [
          { id: 'accept-room', line: ['それでは、部屋の変更をお願いします。', 'Sore de wa, heya no henkō o onegai shimasu.', '그러면 방을 바꿔 주세요.'], aliases: ['部屋の変更をお願いします', '部屋を変えてください'], ending: 'new-room' },
          { id: 'wrong-charge', line: ['追加料金を払えばいいんですね。', 'Tsuika ryōkin o haraeba iin desu ne.', '추가 요금을 내면 되는군요.'], feedback: '「いただきません」은 요금을 받지 않겠다는 뜻이에요. 방 변경을 요청해 보세요.' }
        ]
      },
      porter: {
        prompt: ['もちろんです。係の者がお荷物をお運びします。', 'Mochiron desu. Kakari no mono ga onimotsu o ohakobi shimasu.', '물론입니다. 담당 직원이 짐을 옮겨 드리겠습니다.'],
        hint: '도움을 받기로 했다면 「助かります」로 고마움을 표현해 보세요.',
        options: [
          { id: 'thank-porter', line: ['助かります。よろしくお願いします。', 'Tasukarimasu. Yoroshiku onegai shimasu.', '덕분에 도움이 되겠어요. 잘 부탁드려요.'], aliases: ['助かりますありがとうございます', 'ありがとうございますお願いします'], ending: 'new-room' },
          { id: 'wrong-bag', line: ['荷物を預けたいです。', 'Nimotsu o azuketai desu.', '짐을 맡기고 싶어요.'], feedback: '직원은 짐을 새 객실로 옮겨 준다고 했어요. 도움을 받겠다고 답해 보세요.' }
        ]
      }
    },
    endings: {
      visit: ['かしこまりました。お部屋に伺います。', 'Kashikomarimashita. Oheya ni ukagaimasu.', '알겠습니다. 객실로 방문하겠습니다.'],
      'new-room': ['承知しました。新しいお部屋をご案内いたします。', 'Shōchi shimashita. Atarashii oheya o goannai itashimasu.', '알겠습니다. 새 객실로 안내하겠습니다.']
    }
  },
  {
    id: 'lost-property', level: 'N3', category: '분실물 문의', title: '역에서 두고 온 물건 찾기', partner: '역 안내 직원',
    goal: '물건을 두고 온 시간과 장소를 말하고, 직원이 구별할 수 있도록 특징을 설명해요.',
    start: 'item',
    steps: {
      item: turn('お忘れ物ですか。どのような物をお探しですか。|Owasuremono desu ka? Dono yō na mono o osagashi desu ka?|물건을 두고 오셨나요? 어떤 물건을 찾으시나요?', '물건을 두고 온 장소에 「に」를 붙이고 물건 뒤에 「を忘れました」를 붙여 보세요.',
        reply('phone', '電車の中にスマートフォンを置き忘れました。|Densha no naka ni sumātofon o okiwasuremashita.|전철 안에 휴대폰을 두고 왔어요.', 'train', '電車の中にスマホを忘れました', '電車にスマートフォンを忘れました', '電車にスマホを置き忘れました'),
        reply('umbrella', '待合室に傘を忘れました。|Machiaishitsu ni kasa o wasuremashita.|대합실에 우산을 두고 왔어요.', 'waiting-room', '待合室に傘を置き忘れました', '待合室に傘を置いたまま出てしまいました'),
        mismatch('pickup', '何時までに取りに来ればいいですか。|Nanji made ni tori ni kureba ii desu ka?|몇 시까지 찾으러 오면 되나요?', '아직 분실물이 확인되지 않았어요. 어떤 물건을 찾는지 먼저 설명해 보세요.')),
      train: turn('いつごろ、どの車両に乗っていましたか。|Itsu goro, dono sharyō ni notteimashita ka?|언제쯤 어느 차량에 타고 계셨나요?', '「午後三時ごろ」로 시간과 「先頭の車両」로 맨 앞 칸을 알려 주세요.',
        reply('front', '午後三時ごろ、先頭の車両に乗っていました。|Gogo sanji goro, sentō no sharyō ni notteimashita.|오후 3시쯤 맨 앞 칸에 탔어요.', 'phone-detail', '午後三時ごろ一番前の車両に乗っていました', '午後三時ごろ先頭車両に乗っていました'),
        mismatch('arrival', '午後三時までに着く予定です。|Gogo sanji made ni tsuku yotei desu.|오후 3시까지 도착할 예정이에요.', '앞으로 도착할 시간과 이미 탔던 시간을 구별해요. 이전에 탔던 시각과 차량을 알려 주세요.')),
      'waiting-room': turn('待合室のどの辺りに傘を置きましたか。|Machiaishitsu no dono atari ni kasa o okimashita ka?|대합실 어디쯤에 우산을 두셨나요?', '「入口のそば」는 입구 가까이, 「傘立て」는 우산꽂이예요.',
        reply('stand', '入口のそばの傘立てに入れました。|Iriguchi no soba no kasatate ni iremashita.|입구 옆 우산꽂이에 넣었어요.', 'umbrella-detail', '入口の近くの傘立てです', '入口の傘立てに置きました'),
        mismatch('exit', '出口はどちらですか。|Deguchi wa dochira desu ka?|출구는 어디인가요?', '출구를 묻기보다 우산을 마지막으로 둔 장소를 설명해 보세요.')),
      'phone-detail': turn('スマートフォンに何か特徴はありますか。|Sumātofon ni nanika tokuchō wa arimasu ka?|휴대폰에 눈에 띄는 특징이 있나요?', '색과 부속품을 함께 말해 보세요. 파란 케이스라면 「青いケース」예요.',
        finish('blue-case', '青いケースが付いています。|Aoi kēsu ga tsuite imasu.|파란 케이스가 끼워져 있어요.', 'phone-search', '青いケースを付けています', 'ケースは青です'),
        mismatch('battery', '電池が切れたかもしれません。|Denchi ga kireta kamoshiremasen.|배터리가 다 됐을지도 몰라요.', '직원이 물건을 구별할 수 있도록 겉으로 보이는 특징을 먼저 말해 보세요.')),
      'umbrella-detail': turn('同じような傘が多いのですが、目印はありますか。|Onaji yō na kasa ga ōi no desu ga, mejirushi wa arimasu ka?|비슷한 우산이 많은데 알아볼 만한 표시가 있나요?', '「持ち手」에 붙인 표시처럼 서로 구분할 수 있는 특징을 말해 보세요.',
        finish('sticker', '持ち手に白いシールが貼ってあります。|Mochite ni shiroi shīru ga hatte arimasu.|손잡이에 흰 스티커가 붙어 있어요.', 'match', '持ち手に白いシールが付いています', '白いシールを持ち手に貼っています'),
        mismatch('purchase', '先週買ったばかりです。|Senshū katta bakari desu.|지난주에 막 샀어요.', '구매 시점은 직원이 우산을 눈으로 구별하는 데 도움이 되기 어려워요. 손잡이처럼 보이는 특징을 알려 주세요.'))
    },
    endings: {
      'phone-search': line('車内の忘れ物を確認します。該当する物が見つかり次第、ご連絡します。|Shanai no wasuremono o kakunin shimasu. Gaitō suru mono ga mitsukari shidai, gorenraku shimasu.|차내 분실물을 확인하겠습니다. 해당 물건을 찾는 대로 연락드릴게요.'),
      match: line('白いシールが付いた傘をお預かりしています。こちらでご確認ください。|Shiroi shīru ga tsuita kasa o oazukari shite imasu. Kochira de gokakunin kudasai.|흰 스티커가 붙은 우산을 보관하고 있어요. 여기서 확인해 주세요.')
    }
  },
  {
    id: 'redelivery', level: 'N3', category: '택배 재배송', title: '택배를 받을 시간과 장소 정하기', partner: '택배 상담 직원',
    goal: '집으로 다시 받거나 영업소에서 찾는 방법을 고르고, 가능한 방문이나 배송 시간을 확인해요.',
    start: 'method',
    steps: {
      method: turn('ご自宅への再配達と、営業所でのお受け取りのどちらになさいますか。|Gojitaku e no saihaitatsu to, eigyōsho de no ouketori no dochira ni nasaimasu ka?|집으로 재배송받는 방법과 영업소에서 찾는 방법 중 어느 쪽으로 하시겠어요?', '다시 보내 달라면 「再配達」, 직접 찾으려면 「営業所で受け取る」를 써요.',
        reply('home', '自宅への再配達をお願いします。|Jitaku e no saihaitatsu o onegai shimasu.|집으로 다시 배송해 주세요.', 'delivery-time', '再配達をお願いします', '自宅に再配達していただけますか'),
        reply('office', '営業所で受け取りたいです。|Eigyōsho de uketoritai desu.|영업소에서 받고 싶어요.', 'reference', '営業所での受け取りをお願いします', '営業所に取りに行きます'),
        mismatch('send-parcel', 'この荷物を送りたいです。|Kono nimotsu o okuritai desu.|이 짐을 보내고 싶어요.', '이번 상황에서는 이미 온 택배를 받는 방법을 정하고 있어요.')),
      'delivery-time': turn('明日の午前中か午後六時以降でしたら、お届けできます。|Ashita no gozenchū ka gogo rokuji ikō deshitara, otodoke dekimasu.|내일 오전이나 오후 6시 이후라면 배송할 수 있습니다.', '안내받은 두 시간 중 실제로 집에 있을 수 있는 시간을 골라요.',
        reply('evening', '明日の午後六時以降でお願いします。|Ashita no gogo rokuji ikō de onegai shimasu.|내일 오후 6시 이후로 부탁해요.', 'change', '明日の夕方以降にお願いします', '明日の午後六時以降に届けてください'),
        reply('morning', '明日の午前中にお願いします。|Ashita no gozenchū ni onegai shimasu.|내일 오전에 부탁해요.', 'change', '明日の午前中でお願いします', '明日の午前中に届けてください'),
        mismatch('three', '明日の午後三時にお願いします。|Ashita no gogo sanji ni onegai shimasu.|내일 오후 3시로 부탁해요.', '가능한 때는 오전이나 오후 6시 이후예요. 그중 하나를 골라 보세요.')),
      reference: turn('送り状番号はお分かりですか。|Okurijō bangō wa owakari desu ka?|운송장 번호를 알고 계시나요?', '「不在票」에 번호가 있는지 확인했다면 「不在票に書いてあります」라고 답할 수 있어요.',
        reply('slip', 'はい、不在票に書いてあります。|Hai, fuzaihyō ni kaite arimasu.|네, 부재중 안내서에 적혀 있어요.', 'pickup-time', '不在票に書いてあります', '不在票で確認できます', '不在票に記載されています'),
        mismatch('different', '荷物の重さは分かりません。|Nimotsu no omosa wa wakarimasen.|택배 무게는 몰라요.', '상담 직원이 확인하려는 것은 무게가 아니라 운송장 번호예요.')),
      change: turn('承知しました。指定の時間帯にお届けします。ほかに確認したいことはありますか。|Shōchi shimashita. Shitei no jikantai ni otodoke shimasu. Hoka ni kakunin shitai koto wa arimasu ka?|알겠습니다. 지정한 시간대에 배송할게요. 그 밖에 확인할 게 있나요?', '일정이 바뀔 경우를 대비해 「時間帯は変更できますか」라고 물어보세요.',
        finish('reschedule', '都合が悪くなった場合、時間帯は変更できますか。|Tsugō ga waruku natta baai, jikantai wa henkō dekimasu ka?|사정이 생기면 시간대를 바꿀 수 있나요?', 'confirmed', '配達の時間帯は変更できますか', '時間帯を変更できますか'),
        mismatch('morning-only', '午前中にしか配達できないんですね。|Gozenchū ni shika haitatsu dekinai n desu ne.|오전에만 배송할 수 있다는 말이군요.', '안내받은 시간은 오전과 오후 6시 이후였어요. 이미 고른 시간의 변경 가능 여부를 확인해 보세요.')),
      'pickup-time': turn('お荷物は明日までお取り置きできます。何時ごろお越しになりますか。|Onimotsu wa ashita made otorioki dekimasu. Nanji goro okoshi ni narimasu ka?|짐은 내일까지 보관할 수 있어요. 몇 시쯤 방문하시나요?', '기한 안에 갈 수 있는 때를 말해요. 「伺います」는 여기서 ‘찾아가겠습니다’라는 말이에요.',
        finish('tomorrow-afternoon', '明日の午後三時ごろに伺います。|Ashita no gogo sanji goro ni ukagaimasu.|내일 오후 3시쯤 방문하겠습니다.', 'pickup-confirmed', '明日の午後三時ごろに行きます', '明日三時ごろに取りに行きます'),
        mismatch('too-late', '来週の月曜日に取りに行きます。|Raishū no getsuyōbi ni tori ni ikimasu.|다음 주 월요일에 찾으러 갈게요.', '보관 기한은 내일까지예요. 안내받은 기간에 맞춰 시간대를 말해 보세요.'))
    },
    endings: {
      confirmed: line('変更が必要になりましたら、配達前にご連絡ください。|Henkō ga hitsuyō ni narimashitara, haitatsumae ni gorenraku kudasai.|변경이 필요해지면 배달 전에 연락해 주세요.'),
      'pickup-confirmed': line('承知しました。念のため、不在票もお持ちください。|Shōchi shimashita. Nen no tame, fuzaihyō mo omochi kudasai.|알겠습니다. 혹시 모르니 부재중 안내서도 가져와 주세요.')
    }
  }
];
