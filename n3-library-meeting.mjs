import { finish, line, mismatch, reply, turn } from './dialogue-data.mjs';
import { vocabularyRows } from './vocabulary-rows.mjs';

export const libraryAndMeetingScenarios = [
  {
    id: 'library-loans',
    title: '도서관에서 대출 기간 연장하기',
    category: '도서관 대출',
    level: 'N3',
    partner: '도서관 직원',
    goal: '대출을 연장하거나 대출 중인 책을 예약하고, 반납일이나 수령 기한을 확인해요.',
    start: 'request',
    steps: {
      request: turn('貸し出しのことで、どのようなご用件でしょうか。|Kashidashi no koto de, dono yō na goyōken deshō ka?|대출 관련해서 어떤 일로 오셨나요?', '연장하려면 「貸出期間」, 대출 중인 책을 예약하려면 「貸出中の本」을 써 보세요.',
        reply('extend', '借りている本の貸出期間を延長できますか。|Karite iru hon no kashidashi kikan o enchō dekimasu ka?|빌린 책의 대출 기간을 연장할 수 있나요?', 'renewal', '貸出期間を延ばせますか', '貸出期間を延長できますか', '返却期限を延長したいです'),
        reply('reserve', '貸出中の本を予約したいのですが。|Kashidashichū no hon o yoyaku shitai no desu ga.|대출 중인 책을 예약하고 싶은데요.', 'card', '貸出中の本を予約したいです', '借りられている本を予約できますか'),
        mismatch('store', 'この本を買いたいです。|Kono hon o kaitai desu.|이 책을 사고 싶어요.', '도서관 창구예요. 책을 더 빌려 두고 싶은지, 대출 중인 책을 예약하고 싶은지 말해 보세요.')),
      renewal: turn('次の予約が入っていないので、貸出期間を一週間延長できます。|Tsugi no yoyaku ga haitte inai node, kashidashi kikan o isshūkan enchō dekimasu.|다음 예약이 없어서 대출 기간을 일주일 연장할 수 있어요.', '새 반납일은 「新しい返却期限」이라고 해요. 언제까지인지 물어보세요.',
        reply('ask-due', '新しい返却期限はいつになりますか。|Atarashii henkyaku kigen wa itsu ni narimasu ka?|새 반납 기한은 언제인가요?', 'due', '返却期限はいつですか', 'いつまでに返せばいいですか'),
        mismatch('new-hold', '次の予約はもう入っていますね。|Tsugi no yoyaku wa mō haitteimasu ne.|다음 예약이 이미 들어 있군요.', '「入っていない」는 예약이 없다는 뜻이에요. 연장 후 반납일을 확인해 보세요.')),
      due: turn('来週の火曜日までです。閉館後でも返却ポストをご利用いただけます。|Raishū no kayōbi made desu. Heikango demo henkyaku posuto o goriyō itadakemasu.|다음 주 화요일까지예요. 문을 닫은 뒤에도 반납함을 이용할 수 있습니다.', '「閉館後」는 문을 닫은 뒤예요. 그때 책을 어디에 넣는지 확인해 보세요.',
        finish('drop-box', '閉館後は返却ポストに入れればいいんですね。|Heikango wa henkyaku posuto ni irereba iin desu ne.|문을 닫은 뒤에는 반납함에 넣으면 되는군요.', 'extended', '閉館後は返却ポストですね', '返却ポストに入れればいいんですね'),
        mismatch('closed-desk', '閉館後は窓口に持っていけばいいですね。|Heikango wa madoguchi ni motte ikeba ii desu ne.|문을 닫은 뒤에는 창구에 가져가면 되겠네요.', '문을 닫으면 창구는 이용할 수 없어요. 「返却ポスト」는 반납함이에요.')),
      card: turn('予約できます。利用カードをお持ちですか。|Yoyaku dekimasu. Riyō kādo o omochi desu ka?|예약할 수 있어요. 회원증을 갖고 계신가요?', '「こちらが利用カードです」라고 하며 회원증을 건네 보세요.',
        reply('show-card', 'はい、こちらが利用カードです。|Hai, kochira ga riyō kādo desu.|네, 여기 회원증입니다.', 'pickup', '利用カードはこちらです', 'はい、持っています', 'はい、これです'),
        mismatch('ticket', '切符ならあります。|Kippu nara arimasu.|표라면 있어요.', '「切符」는 승차권이에요. 여기서는 도서관 회원증을 확인해요.')),
      pickup: turn('本の用意ができたらメールでお知らせします。連絡から一週間以内に受け取ってください。|Hon no yōi ga dekitara mēru de oshirase shimasu. Renraku kara isshūkan inai ni uketotte kudasai.|책이 준비되면 이메일로 알려 드려요. 연락을 받은 뒤 일주일 안에 수령해 주세요.', '어느 날부터 일주일을 세는지 확인해 보세요. 「メールが届いてから」를 써요.',
        finish('within-week', 'メールが届いてから一週間以内ですね。|Mēru ga todoite kara isshūkan inai desu ne.|이메일을 받고 나서 일주일 안이군요.', 'reserved', '連絡を受けてから一週間以内ですね', 'メールが来てから一週間以内ですね'),
        mismatch('today', '今日から一週間以内ですね。|Kyō kara isshūkan inai desu ne.|오늘부터 일주일 안이군요.', '예약한 날부터가 아니라 준비됐다는 연락을 받은 날부터예요.'))
    },
    endings: {
      extended: line('はい。返却ポストは入口の横にあります。|Hai. Henkyaku posuto wa iriguchi no yoko ni arimasu.|네. 반납함은 입구 옆에 있어요.'),
      reserved: line('はい。受け取りの際は利用カードをお持ちください。|Hai. Uketori no sai wa riyō kādo o omochi kudasai.|네. 받으러 오실 때 회원증을 가져오세요.')
    }
  },
  {
    id: 'meeting-room-change',
    title: '회의실 예약의 시간이나 장소 바꾸기',
    category: '회의실 예약',
    level: 'N3',
    partner: '예약 담당 동료',
    goal: '회의 시작을 늦추거나, 자료를 보여 줄 수 있는 더 넓은 방으로 옮겨요.',
    start: 'change',
    steps: {
      change: turn('明日の打ち合わせは午後二時からの予定です。変更はありますか。|Ashita no uchiawase wa gogo niji kara no yotei desu. Henkō wa arimasu ka?|내일 회의는 오후 2시부터 할 예정이에요. 변경할 게 있나요?', '시간을 늦추려면 「開始を遅らせる」, 방을 바꾸려면 「会議室を変更する」를 써 보세요.',
        reply('delay', '開始を一時間遅らせたいです。|Kaishi o ichijikan okurasetai desu.|시작을 한 시간 늦추고 싶어요.', 'end-time', '開始を一時間遅らせられますか', '午後三時からにできますか', '三時開始に変更したいです'),
        reply('larger-room', '出席者が増えたので、もう少し広い会議室に変えたいです。|Shussekisha ga fueta node, mō sukoshi hiroi kaigishitsu ni kaetai desu.|참석자가 늘어서 좀 더 넓은 회의실로 바꾸고 싶어요.', 'equipment', 'もう少し広い会議室に変えたいです', '広い会議室に変更できますか'),
        mismatch('cancel', '会議は中止ですね。|Kaigi wa chūshi desu ne.|회의는 취소된 거군요.', '예정된 회의의 시간이나 장소를 바꿀 수 있는지 말해 보세요.')),
      'end-time': turn('午後三時からなら同じ会議室が空いています。何時まで押さえますか。|Gogo sanji kara nara onaji kaigishitsu ga aiteimasu. Nanji made osaemasu ka?|오후 3시부터라면 같은 회의실이 비어 있어요. 몇 시까지 잡을까요?', '종료 시각이 오후 4시라면 「四時まで」라고 답해요.',
        reply('until-four', '四時まででお願いします。|Yoji made de onegai shimasu.|4시까지 부탁해요.', 'notify', '四時までお願いします', '午後四時までお願いします', '三時から四時まででお願いします'),
        mismatch('start-at-four', '四時からでお願いします。|Yoji kara de onegai shimasu.|4시부터 부탁해요.', '시작은 3시예요. 여기서는 회의실을 몇 시까지 쓸지 물었어요.')),
      notify: turn('三時から四時までですね。予約を変更しました。参加者への連絡をお願いできますか。|Sanji kara yoji made desu ne. Yoyaku o henkō shimashita. Sankasha e no renraku o onegai dekimasu ka?|3시부터 4시까지군요. 예약을 변경했어요. 참가자들에게 연락해 주실 수 있나요?', '참가자에게 변경 사실을 전하려면 「変更後の時刻を共有します」라고 할 수 있어요.',
        finish('tell-team', 'はい、変更後の時刻を共有します。|Hai, henkōgo no jikoku o kyōyū shimasu.|네, 변경된 시간을 공유할게요.', 'time-changed', '参加者に連絡します', '変更した時刻を知らせます', 'はい、参加者に伝えます'),
        mismatch('reserve-again', 'では、私も同じ部屋を予約します。|Dewa, watashi mo onaji heya o yoyaku shimasu.|그럼 저도 같은 방을 예약할게요.', '예약 변경을 마쳤어요. 지금 필요한 것은 참가자에게 새 시간을 알리는 일이에요.')),
      equipment: turn('四階に広い部屋がありますが、モニターがありません。モニターは必要ですか。|Yonkai ni hiroi heya ga arimasu ga, monitā ga arimasen. Monitā wa hitsuyō desu ka?|4층에 넓은 방이 있지만 모니터가 없어요. 모니터가 필요하세요?', '자료를 화면에 띄우려면 모니터가 필요하다고 말해 보세요.',
        reply('need-monitor', '資料を画面に映したいので、モニターが必要です。|Shiryō o gamen ni utsushitai node, monitā ga hitsuyō desu.|자료를 화면에 띄우려면 모니터가 필요해요.', 'keep-time', 'はい、モニターが必要です', 'モニターがある部屋をお願いします', '資料を映せる部屋はありますか'),
        mismatch('without-screen', 'モニターは必要ありません。|Monitā wa hitsuyō arimasen.|모니터는 필요 없어요.', '이번 연습에서는 참가자에게 화면으로 자료를 보여 줘야 해요. 모니터가 필요하다고 알려 주세요.')),
      'keep-time': turn('五階の会議室ならモニターが使えます。時間帯は今の予約のままでよろしいですか。|Gokai no kaigishitsu nara monitā ga tsukaemasu. Jikantai wa ima no yoyaku no mama de yoroshii desu ka?|5층 회의실에서는 모니터를 쓸 수 있어요. 시간대는 기존 예약대로 할까요?', '「場所だけ」는 장소만이라는 뜻이에요. 시작 시각은 유지한다고 답해요.',
        finish('room-only', 'はい、場所だけ変えてください。|Hai, basho dake kaete kudasai.|네, 장소만 바꿔 주세요.', 'room-changed', '時間はそのままでお願いします', '場所だけ変更してください', '今の時間のままで大丈夫です'),
        mismatch('delay-time-too', '時間も一時間遅らせてください。|Jikan mo ichijikan okurasete kudasai.|시간도 한 시간 늦춰 주세요.', '이번에는 사용할 장비 때문에 방만 옮겨요. 시간은 기존 예약대로라고 알려 주세요.'))
    },
    endings: {
      'time-changed': line('助かります。会議室はこれまでと同じです。|Tasukarimasu. Kaigishitsu wa kore made to onaji desu.|고마워요. 회의실은 원래와 같아요.'),
      'room-changed': line('承知しました。開始は午後二時のままで、場所は五階の会議室です。|Shōchi shimashita. Kaishi wa gogo niji no mama de, basho wa gokai no kaigishitsu desu.|알겠습니다. 시작은 오후 2시 그대로고, 장소는 5층 회의실이에요.')
    }
  }
];

export const libraryAndMeetingVocabulary = [
  ...vocabularyRows('library-loans', `
on-loan|貸出中|かしだしちゅう|kashidashichū|대출 중|貸出中の本は予約できます。|Kashidashichū no hon wa yoyaku dekimasu.|대출 중인 책은 예약할 수 있어요.
loan-period|貸出期間|かしだしきかん|kashidashi kikan|대출 기간|この本の貸出期間は二週間です。|Kono hon no kashidashi kikan wa nishūkan desu.|이 책의 대출 기간은 2주예요.
due-date|返却期限|へんきゃくきげん|henkyaku kigen|반납 기한|返却期限は来週の火曜日です。|Henkyaku kigen wa raishū no kayōbi desu.|반납 기한은 다음 주 화요일이에요.
lending|貸し出し|かしだし|kashidashi|빌려줌, 대출|本の貸し出しはカウンターで行います。|Hon no kashidashi wa kauntā de okonaimasu.|책 대출은 카운터에서 합니다.
returning|返却|へんきゃく|henkyaku|반납|返却の際は、利用カードは不要です。|Henkyaku no sai wa, riyō kādo wa fuyō desu.|반납할 때는 회원증이 필요 없어요.
return-box|返却ポスト|へんきゃくぽすと|henkyaku posuto|도서 반납함|閉館後は返却ポストをご利用ください。|Heikango wa henkyaku posuto o goriyō kudasai.|운영이 끝난 뒤에는 반납함을 이용해 주세요.
library-card|利用カード|りようかーど|riyō kādo|도서관 이용증, 회원증|利用カードは受付で作れます。|Riyō kādo wa uketsuke de tsukuremasu.|회원증은 접수처에서 만들 수 있어요.
loan-quantity|貸出冊数|かしだしさっすう|kashidashi sassū|대출 권수|一人当たりの貸出冊数は五冊までです。|Hitori atari no kashidashi sassū wa gosatsu made desu.|한 사람당 대출은 다섯 권까지예요.
collection|蔵書|ぞうしょ|zōsho|소장 도서|蔵書はウェブで検索できます。|Zōsho wa webu de kensaku dekimasu.|소장 도서는 웹에서 검색할 수 있어요.
reading-on-site|閲覧|えつらん|etsuran|열람|この資料は館内でのみ閲覧できます。|Kono shiryō wa kannai de nomi etsuran dekimasu.|이 자료는 관내에서만 열람할 수 있어요.
library-opening|開館|かいかん|kaikan|시설이 문을 엶, 개관|開館は午前九時です。|Kaikan wa gozen kuji desu.|도서관은 오전 9시에 문을 열어요.
library-closing|閉館|へいかん|heikan|시설이 문을 닫음, 폐관|閉館まであと二十分です。|Heikan made ato nijuppun desu.|문을 닫기까지 20분 남았어요.
ordering-from-another-branch|取り寄せ|とりよせ|toriyose|다른 곳에서 가져오도록 요청함|別の図書館からの取り寄せに一週間ほどかかります。|Betsu no toshokan kara no toriyose ni isshūkan hodo kakarimasu.|다른 도서관에서 가져오는 데 일주일쯤 걸려요.
loan-history|貸出履歴|かしだしりれき|kashidashi rireki|대출 이력|利用者は自分の貸出履歴を確認できます。|Riyōsha wa jibun no kashidashi rireki o kakunin dekimasu.|이용자는 자신의 대출 이력을 확인할 수 있어요.
hold-deadline|受取期限|うけとりきげん|uketori kigen|수령 기한|予約した本の受取期限が近づいています。|Yoyaku shita hon no uketori kigen ga chikazuiteimasu.|예약한 책을 찾아갈 기한이 다가오고 있어요.
`),
  ...vocabularyRows('meeting-room-change', `
business-meeting|打ち合わせ|うちあわせ|uchiawase|업무 협의, 회의|明日の打ち合わせは午後二時からです。|Ashita no uchiawase wa gogo niji kara desu.|내일 회의는 오후 2시부터예요.
meeting-room|会議室|かいぎしつ|kaigishitsu|회의실|会議室は五階にあります。|Kaigishitsu wa gokai ni arimasu.|회의실은 5층에 있어요.
start-time|開始時刻|かいしじこく|kaishi jikoku|시작 시각|変更後の開始時刻をお知らせします。|Henkōgo no kaishi jikoku o oshirase shimasu.|바뀐 시작 시각을 알려 드릴게요.
put-back|遅らせる|おくらせる|okuraseru|뒤로 늦추다|会議の開始を十分遅らせました。|Kaigi no kaishi o juppun okurasemashita.|회의 시작을 10분 늦췄어요.
availability|都合|つごう|tsugō|형편, 일정이 맞는지 여부|木曜の午後なら都合がいいです。|Mokuyō no gogo nara tsugō ga ii desu.|목요일 오후라면 시간이 괜찮아요.
attendees|出席者|しゅっせきしゃ|shussekisha|참석자|出席者が増えたので、大きい部屋に変えます。|Shussekisha ga fueta node, ōkii heya ni kaemasu.|참석자가 늘어서 큰 방으로 바꿀게요.
free-slot|空き時間|あきじかん|akijikan|빈 시간, 여유 시간|午後に三十分ほど空き時間があります。|Gogo ni sanjuppun hodo akijikan ga arimasu.|오후에 30분 정도 빈 시간이 있어요.
materials|資料|しりょう|shiryō|자료|会議の資料を事前に送ります。|Kaigi no shiryō o jizen ni okurimasu.|회의 자료를 미리 보내겠습니다.
project-onto-screen|映す|うつす|utsusu|화면 등에 비추다, 띄우다|資料を画面に映してください。|Shiryō o gamen ni utsushite kudasai.|자료를 화면에 띄워 주세요.
screen-sharing|画面共有|がめんきょうゆう|gamen kyōyū|화면 공유|オンラインの参加者には画面共有で資料を見せます。|Onrain no sankasha ni wa gamen kyōyū de shiryō o misemasu.|온라인 참가자에게는 화면 공유로 자료를 보여 줘요.
hold-a-room|部屋を押さえる|へやをおさえる|heya o osaeru|미리 방을 잡아 두다|先に部屋を押さえておきます。|Saki ni heya o osaete okimasu.|먼저 방을 잡아 둘게요.
shift-the-time|時間をずらす|じかんをずらす|jikan o zurasu|시간을 앞뒤로 조정하다|別の会議と重なるので、時間をずらしましょう。|Betsu no kaigi to kasanaru node, jikan o zurashimashō.|다른 회의와 겹치니 시간을 조정합시다.
time-required|所要時間|しょようじかん|shoyō jikan|걸리는 시간, 소요 시간|説明の所要時間は二十分ほどです。|Setsumei no shoyō jikan wa nijuppun hodo desu.|설명에는 20분 정도 걸려요.
run-long|延びる|のびる|nobiru|시간이 늘어나거나 늦춰지다|質疑が長引いて、会議が予定より三十分延びました。|Shitsugi ga nagabiite, kaigi ga yotei yori sanjuppun nobimashita.|질의가 길어져서 회의가 예정보다 30분 길어졌어요.
points-to-communicate|連絡事項|れんらくじこう|renraku jikō|전달 사항|最初に連絡事項をお伝えします。|Saisho ni renraku jikō o otsutae shimasu.|먼저 전달 사항을 알려 드릴게요.
`)
];
