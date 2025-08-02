import { NextRequest, NextResponse } from 'next/server';
import { generateFragranceStoryRecommendation } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const { tarotAnalysis, selectedCards, userQuestion, fragranceData } = await request.json();

    if (!tarotAnalysis || !selectedCards || !fragranceData) {
      return NextResponse.json(
        { error: '필수 데이터가 누락되었습니다.' },
        { status: 400 }
      );
    }

    const result = await generateFragranceStoryRecommendation(
      tarotAnalysis,
      selectedCards,
      userQuestion,
      fragranceData
    );
    
    return NextResponse.json({ result });
  } catch (error) {
    console.error('향수 스토리 API 오류:', error);
    return NextResponse.json(
      { error: '향수 스토리 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}