import { GoogleGenAI } from '@google/genai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('VITE_GEMINI_API_KEY is not defined in environment variables');
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

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

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: prompt
    });
    return result.text || '';
  } catch (error) {
    console.error('Error generating tarot reading:', error);
    throw error;
  }
};

export const getCardMeaning = async (cardName: string): Promise<string> => {
  const prompt = `Provide a comprehensive explanation of the tarot card: ${cardName}
  
  Include:
  - Upright meaning
  - Reversed meaning
  - Symbolism
  - Keywords`;

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: prompt
    });
    return result.text || '';
  } catch (error) {
    console.error('Error getting card meaning:', error);
    throw error;
  }
};
