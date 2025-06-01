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
