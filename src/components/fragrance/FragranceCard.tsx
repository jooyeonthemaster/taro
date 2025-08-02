'use client';

import { motion } from 'framer-motion';
import { Heart, Droplets } from 'lucide-react';
import { FragranceRecommendation } from '@/types/tarot';

interface FragranceCardProps {
  fragrance: FragranceRecommendation;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function FragranceCard({ 
  fragrance, 
  isSelected = false, 
  onClick,
  className = '' 
}: FragranceCardProps) {
  return (
    <motion.div
      className={`
        relative p-6 rounded-xl border backdrop-blur-sm cursor-pointer transition-all duration-300
        ${isSelected 
          ? 'border-purple-400 bg-purple-600/20 tarot-glow' 
          : 'border-gray-700 bg-gray-900/30 hover:border-purple-500/50 hover:bg-purple-900/20'
        }
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* 향수 병 아이콘 */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-16 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <Droplets className="w-8 h-8 text-white" />
          </div>
          {isSelected && (
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <Heart className="w-3 h-3 text-white fill-current" />
            </motion.div>
          )}
        </div>
      </div>

      {/* 향수 정보 */}
      <div className="text-center space-y-2">
        <div className="text-sm text-purple-400 font-medium">{fragrance.code}</div>
        <h3 className="text-lg font-bold text-white">{fragrance.name}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {fragrance.description}
        </p>
        
        {/* 개성 태그 */}
        <div className="flex flex-wrap justify-center gap-1 mt-3">
          {fragrance.personality.slice(0, 3).map((trait, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs border border-purple-500/50"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}