import { TarotCard } from '@/types/tarot';

export const MAJOR_ARCANA: TarotCard[] = [
  {
    id: 'fool',
    name: 'The Fool',
    nameKr: '멍청이',
    description: '아무 생각 없이 살면 더 행복해짐',
    keywords: ['무뇌', '폰벽', '충동구매', '인스타스토리'],
    reversed: false,
    image: '/images/tarot/major/00-fool.jpg',
    meaning: {
      upright: '생각하지 마라, 그냥 일단 해라',
      reversed: '생각은 하는데 행동은 안 함'
    },
    element: 'air',
    suit: 'major'
  },
  {
    id: 'magician',
    name: 'The Magician',
    nameKr: '사기꾼',
    description: '말빨로 모든 걸 해결하는 능력자',
    keywords: ['PPT마법', '말발', '허세', '뻥튀기'],
    reversed: false,
    image: '/images/tarot/major/01-magician.jpg',
    meaning: {
      upright: '거짓말도 실력이다, 속이는 것도 능력이다',
      reversed: '거짓말이 들켰다'
    },
    element: 'air',
    suit: 'major'
  },
  {
    id: 'high-priestess',
    name: 'The High Priestess',
    nameKr: '아줌마',
    description: '동네 모든 소문을 다 아는 분',
    keywords: ['뒷담화', '카톡단톡', '동네소식통', '우왕좌왕'],
    reversed: false,
    image: '/images/tarot/major/02-high-priestess.jpg',
    meaning: {
      upright: '동네 아줌마한테 물어보면 다 알 수 있다',
      reversed: '소문이 잘못 전달됨'
    },
    element: 'water',
    suit: 'major'
  },
  {
    id: 'empress',
    name: 'The Empress',
    nameKr: '엄마',
    description: '밥 먹었냐가 인사인 분',
    keywords: ['잔소리', '반찬공급', '카톡폭탄', '건강염려'],
    reversed: false,
    image: '/images/tarot/major/03-empress.jpg',
    meaning: {
      upright: '엄마가 해주는 밥이 최고다',
      reversed: '집에 안 들어가면 혼난다'
    },
    element: 'earth',
    suit: 'major'
  },
  {
    id: 'emperor',
    name: 'The Emperor',
    nameKr: '아빠',
    description: '신문 읽고 TV 리모컨 독점하는 분',
    keywords: ['꼰대질', '옛날얘기', '리모컨장악', '아침드라마'],
    reversed: false,
    image: '/images/tarot/major/04-emperor.jpg',
    meaning: {
      upright: '아빠 말이 다 맞다 (가끔)',
      reversed: '라면 끓이는 것도 못 함'
    },
    element: 'fire',
    suit: 'major'
  },
  {
    id: 'hierophant',
    name: 'The Hierophant',
    nameKr: '꼰대',
    description: '요즘 애들은 버릇이 없다고 하는 분',
    keywords: ['라떼는말이야', '요즘애들', '예의없음', '군대얘기'],
    reversed: false,
    image: '/images/tarot/major/05-hierophant.jpg',
    meaning: {
      upright: '라떼는 말이야~ 우리 때는~',
      reversed: '시대가 바뀐 걸 모르고 있음'
    },
    element: 'earth',
    suit: 'major'
  },
  {
    id: 'lovers',
    name: 'The Lovers',
    nameKr: '연인',
    description: '분위기 파악 못하고 사랑타령하는 커플',
    keywords: ['어깨깡패', '인스타일상', '커플템', '달달함주의'],
    reversed: false,
    image: '/images/tarot/major/06-lovers.jpg',
    meaning: {
      upright: '사랑은 눈 멀게 하고 귀 막게 한다',
      reversed: '싸우다가 인스타 커플사진 삭제'
    },
    element: 'air',
    suit: 'major'
  },
  {
    id: 'chariot',
    name: 'The Chariot',
    nameKr: '택시기사',
    description: '길은 다 아는데 손님 말은 안 듣는 분',
    keywords: ['지름길', '교통체증', '네비무시', '월드컵얘기'],
    reversed: false,
    image: '/images/tarot/major/07-chariot.jpg',
    meaning: {
      upright: '기사님이 가시는 길이 맞다',
      reversed: '목적지와 정반대로 가고 있음'
    },
    element: 'water',
    suit: 'major'
  },
  {
    id: 'strength',
    name: 'Strength',
    nameKr: '헬창',
    description: '하루 안 하면 온몸이 근질근질한 분',
    keywords: ['단백질쉐이크', '벌크업', '프로틴', '운동복'],
    reversed: false,
    image: '/images/tarot/major/08-strength.jpg',
    meaning: {
      upright: '운동이 곧 인생이다',
      reversed: '근손실 걱정에 잠 못 잠'
    },
    element: 'fire',
    suit: 'major'
  },
  {
    id: 'hermit',
    name: 'The Hermit',
    nameKr: '은둔형외톨이',
    description: '집이 최고라고 믿는 홈순이/홈돌이',
    keywords: ['넷플릭스', '배달음식', '집콕', '온라인쇼핑'],
    reversed: false,
    image: '/images/tarot/major/09-hermit.jpg',
    meaning: {
      upright: '집에 있는 게 가장 편하다',
      reversed: '나가라고 해도 안 나간다'
    },
    element: 'earth',
    suit: 'major'
  },
  {
    id: 'wheel-fortune',
    name: 'Wheel of Fortune',
    nameKr: '로또',
    description: '1등 당첨만 꿈꾸며 사는 인생',
    keywords: ['대박꿈', '복권', '투자실패', '한탕주의'],
    reversed: false,
    image: '/images/tarot/major/10-wheel.jpg',
    meaning: {
      upright: '이번 주는 진짜 될 것 같다',
      reversed: '또 꽝이다'
    },
    element: 'fire',
    suit: 'major'
  },
  {
    id: 'justice',
    name: 'Justice',
    nameKr: '키보드워리어',
    description: '인터넷에서 정의구현하는 분',
    keywords: ['댓글배틀', '신상털기', '정의감', '분노조절'],
    reversed: false,
    image: '/images/tarot/major/11-justice.jpg',
    meaning: {
      upright: '키보드가 칼보다 강하다',
      reversed: '제대로 알아보지도 않고 까댔다'
    },
    element: 'air',
    suit: 'major'
  },
  {
    id: 'hanged-man',
    name: 'The Hanged Man',
    nameKr: '눈치왕',
    description: '분위기 파악하느라 아무 말 못하는 분',
    keywords: ['눈치보기', '분위기파악', '내성적', '소심함'],
    reversed: false,
    image: '/images/tarot/major/12-hanged.jpg',
    meaning: {
      upright: '눈치 보느라 인생 다 감',
      reversed: '한 번만 용기내자'
    },
    element: 'water',
    suit: 'major'
  },
  {
    id: 'death',
    name: 'Death',
    nameKr: '네토끼',
    description: '망한 건 다 접고 새로 시작하자',
    keywords: ['포기각', '리셋', '새출발', '막장인생'],
    reversed: false,
    image: '/images/tarot/major/13-death.jpg',
    meaning: {
      upright: '망한 건 깔끔하게 정리하자',
      reversed: '아직도 미련을 못 버림'
    },
    element: 'water',
    suit: 'major'
  },
  {
    id: 'temperance',
    name: 'Temperance',
    nameKr: '중도충',
    description: '이것도 저것도 아닌 애매한 인생',
    keywords: ['애매함', '우유부단', '중간타협', '줏대없음'],
    reversed: false,
    image: '/images/tarot/major/14-temperance.jpg',
    meaning: {
      upright: '적당히가 최고다',
      reversed: '결정장애로 아무것도 못 함'
    },
    element: 'fire',
    suit: 'major'
  },
  {
    id: 'devil',
    name: 'The Devil',
    nameKr: '독살이',
    description: '혼자 사는 게 편하다고 하는 분',
    keywords: ['자유로움', '책임회피', '이기주의', '개인플레이'],
    reversed: false,
    image: '/images/tarot/major/15-devil.jpg',
    meaning: {
      upright: '혼자가 편하긴 한데 가끔 외롭다',
      reversed: '외로움을 못 견디겠다'
    },
    element: 'earth',
    suit: 'major'
  },
  {
    id: 'tower',
    name: 'The Tower',
    nameKr: '멘붕',
    description: '모든 계획이 박살나는 순간',
    keywords: ['계획파토', '현실직면', '충격', '패닉상태'],
    reversed: false,
    image: '/images/tarot/major/16-tower.jpg',
    meaning: {
      upright: '인생 한 번 꼬이면 연쇄 꼬임',
      reversed: '그래도 최악은 지나갔다'
    },
    element: 'fire',
    suit: 'major'
  },
  {
    id: 'star',
    name: 'The Star',
    nameKr: '희망고문',
    description: '희망 고문하며 버티는 인생',
    keywords: ['희망', '기대감', '포기하지않기', '버티기'],
    reversed: false,
    image: '/images/tarot/major/17-star.jpg',
    meaning: {
      upright: '언젠간 잘 될 거야',
      reversed: '희망만 가지고는 안 된다'
    },
    element: 'air',
    suit: 'major'
  },
  {
    id: 'moon',
    name: 'The Moon',
    nameKr: '야행성',
    description: '밤에만 활동하는 올빼미족',
    keywords: ['불면증', '야식', '심야쇼핑', '새벽감성'],
    reversed: false,
    image: '/images/tarot/major/18-moon.jpg',
    meaning: {
      upright: '밤이 되면 텐션이 올라간다',
      reversed: '수면패턴이 완전히 망가짐'
    },
    element: 'water',
    suit: 'major'
  },
  {
    id: 'sun',
    name: 'The Sun',
    nameKr: '낙천주의자',
    description: '무슨 일이 있어도 긍정적인 분',
    keywords: ['포지티브', '긍정에너지', '밝음', '텐션업'],
    reversed: false,
    image: '/images/tarot/major/19-sun.jpg',
    meaning: {
      upright: '웃으면 복이 온다',
      reversed: '너무 긍정적이어서 현실감각이 없음'
    },
    element: 'fire',
    suit: 'major'
  },
  {
    id: 'judgement',
    name: 'Judgement',
    nameKr: '자아성찰',
    description: '새벽 3시에 갑자기 현자타임',
    keywords: ['후회', '반성', '현자타임', '인생회고'],
    reversed: false,
    image: '/images/tarot/major/20-judgement.jpg',
    meaning: {
      upright: '반성하는 시간을 가져보자',
      reversed: '반성만 하고 바뀌는 건 없다'
    },
    element: 'fire',
    suit: 'major'
  },
  {
    id: 'world',
    name: 'The World',
    nameKr: '인생완성',
    description: '드디어 내 인생 완성된 느낌',
    keywords: ['성취감', '완성', '만족', '인생정점'],
    reversed: false,
    image: '/images/tarot/major/21-world.jpg',
    meaning: {
      upright: '지금이 인생 최고점이다',
      reversed: '완성했다고 생각했는데 아직 멀었다'
    },
    element: 'earth',
    suit: 'major'
  },
  // 추가 웃긴 카드들
  {
    id: 'coffee',
    name: 'The Coffee',
    nameKr: '카공족',
    description: '카페인 없으면 못 사는 분',
    keywords: ['아메리카노', '카페인중독', '카공', '스타벅스'],
    reversed: false,
    image: '/images/tarot/extra/coffee.jpg',
    meaning: {
      upright: '커피가 곧 생명이다',
      reversed: '카페인 끊었다가 두통 심함'
    },
    element: 'fire',
    suit: 'major'
  },
  {
    id: 'delivery',
    name: 'The Delivery',
    nameKr: '배달주문',
    description: '요리는 안 하고 시켜먹기만 하는 분',
    keywords: ['배달음식', '요리포기', '배달앱', '치킨피자'],
    reversed: false,
    image: '/images/tarot/extra/delivery.jpg',
    meaning: {
      upright: '편의가 최고다',
      reversed: '통장잔고가 배달앱으로 다 사라짐'
    },
    element: 'earth',
    suit: 'major'
  },
  {
    id: 'sns',
    name: 'The SNS',
    nameKr: 'SNS중독자',
    description: '하루에 인스타 100번 확인하는 분',
    keywords: ['좋아요', '스토리', '릴스', '팔로워'],
    reversed: false,
    image: '/images/tarot/extra/sns.jpg',
    meaning: {
      upright: '좋아요가 곧 자존감이다',
      reversed: '타인의 시선에만 신경 쓰고 있음'
    },
    element: 'air',
    suit: 'major'
  },
  {
    id: 'procrastination',
    name: 'The Procrastination',
    nameKr: '미루기달인',
    description: '내일 하자는 말을 입에 달고 사는 분',
    keywords: ['미루기', '내일하자', '마감임박', '벼락치기'],
    reversed: false,
    image: '/images/tarot/extra/procrastination.jpg',
    meaning: {
      upright: '내일의 나에게 맡긴다',
      reversed: '마감 D-1인데 아직 시작도 안 함'
    },
    element: 'earth',
    suit: 'major'
  }
];

export const FRAGRANCE_DATABASE = [
  {
    id: 'ac-scent-01',
    name: '블랙베리 더크',
    code: 'AC\'SCENT01',
    description: '달콤하면서도 신선한 과즙이 터지는 듯한 프루티한 향으로, 도시적이고 모던한 세련미',
    notes: {
      top: ['블랙베리'],
      heart: ['월계수잎'],
      base: ['시더우드']
    },
    personality: ['세련된', '도시적인', '모던한'],
    reasoning: '시크하면서도 세련된 이미지를 원하는 당신에게 완벽한 향수'
  },
  {
    id: 'ac-scent-02',
    name: '만다린 브리즈',
    code: 'AC\'SCENT02',
    description: '밝고 경쾌한 시트러스 향으로, 에너지 넘치는 상큼함과 생동감 있는 첫인상',
    notes: {
      top: ['만다린 오렌지'],
      heart: ['그레이프프루트'],
      base: ['피오니']
    },
    personality: ['활기찬', '밝은', '경쾌한'],
    reasoning: '생동감 있고 밝은 에너지가 필요한 순간의 완벽한 동반자'
  },
  {
    id: 'ac-scent-03',
    name: '스트로베리 키스',
    code: 'AC\'SCENT03',
    description: '달콤하고 싱그러운 과즙이 터지는 듯한 프루티 향으로, 사랑스럽고 발랄한 에너지',
    notes: {
      top: ['스트로베리'],
      heart: ['자스민'],
      base: ['바닐라']
    },
    personality: ['사랑스러운', '발랄한', '귀여운'],
    reasoning: '청순하면서도 매력적인 이미지를 완성하고 싶은 당신에게'
  },
  {
    id: 'ac-scent-04',
    name: '베르가못 선',
    code: 'AC\'SCENT04',
    description: '신선하고 청량감 있는 시트러스 향으로, 이탈리아 지중해의 상쾌한 아침 공기',
    notes: {
      top: ['베르가못'],
      heart: ['오렌지 플라워'],
      base: ['엠버']
    },
    personality: ['우아한', '세련된', '고급스러운'],
    reasoning: '지중해의 세련된 감성을 완벽하게 표현하는 시그니처 향'
  },
  {
    id: 'ac-scent-05',
    name: '비터 오렌지 어텀',
    code: 'AC\'SCENT05',
    description: '쌉싸래하면서도 강렬한 시트러스 향으로, 첫 향부터 강한 존재감과 카리스마',
    notes: {
      top: ['비터 오렌지'],
      heart: ['쥬니퍼베리'],
      base: ['스파이시 우디 어코드']
    },
    personality: ['강렬한', '카리스마', '세련된'],
    reasoning: '도시적인 세련미와 강한 개성을 동시에 표현하고 싶은 당신에게'
  },
  {
    id: 'ac-scent-06',
    name: '캐럿 프레시',
    code: 'AC\'SCENT06',
    description: '독특하고 청량한 신선함이 특징인 루트 향으로, 대지의 생명력과 건강한 이미지',
    notes: {
      top: ['캐럿'],
      heart: ['자몽'],
      base: ['로터스']
    },
    personality: ['건강한', '자연스러운', '독특한'],
    reasoning: '신선한 자연의 에너지와 건강미를 표현하는 특별한 향'
  },
  {
    id: 'ac-scent-07',
    name: '로즈 클래식',
    code: 'AC\'SCENT07',
    description: '고전적이고 우아한 플로럴 향으로, 섬세하고 깊이 있는 장미의 향취',
    notes: {
      top: ['로즈'],
      heart: ['다마스커스 로즈'],
      base: ['머스크']
    },
    personality: ['우아한', '고급스러운', '여성스러운'],
    reasoning: '정제된 여성미와 클래식한 품격을 완성하는 완벽한 플로럴'
  },
  {
    id: 'ac-scent-08',
    name: '튜베로즈 나이트',
    code: 'AC\'SCENT08',
    description: '관능적이고 깊이 있는 화이트 플로럴 향으로, 강렬하고 매혹적인 존재감',
    notes: {
      top: ['튜베로즈'],
      heart: ['화이트 플로럴'],
      base: ['프리지아']
    },
    personality: ['관능적인', '매혹적인', '신비로운'],
    reasoning: '밤공기를 타고 퍼지는 농밀한 향취로 신비로운 매력을 더하고 싶을 때'
  },
  {
    id: 'ac-scent-09',
    name: '오렌지 블라썸 가든',
    code: 'AC\'SCENT09',
    description: '청초하고 밝은 화이트 플로럴 향으로, 봄날 아침의 싱그러움을 담은 향',
    notes: {
      top: ['오렌지 블라썸'],
      heart: ['자스민'],
      base: ['퉁카 빈']
    },
    personality: ['생기발랄한', '밝은', '우아한'],
    reasoning: '프랑스 리비에라의 아침 정원 같은 우아하고 생기 넘치는 에너지'
  },
  {
    id: 'ac-scent-10',
    name: '튤립 스프링',
    code: 'AC\'SCENT10',
    description: '부드럽고 섬세한 플로럴 향으로, 맑고 순수한 봄의 향기',
    notes: {
      top: ['튤립'],
      heart: ['시클라멘'],
      base: ['라일락']
    },
    personality: ['섬세한', '순수한', '봄의'],
    reasoning: '봄날의 청초한 아름다움을 가장 완벽하게 표현하는 향'
  },
  {
    id: 'ac-scent-11',
    name: '라임 바질',
    code: 'AC\'SCENT11',
    description: '신선하고 생동감 있는 시트러스 향으로, 강렬하고 상쾌한 카리브해의 청량감',
    notes: {
      top: ['라임'],
      heart: ['바질'],
      base: ['앰버우드']
    },
    personality: ['생동감있는', '상쾌한', '활력적인'],
    reasoning: '활력 넘치는 첫인상과 건강한 에너지를 원하는 당신에게'
  },
  {
    id: 'ac-scent-12',
    name: '은방울꽃 메도우',
    code: 'AC\'SCENT12',
    description: '달콤하고 매혹적인 플로럴 향으로, 봄의 싱그러운 생명력을 담은 향',
    notes: {
      top: ['은방울꽃'],
      heart: ['핑크 프리지아'],
      base: ['자스민']
    },
    personality: ['순수한', '생명력있는', '여성스러운'],
    reasoning: '봄날의 정원을 연상시키는 순수하고 우아한 향'
  },
  {
    id: 'ac-scent-13',
    name: '유자 민트',
    code: 'AC\'SCENT13',
    description: '상큼하고 새콤달콤한 시트러스 향으로, 한국 특유의 깊이 있는 시트러스 향',
    notes: {
      top: ['유자'],
      heart: ['로즈마리'],
      base: ['민트']
    },
    personality: ['건강한', '활력적인', '독특한'],
    reasoning: '건강하고 활력 넘치는 에너지와 특유의 깊은 향취가 매력적인 향'
  },
  {
    id: 'ac-scent-14',
    name: '민트 자스민',
    code: 'AC\'SCENT14',
    description: '시원하고 상쾌한 허브 향으로, 크리스탈처럼 맑은 청량감',
    notes: {
      top: ['민트'],
      heart: ['자스민'],
      base: ['마테 잎']
    },
    personality: ['시원한', '맑은', '깨끗한'],
    reasoning: '맑은 정신과 활력을 불어넣는 깨끗하고 투명한 향'
  },
  {
    id: 'ac-scent-15',
    name: '페티그레인 시트러스',
    code: 'AC\'SCENT15',
    description: '청량하고 스파클링한 시트러스 향으로, 이탈리아 아말피 해안의 상쾌한 공기',
    notes: {
      top: ['페티그레인'],
      heart: ['비터오렌지'],
      base: ['자몽']
    },
    personality: ['세련된', '활기찬', '도시적인'],
    reasoning: '활기찬 에너지와 세련된 첫인상을 동시에 전달하는 향'
  },
  {
    id: 'ac-scent-16',
    name: '샌달우드 오리엔탈',
    code: 'AC\'SCENT16',
    description: '따뜻하고 깊이 있는 우디 향으로, 크리미한 텍스처와 오리엔탈한 매력',
    notes: {
      top: ['샌달우드'],
      heart: ['암브록산'],
      base: ['파피루스']
    },
    personality: ['깊이있는', '신비로운', '럭셔리한'],
    reasoning: '고대 신전의 기둥처럼 깊이 있고 신비로운 럭셔리 우디의 정수'
  },
  {
    id: 'ac-scent-17',
    name: '레몬페퍼 인센스',
    code: 'AC\'SCENT17',
    description: '상큼하면서도 스파이시한 향으로, 톡 쏘는 듯한 생동감과 동양의 신비로움',
    notes: {
      top: ['레몬페퍼'],
      heart: ['인센스'],
      base: ['오리스']
    },
    personality: ['매콤한', '신비로운', '독특한'],
    reasoning: '동양과 서양의 조화를 보여주는 매력적이고 신비로운 향'
  },
  {
    id: 'ac-scent-18',
    name: '핑크페퍼 넛맥',
    code: 'AC\'SCENT18',
    description: '매콤달콤하면서도 스파이시한 향으로, 현대적이고 세련된 스파이시함',
    notes: {
      top: ['핑크페퍼'],
      heart: ['넛맥'],
      base: ['민트']
    },
    personality: ['세련된', '스파이시한', '모던한'],
    reasoning: '도시적인 세련미와 스파이시한 강렬함의 완벽한 밸런스'
  },
  {
    id: 'ac-scent-19',
    name: '바다소금 세이지',
    code: 'AC\'SCENT19',
    description: '미네랄한 워터리 향으로, 해변의 짭조름한 공기를 담아낸 청량감',
    notes: {
      top: ['바다소금'],
      heart: ['세이지'],
      base: ['자몽']
    },
    personality: ['청정한', '자연스러운', '상쾌한'],
    reasoning: '지중해 해안의 청량한 공기를 완벽하게 표현하는 자연의 향'
  },
  {
    id: 'ac-scent-20',
    name: '타임 제라늄',
    code: 'AC\'SCENT20',
    description: '허브러스하고 스파이시한 향으로, 산속 깊은 곳 야생 허브의 강인한 향취',
    notes: {
      top: ['타임'],
      heart: ['제라늄'],
      base: ['엘레미']
    },
    personality: ['강인한', '자연스러운', '세련된'],
    reasoning: '자연의 거친 매력과 도시적인 세련미가 조화를 이루는 독특한 향'
  },
  {
    id: 'ac-scent-21',
    name: '머스크 튜베로즈',
    code: 'AC\'SCENT21',
    description: '부드럽고 포근한 머스크 향으로, 벨벳처럼 부드러운 관능미',
    notes: {
      top: ['머스크'],
      heart: ['아프리카 오렌지꽃'],
      base: ['튜베로즈']
    },
    personality: ['관능적인', '고급스러운', '포근한'],
    reasoning: '고급 파리 살롱의 우아한 공기를 담은 프렌치 시크의 정수'
  },
  {
    id: 'ac-scent-22',
    name: '화이트로즈 페퍼',
    code: 'AC\'SCENT22',
    description: '섬세하고 순수한 로즈 향으로, 이슬을 머금은 하얀 장미처럼 맑고 깨끗한 향취',
    notes: {
      top: ['화이트로즈'],
      heart: ['핑크페퍼'],
      base: ['머스크']
    },
    personality: ['순수한', '세련된', '모던한'],
    reasoning: '순백의 장미가 피워내는 섬세하고 맑은 모던 여성미의 완성'
  },
  {
    id: 'ac-scent-23',
    name: '스웨이드 머스크',
    code: 'AC\'SCENT23',
    description: '부드럽고 섬세한 가죽 향으로, 고급스러운 스웨이드 특유의 포근하고 세련된 향취',
    notes: {
      top: ['스웨이드'],
      heart: ['은방울꽃'],
      base: ['머스크']
    },
    personality: ['고급스러운', '세련된', '포근한'],
    reasoning: '도시적인 세련미와 클래식한 럭셔리함이 조화를 이루는 시그니처'
  },
  {
    id: 'ac-scent-24',
    name: '이탈리안 만다린',
    code: 'AC\'SCENT24',
    description: '밝고 산뜻한 시트러스 향으로, 피부에 와닿는 따뜻한 햇살같은 첫인상',
    notes: {
      top: ['이탈리안만다린'],
      heart: ['암브레트'],
      base: ['머스크']
    },
    personality: ['자연스러운', '따뜻한', '관능적인'],
    reasoning: '피부의 자연스러운 향취를 섬세하게 표현하는 관능적인 매력'
  },
  {
    id: 'ac-scent-25',
    name: '라벤더 과이악',
    code: 'AC\'SCENT25',
    description: '차분하고 아로마틱한 허브 향으로, 영국 고택의 품격 있는 허브 향취',
    notes: {
      top: ['라벤더'],
      heart: ['시나몬'],
      base: ['과이악우드']
    },
    personality: ['클래식한', '품격있는', '남성적인'],
    reasoning: '클래식한 남성미와 도시적 세련미를 완성하는 시그니처'
  },
  {
    id: 'ac-scent-26',
    name: '사이프러스 시더',
    code: 'AC\'SCENT26',
    description: '시원하고 청량한 우디 향으로, 지중해 사이프러스 숲의 청량한 향취',
    notes: {
      top: ['이탈리안사이프러스'],
      heart: ['시더우드'],
      base: ['스파이시 어코드']
    },
    personality: ['청량한', '남성적인', '세련된'],
    reasoning: '젊은 남성의 세련된 첫인상과 카리스마 넘치는 매력을 완성'
  },
  {
    id: 'ac-scent-27',
    name: '스모키 우드',
    code: 'AC\'SCENT27',
    description: '그윽하고 짙은 우디 향으로, 오크 배럴에서 숙성된 듯한 고급스러운 스모키함',
    notes: {
      top: ['스모키 블렌드 우드'],
      heart: ['로즈우드'],
      base: ['카다멈']
    },
    personality: ['깊이있는', '럭셔리한', '성숙한'],
    reasoning: '위스키처럼 오랜 시간 숙성된 깊이 있는 럭셔리 우디의 정수'
  },
  {
    id: 'ac-scent-28',
    name: '레더 세이지',
    code: 'AC\'SCENT28',
    description: '고급스럽고 세련된 가죽 향으로, 맞춤 제작된 가죽 재킷처럼 도시적이고 세련된 향취',
    notes: {
      top: ['레더'],
      heart: ['통카빈'],
      base: ['세이지']
    },
    personality: ['모던한', '럭셔리한', '도시적인'],
    reasoning: '현대적인 남성의 세련된 컨템포러리한 매력을 완성하는 시그니처'
  },
  {
    id: 'ac-scent-29',
    name: '바이올렛 베리',
    code: 'AC\'SCENT29',
    description: '짙고 깊이 있는 플로럴 향으로, 고전적인 플로럴을 현대적으로 재해석한 아방가르드',
    notes: {
      top: ['바이올렛'],
      heart: ['네스베리'],
      base: ['프랑스머스크']
    },
    personality: ['실험적인', '현대적인', '아방가르드'],
    reasoning: '실험적인 플로럴 향으로 아방가르드한 여성미를 표현하고 싶을 때'
  },
  {
    id: 'ac-scent-30',
    name: '무화과 베르가못',
    code: 'AC\'SCENT30',
    description: '달콤하면서도 청아한 과일 향으로, 지중해 정원의 우아한 감성을 담은 향',
    notes: {
      top: ['무화과'],
      heart: ['베르가못'],
      base: ['월계수잎']
    },
    personality: ['우아한', '여유로운', '클래식한'],
    reasoning: '지중해의 클래식한 정취와 여유로운 라이프스타일을 완성하는 향'
  }
];