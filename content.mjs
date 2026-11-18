import { additionalScenarios } from './more-scenarios.mjs';
import { additionalVocabulary } from './more-vocabulary.mjs';
import { intermediateScenarios } from './intermediate-scenarios.mjs';
import { advancedVocabulary } from './advanced-vocabulary.mjs';
import { advancedScenarios } from './advanced-scenarios.mjs';
import { essentialScenarios } from './essential-scenarios.mjs';
import { lifeAndWorkScenarios } from './life-and-work-scenarios.mjs';
import { n5Vocabulary } from './vocabulary-n5.mjs';
import { n4Vocabulary } from './vocabulary-n4.mjs';
import { n3Vocabulary } from './vocabulary-n3.mjs';
import { n2Vocabulary } from './vocabulary-n2.mjs';
import { n1Vocabulary } from './vocabulary-n1.mjs';
import { expandedVocabulary } from './expanded-vocabulary.mjs';
import { libraryAndMeetingScenarios, libraryAndMeetingVocabulary } from './n3-library-meeting.mjs';

export const contentStatus = Object.freeze({
  source: '코노하 자체 작성',
  reviewStatus: 'internal-review'
});

export const turnsPerScenario = 3;

export const scenarios = [
  {
    id: 'cafe',
    title: '카페에서 주문하기',
    category: '카페',
    level: 'N5',
    partner: '카페 직원',
    goal: '음료를 고르고 마실 장소를 말해요.',
    start: 'order',
    steps: {
      order: {
        prompt: ['ご注文はお決まりですか。', 'Gochūmon wa okimari desu ka?', '주문은 정하셨나요?'],
        hint: '음료 이름에 「をください」나 「をお願いします」를 붙여 주문해 보세요.',
        options: [
          { id: 'coffee', line: ['コーヒーをください。', 'Kōhī o kudasai.', '커피 주세요.'], aliases: ['コーヒーをお願いします', 'コーヒーください'], next: 'temperature' },
          { id: 'tea', line: ['紅茶をください。', 'Kōcha o kudasai.', '홍차 주세요.'], aliases: ['紅茶をお願いします', 'こうちゃをください', '紅茶ください'], next: 'milk' },
          { id: 'price', line: ['いくらですか。', 'Ikura desu ka?', '얼마인가요?'], feedback: '가격을 묻는 표현이에요. 주문할 음료를 말해 보세요.' }
        ]
      },
      temperature: {
        prompt: ['ホットとアイス、どちらになさいますか。', 'Hotto to aisu, dochira ni nasaimasu ka?', '뜨거운 것과 차가운 것 중 어느 쪽으로 하시겠어요?'],
        hint: '「ホット」는 따뜻한 음료, 「アイス」는 차가운 음료를 뜻해요.',
        options: [
          { id: 'hot', line: ['ホットでお願いします。', 'Hotto de onegai shimasu.', '따뜻한 걸로 부탁해요.'], aliases: ['ホットで', 'ホットにします'], next: 'where' },
          { id: 'cold', line: ['アイスでお願いします。', 'Aisu de onegai shimasu.', '차가운 걸로 부탁해요.'], aliases: ['アイスで', 'アイスにします'], next: 'where' },
          { id: 'dine-early', line: ['ここで飲みます。', 'Koko de nomimasu.', '여기서 마실게요.'], feedback: '마실 장소는 다음에 물어봐요. 지금은 음료의 온도를 골라 보세요.' }
        ]
      },
      milk: {
        prompt: ['ミルクはお付けしますか。', 'Miruku wa otsuke shimasu ka?', '우유도 같이 드릴까요?'],
        hint: '함께 달라고 할 때는 「お願いします」, 사양할 때는 「いりません」을 쓸 수 있어요.',
        options: [
          { id: 'with-milk', line: ['ミルクもお願いします。', 'Miruku mo onegai shimasu.', '우유도 부탁해요.'], aliases: ['はいお願いします', 'ミルクをください'], next: 'where' },
          { id: 'without-milk', line: ['ミルクはいりません。', 'Miruku wa irimasen.', '우유는 괜찮아요.'], aliases: ['いいえ結構です', 'ミルクなしでお願いします'], next: 'where' },
          { id: 'ask-restroom', line: ['お手洗いはどこですか。', 'Otearai wa doko desu ka?', '화장실은 어디인가요?'], feedback: '화장실 위치를 묻는 표현이에요. 직원은 우유를 원하는지 묻고 있어요.' }
        ]
      },
      where: {
        prompt: ['店内でお召し上がりですか。', 'Tennai de omeshiagari desu ka?', '매장에서 드시나요?'],
        hint: '여기서 마실 때는 「ここで」, 가져갈 때는 「持ち帰り」를 써요.',
        options: [
          { id: 'dine-in', line: ['ここで飲みます。', 'Koko de nomimasu.', '여기서 마실게요.'], aliases: ['店内でお願いします', 'ここでお願いします'], ending: 'seat' },
          { id: 'takeout', line: ['持ち帰りでお願いします。', 'Mochikaeri de onegai shimasu.', '포장해 주세요.'], aliases: ['お持ち帰りでお願いします', 'テイクアウトでお願いします'], ending: 'bag' },
          { id: 'thanks-too-early', line: ['ごちそうさまでした。', 'Gochisōsama deshita.', '잘 먹었습니다.'], feedback: '식사를 마친 뒤에 하는 인사예요. 매장에서 마실지 포장할지 말해 보세요.' }
        ]
      }
    },
    endings: {
      seat: ['では、お席でお待ちください。', 'Dewa, oseki de omachi kudasai.', '그럼 자리에서 기다려 주세요.'],
      bag: ['かしこまりました。お持ち帰りですね。', 'Kashikomarimashita. Omochikaeri desu ne.', '알겠습니다. 포장이시군요.']
    }
  },
  {
    id: 'train',
    title: '역에서 길 묻기',
    category: '교통',
    level: 'N4',
    partner: '역무원',
    goal: '가상의 노선에서 목적지를 말하고 환승과 승강장을 확인해요.',
    start: 'destination',
    steps: {
      destination: {
        prompt: ['どちらまで行かれますか。', 'Dochira made ikaremasu ka?', '어디까지 가시나요?'],
        hint: '목적지 뒤에 「に行きたいです」를 붙여 보세요.',
        options: [
          { id: 'tokyo', line: ['東京駅に行きたいです。', 'Tōkyō-eki ni ikitai desu.', '도쿄역에 가고 싶어요.'], aliases: ['東京駅までお願いします', '東京駅に行きたいんです'], next: 'direct' },
          { id: 'shinjuku', line: ['新宿駅に行きたいです。', 'Shinjuku-eki ni ikitai desu.', '신주쿠역에 가고 싶어요.'], aliases: ['新宿駅までお願いします', '新宿駅に行きたいんです'], next: 'transfer' },
          { id: 'arrival', line: ['駅に着きました。', 'Eki ni tsukimashita.', '역에 도착했어요.'], feedback: '이미 도착했다는 말이에요. 지금 가고 싶은 역을 알려 주세요.' }
        ]
      },
      direct: {
        prompt: ['東京駅へはこの路線で行けます。', 'Tōkyō-eki e wa kono rosen de ikemasu.', '도쿄역에는 이 노선으로 갈 수 있어요.'],
        hint: '갈아타지 않아도 되는지 「乗り換え」를 써서 확인해 보세요.',
        options: [
          { id: 'confirm-direct', line: ['乗り換えはありませんか。', 'Norikae wa arimasen ka?', '환승은 없나요?'], aliases: ['乗り換えなしで行けますか', '乗り換えなくてもいいですか', 'この電車でそのまま行けますか'], next: 'platform-direct' },
          { id: 'wrong-direction', line: ['空港はどこですか。', 'Kūkō wa doko desu ka?', '공항은 어디인가요?'], feedback: '목적지는 도쿄역이에요. 이 노선에서 갈아타야 하는지 확인해 보세요.' }
        ]
      },
      transfer: {
        prompt: ['新宿駅へは途中で乗り換えが必要です。', 'Shinjuku-eki e wa tochū de norikae ga hitsuyō desu.', '신주쿠역에 가려면 중간에 갈아타야 해요.'],
        hint: '「どこで」를 써서 환승하는 장소를 물어보세요.',
        options: [
          { id: 'ask-transfer', line: ['どこで乗り換えればいいですか。', 'Doko de norikaereba ii desu ka?', '어디서 갈아타면 되나요?'], aliases: ['どこで乗り換えますか', '乗り換えはどこですか'], next: 'platform-transfer' },
          { id: 'announce-direct', line: ['乗り換えは必要ありません。', 'Norikae wa hitsuyō arimasen.', '환승은 필요 없어요.'], feedback: '역무원은 환승이 필요하다고 했어요. 갈아탈 역을 물어보세요.' }
        ]
      },
      'platform-direct': {
        prompt: ['はい。この電車でそのまま行けます。', 'Hai. Kono densha de sonomama ikemasu.', '네. 이 전철로 갈아타지 않고 갈 수 있어요.'],
        hint: '승강장 번호를 물을 때 「何番線」을 써요.',
        options: [
          { id: 'ask-platform-direct', line: ['何番線ですか。', 'Nanbansen desu ka?', '몇 번 승강장인가요?'], aliases: ['何番線から出ますか', '何番線に行けばいいですか'], ending: 'platform-two' },
          { id: 'wrong-what-time', line: ['今、何時ですか。', 'Ima, nanji desu ka?', '지금 몇 시인가요?'], feedback: '현재 시각을 묻는 표현이에요. 승강장 번호를 확인해 보세요.' }
        ]
      },
      'platform-transfer': {
        prompt: ['次の駅で中央線に乗り換えてください。', 'Tsugi no eki de Chūō-sen ni norikaete kudasai.', '다음 역에서 주오선으로 갈아타세요.'],
        hint: '먼저 어디에서 타는지 「何番線」으로 물어보세요.',
        options: [
          { id: 'ask-platform-transfer', line: ['最初は何番線ですか。', 'Saisho wa nanbansen desu ka?', '처음에는 몇 번 승강장인가요?'], aliases: ['何番線ですか', 'まず何番線に行けばいいですか'], ending: 'platform-one' },
          { id: 'wrong-no-ride', line: ['電車には乗りません。', 'Densha ni wa norimasen.', '전철은 타지 않아요.'], feedback: '다음 역에서 갈아타기 위해 먼저 탈 승강장을 확인해 보세요.' }
        ]
      }
    },
    endings: {
      'platform-two': ['二番線です。', 'Nibansen desu.', '2번 승강장이에요.'],
      'platform-one': ['まず、一番線から乗ってください。', 'Mazu, ichibansen kara notte kudasai.', '먼저 1번 승강장에서 타세요.']
    }
  },
  {
    id: 'hotel',
    title: '호텔 프런트에서 요청하기',
    category: '숙박',
    level: 'N4',
    partner: '호텔 직원',
    goal: '체크인하거나 짐을 맡긴 뒤 필요한 정보를 확인해요.',
    start: 'request',
    steps: {
      request: {
        prompt: ['いらっしゃいませ。本日はどのようなご用件でしょうか。', 'Irasshaimase. Honjitsu wa dono yō na goyōken deshō ka?', '어서 오세요. 오늘은 무엇을 도와드릴까요?'],
        hint: '체크인은 「予約しています」, 짐 보관은 「荷物を預けたいです」로 시작할 수 있어요.',
        options: [
          { id: 'checkin', line: ['予約しています。', 'Yoyaku shiteimasu.', '예약했어요.'], aliases: ['チェックインをお願いします', 'チェックインしたいです', '予約したキムです'], next: 'name' },
          { id: 'store', line: ['荷物を預けたいです。', 'Nimotsu o azuketai desu.', '짐을 맡기고 싶어요.'], aliases: ['荷物を預けてもいいですか', '荷物を預かっていただけますか'], next: 'bags' },
          { id: 'eat', line: ['店内で食べます。', 'Tennai de tabemasu.', '매장에서 먹을게요.'], feedback: '식당에서 쓸 수 있는 말이에요. 프런트에서는 체크인이나 짐 보관을 요청해 보세요.' }
        ]
      },
      name: {
        prompt: ['ご予約のお名前をお願いします。', 'Goyoyaku no onamae o onegai shimasu.', '예약자 성함을 알려 주세요.'],
        hint: '이 연습에서 예약자 이름은 김이에요. 「キム」 뒤에 「です」를 붙여 보세요.',
        options: [
          { id: 'provide-name', line: ['キムです。', 'Kimu desu.', '김입니다.'], aliases: ['キムと申します', 'キムの名前で予約しています'], next: 'checkin-details' },
          { id: 'provide-time', line: ['三時です。', 'Sanji desu.', '세 시입니다.'], feedback: '시각을 말하는 표현이에요. 예약할 때 사용한 이름을 알려 주세요.' }
        ]
      },
      bags: {
        prompt: ['お荷物はいくつですか。', 'Onimotsu wa ikutsu desu ka?', '짐은 몇 개인가요?'],
        hint: '「いくつ」는 개수를 묻는 말이에요. 「一つ」나 「二つ」로 답할 수 있어요.',
        options: [
          { id: 'one-bag', line: ['一つです。', 'Hitotsu desu.', '한 개예요.'], aliases: ['ひとつです', '一個です'], next: 'pickup' },
          { id: 'two-bags', line: ['二つです。', 'Futatsu desu.', '두 개예요.'], aliases: ['ふたつです', '二個です'], next: 'pickup' },
          { id: 'wrong-floor', line: ['二階です。', 'Nikai desu.', '2층이에요.'], feedback: '「二階」는 층을 나타내요. 짐이 몇 개인지 말해 보세요.' }
        ]
      },
      'checkin-details': {
        prompt: ['キム様ですね。こちらがお部屋の鍵です。', 'Kimu-sama desu ne. Kochira ga oheya no kagi desu.', '김 님이시군요. 여기 객실 열쇠입니다.'],
        hint: '「何時」를 써서 체크아웃 시간을 물어보세요.',
        options: [
          { id: 'ask-checkout', line: ['チェックアウトは何時ですか。', 'Chekkuauto wa nanji desu ka?', '체크아웃은 몇 시인가요?'], aliases: ['チェックアウトは何時までですか', 'チェックアウトの時間を教えてください'], ending: 'checkout' },
          { id: 'wrong-number', line: ['お部屋はいくつですか。', 'Oheya wa ikutsu desu ka?', '객실은 몇 개인가요?'], feedback: '객실 수를 묻는 표현이에요. 체크아웃 시각을 확인해 보세요.' }
        ]
      },
      pickup: {
        prompt: ['かしこまりました。こちらでお預かりします。', 'Kashikomarimashita. Kochira de oazukari shimasu.', '알겠습니다. 여기서 보관해 드릴게요.'],
        hint: '찾아가는 시각을 확인할 때 「何時まで」를 써 보세요.',
        options: [
          { id: 'ask-pickup', line: ['何時までに取りに来ればいいですか。', 'Nanji made ni tori ni kureba ii desu ka?', '몇 시까지 찾으러 오면 되나요?'], aliases: ['何時まで預かってもらえますか', '何時までに来ればいいですか'], ending: 'pickup-time' },
          { id: 'wrong-cafe', line: ['ミルクもお願いします。', 'Miruku mo onegai shimasu.', '우유도 부탁해요.'], feedback: '카페에서 쓰는 표현이에요. 짐을 찾으러 올 시각을 확인해 보세요.' }
        ]
      }
    },
    endings: {
      checkout: ['チェックアウトは午前十一時までです。', 'Chekkuauto wa gozen jūichiji made desu.', '체크아웃은 오전 11시까지예요.'],
      'pickup-time': ['夜の九時までにお越しください。', 'Yoru no kuji made ni okoshi kudasai.', '밤 9시까지 와 주세요.']
    }
  },
  ...additionalScenarios,
  ...intermediateScenarios,
  ...advancedScenarios,
  ...essentialScenarios,
  ...lifeAndWorkScenarios,
  ...libraryAndMeetingScenarios
].map(scene => ({ ...scene, ...contentStatus }));

const sceneLevels = new Map(scenarios.map(({ id, level }) => [id, level]));

export const vocabulary = [
  { id: 'travel-coffee', scene: 'cafe', ja: 'コーヒー', reading: 'こーひー', romaji: 'kōhī', ko: '커피', example: ['コーヒーを一杯ください。', 'Kōhī o ippai kudasai.', '커피 한 잔 주세요.'] },
  { id: 'travel-black-tea', scene: 'cafe', ja: '紅茶', reading: 'こうちゃ', romaji: 'kōcha', ko: '홍차', example: ['紅茶にします。', 'Kōcha ni shimasu.', '홍차로 할게요.'] },
  { id: 'travel-milk', scene: 'cafe', ja: 'ミルク', reading: 'みるく', romaji: 'miruku', ko: '우유, 밀크', example: ['ミルクもお願いします。', 'Miruku mo onegai shimasu.', '우유도 부탁해요.'] },
  { id: 'travel-dine-in', scene: 'cafe', ja: '店内', reading: 'てんない', romaji: 'tennai', ko: '매장 안', example: ['店内で食べます。', 'Tennai de tabemasu.', '매장에서 먹을게요.'] },
  { id: 'travel-takeout', scene: 'cafe', ja: '持ち帰り', reading: 'もちかえり', romaji: 'mochikaeri', ko: '포장해서 가져감', example: ['持ち帰りでお願いします。', 'Mochikaeri de onegai shimasu.', '포장해 주세요.'] },
  { id: 'travel-station', scene: 'train', ja: '駅', reading: 'えき', romaji: 'eki', ko: '역', example: ['駅はどこですか。', 'Eki wa doko desu ka?', '역은 어디인가요?'] },
  { id: 'travel-train', scene: 'train', ja: '電車', reading: 'でんしゃ', romaji: 'densha', ko: '전철', example: ['電車で行きます。', 'Densha de ikimasu.', '전철로 가요.'] },
  { id: 'travel-rail-line', scene: 'train', ja: '路線', reading: 'ろせん', romaji: 'rosen', ko: '노선', example: ['この路線で行けますか。', 'Kono rosen de ikemasu ka?', '이 노선으로 갈 수 있나요?'] },
  { id: 'travel-transfer', scene: 'train', ja: '乗り換え', reading: 'のりかえ', romaji: 'norikae', ko: '환승, 갈아탐', example: ['乗り換えはどこですか。', 'Norikae wa doko desu ka?', '어디서 갈아타나요?'] },
  { id: 'travel-platform', scene: 'train', ja: '何番線', reading: 'なんばんせん', romaji: 'nanbansen', ko: '몇 번 승강장', example: ['電車は何番線から出ますか。', 'Densha wa nanbansen kara demasu ka?', '전철은 몇 번 승강장에서 출발하나요?'] },
  { id: 'travel-booking', scene: 'hotel', ja: '予約', reading: 'よやく', romaji: 'yoyaku', ko: '예약', example: ['キムの名前で予約しています。', 'Kimu no namae de yoyaku shiteimasu.', '김이라는 이름으로 예약했어요.'] },
  { id: 'travel-luggage', scene: 'hotel', ja: '荷物', reading: 'にもつ', romaji: 'nimotsu', ko: '짐, 수하물', example: ['荷物は一つです。', 'Nimotsu wa hitotsu desu.', '짐은 한 개예요.'] },
  { id: 'travel-store-luggage', scene: 'hotel', ja: '預ける', reading: 'あずける', romaji: 'azukeru', ko: '맡기다', example: ['荷物を預けてもいいですか。', 'Nimotsu o azukete mo ii desu ka?', '짐을 맡겨도 될까요?'] },
  { id: 'travel-room-key', scene: 'hotel', ja: '鍵', reading: 'かぎ', romaji: 'kagi', ko: '열쇠', example: ['部屋の鍵をお願いします。', 'Heya no kagi o onegai shimasu.', '객실 열쇠를 부탁해요.'] },
  { id: 'travel-checkout', scene: 'hotel', ja: 'チェックアウト', reading: 'ちぇっくあうと', romaji: 'chekkuauto', ko: '체크아웃, 퇴실', example: ['チェックアウトは十一時までです。', 'Chekkuauto wa jūichiji made desu.', '체크아웃은 11시까지예요.'] },
  ...additionalVocabulary,
  ...advancedVocabulary,
  ...n5Vocabulary,
  ...n4Vocabulary,
  ...n3Vocabulary,
  ...n2Vocabulary,
  ...n1Vocabulary,
  ...expandedVocabulary,
  ...libraryAndMeetingVocabulary
].map(word => ({
  ...word,
  level: word.level ?? sceneLevels.get(word.scene),
  source: contentStatus.source,
  reviewStatus: contentStatus.reviewStatus
}));

