import { passageQuestion as question } from './passage-question.mjs';

export const readingByLevel = {
  N5: [
    question('library-closed', '도서관 이용 안내', [
      '図書館は火曜日から日曜日まで開いています。|Toshokan wa kayōbi kara nichiyōbi made aiteimasu.|도서관은 화요일부터 일요일까지 열어요.',
      '月曜日は休みです。|Getsuyōbi wa yasumi desu.|월요일은 휴관이에요.'
    ], '도서관이 문을 닫는 요일은 언제인가요?', ['월요일', '화요일', '일요일'], 0, [1],
    '「月曜日」는 월요일, 「休み」는 쉬는 날이에요. 화요일과 일요일은 개관 기간에 들어가요.'),
    question('stamp-position', '엽서 쓰는 법', [
      'はがきの右上に切手を貼ってください。|Hagaki no migiue ni kitte o hatte kudasai.|엽서 오른쪽 위에 우표를 붙여 주세요.',
      '住所は表に書きます。|Jūsho wa omote ni kakimasu.|주소는 앞면에 씁니다.'
    ], '우표는 엽서의 어디에 붙이나요?', ['왼쪽 위', '오른쪽 위', '뒷면 아래'], 1, [0],
    '「右上」는 오른쪽 위예요. 두 번째 문장은 우표가 아닌 주소를 어디에 쓰는지 설명해요.'),
    question('shopping-memo', '장을 보는 가족에게 남긴 메모', [
      '牛乳はもうあります。|Gyūnyū wa mō arimasu.|우유는 이미 있어요.',
      '帰りに卵とパンを買ってきてください。|Kaeri ni tamago to pan o katte kite kudasai.|돌아오는 길에 달걀과 빵을 사다 주세요.'
    ], '돌아오는 길에 무엇을 사야 하나요?', ['우유와 달걀', '우유와 빵', '달걀과 빵'], 2, [0, 1],
    '「もうあります」는 이미 있다는 뜻이고, 「卵とパン」은 새로 사야 할 두 가지예요.')
  ],
  N4: [
    question('bag-claim', '수하물 보관소 안내', [
      'お預かりした荷物は午後七時半までにお受け取りください。|Oazukari shita nimotsu wa gogo shichiji han made ni ouketori kudasai.|맡긴 짐은 저녁 7시 반까지 찾아 주세요.',
      '受け取りの際は、受付でお渡しした控えをお持ちください。|Uketori no sai wa, uketsuke de owatashi shita hikae o omochi kudasai.|짐을 찾을 때는 접수처에서 드린 보관증을 가져오세요.'
    ], '저녁에 짐을 찾으려는 사람에게 맞는 행동은 무엇인가요?', ['8시에 신분증을 가져간다.', '7시 반까지 보관증을 가져간다.', '7시 반 이후에 보관증을 가져간다.'], 1, [0, 1],
    '「までに」는 기한 이전을 뜻하고 「控え」는 접수할 때 받은 보관증이에요. 시간과 준비물을 함께 확인해야 해요.'),
    question('cafe-busy', '카페 좌석 이용 안내', [
      '午後二時までは、満席の場合に限り、席のご利用は一時間までです。|Gogo niji made wa, manseki no baai ni kagiri, seki no goriyō wa ichijikan made desu.|오후 2시까지는 만석일 때에 한해 좌석을 1시간까지 이용할 수 있어요.',
      '店内に空いている席があれば、時間を気にせずご利用ください。|Tennai ni aiteiru seki ga areba, jikan o ki ni sezu goriyō kudasai.|매장에 빈자리가 있으면 시간 걱정 없이 이용해 주세요.'
    ], '오후 1시에 카페에 빈자리가 있다면 어떻게 이용할 수 있나요?', ['시간 제한 없이 이용한다.', '한 시간만 머무른다.', '테이크아웃만 할 수 있다.'], 0, [0, 1],
    '「満席の場合に限り」는 만석일 때에만 적용하라는 말이에요. 빈자리가 있으면 이 제한은 적용되지 않아요.'),
    question('shop-exchange', '가게의 교환 안내', [
      'サイズ交換は購入後七日以内にお受けします。|Saizu kōkan wa kōnyūgo nanoka inai ni ouke shimasu.|사이즈 교환은 구매 뒤 7일 이내에 받습니다.',
      '商品とレシートを一緒にお持ちください。使った商品は交換できません。|Shōhin to reshīto o issho ni omochi kudasai. Tsukatta shōhin wa kōkan dekimasen.|상품과 영수증을 함께 가져오세요. 사용한 상품은 교환할 수 없습니다.'
    ], '이 가게에서 사이즈를 바꿀 수 있는 경우는 어느 것인가요?', ['이틀 전 산 상품을 이미 사용한 뒤 가져온다.', '열흘 전 산 미사용 상품과 영수증을 가져온다.', '닷새 전 산 미사용 상품과 영수증을 가져온다.'], 2, [0, 1],
    '기간은 7일 이내이고, 미사용 상품과 영수증이 함께 있어야 해요. 세 조건을 모두 확인해요.')
  ],
  N3: [
    question('clinic-first-visit', '의원의 월요일 접수 안내', [
      '月曜の午後は予約の方のみ診察します。|Getsuyō no gogo wa yoyaku no kata nomi shinsatsu shimasu.|월요일 오후에는 예약한 분만 진료합니다.',
      '予約なしの方は、午前十一時までに受付をお済ませください。|Yoyaku nashi no kata wa, gozen jūichiji made ni uketsuke o osumase kudasai.|예약하지 않은 분은 오전 11시까지 접수를 마쳐 주세요.',
      '初診の方は受付後に問診票をご記入いただきます。|Shoshin no kata wa uketsukego ni monshinhyō o gokinyū itadakimasu.|초진인 분은 접수 뒤 문진표를 작성합니다.'
    ], '예약이 없는 초진 환자가 월요일에 할 일은 무엇인가요?', ['오후에 와서 문진표만 작성한다.', '오전 11시까지 접수한 다음 문진표를 쓴다.', '정오에 접수하고 진찰권만 보여 준다.'], 1, [1, 2],
    '예약이 없으면 오전 11시가 접수 마감이에요. 「受付後」는 초진 문진표를 접수한 뒤에 쓰라는 안내예요.'),
    question('apartment-conditions', '임대 주택 두 곳 비교', [
      '桜町の物件は駅から徒歩四分で、敷金が家賃の二か月分かかります。|Sakuramachi no bukken wa eki kara toho yonpun de, shikikin ga yachin no nikagetsubun kakarimasu.|사쿠라마치 매물은 역에서 도보 4분이며, 보증금이 월세 두 달치예요.',
      '川沿いの物件は駅から徒歩十分ですが、敷金はかかりません。|Kawazoi no bukken wa eki kara toho juppun desu ga, shikikin wa kakarimasen.|강변 매물은 역에서 도보 10분이지만 보증금이 들지 않아요.',
      '内見の時間を決める前に、家賃以外にかかる費用もご確認ください。|Naiken no jikan o kimeru mae ni, yachin igai ni kakaru hiyō mo gokakunin kudasai.|집을 볼 시간을 정하기 전에, 월세 외에 드는 비용도 확인해 주세요.'
    ], '역까지 15분 이내면서 보증금이 없는 집을 찾는다면 어느 곳이 맞나요?', ['강변 매물', '사쿠라마치 매물', '조건에 맞는 곳이 없다.'], 0, [0, 1],
    '두 곳 모두 15분 이내지만 「敷金はかかりません」에 해당하는 강변 매물만 두 조건을 모두 충족해요.'),
    question('rail-alternatives', '운행 중지 구간 대체 교통', [
      '青葉駅から港町駅までの区間は、点検のため運休しています。|Aoba-eki kara Minatomachi-eki made no kukan wa, tenken no tame unkyū shiteimasu.|아오바역에서 미나토마치역까지는 점검으로 열차가 운행하지 않습니다.',
      '臨時バスは青葉駅の東口から出ますが、最終便は午後九時です。|Rinji basu wa Aoba-eki no higashiguchi kara demasu ga, saishūbin wa gogo kuji desu.|임시 버스는 아오바역 동쪽 출구에서 출발하며 막차는 오후 9시입니다.',
      '最終便の後は、西口から地下鉄に乗ってください。|Saishūbin no ato wa, nishiguchi kara chikatetsu ni notte kudasai.|막차가 떠난 뒤에는 서쪽 출구에서 지하철을 타 주세요.'
    ], '아오바역에 오후 9시 15분에 도착했다면 무엇을 해야 하나요?', ['동쪽 출구에서 임시 버스를 탄다.', '점검 구간의 열차를 탄다.', '서쪽 출구에서 지하철을 탄다.'], 2, [1, 2],
    '9시 15분은 9시 막차가 지난 시간이에요. 「最終便の後」에는 서쪽 출구 쪽 지하철을 이용하라고 안내해요.')
  ],
  N2: [
    question('handover-priority', '부재 중 업무 인수인계', [
      '取引先への見積書は木曜の正午までに送付する必要があります。共有フォルダに最新版を保存しました。|Torihikisaki e no mitsumorisho wa mokuyō no shōgo made ni sōfu suru hitsuyō ga arimasu. Kyōyū foruda ni saishinban o hozon shimashita.|거래처에 견적서를 목요일 정오까지 보내야 합니다. 공유 폴더에 최신본을 저장했어요.',
      'なお、先週の申請は承認待ちです。差し戻しの通知が来た場合に限り、内容を修正してください。|Nao, senshū no shinsei wa shōninmachi desu. Sashimodoshi no tsūchi ga kita baai ni kagiri, naiyō o shūsei shite kudasai.|지난주 신청은 승인 대기 중입니다. 반려 통지가 왔을 때만 내용을 수정해 주세요.',
      '承認結果が出るまで、申請の再提出は不要です。|Shōnin kekka ga deru made, shinsei no saiteishutsu wa fuyō desu.|승인 결과가 나올 때까지 신청서를 다시 낼 필요는 없어요.'
    ], '목요일 오전에 반려 통지가 없다면 우선 무엇을 해야 하나요?', ['승인 대기 건을 다시 제출한다.', '최신 견적서를 정오까지 거래처에 보낸다.', '지난주 신청을 먼저 수정한다.'], 1, [0, 1, 2],
    '견적서는 마감 전에 보내야 해요. 승인 대기 건의 수정은 「差し戻しの通知が来た場合に限り」에 해당할 때만 해요.'),
    question('renewal-memo', '서비스 갱신 안내문', [
      '自動更新を停止する場合は、満了日の三日前までに申請してください。|Jidō kōshin o teishi suru baai wa, manryōbi no mikka mae made ni shinsei shite kudasai.|자동 갱신을 중지하려면 만료일 사흘 전까지 신청해 주세요.',
      '停止手続きの完了後も、現在のプランは満了日まで利用できます。|Teishi tetsuzuki no kanryōgo mo, genzai no puran wa manryōbi made riyō dekimasu.|중지 절차를 마쳐도 현재 요금제는 만료일까지 이용할 수 있습니다.',
      '契約期間の途中で利用を終了したい場合は、別途、解約の手続きが必要です。|Keiyaku kikan no tochū de riyō o shūryō shitai baai wa, betto, kaiyaku no tetsuzuki ga hitsuyō desu.|계약 기간 중에 이용을 끝내려면 별도로 계약 해지 절차를 밟아야 합니다.'
    ], '현재 기간은 끝까지 쓰고 다음 계약만 갱신하지 않으려면 어떻게 하나요?', ['만료일 사흘 전까지 자동 갱신 중지를 신청한다.', '현재 계약을 즉시 해지한다.', '만료일에 자동 갱신 중지를 신청한다.'], 0, [0, 1],
    '갱신 중지는 만료일 사흘 전까지 신청해요. 현재 기간이 끝나기 전에 이용을 중단하고 싶을 때는 별도 해지가 필요해요.'),
    question('tour-refund-method', '견학 취소와 환불 방식', [
      '悪天候で本日の見学は中止となりました。代替日の参加を希望される方は、金曜までにお知らせください。|Akutenkō de honjitsu no kengaku wa chūshi to narimashita. Daitaibi no sanka o kibō sareru kata wa, kin’yō made ni oshirase kudasai.|악천후로 오늘 견학은 취소되었습니다. 대체일에 참여하고 싶다면 금요일까지 알려 주세요.',
      '連絡がない場合は返金扱いとなります。オンラインで購入された方には、購入時と同じ方法で返金します。|Renraku ga nai baai wa henkin atsukai to narimasu. Onrain de kōnyū sareta kata ni wa, kōnyūji to onaji hōhō de henkin shimasu.|연락이 없으면 환불 처리합니다. 온라인 구매자는 구매할 때와 같은 결제 수단으로 환불해 드립니다.',
      '窓口で現金にて購入された方は、受付番号が記載された控えを窓口にお持ちください。|Madoguchi de genkin nite kōnyū sareta kata wa, uketsuke bangō ga kisai sareta hikae o madoguchi ni omochi kudasai.|창구에서 현금으로 구매한 분은 접수 번호가 적힌 보관증을 창구에 가져오세요.'
    ], '온라인 구매자가 대체 날짜에 가지 않으려 합니다. 이 안내에 따라 어떻게 처리되나요?', ['금요일까지 연락해 대체일을 예약한다.', '접수 번호를 적어 현금 환불을 요청한다.', '연락하지 않으면 결제에 쓴 수단으로 환불된다.'], 2, [0, 1, 2],
    '금요일까지 연락하는 것은 대체일에 참여할 사람에게 해당해요. 연락하지 않으면 환불 처리되며, 창구 방문은 현금 구매자에게만 해당해요.')
  ],
  N1: [
    question('district-averages', '혼잡 지표를 해석한 사설', [
      '試行の結果、全地区を合わせた平均待ち時間は短くなった。しかし、中心部では列が短くなった一方、北側の住宅地では新たに行列が生じている。|Shikō no kekka, zenchiku o awaseta heikin machijikan wa mijikaku natta. Shikashi, chūshinbu de wa retsu ga mijikaku natta ippō, kitagawa no jūtakuchi de wa arata ni gyōretsu ga shōjiteiru.|시범 운영 뒤 전체 구역의 평균 대기 시간은 짧아졌다. 하지만 중심부의 줄이 줄어든 반면 북쪽 주택가에는 새로 대기 줄이 생겼다.',
      '平均値だけを見て施策を成功と評価すると、負担が移った先を見落としかねない。|Heikinchi dake o mite shisaku o seikō to hyōka suru to, futan ga utsutta saki o miotoshikanenai.|평균값만 보고 시책이 성공했다고 평가하면, 부담이 옮겨 간 곳을 놓칠 수 있다.',
      '全体の数値に加え、地区ごとの変化と住民への影響を確かめる必要がある。|Zentai no sūchi ni kuwae, chiku goto no henka to jūmin e no eikyō o tashikameru hitsuyō ga aru.|전체 수치에 더해 지역별 변화와 주민에게 미친 영향을 확인할 필요가 있다.'
    ], '필자가 주장하는 평가 방식은 무엇인가요?', ['평균을 제외하고 북쪽 주택가만 조사한다.', '전체 결과와 함께 지역별 변화 및 주민 부담을 살핀다.', '중심부 대기 시간이 줄었으니 평가를 종료한다.'], 1, [1, 2],
    '필자는 평균 자체를 버리자고 하지 않아요. 「に加え」로 전체 수치에 지역별 변화와 주민 영향을 함께 고려하자고 주장해요.'),
    question('sample-limits', '설문 조사 결과를 둘러싼 논평', [
      '調査では八割が新しい予約方式を便利だと答えた。回答はアプリを通じてのみ集められ、窓口で予約する人からは得られなかった。|Chōsa de wa hachiwari ga atarashii yoyaku hōshiki o benri da to kotaeta. Kaitō wa apuri o tsūjite nomi atsumerare, madoguchi de yoyaku suru hito kara wa erarenakatta.|조사에서는 80퍼센트가 새 예약 방식이 편리하다고 답했다. 응답은 앱을 통해서만 수집했고 창구에서 예약하는 사람에게서는 얻지 못했다.',
      'この結果はアプリ利用者の評価を示す資料にはなるが、利用者全体の賛否を直接示すものではない。|Kono kekka wa apuri riyōsha no hyōka o shimesu shiryō ni wa naru ga, riyōsha zentai no sanpi o chokusetsu shimesu mono de wa nai.|이 결과는 앱 이용자의 평가를 보여 주는 자료는 되지만, 전체 이용자의 찬반을 직접 보여 주지는 않는다.',
      '手続きの変更を判断する前に、窓口の利用者にも意見を聞きたい。|Tetsuzuki no henkō o handan suru mae ni, madoguchi no riyōsha ni mo iken o kikitai.|절차 변경을 판단하기 전에 창구 이용자에게도 의견을 듣고 싶다.'
    ], '필자가 지적한 설문의 한계는 무엇인가요?', ['응답이 앱을 쓰는 사람에게서만 수집됐다.', '앱을 쓰는 사람은 설문에 응답하지 않았다.', '조사 결과에 찬성과 반대가 집계되지 않았다.'], 0, [0, 1],
    '「のみ」가 응답 수집 경로를 한정해요. 앱 이용자의 평가는 보여 주지만 창구 이용자까지 대표하지 못한다는 지적이에요.'),
    question('print-and-digital', '시설 안내의 디지털 전환에 대한 기고', [
      '案内を電子化すると更新が容易になり、変更も早く伝えられる。ただし、端末を持っていることが前提になれば、利用できる人の範囲はかえって狭まる。|Annai o denshika suru to kōshin ga yōi ni nari, henkō mo hayaku tsutaerareru. Tadashi, tanmatsu o motteiru koto ga zentei ni nareba, riyō dekiru hito no han’i wa kaette sebamaru.|안내를 디지털화하면 갱신이 쉬워지고 변경 내용도 빨리 전달할 수 있다. 다만 기기를 가진 것이 전제가 되면 이용할 수 있는 사람의 범위는 오히려 좁아진다.',
      '紙の案内をすべて残すことが目的なのではない。必要な情報にたどり着く経路を一つに絞らないことが大切だ。|Kami no annai o subete nokosu koto ga mokuteki na no de wa nai. Hitsuyō na jōhō ni tadoritsuku keiro o hitotsu ni shiboranai koto ga taisetsu da.|종이 안내를 모두 유지하는 것이 목적은 아니다. 필요한 정보에 닿는 경로를 하나로 좁히지 않는 것이 중요하다.',
      '紙、電子案内、窓口を役割に応じて組み合わせる余地がある。|Kami, denshi annai, madoguchi o yakuwari ni ōjite kumiawaseru yochi ga aru.|종이와 디지털 안내, 창구를 역할에 따라 조합할 여지가 있다.'
    ], '필자의 관점과 맞는 설명을 고르세요.', ['종이 안내를 모두 보존하는 것이 가장 중요하다.', '전자화의 장점보다 창구 폐쇄를 우선한다.', '전자화의 장점을 살리면서 정보에 접근하는 경로를 다양하게 둔다.'], 2, [0, 1, 2],
    '「一つに絞らない」가 핵심이에요. 장점을 인정하면서 안내 수단을 역할에 맞게 조합하자는 입장이에요.')
  ]
};
