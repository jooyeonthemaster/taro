import { NextRequest, NextResponse } from 'next/server';
import { generateTarotReading } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: '프롬프트가 필요합니다.' },
        { status: 400 }
      );
    }

    const result = await generateTarotReading(prompt);
    
    return NextResponse.json({ result });
  } catch (error) {
    console.error('타로 API 오류:', error);
    return NextResponse.json(
      { error: '타로 해석 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}