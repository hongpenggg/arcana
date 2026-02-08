import { GoogleGenAI } from '@google/genai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('VITE_GEMINI_API_KEY is not defined in environment variables');
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Rate limiting helper
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Exponential backoff retry logic
const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      const isRateLimitError = 
        error?.message?.includes('429') || 
        error?.message?.includes('RESOURCE_EXHAUSTED') ||
        error?.message?.includes('quota');
      
      if (!isRateLimitError || i === maxRetries - 1) {
        throw error;
      }
      
      // Exponential backoff: 1s, 2s, 4s, etc.
      const waitTime = baseDelay * Math.pow(2, i) + Math.random() * 1000;
      console.log(`Rate limit hit. Retrying in ${Math.round(waitTime/1000)}s...`);
      await delay(waitTime);
    }
  }
  throw new Error('Max retries exceeded');
};

export const getTarotReading = async (
  cards: string[],
  spread: string,
  question?: string
): Promise<string> => {
  const prompt = `You are an experienced tarot reader. 
  
  Cards drawn: ${cards.join(', ')}
  Spread type: ${spread}
  ${question ? `Question: ${question}` : ''}
  
  Provide a detailed tarot reading interpretation for these cards in this spread.`;

  return retryWithBackoff(async () => {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: prompt
    });
    return result.text || '';
  });
};

export const getCardMeaning = async (cardName: string): Promise<string> => {
  const prompt = `Provide a comprehensive explanation of the tarot card: ${cardName}
  
  Include:
  - Upright meaning
  - Reversed meaning
  - Symbolism
  - Keywords`;

  return retryWithBackoff(async () => {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: prompt
    });
    return result.text || '';
  });
};
