import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.GOOGLE_API_KEY) {
  throw new Error('GOOGLE_API_KEY is not set');
}

export const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_API_KEY as string
);

// 올바른 모델 인스턴스 생성
export const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash-exp',
  generationConfig: {
    temperature: 0.7,
    maxOutputTokens: 2048,
    candidateCount: 1,
    topP: 0.8,
    topK: 40,
  },
});

// Gemini Flash 2.0 모델을 사용하는 헬퍼 함수
export async function generateTarotReading(prompt: string) {
  try {
    const enhancedPrompt = `
    ${prompt}
    
    ** 중요! 응답할 때 반드시 지켜야 할 말투 규칙: **
    1. 완전 디시/커뮤 감성으로 말해! (ㅋㅋㅋ, 개꿀, 찐, 각도, 개부럽, 개소름 등 사용)
    2. 비속어는 절대 쓰지 말 것
    3. 반말로 친근하게 
    4. "너", "네", "당신" 같은 표현 사용
    5. "이거 완전", "개신기하네", "ㅋㅋㅋ" 같은 표현 자주 사용
    6. 딱딱한 존댓말 금지! 
    
    예시 문체:
    - "이거 완전 너 얘기네? ㅋㅋㅋ"
    - "카드들이 개꿀 케미 터지고 있는데?"
    - "진짜 찐이야! 소름 돋네"
    - "이거 개부럽다 진짜"
    `;
    
    const response = await model.generateContent(enhancedPrompt);
    return response.response.text();
  } catch (error) {
    console.error('타로 리딩 생성 중 오류:', error);
    throw error;
  }
}

export async function generateFragranceRecommendation(
  tarotResults: string,
  userPreferences: any
) {
  try {
    const prompt = `
    야! 타로 카드 결과 봤는데 이거 완전 개꿀잼이네 ㅋㅋㅋ 
    AC'SCENT 컬렉션에서 딱 맞는 향수 추천해줘! 근데 중요한 건 1번부터 30번까지 골고루 추천해야 해! 
    특정 향수만 계속 추천하지 말고 다양하게 추천해줘!
    
    타로 결과: ${tarotResults}
    사용자 선호도: ${JSON.stringify(userPreferences)}
    
    AC'SCENT 컬렉션 목록 (1번부터 30번까지 골고루 추천해야 함!):
    AC'SCENT01: 블랙베리 더크 - 세련된, 도시적인, 모던한 (블랙베리, 월계수잎, 시더우드)
    AC'SCENT02: 만다린 브리즈 - 활기찬, 밝은, 경쾌한 (만다린 오렌지, 그레이프프루트, 피오니)
    AC'SCENT03: 스트로베리 키스 - 사랑스러운, 발랄한, 귀여운 (스트로베리, 자스민, 바닐라)
    AC'SCENT04: 베르가못 선 - 우아한, 세련된, 고급스러운 (베르가못, 오렌지 플라워, 엠버)
    AC'SCENT05: 비터 오렌지 어텀 - 강렬한, 카리스마, 세련된 (비터 오렌지, 쥬니퍼베리, 스파이시 우디)
    AC'SCENT06: 캐럿 프레시 - 건강한, 자연스러운, 독특한 (캐럿, 자몽, 로터스)
    AC'SCENT07: 로즈 클래식 - 우아한, 고급스러운, 여성스러운 (로즈, 다마스커스 로즈, 머스크)
    AC'SCENT08: 튜베로즈 나이트 - 관능적인, 매혹적인, 신비로운 (튜베로즈, 화이트 플로럴, 프리지아)
    AC'SCENT09: 오렌지 블라썸 가든 - 생기발랄한, 밝은, 우아한 (오렌지 블라썸, 자스민, 퉁카 빈)
    AC'SCENT10: 튤립 스프링 - 섬세한, 순수한, 봄의 (튤립, 시클라멘, 라일락)
    AC'SCENT11: 라임 바질 - 생동감있는, 상쾌한, 활력적인 (라임, 바질, 앰버우드)
    AC'SCENT12: 은방울꽃 메도우 - 순수한, 생명력있는, 여성스러운 (은방울꽃, 핑크 프리지아, 자스민)
    AC'SCENT13: 유자 민트 - 건강한, 활력적인, 독특한 (유자, 로즈마리, 민트)
    AC'SCENT14: 민트 자스민 - 시원한, 맑은, 깨끗한 (민트, 자스민, 마테 잎)
    AC'SCENT15: 페티그레인 시트러스 - 세련된, 활기찬, 도시적인 (페티그레인, 비터오렌지, 자몽)
    AC'SCENT16: 샌달우드 오리엔탈 - 깊이있는, 신비로운, 럭셔리한 (샌달우드, 암브록산, 파피루스)
    AC'SCENT17: 레몬페퍼 인센스 - 매콤한, 신비로운, 독특한 (레몬페퍼, 인센스, 오리스)
    AC'SCENT18: 핑크페퍼 넛맥 - 세련된, 스파이시한, 모던한 (핑크페퍼, 넛맥, 민트)
    AC'SCENT19: 바다소금 세이지 - 청정한, 자연스러운, 상쾌한 (바다소금, 세이지, 자몽)
    AC'SCENT20: 타임 제라늄 - 강인한, 자연스러운, 세련된 (타임, 제라늄, 엘레미)
    AC'SCENT21: 머스크 튜베로즈 - 관능적인, 고급스러운, 포근한 (머스크, 아프리카 오렌지꽃, 튜베로즈)
    AC'SCENT22: 화이트로즈 페퍼 - 순수한, 세련된, 모던한 (화이트로즈, 핑크페퍼, 머스크)
    AC'SCENT23: 스웨이드 머스크 - 고급스러운, 세련된, 포근한 (스웨이드, 은방울꽃, 머스크)
    AC'SCENT24: 이탈리안 만다린 - 자연스러운, 따뜻한, 관능적인 (이탈리안만다린, 암브레트, 머스크)
    AC'SCENT25: 라벤더 과이악 - 클래식한, 품격있는, 남성적인 (라벤더, 시나몬, 과이악우드)
    AC'SCENT26: 사이프러스 시더 - 청량한, 남성적인, 세련된 (이탈리안사이프러스, 시더우드, 스파이시 어코드)
    AC'SCENT27: 스모키 우드 - 깊이있는, 럭셔리한, 성숙한 (스모키 블렌드 우드, 로즈우드, 카다멈)
    AC'SCENT28: 레더 세이지 - 모던한, 럭셔리한, 도시적인 (레더, 통카빈, 세이지)
    AC'SCENT29: 바이올렛 베리 - 실험적인, 현대적인, 아방가르드 (바이올렛, 네스베리, 프랑스머스크)
    AC'SCENT30: 무화과 베르가못 - 우아한, 여유로운, 클래식한 (무화과, 베르가못, 월계수잎)
    
    ** 중요! 반드시 지켜야 할 규칙들: **
    1. 🔥 절대로 AC'SCENT15만 계속 추천하지 말 것! 1번부터 30번까지 골고루 추천해야 함!
    2. 매번 다른 번호의 향수를 추천할 것! (01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 중에서!)
    3. 말투는 완전 디시/커뮤 감성으로! (ㅋㅋㅋ, 개꿀, 찐, 각도 등 사용)
    4. 비속어는 쓰지 말 것
    5. 반말로 친근하게
    6. 🔥 다시 한번 강조: 특정 번호만 계속 추천하는 것은 절대 금지!
    
    추천할 때 포함해야 할 내용:
    1. 추천 향수 코드와 이름 (예: AC'SCENT07 로즈 클래식)
    2. "이거 완전 너랑 찰떡인데?" 같은 커뮤 감성으로 타로 결과와 연관성 설명
    3. "ㅋㅋㅋ 향수 성격이랑 카드 키워드 개똑같네!" 이런 식으로 매칭 이유
    4. "향 자체가 타로 메시지 그 잡채임 ㅋㅋ" 같은 식으로 향 노트 연결 설명
    `;

    const response = await model.generateContent(prompt);
    return response.response.text();
  } catch (error) {
    console.error('향수 추천 생성 중 오류:', error);
    throw error;
  }
}