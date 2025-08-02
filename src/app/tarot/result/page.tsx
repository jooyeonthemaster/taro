'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Sparkles, ArrowLeft, Download, Share2, Heart, Star } from 'lucide-react';
import Link from 'next/link';
import { MAJOR_ARCANA, FRAGRANCE_DATABASE } from '@/data/tarot-cards';
import { TarotCard, FragranceRecommendation } from '@/types/tarot';
import { TarotInterpreter, TarotReading } from '@/lib/tarot-interpreter';

function TarotResultContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [userQuestion, setUserQuestion] = useState('');
  const [spreadType, setSpreadType] = useState('daily');
  const [recommendedFragrance, setRecommendedFragrance] = useState<FragranceRecommendation | null>(null);
  const [detailedReading, setDetailedReading] = useState<TarotReading | null>(null);

  const spreads = {
    daily: { name: '일일 운세', positions: ['현재 상황', '해야 할 일', '피해야 할 일'] },
    love: { name: '연애운', positions: ['나의 마음', '상대의 마음', '관계의 미래'] },
    career: { name: '직업운', positions: ['현재 상황', '기회', '주의사항'] },
    celtic: { name: '종합 운세', positions: ['과거', '현재', '미래'] }
  };

  useEffect(() => {
    // URL 파라미터에서 데이터 추출
    const cardIds = searchParams.get('cards')?.split(',') || [];
    const question = searchParams.get('question') || '';
    const spread = searchParams.get('spread') || 'daily';

    setUserQuestion(decodeURIComponent(question));
    setSpreadType(spread);

    // 카드 ID로 실제 카드 데이터 찾기
    const cards = cardIds.map(id => MAJOR_ARCANA.find(card => card.id === id)).filter(Boolean) as TarotCard[];
    setSelectedCards(cards);

    // 실제 Gemini AI 타로 해석 및 향수 추천
            const generateAIReading = async () => {
          if (cards.length > 0) {
            try {
              // 0. 필수 데이터 검증
              if (!cards || cards.length === 0) {
                console.error('카드 데이터가 없습니다');
                setIsLoading(false);
                return;
              }
              
              if (!spread || !spreads[spread as keyof typeof spreads]) {
                console.error('스프레드 정보가 없습니다');
                setIsLoading(false);
                return;
              }

              // 1. 안전한 값 추출 (먼저 처리)
              const currentSpread = spreads[spread as keyof typeof spreads];
              const spreadName = currentSpread?.name || '기본 스프레드';
              const positions = currentSpread?.positions || ['과거', '현재', '미래'];
              const safeCards = [
                cards[0]?.nameKr || '카드1',
                cards[1]?.nameKr || '카드2', 
                cards[2]?.nameKr || '카드3'
              ];

              // 2. 기본 타로 해석 (로컬 백업용)
              const interpreter = new TarotInterpreter();
              const localReading = interpreter.generateDetailedReading(cards, positions, question, spread);

              // 3. Gemini AI로 더 깊이 있는 해석 생성
              const cardDetails = cards.map((card, index) => 
                `${positions[index]}: ${card.nameKr} (${card.name}) - ${card.description}`
              ).join('\n');

          const aiPrompt = [
            '당신은 "승연"이라는 이름의 전문 타로 해석사입니다. 다음 타로 상담을 진행하고 반드시 JSON 형태로 응답해주세요.',
            '',
            '**상담 정보:**',
            '- 상담자 질문: "' + (question || '질문 없음') + '"',
            '- 선택 스프레드: ' + spreadName,
            '- 선택된 카드들:',
            cardDetails,
            '',
            '**응답은 반드시 다음 JSON 형태로만 제공하세요 (마크다운이나 다른 형식 사용 금지):**',
            '',
            '{',
            '  "overallMessage": "전체적인 상황 분석과 질문에 대한 직접적인 답변",',
            '  "cardInterpretations": [',
            '    {',
            '      "position": "' + positions[0] + '",',
            '      "cardName": "' + safeCards[0] + '",',
            '      "meaning": "이 카드가 타로에서 진짜 의미하는 바 (단순 설명 금지)",',
            '      "personalizedMessage": "상담자의 상황에 맞춘 구체적인 해석"',
            '    },',
            '    {',
            '      "position": "' + positions[1] + '",',
            '      "cardName": "' + safeCards[1] + '",',
            '      "meaning": "이 카드가 타로에서 진짜 의미하는 바 (단순 설명 금지)",',
            '      "personalizedMessage": "상담자의 상황에 맞춘 구체적인 해석"',
            '    },',
            '    {',
            '      "position": "' + positions[2] + '",',
            '      "cardName": "' + safeCards[2] + '",',
            '      "meaning": "이 카드가 타로에서 진짜 의미하는 바 (단순 설명 금지)",',
            '      "personalizedMessage": "상담자의 상황에 맞춘 구체적인 해석"',
            '    }',
            '  ],',
            '  "cardSynergy": "3장 카드들이 만드는 전체 스토리와 연결성",',
            '  "practicalAdvice": [',
            '    "구체적인 행동 조언 1",',
            '    "구체적인 행동 조언 2",',
            '    "구체적인 행동 조언 3"',
            '  ],',
            '  "finalMessage": "승연이의 따뜻하고 현실적인 마무리 메시지"',
            '}',
            '',
            '**절대 지켜야 할 규칙:**',
            '1. 각 카드의 "meaning"은 진짜 타로에서의 의미 (예: 바보 카드 = 새로운 시작, 순수함, 모험 등)',
            '2. "personalizedMessage"는 상담자 질문과 연결된 맞춤 해석',
            '3. 절대로 마크다운, 코드블록, 이모지, 특수문자 사용 금지',
            '4. 절대로 ```json이나 ``` 같은 코드블록 문법 사용 금지',
            '5. 오직 순수한 JSON 객체만 응답 (다른 텍스트 일체 포함 금지)',
            '6. "완전 소름돋는 타이밍" 같은 의미없는 표현 절대 금지',
            '7. 응답 시작과 끝에 { }만 있어야 함'
          ].join('\n');

          // Gemini AI로 실제 해석 생성 (API Route 호출)
          const response = await fetch('/api/tarot', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: aiPrompt }),
          });
          
          const data = await response.json();
          const aiReading = response.ok ? data.result : null;
          console.log('AI 해석:', aiReading);
          
          // AI 해석을 JSON으로 파싱하고 구조화
          if (aiReading) {
            try {
              // 마크다운 코드블록 제거 (```json, ``` 등)
              const cleanedJson = aiReading
                .replace(/```json\s*/g, '')
                .replace(/```\s*/g, '')
                .trim();
              
              console.log('정리된 JSON:', cleanedJson);
              const parsedAI = JSON.parse(cleanedJson);
              
              // AI 해석으로 기존 로컬 해석 대체
              const enhancedReading = {
                opening: "승연이가 AI로 깊이 분석한 결과예요! ✨",
                cards: parsedAI.cardInterpretations.map((interpretation: any, index: number) => ({
                  position: interpretation.position,
                  card: interpretation.cardName,
                  energy: interpretation.meaning, // 진짜 타로 의미
                  interpretation: interpretation.personalizedMessage, // 개인화된 해석
                  keywords: cards[index].keywords.slice(0, 3),
                  advice: interpretation.personalizedMessage // AI의 개인화된 조언 사용
                })),
                connection: parsedAI.cardSynergy,
                finalMessage: parsedAI.finalMessage,
                vibe: "AI 맞춤 분석",
                overallMessage: parsedAI.overallMessage,
                practicalAdvice: parsedAI.practicalAdvice
              };
              setDetailedReading(enhancedReading);
            } catch (parseError) {
              console.error('AI 응답 파싱 오류:', parseError);
              // 파싱 실패 시 로컬 해석 + 기본 구조화된 데이터 사용
              const fallbackReading = {
                ...localReading,
                overallMessage: "AI 분석 중 오류가 발생했습니다. 로컬 해석을 제공합니다.",
                practicalAdvice: [
                  "현재 상황을 차분히 분석해보세요",
                  "감정보다는 객관적인 판단을 우선하세요",
                  "작은 변화부터 시작해보세요"
                ]
              };
              setDetailedReading(fallbackReading);
            }
          } else {
            // AI 실패 시 로컬 해석 + 기본 구조화된 데이터 사용
            const fallbackReading = {
              ...localReading,
              overallMessage: "네트워크 오류로 AI 분석을 가져올 수 없습니다. 로컬 해석을 제공합니다.",
              practicalAdvice: [
                "현재 상황을 차분히 분석해보세요",
                "감정보다는 객관적인 판단을 우선하세요",
                "작은 변화부터 시작해보세요"
              ]
            };
            setDetailedReading(fallbackReading);
          }

          // 3. 향수 추천 로직 (기존 방식 + AI 보강)
          const allKeywords = cards.flatMap(card => card.keywords);
          const cardNames = cards.map(card => card.nameKr);
          
          // 로컬 매칭 로직
          let bestMatch = FRAGRANCE_DATABASE[0];
          let maxScore = 0;

          for (const fragrance of FRAGRANCE_DATABASE) {
            let score = 0;
            
            const personalityMatches = fragrance.personality.filter(trait => 
              allKeywords.some(keyword => 
                keyword.includes(trait) || trait.includes(keyword) ||
                cardNames.some(name => name.includes(trait) || trait.includes(name))
              )
            ).length;
            
            const nameMatches = cardNames.filter(cardName =>
              fragrance.name.includes(cardName) || cardName.includes(fragrance.name) ||
              fragrance.description.includes(cardName)
            ).length;
            
            score = personalityMatches * 3 + nameMatches * 5;
            
            if (score > maxScore) {
              maxScore = score;
              bestMatch = fragrance;
            }
          }

          // 매칭이 부족하면 카드 순서에 따라 선택
          if (maxScore === 0) {
            const cardIndex = cards[0].id.charCodeAt(0) % FRAGRANCE_DATABASE.length;
            bestMatch = FRAGRANCE_DATABASE[cardIndex];
          }

          setRecommendedFragrance(bestMatch);

          // 4. AI 향수 추천
          const fragrancePrompt = `
타로 결과를 바탕으로 향수를 추천해주세요:

선택된 카드들: ${cardNames.join(', ')}
카드 키워드들: ${allKeywords.join(', ')}
사용자 질문: "${question}"

다음 AC'SCENT 컬렉션 중에서 가장 적합한 향수를 하나 선택하고 추천 이유를 설명해주세요:
${FRAGRANCE_DATABASE.map(f => `${f.code}: ${f.name} - ${f.description}`).join('\n')}

응답 형식:
- 추천 향수: [향수 코드]
- 추천 이유: [타로 카드와의 연관성을 포함한 구체적인 이유]
          `;
          
          try {
            const fragranceResponse = await fetch('/api/fragrance', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                tarotResults: fragrancePrompt, 
                userPreferences: { cards, keywords: allKeywords } 
              }),
            });
            
            const fragranceData = await fragranceResponse.json();
            const aiFragranceRec = fragranceResponse.ok ? fragranceData.result : null;
            console.log('AI 향수 추천:', aiFragranceRec);
            
            // AI 추천에서 향수 코드를 추출하여 해당 향수 설정
            const recommendedCode = aiFragranceRec.match(/AC'SCENT\d+/)?.[0];
            if (recommendedCode) {
              const aiRecommended = FRAGRANCE_DATABASE.find(f => f.code === recommendedCode);
              if (aiRecommended) {
                bestMatch = aiRecommended;
                // AI 추천 이유를 향수에 추가
                bestMatch = {
                  ...bestMatch,
                  reasoning: aiFragranceRec
                };
              }
            }
          } catch (error) {
            console.error('AI 향수 추천 실패:', error);
          }

        } catch (error) {
          console.error('AI 해석 생성 중 오류:', error);
          
          // 오류 발생 시 기본 로컬 해석으로 폴백
          const interpreter = new TarotInterpreter();
          const positions = spreads[spread as keyof typeof spreads]?.positions || ['과거', '현재', '미래'];
          const fallbackReading = interpreter.generateDetailedReading(cards, positions, question, spread);
          setDetailedReading(fallbackReading);

          // 기본 향수 추천
          const cardIndex = cards[0].id.charCodeAt(0) % FRAGRANCE_DATABASE.length;
          setRecommendedFragrance(FRAGRANCE_DATABASE[cardIndex]);
        }
      }
      setIsLoading(false);
    };

    generateAIReading();
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center tarot-background">
        <div className="text-center space-y-6 text-container p-8">
          <motion.div
            className="w-20 h-20 mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-full h-full text-purple-400" />
          </motion.div>
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white text-shadow-strong">승연이가 미친 분석 중...</h2>
            <div className="space-y-1 text-center">
              <motion.p 
                className="text-sm text-gray-300 text-shadow-strong"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔮 카드들의 숨겨진 메시지 해독 중...
              </motion.p>
              <motion.p 
                className="text-sm text-gray-300 text-shadow-strong"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              >
                💫 우주의 에너지 패턴 분석 중...
              </motion.p>
              <motion.p 
                className="text-sm text-gray-300 text-shadow-strong"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
              >
                🌟 운명의 향수 매칭 중...
              </motion.p>
            </div>
            <div className="flex justify-center gap-1 mt-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.8, 1],
                    backgroundColor: ["rgb(168 85 247)", "rgb(236 72 153)", "rgb(168 85 247)"]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 relative overflow-hidden tarot-background">
      {/* 헤더 */}
      <motion.header 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <nav className="flex items-center justify-between px-2">
          <Link href="/tarot" className="flex items-center gap-1 text-white hover:text-purple-300 transition-colors text-container-light p-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm text-shadow-strong">다시 보기</span>
          </Link>
          <div className="flex items-center gap-1 text-container-light p-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <h1 className="text-lg font-bold text-white text-shadow-strong">운명 결과</h1>
          </div>
          <div className="w-16" />
        </nav>
      </motion.header>

      <div className="max-w-sm mx-auto space-y-4">
        {/* 질문 섹션 */}
        <motion.div
          className="text-container p-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-bold text-white mb-2 text-shadow-strong text-center">
            {spreads[spreadType as keyof typeof spreads]?.name} 결과
          </h2>
          <p className="text-xs text-gray-200 text-shadow-strong text-center bg-purple-900/30 p-2 rounded">
            💫 "{userQuestion}"
          </p>
        </motion.div>

        {/* 선택된 카드들 */}
        <motion.div
          className="text-container-card p-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-sm font-bold text-white text-center mb-3 text-shadow-strong">선택된 카드</h3>
          <div className="grid grid-cols-3 gap-2">
            {selectedCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="text-center space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <div className="w-16 h-24 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-lg flex flex-col items-center justify-center text-purple-900 font-bold text-xs p-1 mx-auto border-2 border-purple-600">
                  <Sparkles className="w-3 h-3 mb-1" />
                  <span className="text-center leading-tight">
                    {card.nameKr}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-xs text-shadow-strong">{card.nameKr}</p>
                  <p className="text-gray-300 text-xs">
                    {spreads[spreadType as keyof typeof spreads]?.positions[index]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 승연이의 미친 타로 해석 */}
        {detailedReading && (
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* 오프닝 */}
            <div className="text-container p-4 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 mx-auto mb-2"
              >
                <Sparkles className="w-full h-full text-yellow-400" />
              </motion.div>
              <h3 className="text-base font-bold text-white mb-2 text-shadow-strong">
                승연이의 찐팬 타로 해석 💕
              </h3>
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-3 rounded-lg border border-pink-400/30">
                <p className="text-sm text-yellow-200 font-bold text-shadow-strong">
                  {detailedReading.opening}
                </p>
                <div className="mt-2 inline-block bg-purple-600 px-3 py-1 rounded-full">
                  <span className="text-xs text-white font-bold">
                    ✨ {detailedReading.vibe} ✨
                  </span>
                </div>
              </div>
            </div>

            {/* 카드별 상세 해석 */}
            {detailedReading.cards.map((cardReading, index) => (
              <motion.div
                key={index}
                className="text-container-card p-3"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
              >
                {/* 카드 헤더 */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-16 bg-gradient-to-br from-yellow-200 to-orange-300 rounded border-2 border-purple-600 flex flex-col items-center justify-center text-purple-900 font-bold text-xs flex-shrink-0">
                    <Sparkles className="w-3 h-3 mb-1" />
                    <span className="text-center leading-tight">
                      {cardReading.card}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white font-bold">
                        {cardReading.position}
                      </span>
                      <span className="text-xs text-purple-300 font-bold">
                        {index + 1}번째 카드
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white text-shadow-strong">
                      {cardReading.card}
                    </h4>
                    <p className="text-xs text-gray-300 italic">
                      {cardReading.energy}
                    </p>
                  </div>
                </div>

                {/* 키워드 태그 */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {cardReading.keywords.map((keyword, i) => (
                    <span key={i} className="text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full font-bold">
                      #{keyword}
                    </span>
                  ))}
                </div>

                {/* 해석 내용 */}
                <div className="space-y-2">
                  <div className="bg-purple-900/30 p-3 rounded border-l-4 border-purple-400">
                    <p className="text-xs text-gray-200 leading-relaxed">
                      <span className="text-purple-300 font-bold">🔮 타로 의미:</span><br/>
                      {cardReading.energy}
                    </p>
                  </div>
                  <div className="bg-pink-900/30 p-3 rounded border-l-4 border-pink-400">
                    <p className="text-xs text-gray-200 leading-relaxed">
                      <span className="text-pink-300 font-bold">💫 승연이 해석:</span><br/>
                      {cardReading.interpretation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 카드 연결성 */}
            <motion.div
              className="text-container p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg border border-purple-400/40">
                <h4 className="text-sm font-bold text-yellow-300 mb-2 text-shadow-strong flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  카드들의 케미 분석
                </h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  {detailedReading.connection}
                </p>
              </div>
            </motion.div>

            {/* AI 전체 메시지 */}
            {detailedReading.overallMessage && (
              <motion.div
                className="text-container p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-lg border-2 border-blue-400/50">
                  <h4 className="text-sm font-bold text-blue-300 mb-2 text-shadow-strong text-center flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    AI 종합 분석
                    <Sparkles className="w-4 h-4" />
                  </h4>
                  <p className="text-xs text-gray-200 leading-relaxed text-center">
                    {detailedReading.overallMessage}
                  </p>
                </div>
              </motion.div>
            )}

            {/* 실용적인 조언 */}
            {detailedReading.practicalAdvice && (
              <motion.div
                className="text-container p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
              >
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-lg border-2 border-green-400/50">
                  <h4 className="text-sm font-bold text-green-300 mb-3 text-shadow-strong text-center flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    실용적인 조언
                    <Heart className="w-4 h-4" />
                  </h4>
                  <div className="space-y-2">
                    {detailedReading.practicalAdvice.map((advice, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-xs text-gray-200 leading-relaxed">
                          {advice}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 최종 메시지 */}
            <motion.div
              className="text-container p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border-2 border-yellow-400/50">
                <h4 className="text-sm font-bold text-yellow-300 mb-2 text-shadow-strong text-center flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" />
                  승연이의 최종 메시지
                  <Star className="w-4 h-4" />
                </h4>
                <p className="text-xs text-gray-200 leading-relaxed text-center">
                  {detailedReading.finalMessage}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 향수 추천 */}
        {recommendedFragrance && (
          <motion.div
            className="text-container p-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 text-shadow-strong">
              <Heart className="w-4 h-4 text-pink-400" />
              운명의 향수 추천
            </h3>
            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-4 rounded-lg border border-pink-500/30">
              {/* 향수 번호 개크게 상단 노출 */}
              <div className="text-center mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-4xl md:text-5xl px-6 py-3 rounded-xl mb-3 shadow-2xl border-4 border-white/50 animate-pulse">
                  {recommendedFragrance.code}
                </div>
                <h4 className="text-lg font-bold text-pink-300 mb-1">{recommendedFragrance.name}</h4>
              </div>
              
              <p className="text-xs text-gray-200 leading-relaxed mb-3">
                {recommendedFragrance.description}
              </p>
              
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-pink-300 font-bold">탑 노트:</span>
                  <span className="text-gray-200 ml-1">{recommendedFragrance.notes.top.join(', ')}</span>
                </div>
                <div>
                  <span className="text-pink-300 font-bold">하트 노트:</span>
                  <span className="text-gray-200 ml-1">{recommendedFragrance.notes.heart.join(', ')}</span>
                </div>
                <div>
                  <span className="text-pink-300 font-bold">베이스 노트:</span>
                  <span className="text-gray-200 ml-1">{recommendedFragrance.notes.base.join(', ')}</span>
                </div>
              </div>
              
              <div className="mt-3 p-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded border border-pink-400/30">
                <p className="text-xs text-gray-200 leading-relaxed mb-2">
                  <span className="text-yellow-300 font-bold">🌟 승연이의 미친 추천 이유:</span><br/>
                  {recommendedFragrance.reasoning}
                </p>
                <p className="text-xs text-pink-200 leading-relaxed">
                  <span className="text-pink-300 font-bold">✨ 카드 연결점:</span><br/>
                  {selectedCards.map(card => card.nameKr).join(' + ')} 조합이 만들어내는 에너지가 이 향수와 완벽하게 매칭돼요! 
                  특히 "{selectedCards[0].keywords[0]}" 키워드가 이 향수의 "{recommendedFragrance.personality[0]}" 성격과 소름 돋게 일치해요!
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {recommendedFragrance.personality.map((trait, i) => (
                  <span key={i} className="text-xs bg-pink-600 text-white px-2 py-1 rounded">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* 액션 버튼들 */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Link href="/tarot">
            <Button variant="mystical" className="w-full">
              <Sparkles className="w-4 h-4 mr-2" />
              새로운 타로 보기 🔮
            </Button>
          </Link>
          <Link href="/fragrance">
            <Button variant="secondary" className="w-full">
              향수 전체 컬렉션 보기 💐
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="w-full text-white">
              홈으로 돌아가기 🏠
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function TarotResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center tarot-background">
        <div className="text-center space-y-4 text-container p-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto"
          >
            <Sparkles className="w-full h-full text-purple-400" />
          </motion.div>
          <p className="text-white text-shadow-strong">로딩 중...</p>
        </div>
      </div>
    }>
      <TarotResultContent />
    </Suspense>
  );
}