import { generateStreamResponse } from './openai';
import { OpenAIOptions } from '@/types/openai';

interface StreamOptions {
  openAIMessageOptions: OpenAIOptions;
  onDelta: (token: string) => void;
  onComplete?: () => void;
}

export async function OpenAIStream({ openAIMessageOptions, onDelta, onComplete }: StreamOptions): Promise<void> {
  const res = await generateStreamResponse(openAIMessageOptions);

  for await (const chunk of res) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      onDelta(content);
    }
  }

  if (onComplete) onComplete();
}
