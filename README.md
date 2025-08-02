# 🔮 Taro AI - AI 타로 분석 & 향수 추천 서비스

제미나이 AI 기반의 전문적인 타로 카드 분석과 개인 맞춤형 향수 추천을 제공하는 몽환적인 웹 서비스입니다.

## ✨ 주요 기능

- **🃏 AI 타로 분석**: 제미나이 Flash 2.0을 활용한 정확하고 깊이 있는 타로 카드 해석
- **💐 맞춤 향수 추천**: 타로 결과를 바탕으로 한 AC'SCENT 컬렉션 향수 추천
- **🌙 몽환적 UI**: 보라색 테마의 신비로운 사용자 인터페이스
- **📱 모바일 최적화**: 반응형 디자인으로 모든 기기에서 완벽한 경험
- **⚡ 인터랙티브**: Framer Motion을 활용한 부드러운 애니메이션

## 🛠 기술 스택

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **AI**: Google Gemini 2.0 Flash API
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Custom CSS with mystical theme

## 🚀 시작하기

### 환경 설정

1. 저장소 클론
```bash
git clone <repository-url>
cd taro
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 내용을 추가하세요:
```bash
GOOGLE_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_APP_NAME=Taro AI
NEXT_PUBLIC_APP_DESCRIPTION=AI Tarot Card Reading & Fragrance Recommendation Service
```

4. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 확인하세요.

## 📁 프로젝트 구조

```
taro/
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── tarot/             # 타로 관련 페이지
│   │   ├── fragrance/         # 향수 관련 페이지
│   │   └── globals.css        # 글로벌 스타일
│   ├── components/            # 재사용 가능한 컴포넌트
│   │   ├── ui/               # 기본 UI 컴포넌트
│   │   ├── tarot/            # 타로 관련 컴포넌트
│   │   └── fragrance/        # 향수 관련 컴포넌트
│   ├── lib/                  # 유틸리티 함수
│   │   ├── gemini.ts         # Gemini AI 연동
│   │   └── utils.ts          # 일반 유틸리티
│   ├── data/                 # 정적 데이터
│   │   └── tarot-cards.ts    # 타로 카드 & 향수 데이터
│   └── types/                # TypeScript 타입 정의
│       └── tarot.ts          # 타로 관련 타입
```

## 🎨 디자인 특징

- **보라색 몽환적 테마**: 신비로운 타로의 분위기를 표현
- **별빛 애니메이션**: 동적인 배경 효과
- **카드 플립 효과**: 3D 변환을 활용한 타로 카드 애니메이션
- **글로우 효과**: 신비로운 빛나는 효과
- **모바일 퍼스트**: 모든 화면 크기에 최적화

## 🃏 타로 시스템

### 지원하는 카드
- 메이저 아르카나 22장
- 각 카드별 상세한 의미와 키워드
- 과거-현재-미래 3장 스프레드

### AI 분석 기능
- 사용자 질문 기반 개인화된 해석
- 카드 조합의 전체적인 스토리 연결
- 실용적인 조언과 가이드 제공

## 💐 향수 추천 시스템

### AC'SCENT 컬렉션
- 30가지 고유한 향수 (AC'SCENT01-30)
- 각 향수별 상세한 노트 구성
- 타로 카드와의 상징적 연결

### 추천 알고리즘
- 타로 분석 결과 기반 매칭
- 사용자 개성과 향수 특성 연결
- AI가 제공하는 개인화된 설명

## 🔮 사용 가이드

1. **홈페이지**: 서비스 소개 및 중앙 타로 카드 인터랙션
2. **타로 분석**: 3장 카드 선택 → 질문 입력 → AI 분석 결과
3. **향수 추천**: AC'SCENT 컬렉션 탐색 및 타로 기반 추천
4. **결과 확인**: 상세한 해석과 개인화된 조언

## 🔧 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 📄 라이선스

MIT License

## 🤝 기여하기

프로젝트 개선을 위한 기여를 환영합니다!

---

*신비로운 타로의 세계와 향수의 아름다움을 AI와 함께 경험해보세요* 🌟