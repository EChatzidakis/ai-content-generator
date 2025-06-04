
export interface ContentCategory {
    id: string;
    name: string;
    description: string;
    types: ContentTypeNested[] | [];
}

export interface ContentTypeNested {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  defaultContentToneId: string;
  defaultContentFormatId: string;
  defaultAudienceId: string;
}

export interface ContentType {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  defaultContentToneId: string;
  defaultContentFormatId: string;
  defaultAudienceId: string;

  audiences: ContentAudience[] | [];
  formats: ContentFormat[] | [];
  tones: ContentTone[] | [];
}

export interface ContentAudience {
  id: string;
  name: string;
  description: string;
}

export interface ContentFormat {
  id: string;
  name: string;
  description: string;
}

export interface ContentTone {
  id: string;
  name: string;
  description: string;
}
