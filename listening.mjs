export const listeningQuestions = [
  {
    id: 'listen-coffee',
    level: 'N5',
    passage: [
      ['ホットコーヒーを一杯お願いします。', 'Hotto kōhī o ippai onegai shimasu.', '따뜻한 커피 한 잔 부탁해요.']
    ],
    prompt: '손님이 주문한 음료는 무엇인가요?',
    choices: ['차가운 커피 두 잔', '따뜻한 커피 한 잔', '따뜻한 홍차 한 잔'],
    answer: 1,
    evidence: 0,
    explanation: '「ホットコーヒー」는 따뜻한 커피, 「一杯」는 한 잔이에요.'
  },
  {
    id: 'listen-counter',
    level: 'N4',
    passage: [
      ['この電車は各駅停車です。', 'Kono densha wa kakueki teisha desu.', '이 전철은 각 역에 정차하는 일반 열차입니다.'],
      ['空港へお越しの方は、次の駅で急行にお乗り換えください。', 'Kūkō e okoshi no kata wa, tsugi no eki de kyūkō ni onorikae kudasai.', '공항에 가시는 분은 다음 역에서 급행으로 갈아타 주세요.']
    ],
    prompt: '공항으로 가려면 무엇을 해야 하나요?',
    choices: ['현재 전철에 계속 타고 있다.', '다음 역에서 일반 버스로 갈아탄다.', '다음 역에서 급행으로 갈아탄다.'],
    answer: 2,
    evidence: 1,
    explanation: '「急行」은 급행이고, 「お乗り換えください」는 갈아타 달라는 안내예요.'
  },
  {
    id: 'listen-repair',
    level: 'N3',
    passage: [
      ['係の者が二十分ほどでお部屋に伺います。', 'Kakari no mono ga nijuppun hodo de oheya ni ukagaimasu.', '담당 직원이 20분 정도 뒤 객실에 방문하겠습니다.'],
      ['もしそれまでにお出かけになる場合は、フロントにお知らせください。', 'Moshi sore made ni odekake ni naru baai wa, furonto ni oshirase kudasai.', '그 전에 외출하실 경우 프런트에 알려 주세요.']
    ],
    prompt: '직원이 오기 전에 외출하려면 어떻게 해야 하나요?',
    choices: ['프런트에 미리 알린다.', '객실 문을 열어 두고 나간다.', '직원에게 20분 더 기다려 달라고 한다.'],
    answer: 0,
    evidence: 1,
    explanation: '「それまでに」는 방문하기 전까지라는 뜻이에요. 그 전에 외출하면 프런트에 알려야 해요.'
  },
  {
    id: 'listen-early-entry',
    level: 'N2',
    passage: [
      ['展示室の開場は十時ですが、入場整理券は九時半から配布いたします。', 'Tenjishitsu no kaijō wa jūji desu ga, nyūjō seiriken wa kuji han kara haifu itashimasu.', '전시실은 10시에 열리지만, 입장 번호표는 9시 반부터 나눠 드립니다.'],
      ['整理券をお持ちの方も、券に記載された時刻までは入場できません。', 'Seiriken o omochi no kata mo, ken ni kisai sareta jikoku made wa nyūjō dekimasen.', '번호표를 갖고 계신 분도 표에 적힌 시각까지는 입장할 수 없습니다.']
    ],
    prompt: '번호표에 10시 30분이라고 적힌 사람은 언제부터 입장할 수 있나요?',
    choices: ['9시 30분부터', '10시부터', '10시 30분부터'],
    answer: 2,
    evidence: 1,
    explanation: '개장 시각이나 번호표 배부 시각과 별개로 표에 적힌 시각부터 입장할 수 있어요.'
  }
];
