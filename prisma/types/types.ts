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
  defaultToneStyleId: string;
  defaultContentFormatId: string;
  defaultAudienceId: string;
};

export type ToneStyleSeed = {
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
