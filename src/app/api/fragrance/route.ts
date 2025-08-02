import { NextRequest, NextResponse } from 'next/server';
import { generateFragranceRecommendation } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const { tarotResults, userPreferences } = await request.json();

    if (!tarotResults) {
      return NextResponse.json(
        { error: '타로 결과가 필요합니다.' },
        { status: 400 }
      );
    }

    const result = await generateFragranceRecommendation(tarotResults, userPreferences);
    
    return NextResponse.json({ result });
  } catch (error) {
    console.error('향수 추천 API 오류:', error);
    return NextResponse.json(
      { error: '향수 추천 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}