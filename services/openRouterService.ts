// services/openRouterService.ts

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://arcana-tarot.app';
const APP_NAME = import.meta.env.VITE_APP_NAME || 'Arcana Mystica';

if (!API_KEY) {
  throw new Error('VITE_OPENROUTER_API_KEY is not defined in environment variables');
}

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

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
        error?.message?.includes('rate limit') ||
        error?.status === 429;
      
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

interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenRouterRequest {
  model: string;
  messages: OpenRouterMessage[];
  temperature?: number;
  max_tokens?: number;
}

interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

const callOpenRouter = async (messages: OpenRouterMessage[]): Promise<string> => {
  return retryWithBackoff(async () => {
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': SITE_URL,
        'X-Title': APP_NAME,
      },
      body: JSON.stringify({
        model: 'openrouter/free',
        messages: messages,
        temperature: 0.7,
        max_tokens: 5000,
      } as OpenRouterRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `OpenRouter API error: ${response.status} - ${JSON.stringify(errorData)}`
      );
    }

    const data: OpenRouterResponse = await response.json();
    return data.choices[0]?.message?.content || '';
  });
};

export const getTarotReading = async (
  cards: string[],
  spread: string,
  question?: string
): Promise<string> => {
  const messages: OpenRouterMessage[] = [
    {
      role: 'system',
      content: 'You are a Tarot Reader who provides profound, tangible, and actionable readings.A humble student has come to you for readings regarding his cards. Be elegant and wise, yet helpful and personal.',
    },
    {
      role: 'user',
      content: `Cards drawn: ${cards.join(', ')}
Spread type: ${spread}
${question ? `Question: ${question}` : ''}

Provide a detailed tarot reading interpretation for these cards in this spread. Format your response in Markdown.`,
    },
  ];

  return callOpenRouter(messages);
};

export const getCardMeaning = async (cardName: string): Promise<string> => {
  const messages: OpenRouterMessage[] = [
    {
      role: 'system',
      content: 'You are an experienced tarot reader who provides comprehensive card explanations. Be elegant and wise, yet helpful and personal.',
    },
    {
      role: 'user',
      content: `Provide a comprehensive explanation of the tarot card: ${cardName}\n\nInclude:\n- Upright meaning\n- Reversed meaning\n- Symbolism\n- Keywords`,
    },
  ];

  return callOpenRouter(messages);
};
