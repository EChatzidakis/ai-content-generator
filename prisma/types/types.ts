export type ContentCategorySeed = {
  id: string;
  name: string;
  description: string;
};

export type ContentTypeSeed = {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  defaultContentToneId: string;
  defaultContentFormatId: string;
  defaultAudienceId: string;
  formatsIds: string[];
  toneIds: string[];
  audiencesIds: string[];
};

export type ContentToneSeed = {
  id: string;
  name: string;
  description: string;
};

export type ContentFormatSeed = {
  id: string;
  name: string;
  description: string;
};

export type AudienceSeed = {
  id: string;
  name: string;
  description: string;
};
