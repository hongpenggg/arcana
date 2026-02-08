import { GoogleGenerativeAI } from '@google/genai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('VITE_GEMINI_API_KEY is not defined in environment variables');
}

const genAI = new GoogleGenerativeAI(API_KEY);

// Use Gemini 3 Flash model
const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });

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
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
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
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting card meaning:', error);
    throw error;
  }
};
