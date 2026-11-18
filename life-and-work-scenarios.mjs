import { finish, line, mismatch, reply, turn } from './dialogue-data.mjs';

export const lifeAndWorkScenarios = [
  {
    id: 'clinic', level: 'N3', category: '진료 접수', title: '의원에서 진료 접수하기', partner: '접수 직원',
    goal: '초진인지 재진인지 말한 뒤 접수에 필요한 정보나 언어 지원을 확인해요.',
    start: 'visit',
    steps: {
      visit: turn('当院を受診されるのは初めてですか。|Tōin o jushin sareru no wa hajimete desu ka?|이 의원에서 진료를 받는 것은 처음인가요?', '처음이면 「初めてです」, 전에 왔다면 「以前にも来たことがあります」라고 답해요.',
        reply('first', 'はい、こちらは初めてです。|Hai, kochira wa hajimete desu.|네, 여기는 처음이에요.', 'intake', '初めてです', '初診です'),
        reply('return', 'いいえ、以前にも来たことがあります。|Iie, izen ni mo kita koto ga arimasu.|아니요, 이전에도 온 적이 있어요.', 'patient-card', '以前にも来たことがあります', '再診です'),
        mismatch('book', 'まだ予約していません。|Mada yoyaku shiteimasen.|아직 예약하지 않았어요.', '이번 예약 여부가 아니라 이 의원에서 처음 진료받는지를 묻고 있어요.')),
      intake: turn('では、こちらの問診票に症状をご記入ください。|Dewa, kochira no monshinhyō ni shōjō o gokinyū kudasai.|그러면 이 문진표에 증상을 기입해 주세요.', '일본어 작성이 어렵다면 「韓国語の問診票はありますか」라고 물어볼 수 있어요.',
        reply('korean-form', '韓国語の問診票はありますか。|Kankokugo no monshinhyō wa arimasu ka?|한국어 문진표가 있나요?', 'support', '韓国語のものはありますか'),
        mismatch('results', 'もう検査結果が出ましたか。|Mō kensa kekka ga demashita ka?|벌써 검사 결과가 나왔나요?', '지금은 진료 전 접수 단계예요. 문진표를 작성하는 데 필요한 도움을 요청해 보세요.')),
      'patient-card': turn('診察券をお持ちですか。|Shinsatsuken o omochi desu ka?|병원 등록 카드를 갖고 계시나요?', '카드를 가지고 오지 않았다면 「持ってくるのを忘れました」라고 설명해요.',
        reply('forgot', '持ってくるのを忘れました。|Motte kuru no o wasuremashita.|가져오는 걸 깜박했어요.', 'identification', '診察券を忘れました', '忘れてきました'),
        mismatch('prescription', '処方箋なら持っています。|Shohōsen nara motteimasu.|처방전이라면 가지고 있어요.', '「処方箋」은 처방전, 「診察券」은 등록 카드예요. 등록 카드를 가지고 있는지 알려 주세요.')),
      support: turn('日本語のものしかありませんが、書くのをお手伝いできます。|Nihongo no mono shika arimasen ga, kaku no o otetsudai dekimasu.|일본어 문진표만 있지만 쓰는 것을 도와드릴 수 있어요.', '도움을 받겠다면 「お願いします」와 함께 언제부터 증상이 있었는지 말해 보세요.',
        finish('symptoms', 'お願いします。三日前からめまいがします。|Onegai shimasu. Mikka mae kara memai ga shimasu.|부탁드려요. 사흘 전부터 어지러워요.', 'assisted', '三日前からめまいがします', 'お願いします。めまいがします'),
        mismatch('none', 'どこも悪くありません。|Doko mo waruku arimasen.|아무 데도 아프지 않아요.', '이번 연습에서는 어지럼증이 있어서 방문했어요. 「めまいがします」로 증상을 전달해 보세요.')),
      identification: turn('お名前と生年月日で確認できます。|Onamae to seinengappi de kakunin dekimasu.|이름과 생년월일로 확인할 수 있어요.', '개인정보를 말로 전달하는 대신 「ここに書いてもいいですか」라고 물어볼 수 있어요.',
        finish('write', 'ここに書いてもいいですか。|Koko ni kaite mo ii desu ka?|여기에 써도 될까요?', 'identified', 'ここに記入してもいいですか', '紙に書いてもいいですか'),
        mismatch('when', '受診したのは来週のことです。|Jushin shita no wa raishū no koto desu.|진료받은 건 다음 주 일이에요.', '접수에 필요한 정보를 어떻게 전달할지 확인해 보세요.'))
    },
    endings: {
      assisted: line('ありがとうございます。出始めた日と症状をここに記入しますね。|Arigatō gozaimasu. Dehajimeta hi to shōjō o koko ni kinyū shimasu ne.|감사합니다. 증상이 시작된 날과 증상을 여기에 적을게요.'),
      identified: line('はい。確認できましたら、お呼びします。|Hai. Kakunin dekimashitara, oyobi shimasu.|네. 확인되면 불러 드릴게요.')
    }
  },
  {
    id: 'apartment-viewing', level: 'N3', category: '집 구하기', title: '임대 주택을 보러 갈 약속 잡기', partner: '부동산 직원',
    goal: '우선순위를 말하고 역까지 거리나 초기 비용을 물은 뒤 집을 보러 갈 시간을 정해요.',
    start: 'conditions',
    steps: {
      conditions: turn('お部屋探しで、一番重視される条件は何ですか。|Oheya sagashi de, ichiban jūshi sareru jōken wa nan desu ka?|방을 구할 때 가장 중요하게 보는 조건은 무엇인가요?', '역과의 거리 또는 집세 중 더 중요한 조건을 말해 보세요.',
        reply('station', '駅から近いことが一番大事です。|Eki kara chikai koto ga ichiban daiji desu.|역에서 가까운 게 가장 중요해요.', 'distance', '駅に近い部屋がいいです', '駅から近い物件を探しています'),
        reply('rent', '家賃をなるべく抑えたいです。|Yachin o narubeku osaetai desu.|월세를 가능한 한 낮추고 싶어요.', 'costs', '安い部屋を探しています', '家賃が安いことが一番大事です'),
        mismatch('lease', 'もう入居しました。|Mō nyūkyo shimashita.|이미 입주했어요.', '지금은 집을 찾는 단계예요. 가장 중요한 조건을 알려 주세요.')),
      distance: turn('駅に近い物件が一件あります。気になる点はありますか。|Eki ni chikai bukken ga ikken arimasu. Ki ni naru ten wa arimasu ka?|역에서 가까운 매물이 한 건 있어요. 궁금한 점이 있나요?', '「駅まで歩いて何分」으로 실제 도보 거리를 물을 수 있어요.',
        reply('how-far', '駅まで歩いて何分ですか。|Eki made aruite nanpun desu ka?|역까지 걸어서 몇 분인가요?', 'weekday', '駅まで徒歩で何分ですか', '最寄り駅まで何分ですか'),
        mismatch('how-much-rent', '駅の家賃はいくらですか。|Eki no yachin wa ikura desu ka?|역의 월세는 얼마인가요?', '「家賃」은 집세예요. 역까지 걸리는 시간을 물을 때는 「何分」을 써요.')),
      costs: turn('家賃が抑えめの物件をお探ししました。|Yachin ga osaeme no bukken o osagashi shimashita.|월세가 비교적 낮은 매물을 찾아봤어요.', '입주에 드는 총액을 확인하려면 「初期費用」를 물어봐요.',
        reply('initial', '初期費用はいくらかかりますか。|Shoki hiyō wa ikura kakarimasu ka?|초기 비용은 얼마나 드나요?', 'weekend', '初期費用を教えてください', '初期費用はいくらですか'),
        mismatch('closed', '営業時間はもう終わりました。|Eigyō jikan wa mō owarimashita.|영업시간은 이미 끝났어요.', '입주할 때 내는 비용이 얼마인지 확인해 보세요.')),
      weekday: turn('徒歩で五分ほどです。平日なら内見できます。|Toho de gofun hodo desu. Heijitsu nara naiken dekimasu.|걸어서 약 5분이에요. 평일이라면 보러 갈 수 있어요.', '평일 중 가능한 날을 제안해 보세요. 「水曜日」는 수요일이에요.',
        finish('wednesday', '水曜日の午後に内見できますか。|Suiyōbi no gogo ni naiken dekimasu ka?|수요일 오후에 집을 볼 수 있나요?', 'weekday', '水曜日の午後は空いていますか', '水曜日の午後にお願いします'),
        mismatch('sunday', '日曜日にお願いします。|Nichiyōbi ni onegai shimasu.|일요일로 부탁해요.', '이 매물은 평일에 볼 수 있다고 했어요. 「日曜日」는 주말이에요.')),
      weekend: turn('敷金などがかかります。土曜なら、内見の際に見積書をお渡しできます。|Shikikin nado ga kakarimasu. Doyō nara, naiken no sai ni mitsumorisho o owatashi dekimasu.|보증금 등이 들어요. 토요일이라면 집을 보실 때 견적서를 안내해 드릴 수 있어요.', '제시된 요일과 시간을 받아들이거나 토요일에 가능한 시간을 물어봐요.',
        finish('saturday', 'では、土曜日の午前でお願いします。|Dewa, doyōbi no gozen de onegai shimasu.|그럼 토요일 오전으로 부탁해요.', 'weekend', '土曜日の午前に内見できますか', '土曜日の午前にお願いします'),
        mismatch('monday', '先週の月曜日にお願いします。|Senshū no getsuyōbi ni onegai shimasu.|지난주 월요일로 부탁해요.', '「先週」는 이미 지난주예요. 안내받은 토요일에 맞춰 시간을 제안해 보세요.'))
    },
    endings: {
      weekday: line('水曜日の午後三時ですね。現地でお待ちしています。|Suiyōbi no gogo sanji desu ne. Genchi de omachi shiteimasu.|수요일 오후 3시로 할게요. 현장에서 기다리겠습니다.'),
      weekend: line('土曜日の午前十時で承りました。見積書も用意します。|Doyōbi no gozen jūji de uketamawarimashita. Mitsumorisho mo yōi shimasu.|토요일 오전 10시로 접수했습니다. 견적서도 준비할게요.')
    }
  },
  {
    id: 'work-handover', level: 'N2', category: '업무 인수인계', title: '인수인계에서 다음 행동 확인하기', partner: '팀 동료',
    goal: '미처리 요청과 승인 대기의 차이를 짚고, 먼저 해야 할 일을 분명히 확인해요.',
    start: 'priority',
    steps: {
      priority: turn('未対応の依頼が二件、承認待ちが一件です。どちらから確認しますか。|Mitaiō no irai ga niken, shōninmachi ga ikken desu. Dochira kara kakunin shimasu ka?|아직 처리하지 않은 요청 두 건, 승인 대기 한 건이에요. 어느 쪽부터 확인할까요?', '「未対応から」는 대응 전 요청부터, 「承認待ちから」는 승인을 기다리는 것부터예요.',
        reply('pending', '未対応の依頼から確認したいです。|Mitaiō no irai kara kakunin shitai desu.|미처리 요청부터 확인하고 싶어요.', 'deadline', '未対応の件からお願いします', '未対応から確認します'),
        reply('approval', '承認待ちの件からお願いします。|Shōninmachi no ken kara onegai shimasu.|승인 대기 건부터 부탁해요.', 'reviewer', '承認待ちから確認したいです'),
        mismatch('finished', '対応済みの案件だけ教えてください。|Taiōzumi no anken dake oshiete kudasai.|이미 처리한 건만 알려 주세요.', '지금 넘겨받을 것은 미처리 요청과 승인 대기 건이에요. 어느 쪽부터 볼지 고르세요.')),
      deadline: turn('一件は明日が締め切りです。もう一件は来週までで大丈夫です。|Ikken wa ashita ga shimekiri desu. Mō ikken wa raishū made de daijōbu desu.|한 건은 내일 마감이고, 나머지 한 건은 다음 주까지 괜찮아요.', '급한 건을 먼저 맡겠다고 「明日が締め切りのほうを優先します」라고 말해요.',
        reply('urgent', '明日が締め切りのほうを優先します。|Ashita ga shimekiri no hō o yūsen shimasu.|내일 마감인 건을 우선 처리할게요.', 'files', '明日までの依頼を先に対応します', '急ぎのほうから対応します'),
        mismatch('both-done', '二件とも本日中に完了していますね。|Niken tomo honjitsuchū ni kanryō shiteimasu ne.|두 건 모두 오늘 안에 완료된 거군요.', '두 건 모두 미처리 상태예요. 마감이 더 빠른 건을 골라 보세요.')),
      reviewer: turn('上司の承認待ちです。修正が必要になった場合だけ、こちらに差し戻されます。|Jōshi no shōninmachi desu. Shūsei ga hitsuyō ni natta baai dake, kochira ni sashimodosaremasu.|상사의 승인을 기다리고 있어요. 수정이 필요해질 경우에만 이쪽으로 반려됩니다.', '「差し戻されたら」로 반려됐을 때 할 일을 확인해요.',
        reply('correction', '差し戻されたら私が修正します。|Sashimodosaretara watashi ga shūsei shimasu.|반려되면 제가 수정할게요.', 'notify', '修正が必要なら私が対応します'),
        mismatch('approve', 'では、私が先に承認しておきます。|Dewa, watashi ga saki ni shōnin shite okimasu.|그럼 제가 먼저 승인해 둘게요.', '이 건의 승인은 상사에게 맡겨져 있어요. 인수받은 사람이 할 수 있는 작업을 확인하세요.')),
      files: turn('前回の版と今回の版が両方あります。必要ならファイルを送ります。|Zenkai no han to konkai no han ga ryōhō arimasu. Hitsuyō nara fairu o okurimasu.|이전 버전과 이번 버전이 모두 있어요. 필요하면 파일을 보내 드릴게요.', '혼동하지 않도록 「最新版」을 요청하고 변경점을 확인할 수 있어요.',
        finish('latest', '最新版と更新履歴を共有してもらえますか。|Saishinban to kōshin rireki o kyōyū shite moraemasu ka?|최신본과 변경 이력을 공유해 주실 수 있나요?', 'current', '最新版を共有していただけますか', '最新版を送ってもらえますか'),
        mismatch('older', '修正するので古い版だけ送ってください。|Shūsei suru node furui han dake okutte kudasai.|수정할 테니 이전 버전만 보내 주세요.', '이전 버전만 보면 최신 수정 내용을 놓칠 수 있어요. 현재 작업 기준이 되는 파일을 요청하세요.')),
      notify: turn('結果はメールで届きます。差し戻しのときだけ、担当者にも連絡が入ります。|Kekka wa mēru de todokimasu. Sashimodoshi no toki dake, tantōsha ni mo renraku ga hairimasu.|결과는 이메일로 도착해요. 반려되는 경우에만 담당자에게도 연락이 갑니다.', '「結果が届くまで」로 지금 할 일과 나중에 할 일을 구분해요.',
        finish('monitor', '結果が届くまで待ち、必要があれば修正します。|Kekka ga todoku made machi, hitsuyō ga areba shūsei shimasu.|결과가 올 때까지 기다렸다가 필요하면 수정하겠습니다.', 'waiting', '結果を待ってから対応します', '差し戻された場合だけ修正します'),
        mismatch('premature', '結果が出る前に修正して再申請します。|Kekka ga deru mae ni shūsei shite saishinsei shimasu.|결과가 나오기 전에 수정해서 다시 신청할게요.', '아직 고칠 점이 통보되지 않았어요. 승인 결과에 따라 움직이겠다고 확인해 보세요.'))
    },
    endings: {
      current: line('承知しました。最新版へのリンクと変更点をお送りします。|Shōchi shimashita. Saishinban e no rinku to henkōten o ookuri shimasu.|알겠습니다. 최신본 링크와 변경 내용을 보내 드릴게요.'),
      waiting: line('その流れでお願いします。結果が来たら、まず通知をご確認ください。|Sono nagare de onegai shimasu. Kekka ga kitara, mazu tsūchi o gokakunin kudasai.|그 순서대로 부탁해요. 결과가 오면 먼저 알림을 확인해 주세요.')
    }
  },
  {
    id: 'contract-change', level: 'N2', category: '계약 변경', title: '이용 계약 변경 조건 확인하기', partner: '고객센터 직원',
    goal: '자동 갱신 중지와 요금제 변경을 구별하고, 언제부터 적용되는지 확인해요.',
    start: 'request',
    steps: {
      request: turn('本日は自動更新の停止とプラン変更のどちらについてですか。|Honjitsu wa jidō kōshin no teishi to puran henkō no dochira ni tsuite desu ka?|오늘은 자동 갱신 중지와 요금제 변경 중 어느 쪽에 관한 문의인가요?', '계약 기간은 유지하면서 갱신만 멈출 수도 있고, 요금제를 바꿀 수도 있어요. 어느 쪽인지 분명하게 말하세요.',
        reply('renewal', '自動更新だけを止めたいです。|Jidō kōshin dake o tometai desu.|자동 갱신만 중단하고 싶어요.', 'term', '自動更新を停止したいです', '自動更新を止めたいです'),
        reply('plan', '契約を続けたまま、プランを変更したいです。|Keiyaku o tsuzuketa mama, puran o henkō shitai desu.|계약을 유지한 채 요금제를 바꾸고 싶어요.', 'effective', 'プランを変更したいです', 'プラン変更についてです'),
        mismatch('refund', '昨日の返金について確認したいです。|Kinō no henkin ni tsuite kakunin shitai desu.|어제 환불에 관해 확인하고 싶어요.', '이번에 확인할 것은 갱신 중지 또는 요금제 변경 조건이에요.')),
      term: turn('更新を止めても、現在の契約は満了日まで有効です。|Kōshin o tomete mo, genzai no keiyaku wa manryōbi made yūkō desu.|갱신을 중지해도 현재 계약은 만료일까지 유효해요.', '「満了日までは」를 써서 계약이 당장 끝나는 것이 아닌지 확인해요.',
        reply('confirm-term', '満了日までは今のサービスを使えるということですね。|Manryōbi made wa ima no sābisu o tsukaeru to iu koto desu ne.|만료일까지는 현재 서비스를 쓸 수 있다는 뜻이군요.', 'written', '満了日まで使えるんですね', '満了日まで利用できますね'),
        mismatch('ended', '今日から利用できなくなるということですね。|Kyō kara riyō dekinaku naru to iu koto desu ne.|오늘부터 이용할 수 없게 된다는 뜻이군요.', '갱신을 막아도 만료일까지는 쓸 수 있다고 했어요.')),
      effective: turn('変更後のプランは来月一日から適用されます。|Henkōgo no puran wa raigetsu tsuitachi kara tekiyō saremasu.|변경된 요금제는 다음 달 1일부터 적용돼요.', '「今月の分」과 「来月の分」을 구별해서 청구 기준을 확인해요.',
        reply('this-month', '今月分は今の料金で請求されますか。|Kongetsubun wa ima no ryōkin de seikyū saremasu ka?|이번 달분은 현재 요금으로 청구되나요?', 'apply', '今月の料金は変わりませんか', '今月は今の料金ですか'),
        mismatch('retroactive', '先月分も新しい料金になるんですね。|Sengetsubun mo atarashii ryōkin ni naru n desu ne.|지난달분도 새 요금이 되는 거군요.', '새 요금제의 적용일은 다음 달 1일이에요. 지난달분에 소급한다는 안내가 없어요.')),
      written: turn('はい。取消手続きが完了したら通知をお送りします。|Hai. Torikeshi tetsuzuki ga kanryō shitara tsūchi o ookuri shimasu.|네. 갱신 중지 절차가 끝나면 안내해 드릴게요.', '완료 내역을 남겨 두려면 「メールで」나 「書面で」 전달해 달라고 요청하세요.',
        finish('email', '完了したら、メールでお知らせいただけますか。|Kanryō shitara, mēru de oshirase itadakemasu ka?|완료되면 이메일로 알려 주실 수 있나요?', 'confirmation', 'メールでお知らせください', '書面で通知していただけますか'),
        mismatch('cancel-stop', 'やはり自動更新してください。|Yahari jidō kōshin shite kudasai.|역시 자동 갱신해 주세요.', '이번 목표는 갱신을 멈추고 그 결과를 확인하는 것이에요.')),
      apply: turn('はい。今月分は変わりません。変更を申し込まれますか。|Hai. Kongetsubun wa kawarimasen. Henkō o mōshikomaremasu ka?|네. 이번 달분은 바뀌지 않아요. 변경을 신청하시겠어요?', '적용일을 한 번 더 말하면서 신청해 보세요.',
        finish('submit', 'では、来月一日からの変更をお願いします。|Dewa, raigetsu tsuitachi kara no henkō o onegai shimasu.|그럼 다음 달 1일부터 변경해 주세요.', 'scheduled', '来月からの変更をお願いします', '変更をお願いします'),
        mismatch('today', '今日からの変更で確定してください。|Kyō kara no henkō de kakutei shite kudasai.|오늘부터 변경하는 걸로 확정해 주세요.', '적용일은 다음 달 1일로 안내받았어요. 그 날짜를 기준으로 신청해 보세요.'))
    },
    endings: {
      confirmation: line('承知しました。満了日と手続きの結果をメールでお知らせします。|Shōchi shimashita. Manryōbi to tetsuzuki no kekka o mēru de oshirase shimasu.|알겠습니다. 만료일과 처리 결과를 이메일로 알려 드릴게요.'),
      scheduled: line('変更を受け付けました。適用日は来月一日です。|Henkō o uketsukemashita. Tekiyōbi wa raigetsu tsuitachi desu.|변경을 접수했습니다. 적용일은 다음 달 1일입니다.')
    }
  },
  {
    id: 'public-briefing', level: 'N1', category: '주민 설명회', title: '주민 설명회에서 근거와 조건 묻기', partner: '설명회 진행자',
    goal: '정책 효과 확인과 주민 의견 수렴을 구별하고, 결과를 기록으로 남기도록 요청해요.',
    start: 'topic',
    steps: {
      topic: turn('ご意見は、施策の実効性と手続きの透明性のどちらに関するものですか。|Goiken wa, shisaku no jikkōsei to tetsuzuki no tōmeisei no dochira ni kansuru mono desu ka?|주신 의견은 시책의 실효성과 절차의 투명성 중 어느 쪽에 관한 것인가요?', '정책의 효과라면 「実効性」, 결정 과정 공개라면 「透明性」에 초점을 맞추세요.',
        reply('effect', '実効性です。効果を測る基準を伺いたいです。|Jikkōsei desu. Kōka o hakaru kijun o ukagaitai desu.|실효성입니다. 효과를 측정할 기준을 여쭙고 싶어요.', 'metric', '実効性をどう検証するのか伺いたいです', '効果の検証についてです'),
        reply('process', '手続きの透明性です。住民の意見がどう扱われるのか伺いたいです。|Tetsuzuki no tōmeisei desu. Jūmin no iken ga dō atsukawareru no ka ukagaitai desu.|절차의 투명성입니다. 주민 의견을 어떻게 처리하는지 여쭙고 싶어요.', 'publication', '透明性について伺いたいです', '住民の意見はどのように扱われますか'),
        mismatch('settled', '結果は既に出ているので検証は不要です。|Kekka wa sude ni deteiru node kenshō wa fuyō desu.|결과가 이미 나왔으니 검증은 필요 없어요.', '설명회에서는 어떤 근거로 결과를 판단할지 묻는 단계예요. 알고 싶은 논점을 먼저 정해 보세요.')),
      metric: turn('混雑の緩和を、来訪者の総数と通路の待ち時間で検証する予定です。|Konzatsu no kanwa o, raihōsha no sōsū to tsūro no machijikan de kenshō suru yotei desu.|방문객 총수와 통로 대기 시간으로 혼잡이 완화됐는지 검증할 계획입니다.', '「総数だけでは～」로 전체 수치에 가려질 수 있는 현상을 지적해요.',
        reply('by-area', '総数だけでは地区ごとの偏りが見えません。地区別の集計もできますか。|Sōsū dake de wa chiku goto no katayori ga miemasen. Chikubetsu no shūkei mo dekimasu ka?|총수만으로는 구역별 편차를 알 수 없습니다. 구역별 집계도 가능할까요?', 'report', '地区別の集計もお願いします', '地区ごとの偏りも検証してください'),
        mismatch('discard-waiting', '総数が分かれば待ち時間の検証は不可能です。|Sōsū ga wakareba machijikan no kenshō wa fukanō desu.|총수를 알면 대기 시간 검증은 불가능합니다.', '총수와 대기 시간은 따로 측정할 수 있어요. 총수로 알기 어려운 사항을 짚어 보세요.')),
      publication: turn('意見は集約しますが、公開する資料の範囲はまだ決めていません。|Iken wa shūyaku shimasu ga, kōkai suru shiryō no han’i wa mada kimeteimasen.|의견은 취합하되 공개할 자료의 범위는 아직 정하지 않았어요.', '투명성을 높이려면 어떤 항목을 공개해야 할지 제안해 보세요.',
        reply('reasons', '意見の概要と、採否の理由を公表していただけますか。|Iken no gaiyō to, saihi no riyū o kōhyō shite itadakemasu ka?|의견의 개요와 채택 여부를 정한 이유를 공개해 주실 수 있나요?', 'minutes', '採否の理由も公表してください', '意見をどう扱ったのか公表していただけますか'),
        mismatch('anonymous', '資料が未定なので、意見は受け付けないのですね。|Shiryō ga mitei na node, iken wa uketsukenai no desu ne.|자료 범위가 미정이니 의견은 받지 않는다는 뜻이군요.', '의견은 취합하고 공개 범위만 미정이라고 했어요. 공개 방식에 관해 요청해 보세요.')),
      report: turn('地区別のデータも収集できそうです。結果の扱いについて、ご要望はありますか。|Chikubetsu no dēta mo shūshū dekisō desu. Kekka no atsukai ni tsuite, goyōbō wa arimasu ka?|구역별 데이터도 수집할 수 있을 듯합니다. 결과를 다루는 방식에 요청 사항이 있나요?', '「試行後に」로 시점을 정하고 검증 결과의 공개를 요청해요.',
        finish('release', '試行後に、地区別の結果を公開してください。|Shikōgo ni, chikubetsu no kekka o kōkai shite kudasai.|시범 운영 후 구역별 결과를 공개해 주세요.', 'reported', '地区ごとの結果を公表してください', '試行後の検証結果を公表してください'),
        mismatch('approve-policy', '集計前に本格実施を決めてください。|Shūkeimae ni honkaku jisshi o kimete kudasai.|집계 전에 본격 시행을 결정해 주세요.', '지금은 정책을 검증할 시점과 공개 방법을 합의하는 단계예요.')),
      minutes: turn('公開の可否は持ち帰って検討します。今日の段階で何を残しましょうか。|Kōkai no kahi wa mochikaette kentō shimasu. Kyō no dankai de nani o nokoshimashō ka?|공개 여부는 돌아가서 검토하겠습니다. 오늘 단계에서는 무엇을 남길까요?', '다음번에 확인할 수 있도록 「議事録」에 요청을 남겨 달라고 말해요.',
        finish('record', '公表を求める意見があったことを、議事録に残してください。|Kōhyō o motomeru iken ga atta koto o, gijiroku ni nokoshite kudasai.|공개를 요청하는 의견이 있었다는 점을 회의록에 남겨 주세요.', 'noted', 'この要望を議事録に残してください', '議事録に記載をお願いします'),
        mismatch('published', '既に公表済みとして記録してください。|Sude ni kōhyōzumi to shite kiroku shite kudasai.|이미 공개된 것으로 기록해 주세요.', '공개 여부는 검토 예정이에요. 오늘 실제로 요청한 내용을 기록으로 남겨 달라고 하세요.'))
    },
    endings: {
      reported: line('地区別の結果を試行後の報告書に載せます。|Chikubetsu no kekka o shikōgo no hōkokusho ni nosemasu.|구역별 결과를 시범 운영 후 보고서에 실을게요.'),
      noted: line('要望を議事録に記載し、次回に検討状況をお伝えします。|Yōbō o gijiroku ni kisai shi, jikai ni kentō jōkyō o otsutae shimasu.|요청을 회의록에 적고, 다음번에 검토 상황을 전달하겠습니다.')
    }
  },
  {
    id: 'editorial-review', level: 'N1', category: '원고 검토', title: '편집 회의에서 주장의 강도 조정하기', partner: '편집자',
    goal: '주장과 근거의 범위를 구별하고, 독자가 오해하지 않을 수정안을 제안해요.',
    start: 'check',
    steps: {
      check: turn('原稿には、調査対象の偏りと結論の言い切り方の二つの課題があります。どちらから見直しますか。|Genkō ni wa, chōsa taishō no katayori to ketsuron no iikirikata no futatsu no kadai ga arimasu. Dochira kara minaoshimasu ka?|원고에는 조사 대상의 편향과 결론을 단정하는 방식이라는 두 가지 문제가 있어요. 어느 쪽부터 살펴볼까요?', '표본의 문제라면 「調査対象」, 표현의 강도라면 「言い切り方」를 고르세요.',
        reply('sample', 'まず、調査対象の偏りを確認します。|Mazu, chōsa taishō no katayori o kakunin shimasu.|먼저 조사 대상의 편향을 확인할게요.', 'scope', '調査対象から確認します', '調査対象の偏りからお願いします'),
        reply('conclusion', '先に結論の言い切り方を見直しましょう。|Saki ni ketsuron no iikirikata o minaoshimashō.|먼저 결론을 단정하는 방식을 검토하죠.', 'causality', '結論の言い切り方からお願いします', '結論の表現を見直したいです'),
        mismatch('remove', '二つとも同じ問題なので、調査の説明は不要です。|Futatsu tomo onaji mondai na node, chōsa no setsumei wa fuyō desu.|두 가지 모두 같은 문제이니 조사 설명은 필요 없어요.', '대상 편향과 표현 강도는 별도로 살펴볼 내용이에요. 먼저 검토할 쪽을 골라 보세요.')),
      scope: turn('聞き取ったのは中心部の店舗だけです。郊外の店舗からは回答を得ていません。|Kiki totta no wa chūshinbu no tenpo dake desu. Kōgai no tenpo kara wa kaitō o eteimasen.|중심부 매장만 인터뷰했습니다. 교외 매장에서는 응답을 받지 못했어요.', '조사에서 알 수 있는 범위를 「中心部に限られる」처럼 한정해 보세요.',
        reply('limit', 'この結果は中心部の店舗に限られます。|Kono kekka wa chūshinbu no tenpo ni kagiraremasu.|이 결과는 중심부 매장에 한정됩니다.', 'disclose', '調査結果は中心部に限って解釈すべきです', '中心部の店舗に限った結果です'),
        mismatch('generalize', '中心部を調べたので、市全体の傾向を断定できます。|Chūshinbu o shirabeta node, shi zentai no keikō o dantei dekimasu.|중심부를 조사했으니 시 전체의 경향을 단정할 수 있어요.', '교외 자료가 없으니 전체로 일반화할 근거가 부족해요. 조사 결과가 적용되는 범위를 말해 보세요.')),
      causality: turn('売上は伸びましたが、広告の影響を他の要因から切り分けられていません。|Uriage wa nobimashita ga, kōkoku no eikyō o hoka no yōin kara kiriwakerareteimasen.|매출은 늘었지만 광고의 영향을 다른 요인과 구분하지 못했어요.', '함께 일어났다는 사실과 원인이 증명됐다는 주장을 구분해 보세요.',
        reply('qualify', '広告が原因だとは断定できません。|Kōkoku ga gen’in da to wa dantei dekimasen.|광고가 원인이라고 단정할 수 없어요.', 'rewrite', '因果関係までは断定できません', '広告の効果とは言い切れません'),
        mismatch('prove', '広告以外の要因はすべて除外できましたね。|Kōkoku igai no yōin wa subete jogai dekimashita ne.|광고 외의 요인은 모두 제외할 수 있었군요.', '다른 요인을 분리하지 못했다고 했어요. 원인에 관해 어떤 표현까지 가능한지 답해 보세요.')),
      disclose: turn('調査の範囲を読者に分かりやすく示すには、どうすればよいでしょうか。|Chōsa no han’i o dokusha ni wakariyasuku shimesu ni wa, dō sureba yoi deshō ka?|조사 범위를 독자에게 알기 쉽게 보여 주려면 어떻게 하면 좋을까요?', '「調査対象を明記する」で 조사 대상을 본문에 명시하자고 제안할 수 있어요.',
        finish('state-boundary', '本文に調査対象を明記し、結論の範囲も限定しましょう。|Honbun ni chōsa taishō o meiki shi, ketsuron no han’i mo gentei shimashō.|본문에 조사 대상을 명시하고 결론의 범위도 한정하죠.', 'scoped', '本文に調査対象を明記しましょう', '調査の範囲を明記してください'),
        mismatch('relabel', '調査対象は市内全域と書き換えましょう。|Chōsa taishō wa shinai zen’iki to kakikaemashō.|조사 대상을 시내 전역으로 고쳐 쓰죠.', '조사하지 않은 구역을 넣으면 대상 범위가 잘못 전달돼요.')),
      rewrite: turn('では、確認できた事実だけで結論の一文を書き直せますか。|Dewa, kakunin dekita jijitsu dake de ketsuron no ichibun o kakinaosemasu ka?|그러면 확인한 사실만으로 결론의 한 문장을 고쳐 쓸 수 있을까요?', '「広告の実施後に」라고 시점을 표현하면 원인이라고 단정하지 않아요.',
        finish('time-order', '広告の実施後に売上が伸びた、と書けます。|Kōkoku no jisshigo ni uriage ga nobita, to kakemasu.|광고 시행 이후 매출이 늘었다고 쓸 수 있어요.', 'qualified', '広告の実施後に売上が伸びました', '広告を出した後に売上が伸びました'),
        mismatch('claim-cause', '広告のおかげで売上が伸びた、と書きましょう。|Kōkoku no okage de uriage ga nobita, to kakimashō.|광고 덕분에 매출이 늘었다고 쓰죠.', '「おかげで」는 원인과 긍정적 결과를 연결하는 표현이에요. 이번에는 확인된 시간 순서만 표현하세요.'))
    },
    endings: {
      scoped: line('調査対象と解釈できる範囲を本文に追記します。|Chōsa taishō to kaishaku dekiru han’i o honbun ni tsuiki shimasu.|조사 대상과 해석할 수 있는 범위를 본문에 덧붙일게요.'),
      qualified: line('その文なら、事実と推論を混同せずに伝えられます。|Sono bun nara, jijitsu to suiron o kondō sezu ni tsutaeraremasu.|그 문장이면 사실과 추론을 혼동하지 않고 전달할 수 있겠어요.')
    }
  }
];
