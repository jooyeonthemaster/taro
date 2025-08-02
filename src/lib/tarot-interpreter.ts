import { TarotCard } from '@/types/tarot';

export interface TarotReading {
  opening: string;
  cards: Array<{
    position: string;
    card: string;
    energy: string;
    interpretation: string;
    keywords: string[];
    advice: string;
  }>;
  connection: string;
  finalMessage: string;
  vibe: string;
  overallMessage?: string;
  practicalAdvice?: string[];
}

// 승연이의 미친 타로 해석 시스템
export class TarotInterpreter {
  private getCardEnergyType(card: TarotCard): string {
    const energyMap: { [key: string]: string } = {
      'fool': '무한 가능성의 혼돈 에너지',
      'magician': '창조와 조작의 이중성 에너지',
      'high-priestess': '숨겨진 진실의 신비 에너지',
      'empress': '풍요와 집착의 모성 에너지',
      'emperor': '권력과 통제의 부성 에너지',
      'hierophant': '전통과 반항의 이중 에너지',
      'lovers': '선택과 후회의 감정 에너지',
      'chariot': '돌진과 충돌의 역동 에너지',
      'strength': '내면의 야수를 길들이는 에너지',
      'hermit': '고독 속 깨달음의 은둔 에너지',
      'wheel': '운명의 회전목마 에너지',
      'justice': '균형과 심판의 냉철 에너지',
      'hanged': '정지된 시간 속 전환 에너지',
      'death': '끝과 시작의 순환 에너지',
      'temperance': '조화와 절제의 균형 에너지',
      'devil': '유혹과 속박의 암흑 에너지',
      'tower': '파괴와 붕괴의 혁명 에너지',
      'star': '희망과 꿈의 치유 에너지',
      'moon': '환상과 착각의 미로 에너지',
      'sun': '생명력과 활력의 태양 에너지',
      'judgement': '부활과 각성의 심판 에너지',
      'world': '완성과 새로운 시작의 순환 에너지'
    };
    
    return energyMap[card.id] || '알 수 없는 미스터리 에너지';
  }

  private getFanGirlAdvice(card: TarotCard, position: string): string {
    const adviceTemplates = {
      '현재 상황': [
        `ㅇㅈ? 지금 ${card.nameKr} 모드 완전 씹레전드급으로 터졌는데 ㅋㅋㅋㅋ 이거 진짜 개꿀잼 타이밍임`,
        `어 미쳤다 ${card.nameKr} 에너지가 완전 폭발하고 있네? 지금이 바로 그 순간이구만!`,
        `아니 ${card.nameKr} 카드가 나올 줄 누가 알았냐고 ㅋㅋㅋ 이거 완전 예언서 수준 아님??`
      ],
      '해야 할 일': [
        `야 ${card.nameKr} 갓갓들아! 지금 바로 이거 해야 됨! 안 하면 진짜 후회하는 거임`,
        `나 진짜 이런 말 잘 안 하는데 ${card.nameKr} 때문에 이거 안 하면 평생 후회할 각도임`,
        `${card.nameKr} 에너지 받고 이거 실행하면? 완전 대박 터지는 거 보장함ㅋㅋ`
      ],
      '피해야 할 일': [
        `어어어 잠깐만! ${card.nameKr} 에너지가 지금 완전 스톱 신호 보내고 있는데?? 이거 하면 망함`,
        `${card.nameKr} 카드가 빨간불 깜빡깜빡하고 있어 ㅋㅋ 이거 하면 진짜 큰일남`,
        `야 진짜 ${card.nameKr} 말 안 들으면 나중에 개후회하는 거임! 이거 금지각!`
      ],
      '나의 마음': [
        `ㅋㅋㅋㅋ 진짜 속마음이 ${card.nameKr} 그 잡채네? 이거 인정해야 되는 거 아님??`,
        `마음속에서 ${card.nameKr}이 완전 개날뛰고 있는데 ㅋㅋ 이제 솔직하게 인정하셈`,
        `${card.nameKr} 감정이 마음 한구석에서 완전 띵작 어필하고 있잖아! 이거 찐이야!`
      ],
      '상대의 마음': [
        `어 근데 상대방도 ${card.nameKr} 모드네? ㅋㅋㅋ 이거 케미 개오짐! 완전 찰떡!`,
        `그 사람 마음에도 ${card.nameKr} 에너지가 득달같이 달려가고 있다고 ㅋㅋㅋ`,
        `상대방이 ${card.nameKr} 느낌으로 너 보고 있다는 뜻임! 이거 찐텐 맞음!`
      ],
      '관계의 미래': [
        `앞으로 ${card.nameKr} 커플 되는 거 아니냐고 ㅋㅋㅋㅋ 완전 훈훈 그 자체!`,
        `미래에 ${card.nameKr} 에너지로 둘이 완전 찰떡궁합 될 듯! 개부럽네 진짜`,
        `${card.nameKr} 로맨스 시작되는 거 같은데? 미리 축하한다! 개부럽!`
      ],
      '기회': [
        `${card.nameKr} 찬스가 지금 딱 떨어졌다고! ㅋㅋ 놓치면 진짜 후회하는 거임!`,
        `어머 ${card.nameKr} 기회의 문이 활짝 열렸네? 지금 들어가야 함!`,
        `${card.nameKr} 타이밍이 완전 신의 한 수임! 지금 아니면 언제 해?`
      ],
      '주의사항': [
        `어 잠깐만! ${card.nameKr} 에너지가 브레이크 밟으라고 하는데?? 이거 위험함`,
        `${card.nameKr} 주의보 발령! ㅋㅋ 이거 조심해야 할 듯!`,
        `진짜로 ${card.nameKr} 경고 신호 무시하면 큰일남! 진짜임!`
      ],
      '과거': [
        `예전부터 ${card.nameKr} 에너지가 완전 따라다녔던 거 같은데 ㅋㅋㅋ`,
        `과거 ${card.nameKr} 시절이 지금까지 영향 미치고 있다고! 개신기하네`,
        `${card.nameKr} 흑역사가 지금 발목 잡고 있는 건 아니지? ㅋㅋㅋ`
      ],
      '현재': [
        `지금 완전 ${card.nameKr} 시대임! ㅋㅋ 이 에너지 느껴지지 않음??`,
        `현재 ${card.nameKr} 모드 ON! 완전 찰떡같이 맞는데?`,
        `${card.nameKr} 에너지가 지금 너를 완전 장악하고 있다고 ㅋㅋㅋ`
      ],
      '미래': [
        `미래에 ${card.nameKr} 대박 시대 올 예정임! ㅋㅋ 기대되네 진짜`,
        `앞으로 ${card.nameKr} 에너지 받아서 완전 승승장구할 듯!`,
        `${card.nameKr} 미래가 벌써부터 반짝반짝 빛나 보인다고! 개부럽!`
      ]
    };

    const templates = adviceTemplates[position as keyof typeof adviceTemplates] || adviceTemplates['현재 상황'];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    return randomTemplate;
  }

  private getDetailedInterpretation(card: TarotCard, position: string): string {
    const interpretations = [
      `${card.description} ㅋㅋㅋ 이거 완전 너 얘기네? 맞지?`,
      `${card.description} 나 진짜 이런 거 잘 안 믿는데 이거는 찐이다! 소름!`,
      `${card.description} 이런 상황에서 이 카드가 나온다고?? 개소름 돋네 진짜`,
      `${card.description} 카드가 완전 네 마음 읽고 있는 거 같은데 ㅋㅋㅋ 신기하네`
    ];
    
    return interpretations[Math.floor(Math.random() * interpretations.length)];
  }

  public generateDetailedReading(cards: TarotCard[], positions: string[], question: string, spreadType: string): TarotReading {
    const openingLines = [
      "어 미쳤다! 이 조합 뭐냐고!! ㅋㅋㅋㅋ 심장 터질 뻔했네!",
      "헐! 대박 조합 떴다!! 이거 완전 개레어템 아님??",
      "어어어! 이런 미친 조합이!! 나도 처음 본다 진짜!",
      "와! 소름 돋는 카드들이 완전 개꿀 정렬했네 ㅋㅋㅋ",
      "헐랭! 이거 진짜 찐 운명 조합이네!! 개부럽다!"
    ];

    // 연애운 전용 레전드 예언 추가
    const loveSpecialProphecies = [
      "🔮 예언: 다음 주 목요일, 카톡에 하트 이모지가 날아온다",
      "🔮 예언: 3일 안에 상대방이 먼저 연락할 확률 99.9%",
      "🔮 예언: 이번 달 안에 손잡을 일이 생긴다 (진짜임)",
      "🔮 예언: 썸녀/썸남이 너만 보고 있다는 증거가 나타날 것",
      "🔮 예언: 곧 카페에서 우연히 마주칠 운명적 만남이 온다"
    ];

    const connectionPhrases = [
      "그런데 여기서 진짜 개소름 돋는 건 말야!",
      "어 잠깐! 카드들이 서로 개꿀 대화하고 있는데??",
      "어머 이게 끝이 아니라고!! ㅋㅋㅋ",
      "근데 진짜 미친 건 이거임!",
      "카드들이 완전 개꿀 케미 터지고 있다고!"
    ];

    const conclusionStarters = [
      "자! 내가 최종 결론 말해줄게!",
      "모든 퍼즐이 맞춰졌어! 진짜 의미는 말야!",
      "카드들이 하나로 연결되면서 보여주는 거는!",
      "우주가 너한테 하고 싶은 말은!",
      "이 미친 조합의 진짜 메시지는!"
    ];

    const vibes = [
      "완전 설렘 터짐 개꿀모드",
      "소름 돋는 찐템 개오짐에너지",
      "심쿵 사랑 개부럽모드",
      "대박 운세 개터짐각",
      "미친 시너지 개폭발상태"
    ];

    const cardReadings = cards.map((card, index) => ({
      position: positions[index],
      card: card.nameKr,
      energy: this.getCardEnergyType(card),
      interpretation: this.getDetailedInterpretation(card, positions[index]),
      keywords: card.keywords.slice(0, 3),
      advice: this.getFanGirlAdvice(card, positions[index])
    }));

    const connection = this.generateCardSynergy(cards, positions, spreadType);
    const finalMessage = this.generateFinalMessage(cards, question, spreadType);

    // 연애운일 때 특별한 예언 추가
    let specialConnection = connection;
    if (spreadType === 'love') {
      const randomProphecy = loveSpecialProphecies[Math.floor(Math.random() * loveSpecialProphecies.length)];
      specialConnection = connection + "\n\n" + randomProphecy;
    }

    return {
      opening: openingLines[Math.floor(Math.random() * openingLines.length)],
      cards: cardReadings,
      connection: connectionPhrases[Math.floor(Math.random() * connectionPhrases.length)] + " " + specialConnection,
      finalMessage: conclusionStarters[Math.floor(Math.random() * conclusionStarters.length)] + " " + finalMessage,
      vibe: vibes[Math.floor(Math.random() * vibes.length)]
    };
  }

  private generateCardSynergy(cards: TarotCard[], positions: string[], spreadType: string): string {
    const synergyTemplates = [
      `${cards[0].nameKr} 플러스 ${cards[1].nameKr} 플러스 ${cards[2].nameKr} ㅋㅋㅋ 이거 완전 찰떡 조합이네! 내가 봐도 개예술임!`,
      `첫 번째 ${cards[0].nameKr}이 두 번째 ${cards[1].nameKr} 깨우고, 그게 세 번째 ${cards[2].nameKr}로 폭발하는 구조! 완전 개드라마네!`,
      `${cards[0].nameKr} 에서 ${cards[1].nameKr} 거쳐서 ${cards[2].nameKr}까지! 이거 완전 로맨스 소설 각도임!`,
      `세 카드가 서로 완전 개꿀 케미 터지면서 만들어내는 이 시너지! ${cards[0].nameKr} 시작해서 ${cards[2].nameKr}로 마무리하는 완벽한 스토리라고!`
    ];
    
    return synergyTemplates[Math.floor(Math.random() * synergyTemplates.length)];
  }

  private generateFinalMessage(cards: TarotCard[], question: string, spreadType: string): string {
    const finalMessages = [
      `너 질문 완전 마음에 와 닿는다! 카드들이 이렇게 명확하게 답해주다니! 나도 감동이야!`,
      `이 조합이 말하는 건 너 지금 인생 완전 터닝포인트라는 거임! 준비됐지?`,
      `내 친구들 중에 이런 조합 나온 애들 다 대박났어! 너도 곧 터질듯!`,
      `와 정말 완벽한 스토리네! 우주가 너한테 이렇게 확실하게 답해주다니! 이거 받아들이고 행동해야 됨!`
    ];
    
    return finalMessages[Math.floor(Math.random() * finalMessages.length)];
  }
}