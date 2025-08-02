'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-end p-4 relative overflow-hidden main-background">
      {/* 메인 버튼만 */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/tarot">
          <Button variant="mystical" size="lg" className="w-full sm:w-auto">
            <Sparkles className="w-5 h-5 mr-2" />
            타로 보고 운명의 향수까지 추천받기 🔮💐
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}