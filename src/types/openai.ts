
export type OpenAIOptions = {
  messages: OpenAIMessage[];
  model?: string;
  temperature?: number;
  maxTokens?: number; // Controls how long the output is. This includes both prompt + response tokens. For GPT-4o: max tokens ≈ 128k
  presence_penalty?: number;
  frequency_penalty?: number;
}

export type OpenAIMessage = {
  role: 'system' | 'user' | 'assistant'
  content: string
}