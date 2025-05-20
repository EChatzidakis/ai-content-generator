
export interface ContentCategory {
    id: string;
    name: string;
    description: string;
    types: ContentType[];
    createdAt: string;
    updatedAt: string;
}

export interface ContentType {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  defaultToneStyleId: string;
  defaultContentFormatId: string;
  defaultAudienceId: string;

  createdAt: string;
  updatedAt: string;

  category: ContentCategory;

  audiences: ContentAudience[];
  formats: ContentFormat[];
  tones: ContentTone[];
}

export interface ContentAudience {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContentFormat {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;

  types: object[];
}

export interface ContentTone {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
