export type Conversation = {
  id: string;
  title: string;
  messages: Message[];
  userId: string;
  promptSettings: PromptSettingsDTO;
  created_at: string;
  updated_at: string;
}

export type Message = {
  id: string;
  conversationId: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export type NewMessageDTO = {
  conversationId: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export type PromptEval = {
  ethical: boolean;
  reason: string;
}

export type PromptSettings = {
  category: { name: string; description: string };
  type: { name: string; description: string };
  tone: { name: string; description: string };
  format: { name: string; description: string };
  audience: { name: string; description: string };
  userInput: string;
};

export type PromptSettingsDTO = {
  category: string;
  type: string;
  tone: string;
  format: string;
  audience: string;
  userInput: string;
};
