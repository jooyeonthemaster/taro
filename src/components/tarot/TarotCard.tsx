'use client';

import { motion } from 'framer-motion';
import { TarotCard as TarotCardType } from '@/types/tarot';
import { Sparkles } from 'lucide-react';

interface TarotCardProps {
  card?: TarotCardType;
  isRevealed?: boolean;
  onClick?: () => void;
  position?: 'past' | 'present' | 'future';
  className?: string;
}

export function TarotCard({ 
  card, 
  isRevealed = false, 
  onClick, 
  position,
  className = '' 
}: TarotCardProps) {
  const positionText = {
    past: '과거',
    present: '현재',
    future: '미래'
  };

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-24 h-36 md:w-32 md:h-48 relative">
        <motion.div
          className="w-full h-full relative preserve-3d"
          initial={false}
          animate={{ rotateY: isRevealed ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* 카드 뒷면 */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 rounded-xl border-2 border-purple-500 tarot-glow flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-yellow-300 mx-auto mb-2 animate-pulse" />
              <div className="text-xs font-bold text-white">TARO AI</div>
            </div>
          </div>
          
          {/* 카드 앞면 */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-yellow-200 to-orange-300 rounded-xl border-2 border-gold-500 flex flex-col items-center justify-center transform rotate-y-180">
            {card ? (
              <div className="text-center text-purple-900 p-2">
                <div className="text-sm font-bold mb-1">{card.nameKr}</div>
                <div className="text-xs opacity-75">{card.name}</div>
                {card.keywords && (
                  <div className="text-xs mt-2 opacity-60">
                    {card.keywords.slice(0, 2).join(', ')}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-purple-900">
                <Sparkles className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-bold">타로 카드</div>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* 위치 라벨 */}
        {position && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <span className="text-xs text-gray-400 bg-gray-900/50 px-2 py-1 rounded">
              {positionText[position]}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}