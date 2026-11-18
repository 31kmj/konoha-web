export const readingQuestions = [
  {
    id: 'locker-hours',
    level: 'N3',
    passage: [
      ['コインロッカーは午前六時から午後十一時までご利用いただけます。', 'Koin rokkā wa gozen rokuji kara gogo jūichiji made goriyō itadakemasu.', '코인 보관함은 오전 6시부터 오후 11시까지 이용하실 수 있습니다.'],
      ['午後十一時を過ぎると入口が閉まります。', 'Gogo jūichiji o sugiru to iriguchi ga shimarimasu.', '오후 11시가 지나면 입구가 닫힙니다.']
    ],
    prompt: '밤 11시 반에 도착하면 짐을 언제 찾을 수 있나요?',
    choices: ['밤 11시 반에 바로 찾는다.', '다음 날 오전 6시부터 찾는다.', '다음 날 오전 11시부터 찾는다.'],
    answer: 1,
    evidence: [0, 1],
    explanation: '이용 시간이 밤 11시까지라 11시 반에는 이미 입구가 닫혀요. 다음 날 오전 6시부터 다시 이용할 수 있어요.'
  },
  {
    id: 'breakfast-change',
    level: 'N3',
    passage: [
      ['明日は会場の都合により、朝食を一階のレストランではなく、二階の会議室でご用意します。', 'Ashita wa kaijō no tsugō ni yori, chōshoku o ikkai no resutoran de wa naku, nikai no kaigishitsu de goyōi shimasu.', '내일은 장소 사정으로 아침 식사를 1층 식당 대신 2층 회의실에 마련합니다.'],
      ['開始時刻は通常どおり午前七時です。', 'Kaishi jikoku wa tsūjō dōri gozen shichiji desu.', '시작 시각은 평소와 같은 오전 7시입니다.']
    ],
    prompt: '내일 달라지는 것은 무엇인가요?',
    choices: ['아침 식사 시작 시각', '아침 식사 제공 여부', '아침 식사 장소'],
    answer: 2,
    evidence: 0,
    explanation: '「ではなく」 앞은 기존 장소, 뒤는 새 장소예요. 시작 시각은 그대로입니다.'
  },
  {
    id: 'museum-reservation',
    level: 'N2',
    passage: [
      ['今週末は混雑が予想されるため、特別展の入場には事前予約が必要です。', 'Konshūmatsu wa konzatsu ga yosō sareru tame, tokubetsuten no nyūjō ni wa jizen yoyaku ga hitsuyō desu.', '이번 주말은 혼잡이 예상되어 특별전 입장에는 사전 예약이 필요합니다.'],
      ['ただし、常設展のみをご覧になる場合は、当日券でご入館いただけます。', 'Tadashi, jōsetsuten nomi o goran ni naru baai wa, tōjitsuken de gonyūkan itadakemasu.', '단, 상설전만 관람하실 경우에는 당일권으로 입장하실 수 있습니다.']
    ],
    prompt: '예약 없이 당일권을 산 관람객이 할 수 있는 것은 무엇인가요?',
    choices: ['상설전만 관람한다.', '특별전만 관람한다.', '혼잡하지 않으면 특별전에도 입장한다.'],
    answer: 0,
    evidence: 1,
    explanation: '「ただし」는 예외를 소개하고, 「のみ」는 범위를 한정해요. 당일권의 예외는 상설전에만 해당합니다.'
  },
  {
    id: 'late-checkout',
    level: 'N2',
    passage: [
      ['通常のチェックアウトは十一時です。延長をご希望の場合は、当日の朝九時までにフロントへお申し出ください。', 'Tsūjō no chekkuauto wa jūichiji desu. Enchō o gokibō no baai wa, tōjitsu no asa kuji made ni furonto e omōshide kudasai.', '일반 체크아웃은 11시입니다. 연장을 원하시면 당일 오전 9시까지 프런트에 말씀해 주세요.'],
      ['なお、当日の空室状況によってはご希望に添えないことがあります。', 'Nao, tōjitsu no kūshitsu jōkyō ni yotte wa gokibō ni soenai koto ga arimasu.', '다만 당일 빈 객실 상황에 따라 요청을 들어 드리지 못할 수 있습니다.']
    ],
    prompt: '오전 8시 반에 연장을 요청했다면 어떻게 되나요?',
    choices: ['11시 전까지는 언제든 연장이 확정된다.', '요청은 가능하지만 객실 상황에 따라 거절될 수 있다.', '9시 전에 요청하면 처리할 수 없다.'],
    answer: 1,
    evidence: 1,
    explanation: '「によっては」는 조건에 따라 결과가 달라짐을 나타내요. 9시 전 요청은 접수할 수 있지만 승인 여부는 객실 상황에 달려 있어요.'
  },
  {
    id: 'visitor-flow',
    level: 'N1',
    passage: [
      ['旧市街の混雑を抑えるには、来訪者の総数を減らすよりも、特定の時間帯に人が集中する理由を把握するほうが先だ。', 'Kyūshigai no konzatsu o osaeru ni wa, raihōsha no sōsū o herasu yori mo, tokutei no jikantai ni hito ga shūchū suru riyū o haaku suru hō ga saki da.', '구시가지의 혼잡을 줄이려면 방문객 총수를 줄이기보다 특정 시간대에 사람들이 몰리는 이유를 파악하는 일이 먼저다.'],
      ['店の開店時刻が一斉であれば、人数だけを制限しても、待ち行列は別の場所に移るにすぎない。', 'Mise no kaiten jikoku ga issei de areba, ninzū dake o seigen shite mo, machigyōretsu wa betsu no basho ni utsuru ni suginai.', '가게들이 일제히 문을 연다면 인원만 제한해도 대기 줄은 다른 곳으로 옮겨 갈 뿐이다.']
    ],
    prompt: '글쓴이가 가장 먼저 해야 한다고 보는 일은 무엇인가요?',
    choices: ['가게마다 같은 시각에 문을 열게 한다.', '구시가지의 전체 방문객 수를 제한한다.', '특정 시간대에 방문객이 집중되는 원인을 살핀다.'],
    answer: 2,
    evidence: 0,
    explanation: '「～よりも…ほうが先」로 우선순위를 제시합니다. 두 번째 문장은 인원만 제한할 때 생기는 한계를 예로 듭니다.'
  },
  {
    id: 'bus-public-comment',
    level: 'N1',
    passage: [
      ['利用者が少ないからといって、路線の廃止が直ちに妥当になるわけではない。', 'Riyōsha ga sukunai kara to itte, rosen no haishi ga tadachi ni datō ni naru wake de wa nai.', '이용자가 적다고 해서 노선을 폐지하는 것이 곧바로 타당해지는 것은 아니다.'],
      ['代わりの交通手段がない地区では、数の上では少数の利用者であっても、通院や通学の機会を失うおそれがある。', 'Kawari no kōtsū shudan ga nai chiku de wa, kazu no ue de wa shōsū no riyōsha de atte mo, tsūin ya tsūgaku no kikai o ushinau osore ga aru.', '대체 교통수단이 없는 지역에서는 수적으로 적은 이용자라 해도 통원이나 통학 기회를 잃을 우려가 있다.']
    ],
    prompt: '이 글에서 노선 폐지 여부를 판단할 때 함께 보아야 한다고 시사하는 것은 무엇인가요?',
    choices: ['주민이 다른 교통수단으로 일상 목적을 달성할 수 있는가', '노선별 이용자가 모두 같은 숫자인가', '이미 폐지한 노선을 즉시 모두 복원할 수 있는가'],
    answer: 0,
    evidence: 1,
    explanation: '첫 문장은 이용자 수 하나로는 결론을 내릴 수 없다고 말해요. 이어 대체 수단이 없을 때 통원·통학이 어려워지는 영향을 설명합니다.'
  }
];
