import { passageQuestion as question } from './passage-question.mjs';

export const listeningByLevel = {
  N5: [
    question('counter-payment', '계산대 직원의 말', [
      '全部で八百円です。|Zenbu de happyaku en desu.|전부 800엔입니다.',
      '袋は要りますか。|Fukuro wa irimasu ka?|봉투 필요하세요?'
    ], '물건값은 모두 얼마인가요?', ['800엔', '80엔', '1,800엔'], 0, [0],
    '「八百」는 「はっぴゃく」로 읽고 800을 뜻해요. 뒤의 질문은 봉투가 필요한지 묻고 있어요.'),
    question('friend-meeting', '친구가 남긴 음성 메시지', [
      '明日は午後三時に会いましょう。|Ashita wa gogo sanji ni aimashō.|내일 오후 3시에 만나요.',
      '銀行の前で待っています。|Ginkō no mae de matteimasu.|은행 앞에서 기다릴게요.'
    ], '어디에서 만나기로 했나요?', ['역 뒤', '은행 앞', '은행 안'], 1, [1],
    '「銀行」은 은행, 「前」는 앞이에요. 「銀行の前」 전체를 장소 표현으로 들어요.'),
    question('cafe-order', '카페에서 주문 확인', [
      'コーヒーは一杯ですね。|Kōhī wa ippai desu ne.|커피 한 잔 맞으시죠?',
      'ケーキは二つですね。|Kēki wa futatsu desu ne.|케이크는 두 개 맞으시죠?'
    ], '케이크는 몇 개 주문했나요?', ['한 개', '세 개', '두 개'], 2, [1],
    '「二つ」가 케이크 개수예요. 먼저 나온 「一杯」는 커피처럼 잔에 담는 것을 셀 때 쓰는 단위예요.')
  ],
  N4: [
    question('cash-locker', '보관함 사용 안내', [
      'こちらのロッカーは現金でしかお支払いいただけません。|Kochira no rokkā wa genkin de shika oshiharai itadakemasen.|이 보관함은 현금으로만 결제할 수 있습니다.',
      '小銭がなければ、入口の両替機をお使いください。|Kozeni ga nakereba, iriguchi no ryōgaeki o otsukai kudasai.|동전이 없으면 입구의 교환기를 이용해 주세요.'
    ], '동전이 없는 사람이 이 보관함을 이용하려면 어떻게 하나요?', ['카드로 결제한다.', '입구에서 동전을 바꾼다.', '출구에서 짐을 꺼낸다.'], 1, [0, 1],
    '「しか…ません」이 현금만 된다는 제한을 만들어요. 동전이 없으면 「両替機」를 쓰라고 안내해요.'),
    question('store-transfer', '옷 가게 직원의 안내', [
      '黒のエムサイズは売り切れです。青なら同じサイズの在庫があります。|Kuro no emu saizu wa urikire desu. Ao nara onaji saizu no zaiko ga arimasu.|검은색 M 사이즈는 품절이에요. 파란색이라면 같은 사이즈의 재고가 있어요.',
      '黒をご希望でしたら、明日の午後に入荷する予定です。|Kuro o gokibō deshitara, ashita no gogo ni nyūka suru yotei desu.|검은색을 원하시면 내일 오후에 입고될 예정이에요.'
    ], '검은색 M 사이즈를 원한다면 언제 입고될 예정인가요?', ['내일 오후', '오늘 오후', '내일 오전'], 0, [1],
    '「明日の午後」는 내일 오후예요. 당장 재고가 있는 것은 파란색 같은 사이즈입니다.'),
    question('pharmacy-questions', '약사에게 문의하기 전 안내', [
      'お薬についてご質問がある方は、青い番号札を取ってお待ちください。|Okusuri ni tsuite goshitsumon ga aru kata wa, aoi bangōfuda o totte omachi kudasai.|약에 관해 질문이 있으신 분은 파란 번호표를 뽑고 기다려 주세요.',
      'お会計だけの方は、そのままレジへお進みください。|Okaikei dake no kata wa, sono mama reji e osusumi kudasai.|결제만 하실 분은 그대로 계산대로 가 주세요.'
    ], '약 복용법을 물어보고 싶다면 먼저 무엇을 하나요?', ['바로 결제한다.', '흰 번호표를 뽑는다.', '파란 번호표를 뽑고 기다린다.'], 2, [0, 1],
    '「ご質問がある方」에 해당하므로 파란 번호표를 받아요. 「だけ」가 붙은 둘째 안내는 결제만 하는 사람에게 해당해요.')
  ],
  N3: [
    question('clinic-appointment', '의원 예약 전화 안내', [
      '水曜の午前中は予約がいっぱいです。水曜の午後は再診の方のみ受け付けています。|Suiyō no gozenchū wa yoyaku ga ippai desu. Suiyō no gogo wa saishin no kata nomi uketsuketeimasu.|수요일 오전은 예약이 꽉 찼습니다. 수요일 오후는 재진 환자만 받습니다.',
      '初診でしたら、金曜の午後三時に空きがあります。|Shoshin deshitara, kin’yō no gogo sanji ni aki ga arimasu.|초진이라면 금요일 오후 3시에 빈자리가 있습니다.'
    ], '이 의원에 처음 가는 사람이 예약할 수 있는 시간은 언제인가요?', ['수요일 오전', '금요일 오후 3시', '수요일 오후'], 1, [0, 1],
    '처음이면 「初診」에 해당해요. 수요일 오후에는 「再診の方のみ」라고 제한했으니 금요일 시간이 맞아요.'),
    question('viewing-change', '부동산에서 걸려 온 전화', [
      '土曜の午前に予定していた内見ですが、前の方の退去が遅れています。|Doyō no gozen ni yotei shiteita naiken desu ga, mae no kata no taikyo ga okureteimasu.|토요일 오전에 예정했던 집 보기 일정인데, 이전 입주자가 집을 비우는 일이 늦어지고 있어요.',
      '同じ部屋を見るには日曜の午後までお待ちください。土曜の午前なら、隣の部屋をご案内できます。|Onaji heya o miru ni wa nichiyō no gogo made omachi kudasai. Doyō no gozen nara, tonari no heya o goannai dekimasu.|같은 방을 보려면 일요일 오후까지 기다려 주세요. 토요일 오전이라면 옆 방을 안내해 드릴 수 있어요.'
    ], '예약했던 바로 그 방을 보고 싶다면 언제 가야 하나요?', ['일요일 오후', '토요일 오전', '일요일 오전'], 0, [1],
    '「同じ部屋」는 원래 예약한 방이에요. 토요일 오전에 볼 수 있는 것은 「隣の部屋」로 구별돼요.'),
    question('train-disruption-bus', '열차 운행 중지 안내 방송', [
      '現在、東口からのバスは混雑のため乗車まで二十分ほどかかっています。|Genzai, higashiguchi kara no basu wa konzatsu no tame jōsha made nijuppun hodo kakatteimasu.|현재 동쪽 출구에서 타는 버스는 혼잡으로 승차까지 약 20분 걸립니다.',
      'お急ぎの方は西口から地下鉄をご利用ください。地下鉄は平常どおり運転しています。|Oisogi no kata wa nishiguchi kara chikatetsu o goriyō kudasai. Chikatetsu wa heijō dōri unten shiteimasu.|급하신 분은 서쪽 출구에서 지하철을 이용해 주세요. 지하철은 평소대로 운행하고 있습니다.'
    ], '시간이 촉박한 사람이 안내에 따라 할 일은 무엇인가요?', ['동쪽 출구에 가서 버스를 기다린다.', '서쪽 출구에 가서 임시 버스를 탄다.', '서쪽 출구에서 지하철로 간다.'], 2, [0, 1],
    '「お急ぎの方」를 위한 안내는 서쪽 출구의 지하철이에요. 동쪽 출구의 버스에는 승차 대기가 있어요.')
  ],
  N2: [
    question('attachment-correction', '동료가 남긴 견적서 수정 메시지', [
      '先ほどメールでお送りした見積書ですが、金額欄に修正がありました。|Sakihodo mēru de ookuri shita mitsumorisho desu ga, kingakuran ni shūsei ga arimashita.|조금 전 이메일로 보내 드린 견적서의 금액란에 수정 사항이 있었습니다.',
      '最新版は共有フォルダにあります。確認が済むまでは、先ほどのメールを取引先に転送しないでください。|Saishinban wa kyōyū foruda ni arimasu. Kakunin ga sumu made wa, sakihodo no mēru o torihikisaki ni tensō shinaide kudasai.|최신본은 공유 폴더에 있어요. 확인이 끝날 때까지 조금 전 이메일을 거래처에 전달하지 마세요.'
    ], '이 메시지를 받은 사람이 먼저 할 일은 무엇인가요?', ['이메일에 첨부된 문서를 거래처에 보낸다.', '공유 폴더에서 최신본을 확인한다.', '공유 폴더 파일을 이전 버전으로 되돌린다.'], 1, [0, 1],
    '이메일 첨부본 뒤에 수정이 있었어요. 「確認が済むまでは」의 제한에 따라 전송을 보류하고 공유 폴더의 최신본을 확인해요.'),
    question('tour-rebook', '견학 담당자의 일정 변경 안내', [
      '午前の見学は中止です。午後の回に振り替えられますが、定員に達し次第、受付を終了します。|Gozen no kengaku wa chūshi desu. Gogo no kai ni furikaeraremasu ga, teiin ni tasshishidai, uketsuke o shūryō shimasu.|오전 견학은 취소입니다. 오후 회차로 옮길 수 있지만 정원이 차는 즉시 접수를 마칩니다.',
      '振り替えをご希望の方は、このあと受付でお申し出ください。返金をご希望の方には、別の窓口をご案内します。|Furikae o gokibō no kata wa, kono ato uketsuke de omōshide kudasai. Henkin o gokibō no kata ni wa, betsu no madoguchi o goannai shimasu.|일정 변경을 원하시면 안내가 끝난 뒤 접수처에 말씀해 주세요. 환불을 원하시면 별도 창구를 안내합니다.'
    ], '오후 견학에 참여하고 싶은 사람은 무엇을 해야 하나요?', ['안내가 끝난 뒤 접수처에서 변경을 요청한다.', '환불 창구에서 돈을 돌려받는다.', '아무 신청 없이 오후까지 기다린다.'], 0, [0, 1],
    '「振り替え」는 다른 회차로 옮기는 것이에요. 정원에 이르기 전에 접수처에 의사를 알려야 해요.'),
    question('application-end', '요금제 변경 접수 상담', [
      '来月からプランを変更するには、本日中に申請が必要です。書類の確認は明日になります。|Raigetsu kara puran o henkō suru ni wa, honjitsuchū ni shinsei ga hitsuyō desu. Shorui no kakunin wa ashita ni narimasu.|다음 달부터 요금제를 바꾸려면 오늘 안에 신청해야 합니다. 서류 확인은 내일 합니다.',
      '不備があればこちらからご連絡しますので、同じ申請を重ねて出す必要はありません。|Fubi ga areba kochira kara gorenraku shimasu node, onaji shinsei o kasanete dasu hitsuyō wa arimasen.|미비한 점이 있으면 저희가 연락드리므로 같은 신청을 다시 내실 필요는 없습니다.'
    ], '다음 달부터 바꾸려면 지금 어떻게 해야 하나요?', ['내일 서류가 확인되면 처음 신청한다.', '서류가 처리될 때까지 신청을 여러 번 제출한다.', '오늘 한 번 신청하고 서류 확인 결과를 기다린다.'], 2, [0, 1],
    '오늘까지 해야 할 것은 신청이에요. 서류 확인은 나중이고, 미비하면 담당자가 연락한다고 했어요.')
  ],
  N1: [
    question('briefing-hold', '주민 설명회에서 담당자의 발언', [
      '混雑の緩和を示すデータは得られましたが、誘導員の負担と費用は試行前の想定を上回りました。|Konzatsu no kanwa o shimesu dēta wa eraremashita ga, yūdōin no futan to hiyō wa shikōmae no sōtei o uwamawarimashita.|혼잡 완화를 보여 주는 데이터는 얻었지만, 안내 인력의 부담과 비용은 사전 예상보다 컸습니다.',
      '効果があったこと自体を否定するつもりはありません。続けられるかどうかは、配置を変えた場合の費用を確かめてから判断します。|Kōka ga atta koto jitai o hitei suru tsumori wa arimasen. Tsuzukerareru ka dō ka wa, haichi o kaeta baai no hiyō o tashikamete kara handan shimasu.|효과가 있었다는 점은 인정합니다. 계속할 수 있을지는 인력 배치를 바꿀 때 드는 비용을 확인한 뒤 판단하겠습니다.'
    ], '담당자는 사업을 계속할지에 대해 어떤 입장인가요?', ['효과가 없어서 바로 중단한다.', '효과는 인정하고, 배치 변경 비용을 확인한 뒤 결정한다.', '결과가 좋으므로 현재 배치를 그대로 확정한다.'], 1, [0, 1],
    '효과와 지속 가능성을 구분해요. 「確かめてから判断します」는 비용을 확인한 다음 판단한다는 뜻이에요.'),
    question('editorial-scope', '편집 회의에서 편집자의 의견', [
      '問題は数字そのものより、見出しがどこまで言い切っているかです。回答数が少ないことだけを理由に記事を落とすつもりはありません。|Mondai wa sūji sono mono yori, midashi ga doko made iikitteiru ka desu. Kaitōsū ga sukunai koto dake o riyū ni kiji o otosu tsumori wa arimasen.|문제는 숫자 자체보다 제목이 어디까지 단정하는지입니다. 응답 수가 적다는 이유만으로 기사를 빼려는 건 아닙니다.',
      '見出しに調査した範囲が伝わる表現を入れてください。表の数値はそのままで構いません。|Midashi ni chōsa shita han’i ga tsutawaru hyōgen o irete kudasai. Hyō no sūchi wa sono mama de kamaimasen.|제목에 조사 범위가 드러나는 표현을 넣어 주세요. 표의 수치는 그대로 두어도 됩니다.'
    ], '편집자가 요청한 수정은 무엇인가요?', ['제목에 조사 범위를 드러낸다.', '표의 수치를 높인다.', '응답 수가 적으니 기사를 뺀다.'], 0, [0, 1],
    '「どこまで言い切っているか」가 문제의 범위를 짚어요. 편집자는 기사나 표가 아닌 제목의 표현 범위를 조정하라고 해요.'),
    question('consultation-context', '설명회에서 자문 절차 설명', [
      '審議会の答申は受け取りました。ただし、それをもって最終案が決まったわけではありません。|Shingikai no tōshin wa uketorimashita. Tadashi, sore o motte saishūan ga kimatta wake de wa arimasen.|심의회의 공식 답변은 받았습니다. 다만 그것으로 최종안이 확정된 것은 아닙니다.',
      '答申を踏まえて案を修正したうえで、住民から再度意見を募り、その結果も併せて公表します。|Tōshin o fumaete an o shūsei shita ue de, jūmin kara saido iken o tsunori, sono kekka mo awasete kōhyō shimasu.|공식 답변을 반영해 안을 수정한 뒤 주민 의견을 다시 모집하고, 그 결과도 함께 공개합니다.'
    ], '발표자가 설명한 다음 절차는 무엇인가요?', ['자문 답변을 받은 상태에서 최종안을 즉시 확정한다.', '주민 의견 수렴을 이미 마쳤으므로 다음 단계 없이 발표한다.', '자문 답변을 반영해 안을 수정하고 주민 의견을 다시 받는다.'], 2, [0, 1],
    '「～わけではありません」가 최종 확정을 부정해요. 「修正したうえで」 뒤에 주민 의견을 다시 모으는 단계가 이어져요.')
  ]
};
