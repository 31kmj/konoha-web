import { passageQuestion as question } from './passage-question.mjs';

export const everydayN3Reading = [
  question('n3-everyday-lost-counter', '역의 분실물 수령 안내', [
    '駅で見つかった忘れ物は、当日中はその駅の窓口でお預かりします。|Eki de mitsukatta wasuremono wa, tōjitsuchū wa sono eki no madoguchi de oazukari shimasu.|역에서 발견된 분실물은 그날까지 해당 역 창구에서 보관합니다.',
    '翌日以降は、中央案内所で保管します。|Yokujitsu ikō wa, chūō annaijo de hokan shimasu.|다음 날부터는 중앙 안내소에서 보관합니다.',
    '取りに来る前に、受付番号と保管場所をご確認ください。|Tori ni kuru mae ni, uketsuke bangō to hokan basho o gokakunin kudasai.|찾으러 오기 전에 접수 번호와 보관 장소를 확인해 주세요.'
  ], '역에서 오늘 발견한 가방을 내일 찾으려면 어떻게 해야 하나요?', [
    '오늘 발견된 역의 창구로 바로 간다.',
    '접수 번호와 장소를 확인하고 중앙 안내소로 간다.',
    '내일이 지나야 접수 번호를 확인할 수 있다.'
  ], 1, [1, 2],
  '「翌日以降」는 다음 날부터를 뜻해요. 내일은 중앙 안내소에 보관되며, 찾으러 가기 전에 접수 번호와 장소를 확인하라는 안내가 있어요.'),
  question('n3-everyday-redelivery-notice', '재배송 예약 변경 안내', [
    '再配達の時間帯は、配達予定日の午前十時まで変更できます。|Saihaitatsu no jikantai wa, haitatsu yoteibi no gozen jūji made henkō dekimasu.|재배송 시간대는 배송 예정일 오전 10시까지 바꿀 수 있습니다.',
    '変更する際は、不在票に記載された送り状番号を入力してください。|Henkō suru sai wa, fuzaihyō ni kisai sareta okurijō bangō o nyūryoku shite kudasai.|시간대를 바꿀 때는 부재중 배송 안내서에 적힌 운송장 번호를 입력해 주세요.',
    '営業所での受け取りを希望する方には、準備ができ次第、ご連絡します。|Eigyōsho de no uketori o kibō suru kata ni wa, junbi ga deki shidai, gorenraku shimasu.|영업소에서 찾기를 원하시는 분께는 준비되는 대로 연락드립니다.'
  ], '집으로 재배송을 신청한 사람이 예정일 오전 9시에 시간대를 바꾸려면 무엇을 하나요?', [
    '부재중 배송 안내서의 운송장 번호를 입력해 시간대를 바꾼다.',
    '영업소에서 연락이 올 때까지 기다린다.',
    '오전 10시가 지난 뒤 시간대를 변경한다.'
  ], 0, [0, 1],
  '「午前十時まで」이므로 오전 9시에도 바꿀 수 있어요. 변경에는 「送り状番号」가 필요해요. 영업소에서 보내는 연락은 그곳에서 직접 받을 사람을 위한 안내예요.'),
  question('n3-everyday-visit-reschedule', '전시 관람 예약 변경 안내', [
    '観覧予約は、予約日の前日までは予約サイトで変更できます。|Kanran yoyaku wa, yoyakubi no zenjitsu made wa yoyaku saito de henkō dekimasu.|관람 예약은 예약일 전날까지 예약 사이트에서 바꿀 수 있습니다.',
    '当日の変更は、午後三時までに電話でご相談ください。|Tōjitsu no henkō wa, gogo sanji made ni denwa de gosōdan kudasai.|당일 변경은 오후 3시까지 전화로 문의해 주세요.',
    'メールでのお問い合わせには、翌日以降にお返事します。|Mēru de no otoiawase ni wa, yokujitsu ikō ni ohenji shimasu.|이메일 문의에는 다음 날 이후에 답변합니다.'
  ], '예약한 날 오후 2시에 관람 시간을 변경하려면 어떤 방법을 써야 하나요?', [
    '메일을 보내 오늘 답변을 기다린다.',
    '예약 사이트에서 시간을 변경한다.',
    '오후 3시까지 전화로 문의한다.'
  ], 2, [0, 1],
  '예약 사이트는 「前日まで」 이용할 수 있어요. 당일 변경은 「午後三時までに電話で」 문의하고, 이메일 답변은 다음 날 이후에 받아요.')
];

export const everydayN3Scripts = [
  question('n3-everyday-lost-call', '분실물 담당자가 남긴 연락', [
    '先ほどお問い合わせいただいた黒いかばんに似た物が、一つ届きました。|Sakihodo otoiawase itadaita kuroi kaban ni nita mono ga, hitotsu todokimashita.|아까 문의하신 검은 가방과 비슷한 물건이 하나 들어왔습니다.',
    '持ち手に白い目印があるか教えていただけますか。|Mochite ni shiroi mejirushi ga aru ka oshiete itadakemasu ka?|손잡이에 흰 표시가 있는지 알려 주시겠어요?',
    '確認できましたら、受け取り場所をお伝えします。|Kakunin dekimashitara, uketori basho o otsutae shimasu.|확인되면 찾으실 장소를 알려 드리겠습니다.'
  ], '담당자가 지금 해 달라고 요청한 것은 무엇인가요?', [
    '바로 창구에 가서 가방을 찾는다.',
    '가방 손잡이에 흰 표시가 있는지 알려 준다.',
    '잃어버린 장소를 다시 신고한다.'
  ], 1, [1, 2],
  '「持ち手に白い目印があるか」가 확인할 내용이에요. 비슷한 가방이 들어왔고, 특징으로 확인한 뒤에 수령 장소를 알려 준다고 했어요.'),
  question('n3-everyday-pickup-pending', '택배 영업소의 연락', [
    'お荷物は営業所に到着していますが、まだ受け取りの準備ができていません。|Onimotsu wa eigyōsho ni tōchaku shiteimasu ga, mada uketori no junbi ga dekiteimasen.|택배는 영업소에 도착했으나 아직 수령 준비가 되지 않았습니다.',
    '準備ができ次第、こちらからご連絡します。|Junbi ga deki shidai, kochira kara gorenraku shimasu.|준비되는 대로 저희가 연락드리겠습니다.',
    '本日は午後八時まで営業しております。|Honjitsu wa gogo hachiji made eigyō shiteorimasu.|오늘은 오후 8시까지 영업합니다.'
  ], '안내에 따르면 영업소에 가기 전에 무엇을 기다리면 되나요?', [
    '수령 준비가 끝났다는 연락을 기다린다.',
    '택배가 영업소에 도착했다는 첫 연락을 기다린다.',
    '오늘 영업이 끝나는 오후 8시까지 기다린다.'
  ], 0, [0, 1],
  '택배는 이미 도착했어요. 「準備ができ次第」는 수령 준비가 끝나는 대로라는 뜻이에요. 오후 8시는 영업시간을 알려 준 것이에요.'),
  question('n3-everyday-clinic-appointment', '진료 예약 변경 전화', [
    '木曜日の午前にご予約いただいた診察ですが、担当医が変わります。|Mokuyōbi no gozen ni goyoyaku itadaita shinsatsu desu ga, tantōi ga kawarimasu.|목요일 오전에 예약하신 진료의 담당 의사가 바뀝니다.',
    '同じ医師をご希望の場合は、金曜日の午後にご案内できます。|Onaji ishi o gokibō no baai wa, kin’yōbi no gogo ni goannai dekimasu.|같은 의사에게 진료받길 원하시면 금요일 오후로 안내할 수 있습니다.',
    '木曜日のままでよろしければ、ご予約の時間にお越しください。|Mokuyōbi no mama de yoroshikereba, goyoyaku no jikan ni okoshi kudasai.|목요일 그대로 괜찮으시면 기존 예약 시간에 오세요.'
  ], '기존에 예약한 의사에게 진료받으려면 언제로 바꿔야 하나요?', [
    '목요일 오전',
    '금요일 오전',
    '금요일 오후'
  ], 2, [0, 1],
  '「同じ医師をご希望の場合」라는 조건을 확인해요. 같은 의사를 원하면 금요일 오후이고, 목요일 기존 시간에는 다른 의사가 담당해요.')
];
