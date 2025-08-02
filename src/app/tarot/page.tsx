'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Sparkles, ArrowLeft, RefreshCw, Eye, Users, Heart, Star, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { TarotCard } from '@/types/tarot';
import { MAJOR_ARCANA } from '@/data/tarot-cards';

type SpreadType = 'daily' | 'love' | 'career' | 'celtic';
type StepType = 'welcome' | 'spread' | 'intention' | 'selection' | 'interpretation' | 'result';

export default function TarotPage() {
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [shuffledDeck, setShuffledDeck] = useState<TarotCard[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [step, setStep] = useState<StepType>('welcome');
  const [question, setQuestion] = useState('');
  const [spreadType, setSpreadType] = useState<SpreadType>('daily');
  const [currentInterpretation, setCurrentInterpretation] = useState(0);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    const expandedDeck = [...MAJOR_ARCANA, ...MAJOR_ARCANA];
    setShuffledDeck(shuffleArray(expandedDeck));
  }, []);

  const spreads = {
    daily: {
      name: '일일 운세',
      description: '오늘 하루의 에너지와 조언',
      positions: ['현재 상황', '해야 할 일', '피해야 할 일'],
      cards: 3
    },
    love: {
      name: '연애운',
      description: '사랑과 관계에 대한 통찰',
      positions: ['나의 마음', '상대의 마음', '관계의 미래'],
      cards: 3
    },
    career: {
      name: '직업운',
      description: '커리어와 성공에 대한 조언',
      positions: ['현재 상황', '기회', '주의사항'],
      cards: 3
    },
    celtic: {
      name: '종합 운세',
      description: '인생 전반에 대한 깊은 통찰',
      positions: ['과거', '현재', '미래'],
      cards: 3
    }
  };

  const handleCardSelect = (card: TarotCard, cardIndex: number) => {
    if (selectedCards.length < spreads[spreadType].cards && !selectedCards.some(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const expandedDeck = [...MAJOR_ARCANA, ...MAJOR_ARCANA];
      setShuffledDeck(shuffleArray(expandedDeck));
      setSelectedCards([]);
      setIsShuffling(false);
    }, 1000);
  };



  const getSpreadIcon = (type: SpreadType) => {
    switch (type) {
      case 'daily': return Star;
      case 'love': return Heart;
      case 'career': return BookOpen;
      case 'celtic': return Eye;
      default: return Star;
    }
  };

  return (
    <div className="min-h-screen p-2 relative overflow-hidden tarot-background">
      {/* 헤더 */}
      <motion.header 
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <nav className="flex items-center justify-between px-2">
          <Link href="/" className="flex items-center gap-1 text-white hover:text-purple-300 transition-colors text-container-light p-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm text-shadow-strong">홈으로</span>
          </Link>
          <div className="flex items-center gap-1 text-container-light p-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h1 className="text-lg font-bold text-white text-shadow-strong">승연의 타로</h1>
          </div>
          <div className="w-16" />
        </nav>
      </motion.header>

      <div className="max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          {/* 웰컴 스크린 */}
          {step === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center space-y-6"
            >
              <div className="text-container p-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-4"
                >
                  <Sparkles className="w-full h-full text-purple-400" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-3 text-shadow-strong">
                  승연의 신비한 타로 세계에 오신 걸 환영합니다
                </h2>
                <p className="text-sm text-gray-200 text-shadow-strong mb-6">
                  당신의 운명을 꿰뚫어보는 신비로운 여행이 시작됩니다. 
                  마음을 편안히 하고 집중해주세요.
                </p>
                <Button 
                  variant="mystical" 
                  onClick={() => setStep('spread')}
                  className="w-full"
                >
                  타로 여행 시작하기 ✨
                </Button>
              </div>
            </motion.div>
          )}

          {/* 스프레드 선택 */}
          {step === 'spread' && (
            <motion.div
              key="spread"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="space-y-4"
            >
              <div className="text-container p-4">
                <h2 className="text-xl font-bold text-white mb-2 text-shadow-strong">
                  어떤 운세를 보고 싶으신가요?
                </h2>
                <p className="text-sm text-gray-200 text-shadow-strong">
                  승연이가 다양한 방법으로 당신의 운명을 해석해드려요
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(spreads) as SpreadType[]).map((type) => {
                  const spread = spreads[type];
                  const Icon = getSpreadIcon(type);
                  return (
                    <motion.button
                      key={type}
                      onClick={() => setSpreadType(type)}
                      className={`p-3 rounded-lg text-left transition-all ${
                        spreadType === type 
                          ? 'bg-purple-600 text-white shadow-lg' 
                          : 'text-container-light text-gray-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-6 h-6 mb-2" />
                      <h3 className="font-bold text-sm mb-1">{spread.name}</h3>
                      <p className="text-xs opacity-80">{spread.description}</p>
                    </motion.button>
                  );
                })}
              </div>

              <Button 
                variant="mystical" 
                onClick={() => setStep('intention')}
                className="w-full"
              >
                이 운세로 보기
              </Button>
            </motion.div>
          )}

          {/* 질문/의도 설정 */}
          {step === 'intention' && (
            <motion.div
              key="intention"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="space-y-4"
            >
              <div className="text-container p-4">
                <h2 className="text-xl font-bold text-white mb-2 text-shadow-strong">
                  마음속 질문을 품어보세요
                </h2>
                <p className="text-sm text-gray-200 text-shadow-strong mb-4">
                  {spreads[spreadType].description}
                </p>
                <div className="bg-purple-900/30 p-3 rounded-lg mb-4">
                  <h3 className="text-sm font-bold text-purple-300 mb-2">이런 카드 배치로 봐드려요:</h3>
                  {spreads[spreadType].positions.map((position, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                        {index + 1}
                      </span>
                      {position}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-container-light p-3">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder={`${spreads[spreadType].name}에 대한 구체적인 질문이나 상황을 적어주세요...`}
                  className="w-full h-24 p-2 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm"
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="secondary" 
                  onClick={() => setStep('spread')}
                  className="flex-1"
                >
                  이전
                </Button>
                <Button 
                  variant="mystical" 
                  onClick={() => setStep('selection')}
                  className="flex-1"
                  disabled={!question.trim()}
                >
                  카드 선택하기
                </Button>
              </div>
            </motion.div>
          )}

          {/* 카드 선택 */}
          {step === 'selection' && (
            <motion.div
              key="selection"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="space-y-4"
            >
              <div className="text-center text-container p-3">
                <h2 className="text-xl font-bold text-white mb-2 text-shadow-strong">
                  직감으로 {spreads[spreadType].cards}장을 선택해주세요
                </h2>
                <p className="text-sm text-gray-200 mb-3 text-shadow-strong">
                  승연이가 카드를 섞고 있어요... 끌리는 카드를 선택하세요
                </p>
                <Button 
                  variant="secondary" 
                  onClick={handleShuffle}
                  disabled={isShuffling}
                  className="text-sm px-3 py-1"
                >
                  <RefreshCw className={`w-3 h-3 mr-1 ${isShuffling ? 'animate-spin' : ''}`} />
                  카드 다시 섞기
                </Button>
              </div>

              {/* 선택된 카드 영역 */}
              <div className="flex justify-center gap-2 mb-4">
                {spreads[spreadType].positions.map((position, index) => (
                  <div key={index} className="text-container-light p-2">
                    <div className="w-20 h-28 border border-dashed border-purple-400 rounded-lg flex flex-col items-center justify-center p-1">
                      {selectedCards[index] ? (
                        <motion.div
                          initial={{ scale: 0, rotateY: 180 }}
                          animate={{ scale: 1, rotateY: 0 }}
                          className="w-full h-full bg-gradient-to-br from-purple-700 to-indigo-800 rounded-lg flex flex-col items-center justify-center text-white font-bold text-xs p-1 shadow-lg border-2 border-yellow-400"
                          layoutId={`card-${selectedCards[index].id}`}
                        >
                          <Sparkles className="w-4 h-4 mb-1" />
                          <span className="text-center leading-tight">
                            선택됨
                          </span>
                        </motion.div>
                      ) : (
                        <div className="text-center">
                          <div className="w-5 h-5 mx-auto mb-1 border border-dashed border-purple-400 rounded-full flex items-center justify-center">
                            <span className="text-purple-400 text-xs">{index + 1}</span>
                          </div>
                          <span className="text-purple-400 text-xs font-semibold text-shadow-strong">
                            {position}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* 카드 덱 */}
              <div className="text-container-card p-3">
                <h3 className="text-sm font-bold text-white mb-3 text-center text-shadow-strong">
                  마음으로 느끼는 카드를 선택하세요 ({selectedCards.length}/{spreads[spreadType].cards})
                </h3>
                <div className="grid grid-cols-6 gap-1 max-h-60 overflow-y-auto">
                  {shuffledDeck.slice(0, 30).map((card, index) => (
                    <motion.div
                      key={`${card.id}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className={`
                        w-full h-16 cursor-pointer relative group
                        ${selectedCards.some(c => c.id === card.id) ? 'opacity-30 cursor-not-allowed' : ''}
                      `}
                      onClick={() => handleCardSelect(card, index)}
                      layoutId={`card-${card.id}`}
                    >
                      <motion.div 
                        className="w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 rounded-md border border-purple-500 tarot-glow flex items-center justify-center transform transition-all duration-300 group-hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {selectedCards.length === spreads[spreadType].cards && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center mt-4"
                >
                  <Link 
                    href={`/tarot/result?cards=${selectedCards.map(c => c.id).join(',')}&question=${encodeURIComponent(question)}&spread=${spreadType}`}
                    className="block"
                  >
                    <Button 
                      variant="mystical" 
                      className="w-full max-w-xs"
                    >
                      승연이의 해석 들어보기 🔮✨
                    </Button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          )}



          {/* 카드별 해석 */}
          {step === 'interpretation' && (
            <motion.div
              key="interpretation"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="space-y-4"
            >
              <div className="text-container p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <h2 className="text-lg font-bold text-white text-shadow-strong">
                    승연이의 카드 해석
                  </h2>
                </div>
                <div className="text-sm text-gray-200 space-y-2">
                  <p className="bg-purple-900/30 p-2 rounded">
                    💫 "{question}"
                  </p>
                  <p>에 대한 승연이의 해석입니다.</p>
                </div>
              </div>

              {selectedCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="text-container-card p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-20 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-lg border border-purple-600 flex flex-col items-center justify-center text-purple-900 font-bold text-xs p-1 flex-shrink-0">
                      <Sparkles className="w-3 h-3 mb-1" />
                      <span className="text-center leading-tight">
                        {card.nameKr}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-sm mb-1 text-shadow-strong">
                        {spreads[spreadType].positions[index]}
                      </h3>
                      <p className="text-xs text-gray-200 mb-2">
                        <span className="text-purple-300">"{card.nameKr}"</span> 카드가 나왔어요!
                      </p>
                      <p className="text-xs text-gray-200 leading-relaxed mb-2">
                        <strong>카드 의미:</strong> {card.description}
                      </p>
                      <p className="text-xs text-gray-200 leading-relaxed">
                        <strong>승연이의 해석:</strong> {card.meaning.upright}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {card.keywords.map((keyword, i) => (
                          <span key={i} className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <Button 
                variant="mystical" 
                onClick={() => setStep('result')}
                className="w-full"
              >
                종합 운세 보기 🌟
              </Button>
            </motion.div>
          )}

          {/* 최종 결과 */}
          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-4"
            >
              <div className="text-container p-4 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-3"
                >
                  <Star className="w-full h-full text-yellow-400" />
                </motion.div>
                <h2 className="text-xl font-bold text-white text-shadow-strong mb-2">
                  타로 해석 완료! 🎉
                </h2>
                <p className="text-sm text-gray-200 text-shadow-strong">
                  승연이가 완벽하게 해석했어요!
                </p>
              </div>

              <div className="space-y-2">
                <Link 
                  href={`/tarot/result?cards=${selectedCards.map(c => c.id).join(',')}&question=${encodeURIComponent(question)}&spread=${spreadType}`}
                  className="block"
                >
                  <Button variant="mystical" className="w-full">
                    운명의 향수 추천받기 💐
                  </Button>
                </Link>
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setStep('welcome');
                    setSelectedCards([]);
                    setQuestion('');
                    setCurrentInterpretation(0);
                  }}
                  className="w-full"
                >
                  다시 타로 보기 🔮
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}