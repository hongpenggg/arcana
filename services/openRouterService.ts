// services/openRouterService.ts

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

      const waitTime = baseDelay * Math.pow(2, i) + Math.random() * 1000;
      console.log(`Rate limit hit. Retrying in ${Math.round(waitTime / 1000)}s...`);
      await delay(waitTime);
    }
  }
  throw new Error('Max retries exceeded');
};

interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const callOpenRouter = async (messages: OpenRouterMessage[]): Promise<string> => {
  return retryWithBackoff(async () => {
    const response = await fetch('/api/openrouter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'openrouter/free',
        messages,
        temperature: 0.7,
        max_tokens: 5000,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(`OpenRouter proxy error: ${response.status} - ${JSON.stringify(err)}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content ?? '';
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
      content:
        'You are a Tarot Reader who provides profound, tangible, and actionable readings. A humble student has come to you for readings regarding his cards. Be elegant and wise, yet helpful and personal.',
    },
    {
      role: 'user',
      content: `Cards drawn: ${cards.join(', ')}\nSpread type: ${spread}\n${
        question ? `Question: ${question}` : ''
      }\n\nProvide a detailed tarot reading interpretation for these cards in this spread. Format your response in Markdown.`,
    },
  ];

  return callOpenRouter(messages);
};

export const getCardMeaning = async (cardName: string): Promise<string> => {
  const messages: OpenRouterMessage[] = [
    {
      role: 'system',
      content:
        'You are an experienced tarot reader who provides comprehensive card explanations. Be elegant and wise, yet helpful and personal.',
    },
    {
      role: 'user',
      content: `Provide a comprehensive explanation of the tarot card: ${cardName}\n\nInclude:\n- Upright meaning\n- Reversed meaning\n- Symbolism\n- Keywords`,
    },
  ];

  return callOpenRouter(messages);
};
