'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Heart, Sparkles, Droplets } from 'lucide-react';
import Link from 'next/link';
import { FRAGRANCE_DATABASE } from '@/data/tarot-cards';

export default function FragrancePage() {
  const [selectedFragrance, setSelectedFragrance] = useState(FRAGRANCE_DATABASE[0]);

  return (
    <div className="min-h-screen p-4 relative overflow-hidden mystical-bg">
      {/* 헤더 */}
      <motion.header 
        className="container mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>홈으로</span>
          </Link>
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">AC&apos;SCENT 컬렉션</h1>
          </div>
          <div className="w-20" />
        </nav>
      </motion.header>

      <div className="container mx-auto max-w-6xl">
        {/* 타이틀 섹션 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">
            당신만의 향수
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            타로의 메시지를 담은 특별한 향수 컬렉션
          </p>
          <p className="text-gray-400">
            30가지 고유한 향으로 당신의 이야기를 완성하세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 향수 상세 정보 */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-400">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">{selectedFragrance.code}</span>
              </div>
              <h3 className="text-3xl font-bold text-white">{selectedFragrance.name}</h3>
              <p className="text-lg text-gray-300">{selectedFragrance.description}</p>
            </div>

            {/* 향의 노트 */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">향의 구성</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="font-medium text-yellow-300">Top Notes</span>
                  </div>
                  <p className="text-gray-300">{selectedFragrance.notes.top.join(', ')}</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <span className="font-medium text-pink-300">Heart Notes</span>
                  </div>
                  <p className="text-gray-300">{selectedFragrance.notes.heart.join(', ')}</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="font-medium text-purple-300">Base Notes</span>
                  </div>
                  <p className="text-gray-300">{selectedFragrance.notes.base.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* 개성 태그 */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">향수 개성</h4>
              <div className="flex flex-wrap gap-2">
                {selectedFragrance.personality.map((trait, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500/50"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* 타로 연관성 */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                타로와의 연결
              </h4>
              <p className="text-gray-300">{selectedFragrance.reasoning}</p>
            </div>

            <div className="flex gap-4">
              <Link href="/tarot">
                <Button variant="mystical" size="lg">
                  <Sparkles className="w-5 h-5 mr-2" />
                  타로로 향수 찾기
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                위시리스트
              </Button>
            </div>
          </motion.div>

          {/* 향수 비주얼 */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* 메인 향수 병 */}
            <div className="relative flex justify-center">
              <div className="w-64 h-80 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl shadow-2xl tarot-glow pulse-glow relative overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-br from-purple-900/80 to-pink-900/80 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Droplets className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-sm font-medium mb-1">{selectedFragrance.code}</div>
                    <div className="text-xl font-bold">{selectedFragrance.name}</div>
                  </div>
                </div>
                
                {/* 반짝임 효과 */}
                <div className="absolute inset-0">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 향수 선택 그리드 */}
            <div className="grid grid-cols-5 gap-3">
              {FRAGRANCE_DATABASE.map((fragrance, index) => (
                <motion.button
                  key={fragrance.id}
                  className={`
                    w-12 h-16 rounded-lg border-2 transition-all duration-300 relative overflow-hidden
                    ${selectedFragrance.id === fragrance.id 
                      ? 'border-purple-400 bg-purple-600/30' 
                      : 'border-gray-600 bg-gray-800/30 hover:border-purple-500/50'
                    }
                  `}
                  onClick={() => setSelectedFragrance(fragrance)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                >
                  <div className="absolute inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white z-10">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 기타 향수들 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">다른 향수들도 둘러보세요</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {FRAGRANCE_DATABASE.filter(f => f.id !== selectedFragrance.id).slice(0, 6).map((fragrance, index) => (
              <motion.div
                key={fragrance.id}
                className="p-4 bg-gray-900/30 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedFragrance(fragrance)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="text-center space-y-2">
                  <div className="w-16 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mx-auto group-hover:scale-105 transition-transform"></div>
                  <div>
                    <p className="text-sm text-gray-400">{fragrance.code}</p>
                    <p className="font-medium text-white">{fragrance.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}