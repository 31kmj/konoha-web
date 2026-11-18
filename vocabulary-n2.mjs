import { vocabularyRows } from './vocabulary-rows.mjs';

export const n2Vocabulary = [
  ...vocabularyRows('work-handover', `
handover|引き継ぎ|ひきつぎ|hikitsugi|인수인계|休む前に仕事の引き継ぎをします。|Yasumu mae ni shigoto no hikitsugi o shimasu.|쉬기 전에 업무 인수인계를 해요.
progress|進捗|しんちょく|shinchoku|진척, 진행 상황|会議で作業の進捗を報告します。|Kaigi de sagyō no shinchoku o hōkoku shimasu.|회의에서 작업 진행 상황을 보고해요.
unhandled|未対応|みたいおう|mitaiō|아직 처리하지 않음|未対応の依頼が二件あります。|Mitaiō no irai ga niken arimasu.|아직 처리하지 못한 요청이 두 건 있어요.
responsibility|担当|たんとう|tantō|담당|この案件は私が担当します。|Kono anken wa watashi ga tantō shimasu.|이 건은 제가 담당합니다.
priority|優先順位|ゆうせんじゅんい|yūsen jun'i|우선순위|作業の優先順位を決めましょう。|Sagyō no yūsen jun'i o kimemashō.|작업 우선순위를 정합시다.
deadline|締め切り|しめきり|shimekiri|마감, 마감일|提出の締め切りは金曜日です。|Teishutsu no shimekiri wa kin'yōbi desu.|제출 마감은 금요일이에요.
share|共有|きょうゆう|kyōyū|공유|最新版を全員と共有します。|Saishinban o zen'in to kyōyū shimasu.|최신본을 모두와 공유해요.
attach|添付|てんぷ|tenpu|첨부|見積書をメールに添付しました。|Mitsumorisho o mēru ni tenpu shimashita.|견적서를 이메일에 첨부했어요.
storage-location|保存先|ほぞんさき|hozonsaki|저장 위치|ファイルの保存先を教えてください。|Fairu no hozonsaki o oshiete kudasai.|파일이 어디에 저장되어 있는지 알려 주세요.
changelog|更新履歴|こうしんりれき|kōshin rireki|갱신 이력, 변경 이력|更新履歴を見れば変更点が分かります。|Kōshin rireki o mireba henkōten ga wakarimasu.|변경 이력을 보면 바뀐 부분을 알 수 있어요.
approval|承認|しょうにん|shōnin|승인|上司の承認を待っています。|Jōshi no shōnin o matteimasu.|상사의 승인을 기다리고 있어요.
on-hold|保留|ほりゅう|horyū|보류|結論が出るまで判断を保留します。|Ketsuron ga deru made handan o horyū shimasu.|결론이 날 때까지 판단을 보류해요.
revise|修正|しゅうせい|shūsei|수정|金額の誤りを修正しました。|Kingaku no ayamari o shūsei shimashita.|금액 오류를 수정했어요.
return-for-correction|差し戻す|さしもどす|sashimodosu|수정 등을 위해 돌려보내다, 반려하다|記入漏れがあったので申請を差し戻しました。|Kinyūmore ga atta node shinsei o sashimodoshimashita.|기입이 빠진 부분이 있어 신청을 반려했어요.
deal-with|対処|たいしょ|taisho|대처|問題が起きたら、まず担当者が対処します。|Mondai ga okitara, mazu tantōsha ga taisho shimasu.|문제가 생기면 먼저 담당자가 대처해요.
issue|課題|かだい|kadai|과제, 해결할 문제|人手不足が今の課題です。|Hitode busoku ga ima no kadai desu.|인력 부족이 현재의 과제예요.
out-of-scope|対象外|たいしょうがい|taishōgai|대상에서 제외됨|この件は今回の調査の対象外です。|Kono ken wa konkai no chōsa no taishōgai desu.|이 건은 이번 조사 대상이 아니에요.
unverified|未確認|みかくにん|mikakunin|확인되지 않음|その数字はまだ未確認です。|Sono sūji wa mada mikakunin desu.|그 수치는 아직 확인되지 않았어요.
finalized|確定|かくてい|kakutei|확정|日程が確定したら連絡します。|Nittei ga kakutei shitara renraku shimasu.|일정이 확정되면 연락할게요.
difference|差分|さぶん|sabun|두 버전 간의 차이, 차분|前の版との差分を確認します。|Mae no han to no sabun o kakunin shimasu.|이전 버전과의 차이를 확인해요.
procedure|手順|てじゅん|tejun|절차, 순서|手順を一つずつ確認します。|Tejun o hitotsu zutsu kakunin shimasu.|절차를 하나씩 확인해요.
predecessor|前任者|ぜんにんしゃ|zenninsha|전임자|前任者の記録を読みました。|Zenninsha no kiroku o yomimashita.|전임자의 기록을 읽었어요.
cover|代行|だいこう|daikō|대행|担当者が休みの日は私が業務を代行します。|Tantōsha ga yasumi no hi wa watashi ga gyōmu o daikō shimasu.|담당자가 쉬는 날에는 제가 업무를 대신해요.
parties|関係者|かんけいしゃ|kankeisha|관계자|変更点を関係者に伝えます。|Henkōten o kankeisha ni tsutaemasu.|바뀐 부분을 관계자에게 알려요.
omission|抜け|ぬけ|nuke|빠진 부분, 누락|一覧に抜けがないか見てください。|Ichiran ni nuke ga nai ka mite kudasai.|목록에 빠진 것이 없는지 봐 주세요.
record|記録|きろく|kiroku|기록|電話で話した内容を記録します。|Denwa de hanashita naiyō o kiroku shimasu.|전화로 이야기한 내용을 기록해요.
report|報告|ほうこく|hōkoku|보고|作業が終わったら報告してください。|Sagyō ga owattara hōkoku shite kudasai.|작업이 끝나면 보고해 주세요.
as-needed|随時|ずいじ|zuiji|수시로, 필요할 때마다|進捗は随時お知らせします。|Shinchoku wa zuiji oshirase shimasu.|진행 상황은 수시로 알려 드려요.
get-back|折り返し|おりかえし|orikaeshi|받은 연락에 회신하여|確認後、折り返しお電話します。|Kakunin-go, orikaeshi odenwa shimasu.|확인한 뒤 다시 전화드릴게요.
just-in-case|念のため|ねんのため|nen no tame|만일을 위해, 혹시 몰라|念のため書類の控えを残します。|Nen no tame shorui no hikae o nokoshimasu.|혹시 몰라 서류 사본을 남겨 둬요.
`),
  ...vocabularyRows('contract-change', `
contract|契約|けいやく|keiyaku|계약|契約の内容を確認してください。|Keiyaku no naiyō o kakunin shite kudasai.|계약 내용을 확인해 주세요.
clause|条項|じょうこう|jōkō|조항|解約に関する条項を読みます。|Kaiyaku ni kansuru jōkō o yomimasu.|해약에 관한 조항을 읽어요.
term|契約期間|けいやくきかん|keiyaku kikan|계약 기간|契約期間は一年間です。|Keiyaku kikan wa ichinenkan desu.|계약 기간은 1년이에요.
renew|更新|こうしん|kōshin|갱신|更新するかどうか検討します。|Kōshin suru ka dō ka kentō shimasu.|갱신할지 검토해요.
terminate|解約|かいやく|kaiyaku|해약, 계약 해지|解約の手続きはどこで行いますか。|Kaiyaku no tetsuzuki wa doko de okonaimasu ka?|해지 절차는 어디서 진행하나요?
expiry|満了|まんりょう|manryō|정해진 기간의 만료|契約期間が来月で満了します。|Keiyaku kikan ga raigetsu de manryō shimasu.|계약 기간이 다음 달에 만료돼요.
auto-renewal|自動更新|じどうこうしん|jidō kōshin|자동 갱신|自動更新を止めたいです。|Jidō kōshin o tometai desu.|자동 갱신을 중지하고 싶어요.
application|申請|しんせい|shinsei|신청|変更の申請を出しました。|Henkō no shinsei o dashimashita.|변경 신청을 냈어요.
formalities|手続き|てつづき|tetsuzuki|수속, 절차|手続きは窓口でもできます。|Tetsuzuki wa madoguchi demo dekimasu.|창구에서도 절차를 밟을 수 있어요.
signature|署名|しょめい|shomei|서명|内容を確認してから署名します。|Naiyō o kakunin shite kara shomei shimasu.|내용을 확인한 뒤 서명해요.
consent|同意|どうい|dōi|동의|変更内容への同意が必要です。|Henkō naiyō e no dōi ga hitsuyō desu.|변경 내용에 대한 동의가 필요해요.
terms|規約|きやく|kiyaku|규약, 이용 약관|規約の該当箇所を確認します。|Kiyaku no gaitō kasho o kakunin shimasu.|약관의 해당 부분을 확인해요.
change-form|変更届|へんこうとどけ|henkōtodoke|변경 신고서|住所が変わったので変更届を出します。|Jūsho ga kawatta node henkōtodoke o dashimasu.|주소가 바뀌어서 변경 신고서를 내요.
apply-rule|適用|てきよう|tekiyō|적용|変更後の料金は来月から適用されます。|Henkōgo no ryōkin wa raigetsu kara tekiyō saremasu.|변경된 요금은 다음 달부터 적용돼요.
application-window|受付期間|うけつけきかん|uketsuke kikan|접수 기간|受付期間は今月末までです。|Uketsuke kikan wa kongetsumatsu made desu.|접수 기간은 이번 달 말까지예요.
valid|有効|ゆうこう|yūkō|유효|この証明書は年末まで有効です。|Kono shōmeisho wa nenmatsu made yūkō desu.|이 증명서는 연말까지 유효해요.
invalid|無効|むこう|mukō|무효|変更後は以前の番号が無効になります。|Henkōgo wa izen no bangō ga mukō ni narimasu.|변경 후에는 이전 번호가 무효가 돼요.
prorated|日割り|ひわり|hiwari|일할 계산|今月分は日割りで計算します。|Kongetsubun wa hiwari de keisan shimasu.|이번 달 요금은 날짜에 비례해 계산해요.
penalty|違約金|いやくきん|iyakukin|위약금|途中で解約すると違約金がかかりますか。|Tochū de kaiyaku suru to iyakukin ga kakarimasu ka?|중도에 해지하면 위약금이 드나요?
service-fee|手数料|てすうりょう|tesūryō|수수료|変更に手数料はかかりますか。|Henkō ni tesūryō wa kakarimasu ka?|변경하는 데 수수료가 드나요?
refund-destination|返金先|へんきんさき|henkinsaki|환불받을 곳|返金先の口座を記入してください。|Henkinsaki no kōza o kinyū shite kudasai.|환불받을 계좌를 적어 주세요.
price-difference|差額|さがく|sagaku|차액|差額だけを支払えばいいです。|Sagaku dake o shiharaeba ii desu.|차액만 내면 돼요.
receipt|領収書|りょうしゅうしょ|ryōshūsho|영수증, 수령 증서|会社名で領収書をお願いします。|Kaishamei de ryōshūsho o onegai shimasu.|회사 명의로 영수증을 부탁드려요.
in-writing|書面|しょめん|shomen|서면|口頭ではなく書面で通知してください。|Kōtō de wa naku shomen de tsūchi shite kudasai.|구두가 아닌 서면으로 통지해 주세요.
inquiry|問い合わせ|といあわせ|toiawase|문의|問い合わせはメールで受け付けます。|Toiawase wa mēru de uketsukemasu.|문의는 이메일로 받습니다.
coverage|対象|たいしょう|taishō|대상|このプランも割引の対象ですか。|Kono puran mo waribiki no taishō desu ka?|이 요금제도 할인 대상인가요?
transfer-rights|譲渡|じょうと|jōto|양도|利用権の譲渡はできますか。|Riyōken no jōto wa dekimasu ka?|이용권을 양도할 수 있나요?
commitment|確約|かくやく|kakuyaku|확실히 약속함, 확약|現時点では納期を確約できません。|Genjiten de wa nōki o kakuyaku dekimasen.|현재로서는 납기일을 확약할 수 없어요.
exception|例外|れいがい|reigai|예외|一部の契約には例外があります。|Ichibu no keiyaku ni wa reigai ga arimasu.|일부 계약에는 예외가 있어요.
miscommunication|行き違い|いきちがい|ikichigai|오해나 엇갈림|連絡の行き違いがあったようです。|Renraku no ikichigai ga atta yō desu.|연락 과정에 엇갈림이 있었던 것 같아요.
`),
  ...vocabularyRows('tour-change', `
tour-operation|催行|さいこう|saikō|관광 프로그램 등을 예정대로 진행함|ツアーの催行は前日に決まります。|Tsuā no saikō wa zenjitsu ni kimarimasu.|투어 진행 여부는 전날 정해져요.
holding-event|開催|かいさい|kaisai|개최|展示会は予定どおり開催されます。|Tenjikai wa yotei dōri kaisai saremasu.|전시회는 예정대로 열려요.
postpone|延期|えんき|enki|연기|雨で見学が来週に延期されました。|Ame de kengaku ga raishū ni enki saremashita.|비로 견학이 다음 주로 연기됐어요.
move-up|繰り上げ|くりあげ|kuriage|예정보다 앞당김|集合時刻の繰り上げが決まりました。|Shūgō jikoku no kuriage ga kimarimashita.|모이는 시간을 앞당기기로 했어요.
alternate-date|代替日|だいたいび|daitaibi|대체일|代替日が決まったら知らせてください。|Daitaibi ga kimattara shirasete kudasai.|대체일이 정해지면 알려 주세요.
open-slot|空き枠|あきわく|akiwaku|예약할 수 있는 빈 시간대나 자리|午後に空き枠はありますか。|Gogo ni akiwaku wa arimasu ka?|오후에 비어 있는 자리가 있나요?
waiting-list|キャンセル待ち|きゃんせるまち|kyanseru machi|취소 자리 대기|キャンセル待ちはできますか。|Kyanseru machi wa dekimasu ka?|취소 자리를 기다릴 수 있나요?
reference-number|受付番号|うけつけばんごう|uketsuke bangō|접수 번호|受付番号をお伝えください。|Uketsuke bangō o otsutae kudasai.|접수 번호를 알려 주세요.
participation-terms|参加条件|さんかじょうけん|sanka jōken|참가 조건|申し込む前に参加条件を読みます。|Mōshikomu mae ni sanka jōken o yomimasu.|신청 전에 참가 조건을 읽어요.
incidental|付帯|ふたい|futai|부수적으로 딸림, 부대|送迎は付帯サービスに含まれます。|Sōgei wa futai sābisu ni fukumaremasu.|픽업과 배웅은 부대 서비스에 포함돼요.
partial-refund|一部返金|いちぶへんきん|ichibu henkin|일부 환불|雨で後半が中止になり、参加費は一部返金になりました。|Ame de kōhan ga chūshi ni nari, sankahi wa ichibu henkin ni narimashita.|비로 후반 일정이 취소되어 참가비 일부가 환불됐어요.
cancel-fee|取消料|とりけしりょう|torikeshiryō|취소 수수료|取消料はいつからかかりますか。|Torikeshiryō wa itsu kara kakarimasu ka?|취소 수수료는 언제부터 발생하나요?
fully-booked|満員|まんいん|man'in|정원이 다 참, 만원|午前の回は満員です。|Gozen no kai wa man'in desu.|오전 회차는 정원이 다 찼어요.
minimum-group|最少催行人数|さいしょうさいこうにんずう|saishō saikō ninzū|투어 진행에 필요한 최소 인원|最少催行人数に達しなかったため中止です。|Saishō saikō ninzū ni tasshinakatta tame chūshi desu.|최소 인원에 미달해 진행이 취소됐어요.
meeting-place|集合場所|しゅうごうばしょ|shūgō basho|집합 장소|駅の東口が集合場所です。|Eki no higashiguchi ga shūgō basho desu.|역 동쪽 출구가 집합 장소예요.
disband|解散|かいさん|kaisan|해산, 각자 헤어짐|見学の後は現地で解散します。|Kengaku no ato wa genchi de kaisan shimasu.|견학 뒤에는 현지에서 해산해요.
bad-weather|悪天候|あくてんこう|akutenkō|악천후|悪天候の場合は屋内で行います。|Akutenkō no baai wa okunai de okonaimasu.|기상이 나쁘면 실내에서 진행해요.
tour-observe|見学|けんがく|kengaku|견학|工場の見学を予約しました。|Kōjō no kengaku o yoyaku shimashita.|공장 견학을 예약했어요.
rescheduling|再調整|さいちょうせい|saichōsei|재조정|参加者の都合を聞いて日程を再調整します。|Sankasha no tsugō o kiite nittei o saichōsei shimasu.|참가자가 가능한 때를 물어 일정을 다시 조정해요.
repayment|払い戻し|はらいもどし|haraimodoshi|요금 환불, 환급|切符の払い戻しは窓口でできます。|Kippu no haraimodoshi wa madoguchi de dekimasu.|승차권은 창구에서 환불받을 수 있어요.
`)
];
