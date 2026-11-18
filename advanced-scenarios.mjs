export const advancedScenarios = [
  {
    id: 'tour-change',
    title: '견학 일정 변경과 환불 문의하기',
    category: '일정 변경',
    level: 'N2',
    partner: '안내소 직원',
    goal: '예약 변경 조건과 환불 방법을 확인해요.',
    start: 'notice',
    steps: {
      notice: {
        prompt: ['悪天候のため、午前の見学ツアーは中止となりました。午後の回への振替か、全額返金をお選びいただけます。', 'Akutenkō no tame, gozen no kengaku tsuā wa chūshi to narimashita. Gogo no kai e no furikae ka, zengaku henkin o oerabi itadakemasu.', '악천후로 오전 견학 투어가 취소됐습니다. 오후 회차로 변경하거나 전액 환불받으실 수 있습니다.'],
        hint: '오후 참여가 가능하면 「振替」, 취소를 원하면 「返金」을 요청해 보세요.',
        options: [
          { id: 'reschedule', line: ['午後の回に振り替えていただけますか。', 'Gogo no kai ni furikaete itadakemasu ka?', '오후 회차로 바꿔 주실 수 있나요?'], aliases: ['午後の回への振替をお願いします', '午後の回に変更できますか'], next: 'places' },
          { id: 'refund', line: ['午後は都合がつかないので、返金をお願いします。', 'Gogo wa tsugō ga tsukanai node, henkin o onegai shimasu.', '오후에는 시간이 안 돼서 환불 부탁드립니다.'], aliases: ['返金をお願いします', '全額返金を希望します'], next: 'refund-method' },
          { id: 'wrong-morning', line: ['午前の回にそのまま参加します。', 'Gozen no kai ni sonomama sanka shimasu.', '오전 회차에 그대로 참가할게요.'], feedback: '오전 회차는 중지됐어요. 오후 회차로 바꿀지 환불할지 선택해 보세요.' }
        ]
      },
      places: {
        prompt: ['午後二時の回に空きがあります。ただし、受付は開始の十五分前までです。', 'Gogo niji no kai ni aki ga arimasu. Tadashi, uketsuke wa kaishi no jūgofun mae made desu.', '오후 2시 회차에 자리가 있습니다. 다만 접수는 시작 15분 전까지입니다.'],
        hint: '2시에서 15분을 빼면 1시 45분이에요. 그때까지 접수하면 되는지 확인해 보세요.',
        options: [
          { id: 'confirm-time', line: ['一時四十五分までに受付を済ませればいいんですね。', 'Ichiji yonjūgofun made ni uketsuke o sumasereba iin desu ne.', '1시 45분까지 접수를 마치면 되는군요.'], aliases: ['一時四十五分までに受付ですね', '開始の十五分前までに受付を済ませるんですね'], next: 'ticket' },
          { id: 'wrong-two', line: ['二時ちょうどに受付に来ればいいんですね。', 'Niji chōdo ni uketsuke ni kureba iin desu ne.', '2시 정각에 접수하러 오면 되겠군요.'], feedback: '2시는 시작 시각이에요. 접수 마감은 시작보다 15분 빨라요.' }
        ]
      },
      'refund-method': {
        prompt: ['承知しました。オンラインでお支払いの場合は、購入時と同じ方法で返金いたします。', 'Shōchi shimashita. Onrain de oshiharai no baai wa, kōnyūji to onaji hōhō de henkin itashimasu.', '알겠습니다. 온라인으로 결제하셨다면 구매할 때와 같은 방식으로 환불해 드립니다.'],
        hint: '카드로 결제했다면 「カードに返金される」로 확인할 수 있어요.',
        options: [
          { id: 'confirm-method', line: ['カードで払ったので、そのカードに返金されるんですね。', 'Kādo de haratta node, sono kādo ni henkin sarerun desu ne.', '카드로 결제했으니 그 카드로 환불되는군요.'], aliases: ['カードに返金されるんですね', '支払いに使ったカードに戻るんですね'], next: 'processing' },
          { id: 'wrong-cash', line: ['窓口で現金を受け取るんですね。', 'Madoguchi de genkin o uketorun desu ne.', '창구에서 현금으로 받는 거군요.'], feedback: '구매할 때 결제한 방식으로 돌아갑니다. 카드 결제를 예로 들어 확인해 보세요.' }
        ]
      },
      ticket: {
        prompt: ['はい。午前の回の予約番号はそのままお使いいただけます。', 'Hai. Gozen no kai no yoyaku bangō wa sonomama otsukai itadakemasu.', '네. 오전 회차의 예약 번호를 그대로 사용하실 수 있습니다.'],
        hint: '접수에서 기존 번호를 보여 주겠다고 답해 보세요.',
        options: [
          { id: 'accept-ticket', line: ['分かりました。受付で元の予約番号を提示します。', 'Wakarimashita. Uketsuke de moto no yoyaku bangō o teiji shimasu.', '알겠습니다. 접수처에서 기존 예약 번호를 제시하겠습니다.'], aliases: ['受付で同じ予約番号を見せます', '元の予約番号を提示します'], ending: 'confirmed' },
          { id: 'wrong-ticket', line: ['新しい予約番号が必要なんですね。', 'Atarashii yoyaku bangō ga hitsuyō nan desu ne.', '새 예약 번호가 필요한 거군요.'], feedback: '「そのまま」는 기존 예약 번호를 그대로 쓸 수 있다는 뜻이에요.' }
        ]
      },
      processing: {
        prompt: ['はい。返金が明細に反映されるまで、数日かかることがあります。', 'Hai. Henkin ga meisai ni han’ei sareru made, sūjitsu kakaru koto ga arimasu.', '네. 환불이 명세서에 반영되기까지 며칠 걸릴 수 있습니다.'],
        hint: '바로 반영되지 않을 수 있으니 추후 결제 내역을 확인하겠다고 답해 보세요.',
        options: [
          { id: 'check-statement', line: ['承知しました。後日、カードの明細を確認します。', 'Shōchi shimashita. Gojitsu, kādo no meisai o kakunin shimasu.', '알겠습니다. 나중에 카드 명세서를 확인하겠습니다.'], aliases: ['後日カードの明細を確認します', '数日後に明細を確認します'], ending: 'refund-confirmed' },
          { id: 'wrong-instant', line: ['今すぐ明細に反映されるんですね。', 'Ima sugu meisai ni han’ei sarerun desu ne.', '지금 바로 명세서에 반영되는군요.'], feedback: '「数日かかることがあります」는 며칠 걸릴 수 있다는 뜻이에요.' }
        ]
      }
    },
    endings: {
      confirmed: ['振替が完了しました。お気をつけてお越しください。', 'Furikae ga kanryō shimashita. Oki o tsukete okoshi kudasai.', '일정 변경이 완료됐습니다. 조심히 오세요.'],
      'refund-confirmed': ['返金手続きが完了しました。ご理解いただき、ありがとうございます。', 'Henkin tetsuzuki ga kanryō shimashita. Gorikai itadaki, arigatō gozaimasu.', '환불 절차를 마쳤습니다. 이해해 주셔서 감사합니다.']
    }
  },
  {
    id: 'visitor-policy',
    title: '혼잡 완화 시범 운영에 의견 전하기',
    category: '혼잡 대책',
    level: 'N1',
    partner: '지역 관광 안내소 직원',
    goal: '안내문의 적용 범위와 예외를 짚고 개선 의견을 전해요.',
    start: 'proposal',
    steps: {
      proposal: {
        prompt: ['来月から、旧市街の混雑緩和を目的に、週末の観光バスの乗降場所を変更する試行を始めます。路線バスは従来どおりです。', 'Raigetsu kara, kyūshigai no konzatsu kanwa o mokuteki ni, shūmatsu no kankō basu no jōkō basho o henkō suru shikō o hajimemasu. Rosen basu wa jūrai dōri desu.', '다음 달부터 구시가지의 혼잡을 줄이기 위해 주말 관광버스 승하차 장소를 시범적으로 변경합니다. 노선버스는 종전대로입니다.'],
        hint: '「観光バス」와 「路線バス」를 구별해 적용 범위를 확인하거나, 변경 뒤 생길 불편을 물어보세요.',
        options: [
          { id: 'confirm-target', line: ['変更の対象は週末の観光バスに限られるという理解でよろしいですか。', 'Henkō no taishō wa shūmatsu no kankō basu ni kagirareru to iu rikai de yoroshii desu ka?', '변경 대상은 주말 관광버스에 한정된다고 이해하면 될까요?'], aliases: ['対象は週末の観光バスだけですか', '路線バスの乗降場所は変わらないということですか'], next: 'exception' },
          { id: 'access-concern', line: ['乗降場所が遠くなると、長い距離を歩けない方もいらっしゃるのではないでしょうか。', 'Jōkō basho ga tōku naru to, nagai kyori o arukenai kata mo irassharu no de wa nai deshō ka?', '승하차 장소가 멀어지면 먼 거리를 걷기 어려운 분도 계시지 않을까요?'], aliases: ['長距離を歩けない方への配慮はありますか', '歩くのが難しい方への対策はありますか'], next: 'transport' },
          { id: 'wrong-route', line: ['来月からすべての路線バスがなくなるんですね。', 'Raigetsu kara subete no rosen basu ga nakunarun desu ne.', '다음 달부터 모든 노선버스가 없어지는군요.'], feedback: '노선버스는 그대로예요. 주말 관광버스의 승하차 장소만 시범적으로 바뀝니다.' }
        ]
      },
      exception: {
        prompt: ['そのとおりです。ただ、連休中に限っては、祝日も週末と同じ扱いになります。', 'Sono tōri desu. Tada, renkyūchū ni kagitte wa, shukujitsu mo shūmatsu to onaji atsukai ni narimasu.', '맞습니다. 다만 연휴 기간에 한해 공휴일도 주말과 같은 기준을 적용합니다.'],
        hint: '「連休中に限って」가 뜻하는 예외 범위를 구체적으로 확인해 보세요.',
        options: [
          { id: 'confirm-holiday', line: ['連休中の祝日も、観光バスは変更後の場所を使うということですね。', 'Renkyūchū no shukujitsu mo, kankō basu wa henkōgo no basho o tsukau to iu koto desu ne.', '연휴 중 공휴일에도 관광버스는 변경된 장소를 이용한다는 말씀이군요.'], aliases: ['連休中の祝日も観光バスの乗降場所が変わるんですね', '連休中の祝日も変更の対象なんですね'], next: 'guidance' },
          { id: 'wrong-every-weekday', line: ['平日もすべて変更の対象になるんですね。', 'Heijitsu mo subete henkō no taishō ni narun desu ne.', '평일도 모두 변경 대상이 되는군요.'], feedback: '예외는 연휴 기간의 공휴일이에요. 일반 평일까지 포함되는 것은 아니에요.' }
        ]
      },
      transport: {
        prompt: ['試行期間中は、乗降場所と旧市街を結ぶ無料の送迎車を運行する予定です。ただ、便数はまだ決まっていません。', 'Shikō kikanchū wa, jōkō basho to kyūshigai o musubu muryō no sōgeisha o unkō suru yotei desu. Tada, binsū wa mada kimatteimasen.', '시범 기간에는 승하차 장소와 구시가지를 잇는 무료 셔틀을 운행할 예정입니다. 다만 운행 횟수는 아직 정해지지 않았습니다.'],
        hint: '정해지지 않은 운행 횟수에 대한 제안을 「～ていただけると助かります」로 말해 보세요.',
        options: [
          { id: 'request-frequency', line: ['観光バスの到着時刻に合わせて、便数を調整していただけると助かります。', 'Kankō basu no tōchaku jikoku ni awasete, binsū o chōsei shite itadakeru to tasukarimasu.', '관광버스 도착 시각에 맞춰 운행 횟수를 조정해 주시면 좋겠습니다.'], aliases: ['バスの到着に合わせて送迎車を運行していただけると助かります', '到着時刻に合わせた運行を検討していただけませんか'], next: 'feedback' },
          { id: 'wrong-schedule', line: ['送迎車の時刻表はもう確定したんですね。', 'Sōgeisha no jikokuhyō wa mō kakutei shitan desu ne.', '셔틀 시간표는 이미 확정됐군요.'], feedback: '운행은 예정돼 있지만 횟수는 아직 미정이에요. 필요한 운영 방식을 제안해 보세요.' }
        ]
      },
      guidance: {
        prompt: ['はい。ただ、連休の日程によって運用が変わるため、詳細は後日案内する予定です。', 'Hai. Tada, renkyū no nittei ni yotte un’yō ga kawaru tame, shōsai wa gojitsu annai suru yotei desu.', '네. 다만 연휴 일정에 따라 운영 방식이 달라져 자세한 내용은 추후 안내할 예정입니다.'],
        hint: '겪을 수 있는 혼선을 짚고 적용되는 날짜를 명확히 써 달라고 제안해 보세요.',
        options: [
          { id: 'suggest-dates', line: ['利用者が迷わないよう、案内には対象となる日付を明記していただけませんか。', 'Riyōsha ga mayowanai yō, annai ni wa taishō to naru hizuke o meiki shite itadakemasen ka?', '이용자가 헷갈리지 않도록 안내에 적용 날짜를 명시해 주실 수 있나요?'], aliases: ['対象の日付を明記してください', '案内に具体的な日付を載せていただけませんか'], ending: 'dates' },
          { id: 'wrong-cancel', line: ['例外があるので、案内は出さなくていいと思います。', 'Reigai ga aru node, annai wa dasanakute ii to omoimasu.', '예외가 있으니 안내를 내지 않아도 된다고 생각합니다.'], feedback: '예외 때문에 적용 날짜가 헷갈릴 수 있어요. 그러한 혼선을 줄이는 방법을 제안해 보세요.' }
        ]
      },
      feedback: {
        prompt: ['ご意見ありがとうございます。ほかにも改善点があれば、試行開始後にアンケートでお知らせいただけます。', 'Goiken arigatō gozaimasu. Hoka ni mo kaizenten ga areba, shikō kaishigo ni ankēto de oshirase itadakemasu.', '의견 감사합니다. 다른 개선점이 있으면 시범 운영을 시작한 뒤 설문으로 알려 주실 수 있어요.'],
        hint: '운영 뒤 어떤 점을 확인해 의견을 낼지 구체적으로 답해 보세요.',
        options: [
          { id: 'offer-feedback', line: ['実際の待ち時間も確認したうえで、アンケートに回答します。', 'Jissai no machijikan mo kakunin shita ue de, ankēto ni kaitō shimasu.', '실제 대기 시간도 확인한 뒤 설문에 응답하겠습니다.'], aliases: ['実際に利用してからアンケートに回答します', '試行が始まったらアンケートで意見を伝えます'], ending: 'survey' },
          { id: 'wrong-before', line: ['試行が始まる前にアンケートの結果を確認します。', 'Shikō ga hajimaru mae ni ankēto no kekka o kakunin shimasu.', '시범 운영이 시작되기 전에 설문 결과를 확인하겠습니다.'], feedback: '설문은 운영 시작 뒤에 진행해요. 직접 이용한 경험을 언제 전달할지 말해 보세요.' }
        ]
      }
    },
    endings: {
      dates: ['承知しました。案内方法を検討する際に、参考にさせていただきます。', 'Shōchi shimashita. Annai hōhō o kentō suru sai ni, sankō ni sasete itadakimasu.', '알겠습니다. 안내 방법을 검토할 때 참고하겠습니다.'],
      survey: ['ありがとうございます。お寄せいただいたご意見は、今後の運用に生かします。', 'Arigatō gozaimasu. Oyose itadaita goiken wa, kongo no un’yō ni ikashimasu.', '감사합니다. 보내 주신 의견은 앞으로의 운영에 반영하겠습니다.']
    }
  }
];
