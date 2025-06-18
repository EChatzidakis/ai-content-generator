import { OpenAI } from 'openai';
import { OpenAIOptions } from '@/types/openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY! // taken from .env.local
});

// https://platform.openai.com/docs/pricing
// messages: [
//       { role: 'system', content: systemPrompt },
//       { role: 'user', content: prompt },
//     ],
export async function generateResponse({
  messages,
  model = 'gpt-4o',
  temperature = 0.7,
  maxTokens = 5000
}: OpenAIOptions) {
  const response = await openai.chat.completions.create({
    model,
    messages,
    temperature,
    max_tokens: maxTokens
  });

  return response.choices[0]?.message?.content?.trim() ?? '';
}

export async function generateStreamResponse({
  messages,
  model = 'gpt-4o',
  temperature = 0.7,
  maxTokens = 5000
}: OpenAIOptions) {
  return await openai.chat.completions.create({
    model,
    messages,
    temperature,
    max_tokens: maxTokens,
    stream: true
  });
}
