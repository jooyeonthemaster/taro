export interface TarotCard {
  id: string;
  name: string;
  nameKr: string;
  description: string;
  keywords: string[];
  reversed: boolean;
  image: string;
  meaning: {
    upright: string;
    reversed: string;
  };
  element?: 'fire' | 'water' | 'air' | 'earth';
  suit?: 'major' | 'cups' | 'wands' | 'swords' | 'pentacles';
}

export interface TarotReading {
  id: string;
  timestamp: Date;
  question?: string;
  cards: TarotCard[];
  interpretation: string;
  aiAnalysis: string;
  fragranceRecommendation?: FragranceRecommendation;
}

export interface FragranceRecommendation {
  id: string;
  name: string;
  code: string; // AC'SCENT01-30
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  personality: string[];
  reasoning: string;
  image?: string;
}

export interface SpreadType {
  id: string;
  name: string;
  nameKr: string;
  description: string;
  positions: string[];
  cardCount: number;
}