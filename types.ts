export interface CardData {
  id: string;
  name: string;
  arcana: 'Major' | 'Minor';
  suit?: 'Cups' | 'Swords' | 'Wands' | 'Pentacles';
  number?: number | string; // 1-10, Page, Knight, Queen, King
  meaningUpright: string;
  meaningReversed: string;
  description: string;
  imageUrl: string;
}

export interface SpreadPosition {
  id: number;
  name: string;
  description: string;
}

export interface Spread {
  id: string;
  name: string;
  description: string;
  positions: SpreadPosition[];
}

export type ReadingStatus = 'select-spread' | 'shuffle' | 'pick-cards' | 'reveal';

export interface ReadingState {
  spread: Spread | null;
  selectedCards: CardData[];
  isReversed: boolean[]; // tracks if a specific card index is reversed
  status: ReadingStatus;
}
