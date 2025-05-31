import { ContentTypeSeed } from '../types/types';

export const contentTypes: ContentTypeSeed[] = [
  {
    id: '68898061-f4bb-4523-a2eb-90a07266f663',
    name: 'Blog Post',
    description: 'SEO-optimized long-form content',
    temperature: 0.7,
    categoryId: '051f668a-2b94-4e81-8747-3c45eab70ef5',
    defaultContentFormatId: 'b607d82b-4fec-446d-899f-9a965254b790',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    defaultContentToneId: 'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26',
    formatsIds: [
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post (default)
      '3aa04895-bb22-4657-9a5d-95ca53d8d10e', // Listicle
      '94da119d-59e0-4077-b140-7e356bac5719', // Opinion Piece
      '6810d492-e6a9-4c15-afa2-3a9a0be8f589', // Case Study
      '32ab2b3b-b7f9-4891-80da-b7865966ba4f' // Narrative
    ],
    toneIds: [
      'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26', // Casual (default)
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive
      '64898441-4d6f-47b8-8a4b-3fe0ce1a1fdd', // Inspirational
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d', // Funny
      'e539b8cc-93cb-4e16-9e7d-093c92950464' // Analytical
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f', // General Public (default)
      '854cf3cf-f684-4c0a-bd66-a9442fed73c6', // Content Creators & Influencers
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9' // Marketers & Advertisers
    ]
  },
  {
    id: '5ad75a7c-9c89-4b90-bcaa-04dccbcc094e',
    name: 'Listicle',
    description: 'Numbered list-style article',
    temperature: 0.6,
    categoryId: '051f668a-2b94-4e81-8747-3c45eab70ef5',
    defaultContentFormatId: '3aa04895-bb22-4657-9a5d-95ca53d8d10e',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    defaultContentToneId: 'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26',
    formatsIds: [
      '3aa04895-bb22-4657-9a5d-95ca53d8d10e', // Listicle (default)
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      'd356cbcf-08e7-492e-8ccd-05e78b2a4f75', // How-To Guide
      '208eefc2-da16-4fbe-9840-fbd2d4655bee' // Ad Copy
    ],
    toneIds: [
      'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26', // Casual (default)
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d', // Funny
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98' // Formal
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f', // General Public (default)
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9' // Marketers & Advertisers
    ]
  },
  {
    id: 'ab25c0c1-7f66-46f8-8168-b1d571a6ef26',
    name: 'How-To Guide',
    description: 'Step-by-step instructional content',
    temperature: 0.4,
    categoryId: '051f668a-2b94-4e81-8747-3c45eab70ef5',
    defaultContentFormatId: 'd356cbcf-08e7-492e-8ccd-05e78b2a4f75',
    defaultAudienceId: 'b0a998c7-bda1-4747-8ab2-c5c8d97489b8',
    defaultContentToneId: '2c888b13-f3ec-4e0b-91cf-9a843cbe0289',
    formatsIds: [
      'd356cbcf-08e7-492e-8ccd-05e78b2a4f75', // How-To Guide (default)
      '15f55e75-77dc-4b9b-b294-f2499da60bc8', // Software Tutorial
      '1ea4dd4f-65ef-41e3-b6fa-fcd0098a0764' // User Manual
    ],
    toneIds: [
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289', // Authoritative (default)
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98', // Formal
      'e539b8cc-93cb-4e16-9e7d-093c92950464' // Analytical
    ],
    audiencesIds: [
      'b0a998c7-bda1-4747-8ab2-c5c8d97489b8', // Educators & Trainers (default)
      '0df57c16-8298-4541-8655-39bd6acf69e9', // Developers
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public
    ]
  },
  {
    id: 'd802cb93-d5ae-44a9-9745-7a281d062e9f',
    name: 'Opinion Piece',
    description: 'Editorial with strong viewpoints',
    temperature: 0.8,
    categoryId: '051f668a-2b94-4e81-8747-3c45eab70ef5',
    defaultContentFormatId: '94da119d-59e0-4077-b140-7e356bac5719',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    defaultContentToneId: 'a961b50e-183b-4af0-91df-d0200b4a6fe3',
    formatsIds: [
      '94da119d-59e0-4077-b140-7e356bac5719', // Opinion Piece (default)
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      'b4545f0e-2bed-4bc9-903e-958e4278fd7d', // Forum Post
      '9e89d54a-b213-4bfd-b882-193743646e84' // LinkedIn Thread
    ],
    toneIds: [
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive (default)
      '7c612eb3-5a98-4fbd-8f4d-b0b2e22db27e', // Sarcastic
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0' // Dramatic
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f', // General Public (default)
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73' // Business Professionals
    ]
  },
  {
    id: '8ac790a1-52c7-4a9a-bdaa-bc0c38827474',
    name: 'News Article',
    description: 'Structured objective reporting',
    temperature: 0.3,
    categoryId: '051f668a-2b94-4e81-8747-3c45eab70ef5',
    defaultContentToneId: '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98',
    defaultContentFormatId: '9c1c69dd-b986-4d93-a026-cfc70b49f9dc',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    formatsIds: [
      '9c1c69dd-b986-4d93-a026-cfc70b49f9dc', // News Article (default)
      '6810d492-e6a9-4c15-afa2-3a9a0be8f589', // Case Study
      '0afd7beb-db42-4521-b018-e02012bb862f' // Release Notes
    ],
    toneIds: [
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98', // Formal (default)
      'e539b8cc-93cb-4e16-9e7d-093c92950464', // Analytical
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289' // Authoritative
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f', // General Public (default)
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73' // Business Professionals
    ]
  },
  {
    id: 'c9033fdb-37bf-47fd-ad69-33f82c631a5f',
    name: 'Case Study',
    description: 'Analytical breakdown with examples and insights',
    temperature: 0.4,
    categoryId: '051f668a-2b94-4e81-8747-3c45eab70ef5',
    defaultContentToneId: 'e539b8cc-93cb-4e16-9e7d-093c92950464',
    defaultContentFormatId: '6810d492-e6a9-4c15-afa2-3a9a0be8f589',
    defaultAudienceId: 'b7a7687a-3231-4d94-9e10-c0f7a107ab73',
    formatsIds: [
      '6810d492-e6a9-4c15-afa2-3a9a0be8f589', // Case Study (default)
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      '0afd7beb-db42-4521-b018-e02012bb862f', // Release Notes
      '775f0368-6ccc-42da-9ac5-620edb0fb7fe' // Business Proposal
    ],
    toneIds: [
      'e539b8cc-93cb-4e16-9e7d-093c92950464', // Analytical (default)
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289', // Authoritative
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98' // Formal
    ],
    audiencesIds: [
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73', // Business Professionals (default)
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9' // Marketers & Advertisers
    ]
  },
  {
    id: 'f14af1a8-6505-4cc7-8b13-c8cdde15becf',
    name: 'Product Descriptions',
    description: 'Descriptions tailored for e-commerce and product listings',
    temperature: 0.6,
    categoryId: '13d2a213-9ee1-4a62-a0bb-2e05e0951ecf',
    defaultContentToneId: '96371a90-2c24-438c-b9b7-0d4037d8c2e0',
    defaultContentFormatId: 'e99c9fe5-f35b-45e5-aa98-190e474f597d',
    defaultAudienceId: 'd035af06-4c7d-4f60-b99e-fd267dd1f6a9',
    formatsIds: [
      'e99c9fe5-f35b-45e5-aa98-190e474f597d', // Product Description (default)
      '208eefc2-da16-4fbe-9840-fbd2d4655bee', // Ad Copy
      '58a909be-18f6-4858-bfb8-9c845406423e', // Landing Page Copy
      '3913f2f4-2449-4ce7-b7e8-4124fc71a088' // Call-To-Action
    ],
    toneIds: [
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0', // Dramatic (default)
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive
      'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26' // Casual
    ],
    audiencesIds: [
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9' // Marketers & Advertisers (default)
    ]
  },
  {
    id: '96ddf836-760c-4af1-b505-458bec264f61',
    name: 'Landing Page Copy',
    description: 'Conversion-optimized web content',
    temperature: 0.7,
    categoryId: '13d2a213-9ee1-4a62-a0bb-2e05e0951ecf',
    defaultContentToneId: 'a961b50e-183b-4af0-91df-d0200b4a6fe3',
    defaultContentFormatId: '58a909be-18f6-4858-bfb8-9c845406423e',
    defaultAudienceId: 'd035af06-4c7d-4f60-b99e-fd267dd1f6a9',
    formatsIds: [
      '58a909be-18f6-4858-bfb8-9c845406423e', // Landing Page Copy (default)
      'e99c9fe5-f35b-45e5-aa98-190e474f597d', // Product Description
      '208eefc2-da16-4fbe-9840-fbd2d4655bee', // Ad Copy
      '3913f2f4-2449-4ce7-b7e8-4124fc71a088' // Call-To-Action
    ],
    toneIds: [
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive (default)
      '64898441-4d6f-47b8-8a4b-3fe0ce1a1fdd', // Inspirational
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0' // Dramatic
    ],
    audiencesIds: [
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9', // Marketers & Advertisers (default)
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73' // Business Professionals
    ]
  },
  {
    id: 'd2b35ac1-4620-4d9c-9596-6b24c96ff5e4',
    name: 'Email Marketing',
    description: 'Promotional or lifecycle email content',
    temperature: 0.7,
    categoryId: '13d2a213-9ee1-4a62-a0bb-2e05e0951ecf',
    defaultContentFormatId: 'e6fa9582-3d37-4932-ae7f-e5e71bf6f5d3',
    defaultAudienceId: 'd035af06-4c7d-4f60-b99e-fd267dd1f6a9',
    defaultContentToneId: 'a961b50e-183b-4af0-91df-d0200b4a6fe3',
    formatsIds: [
      'e6fa9582-3d37-4932-ae7f-e5e71bf6f5d3', // Email Marketing (default)
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      '208eefc2-da16-4fbe-9840-fbd2d4655bee', // Ad Copy
      '3913f2f4-2449-4ce7-b7e8-4124fc71a088' // Call-To-Action
    ],
    toneIds: [
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive (default)
      '16bdde7e-b6b6-47b9-b93f-b5ae30cdb6b3', // Empathetic
      'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26' // Casual
    ],
    audiencesIds: [
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9', // Marketers & Advertisers (default)
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public
    ]
  },
  {
    id: 'ec1a2d75-a6e5-4eca-bfb5-ceb69d957884',
    name: 'Ad Copy',
    description: 'Short copy for Google, Facebook, or LinkedIn ads',
    temperature: 0.9,
    categoryId: '13d2a213-9ee1-4a62-a0bb-2e05e0951ecf',
    defaultContentToneId: 'a961b50e-183b-4af0-91df-d0200b4a6fe3',
    defaultContentFormatId: '208eefc2-da16-4fbe-9840-fbd2d4655bee',
    defaultAudienceId: 'd035af06-4c7d-4f60-b99e-fd267dd1f6a9',
    formatsIds: [
      '208eefc2-da16-4fbe-9840-fbd2d4655bee', // Ad Copy (default)
      '3913f2f4-2449-4ce7-b7e8-4124fc71a088', // Call-To-Action
      '08afff96-eb55-4a5b-8d8b-c1e5f5fd57c2' // Social Media Caption
    ],
    toneIds: [
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive (default)
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d', // Funny
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0' // Dramatic
    ],
    audiencesIds: [
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9', // Marketers & Advertisers (default)
      '854cf3cf-f684-4c0a-bd66-a9442fed73c6' // Content Creators & Influencers
    ]
  },
  {
    id: '7371c8b5-d9b4-447c-b05b-5b027e797ea8',
    name: 'Brand Storytelling',
    description: 'Narrative about company vision and values',
    temperature: 0.85,
    categoryId: '13d2a213-9ee1-4a62-a0bb-2e05e0951ecf',
    defaultContentToneId: '64898441-4d6f-47b8-8a4b-3fe0ce1a1fdd',
    defaultContentFormatId: 'c6ddab8a-7205-4f4b-84c8-4877c5f06a4c',
    defaultAudienceId: 'd035af06-4c7d-4f60-b99e-fd267dd1f6a9',
    formatsIds: [
      'c6ddab8a-7205-4f4b-84c8-4877c5f06a4c', // Brand Storytelling (default)
      '32ab2b3b-b7f9-4891-80da-b7865966ba4f', // Narrative
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      '4ecb77f1-b44b-49c1-a5c4-fd2ac414c98f' // Video Script
    ],
    toneIds: [
      '64898441-4d6f-47b8-8a4b-3fe0ce1a1fdd', // Inspirational (default)
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0', // Dramatic
      'a961b50e-183b-4af0-91df-d0200b4a6fe3' // Persuasive
    ],
    audiencesIds: [
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9', // Marketers & Advertisers (default)
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public
    ]
  },
  {
    id: 'a7a312ee-c9a1-43ed-ac51-4022f1d17f57',
    name: 'Call-To-Action Suggestions',
    description: 'Persuasive hooks and conversion triggers',
    temperature: 0.8,
    categoryId: '13d2a213-9ee1-4a62-a0bb-2e05e0951ecf',
    defaultContentToneId: 'a961b50e-183b-4af0-91df-d0200b4a6fe3',
    defaultContentFormatId: '3913f2f4-2449-4ce7-b7e8-4124fc71a088',
    defaultAudienceId: 'd035af06-4c7d-4f60-b99e-fd267dd1f6a9',
    formatsIds: [
      '3913f2f4-2449-4ce7-b7e8-4124fc71a088', // Call-To-Action (default)
      '208eefc2-da16-4fbe-9840-fbd2d4655bee', // Ad Copy
      '58a909be-18f6-4858-bfb8-9c845406423e' // Landing Page Copy
    ],
    toneIds: [
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive (default)
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d', // Funny
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0' // Dramatic
    ],
    audiencesIds: [
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9', // Marketers & Advertisers (default)
      '854cf3cf-f684-4c0a-bd66-a9442fed73c6' // Content Creators & Influencers
    ]
  },
  {
    id: '5c6fc240-c154-4aa4-af9e-7c36e3bf2f23',
    name: 'Twitter/X Threads',
    description: 'Structured multi-post content for Twitter/X',
    temperature: 0.7,
    categoryId: '2344eed2-cd66-4170-b10a-eaf8d7456826',
    defaultContentFormatId: '9e89d54a-b213-4bfd-b882-193743646e84',
    defaultAudienceId: '854cf3cf-f684-4c0a-bd66-a9442fed73c6',
    defaultContentToneId: 'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26',
    formatsIds: [
      '9e89d54a-b213-4bfd-b882-193743646e84', // Social Media Thread (default)
      '3aa04895-bb22-4657-9a5d-95ca53d8d10e', // Listicle
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      'b4545f0e-2bed-4bc9-903e-958e4278fd7d' // Forum Post
    ],
    toneIds: [
      'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26', // Casual (default)
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d', // Funny
      '7c612eb3-5a98-4fbd-8f4d-b0b2e22db27e' // Sarcastic
    ],
    audiencesIds: [
      '854cf3cf-f684-4c0a-bd66-a9442fed73c6', // Content Creators & Influencers (default)
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public
    ]
  },
  {
    id: '38946217-f2ce-4d54-867f-8a2210f6c7bd',
    name: 'LinkedIn Posts',
    description: 'Professional content for LinkedIn audiencesIds',
    temperature: 0.6,
    categoryId: '2344eed2-cd66-4170-b10a-eaf8d7456826',
    defaultContentFormatId: '9e89d54a-b213-4bfd-b882-193743646e84',
    defaultAudienceId: 'b7a7687a-3231-4d94-9e10-c0f7a107ab73',
    defaultContentToneId: '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98',
    formatsIds: [
      '9e89d54a-b213-4bfd-b882-193743646e84', // Social Media Thread (default)
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      '94da119d-59e0-4077-b140-7e356bac5719', // Opinion Piece
      '6810d492-e6a9-4c15-afa2-3a9a0be8f589' // Case Study
    ],
    toneIds: [
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98', // Formal (default)
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive
      '64898441-4d6f-47b8-8a4b-3fe0ce1a1fdd' // Inspirational
    ],
    audiencesIds: [
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73', // Business Professionals (default)
      '5b4a28f9-d7f9-4fe1-8572-55dd0dcde2c3' // Job Seekers
    ]
  },
  {
    id: '9cb6d166-16bd-4477-8f0f-3f315a9b998d',
    name: 'Instagram/Facebook Captions',
    description: 'Short, hashtag-friendly captions',
    temperature: 0.8,
    categoryId: '2344eed2-cd66-4170-b10a-eaf8d7456826',
    defaultContentToneId: 'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26',
    defaultContentFormatId: '08afff96-eb55-4a5b-8d8b-c1e5f5fd57c2',
    defaultAudienceId: '854cf3cf-f684-4c0a-bd66-a9442fed73c6',
    formatsIds: [
      '08afff96-eb55-4a5b-8d8b-c1e5f5fd57c2', // Social Media Caption (default)
      '3913f2f4-2449-4ce7-b7e8-4124fc71a088', // Call-To-Action
      '208eefc2-da16-4fbe-9840-fbd2d4655bee' // Ad Copy
    ],
    toneIds: [
      'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26', // Casual (default)
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d', // Funny
      'a961b50e-183b-4af0-91df-d0200b4a6fe3' // Persuasive
    ],
    audiencesIds: [
      '854cf3cf-f684-4c0a-bd66-a9442fed73c6', // Content Creators & Influencers (default)
      'd035af06-4c7d-4f60-b99e-fd267dd1f6a9' // Marketers & Advertisers
    ]
  },
  {
    id: '872472ff-c4a5-4d4e-9705-e7ab23899d18',
    name: 'TikTok/YouTube Short Scripts',
    description: 'Brief script ideas for short-form video',
    temperature: 0.85,
    categoryId: '2344eed2-cd66-4170-b10a-eaf8d7456826',
    defaultContentToneId: '96371a90-2c24-438c-b9b7-0d4037d8c2e0',
    defaultContentFormatId: '4ecb77f1-b44b-49c1-a5c4-fd2ac414c98f',
    defaultAudienceId: '854cf3cf-f684-4c0a-bd66-a9442fed73c6',
    formatsIds: [
      '4ecb77f1-b44b-49c1-a5c4-fd2ac414c98f', // Video Script (default)
      '208eefc2-da16-4fbe-9840-fbd2d4655bee', // Ad Copy
      '4ef14884-6931-4a40-97bf-b0cda0f3c78b', // Comedic
      '854e7c12-18bb-49cf-929b-b021ce0aa3b9' // Song Lyrics
    ],
    toneIds: [
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0', // Dramatic (default)
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d', // Funny
      '64898441-4d6f-47b8-8a4b-3fe0ce1a1fdd' // Inspirational
    ],
    audiencesIds: [
      '854cf3cf-f684-4c0a-bd66-a9442fed73c6' // Content Creators & Influencers (default)
    ]
  },
  {
    id: 'c1ca27df-6f92-4143-9ab5-065c84b3fdd7',
    name: 'Reddit Posts',
    description: 'Content suited for discussion-driven subreddits',
    temperature: 0.75,
    categoryId: '2344eed2-cd66-4170-b10a-eaf8d7456826',
    defaultContentToneId: '7c612eb3-5a98-4fbd-8f4d-b0b2e22db27e',
    defaultContentFormatId: '9e89d54a-b213-4bfd-b882-193743646e84',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    formatsIds: [
      '9e89d54a-b213-4bfd-b882-193743646e84', // Social Media Thread (default)
      'b4545f0e-2bed-4bc9-903e-958e4278fd7d', // Forum Post
      'b607d82b-4fec-446d-899f-9a965254b790' // Blog Post
    ],
    toneIds: [
      '7c612eb3-5a98-4fbd-8f4d-b0b2e22db27e', // Sarcastic (default)
      'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26', // Casual
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d' // Funny
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f', // General Public (default)
      '0df57c16-8298-4541-8655-39bd6acf69e9' // Developers
    ]
  },
  {
    id: 'a0eb1528-d08a-404e-9470-ae724a8bb34c',
    name: 'API Documentation',
    description: 'Technical reference content for APIs',
    temperature: 0.2,
    categoryId: 'bc075bda-9454-44e9-931f-0e5b98bfc5c5',
    defaultContentToneId: '2c888b13-f3ec-4e0b-91cf-9a843cbe0289',
    defaultContentFormatId: '7e51da78-c604-46e8-9cbb-ac1a1679c14a',
    defaultAudienceId: '0df57c16-8298-4541-8655-39bd6acf69e9',
    formatsIds: [
      '7e51da78-c604-46e8-9cbb-ac1a1679c14a', // API Documentation (default)
      '8bb90aff-6f1f-421b-86e5-80bc2d77b5de', // Code Snippet
      '1ea4dd4f-65ef-41e3-b6fa-fcd0098a0764', // User Manual
      '0afd7beb-db42-4521-b018-e02012bb862f' // Release Notes
    ],
    toneIds: [
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289', // Authoritative (default)
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98', // Formal
      'e539b8cc-93cb-4e16-9e7d-093c92950464' // Analytical
    ],
    audiencesIds: [
      '0df57c16-8298-4541-8655-39bd6acf69e9' // Developers (default)
    ]
  },
  {
    id: '33ee1909-cdc4-4bcb-a477-84286ecd39db',
    name: 'Release Notes',
    description: 'Changelog and updates summary',
    temperature: 0.3,
    categoryId: 'bc075bda-9454-44e9-931f-0e5b98bfc5c5',
    defaultContentFormatId: '0afd7beb-db42-4521-b018-e02012bb862f',
    defaultAudienceId: '0df57c16-8298-4541-8655-39bd6acf69e9',
    defaultContentToneId: '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98',
    formatsIds: [
      '0afd7beb-db42-4521-b018-e02012bb862f', // Release Notes (default)
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      '6810d492-e6a9-4c15-afa2-3a9a0be8f589' // Case Study
    ],
    toneIds: [
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98', // Formal (default)
      'e539b8cc-93cb-4e16-9e7d-093c92950464', // Analytical
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289' // Authoritative
    ],
    audiencesIds: [
      '0df57c16-8298-4541-8655-39bd6acf69e9', // Developers (default)
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73' // Business Professionals
    ]
  },
  {
    id: '8003acc5-0cd3-44d8-b255-801793062af0',
    name: 'User Manuals',
    description: 'Guides for users on how to use software',
    temperature: 0.4,
    categoryId: 'bc075bda-9454-44e9-931f-0e5b98bfc5c5',
    defaultContentFormatId: '1ea4dd4f-65ef-41e3-b6fa-fcd0098a0764',
    defaultAudienceId: 'b0a998c7-bda1-4747-8ab2-c5c8d97489b8',
    defaultContentToneId: '2c888b13-f3ec-4e0b-91cf-9a843cbe0289',
    formatsIds: [
      '1ea4dd4f-65ef-41e3-b6fa-fcd0098a0764', // User Manual (default)
      '15f55e75-77dc-4b9b-b294-f2499da60bc8', // Software Tutorial
      'd356cbcf-08e7-492e-8ccd-05e78b2a4f75' // How-To Guide
    ],
    toneIds: [
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289', // Authoritative (default)
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98', // Formal
      'e539b8cc-93cb-4e16-9e7d-093c92950464' // Analytical
    ],
    audiencesIds: [
      'b0a998c7-bda1-4747-8ab2-c5c8d97489b8', // Educators & Trainers (default)
      '0df57c16-8298-4541-8655-39bd6acf69e9' // Developers
    ]
  },
  {
    id: 'c8ad511e-03a5-4e68-b851-e9b653de763b',
    name: 'Software Tutorials',
    description: 'Hands-on coding or usage tutorials',
    temperature: 0.5,
    categoryId: 'bc075bda-9454-44e9-931f-0e5b98bfc5c5',
    defaultContentFormatId: '15f55e75-77dc-4b9b-b294-f2499da60bc8',
    defaultAudienceId: '0df57c16-8298-4541-8655-39bd6acf69e9',
    defaultContentToneId: '2c888b13-f3ec-4e0b-91cf-9a843cbe0289',
    formatsIds: [
      '15f55e75-77dc-4b9b-b294-f2499da60bc8', // Software Tutorial (default)
      '8bb90aff-6f1f-421b-86e5-80bc2d77b5de', // Code Snippet
      'b607d82b-4fec-446d-899f-9a965254b790' // Blog Post
    ],
    toneIds: [
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289', // Authoritative (default)
      'e539b8cc-93cb-4e16-9e7d-093c92950464', // Analytical
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98' // Formal
    ],
    audiencesIds: [
      '0df57c16-8298-4541-8655-39bd6acf69e9', // Developers (default)
      'b0a998c7-bda1-4747-8ab2-c5c8d97489b8' // Educators & Trainers
    ]
  },
  {
    id: '1cce5f79-10f0-4d5e-9dc6-de3e31323d60',
    name: 'Code Snippets with Explanations',
    description: 'Code with explanatory context',
    temperature: 0.4,
    categoryId: 'bc075bda-9454-44e9-931f-0e5b98bfc5c5',
    defaultContentFormatId: '8bb90aff-6f1f-421b-86e5-80bc2d77b5de',
    defaultAudienceId: '0df57c16-8298-4541-8655-39bd6acf69e9',
    defaultContentToneId: 'e539b8cc-93cb-4e16-9e7d-093c92950464',
    formatsIds: [
      '8bb90aff-6f1f-421b-86e5-80bc2d77b5de', // Code Snippet (default)
      '7e51da78-c604-46e8-9cbb-ac1a1679c14a', // API Documentation
      '15f55e75-77dc-4b9b-b294-f2499da60bc8' // Software Tutorial
    ],
    toneIds: [
      'e539b8cc-93cb-4e16-9e7d-093c92950464', // Analytical (default)
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289' // Authoritative
    ],
    audiencesIds: [
      '0df57c16-8298-4541-8655-39bd6acf69e9' // Developers (default)
    ]
  },
  {
    id: '06456242-3b6c-4907-ad8b-643e28a95be5',
    name: 'Storytelling/Narratives',
    description: 'Short stories or narrative fiction',
    temperature: 0.95,
    categoryId: '54380511-0986-413e-b088-171a0e480a3b',
    defaultContentToneId: '96371a90-2c24-438c-b9b7-0d4037d8c2e0',
    defaultContentFormatId: '32ab2b3b-b7f9-4891-80da-b7865966ba4f',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    formatsIds: [
      '32ab2b3b-b7f9-4891-80da-b7865966ba4f', // Narrative (default)
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      'c6ddab8a-7205-4f4b-84c8-4877c5f06a4c', // Brand Storytelling
      'dc326349-629c-48eb-ba27-c3b5e8dd3ef6' // Screenplay
    ],
    toneIds: [
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0', // Dramatic (default)
      '64898441-4d6f-47b8-8a4b-3fe0ce1a1fdd', // Inspirational
      'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26' // Casual
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public (default)
    ]
  },
  {
    id: 'bf02ec18-8f9c-4f26-b8a7-5c083cc634d9',
    name: 'Poetry Generator',
    description: 'Generate haikus, sonnets, or freestyle poetry',
    temperature: 1.0,
    categoryId: '54380511-0986-413e-b088-171a0e480a3b',
    defaultContentToneId: '96371a90-2c24-438c-b9b7-0d4037d8c2e0',
    defaultContentFormatId: '6c56d248-6a07-4536-a20d-6bd5d4b79491',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    formatsIds: [
      '6c56d248-6a07-4536-a20d-6bd5d4b79491', // Poem (default)
      '854e7c12-18bb-49cf-929b-b021ce0aa3b9', // Song Lyrics
      '4ef14884-6931-4a40-97bf-b0cda0f3c78b' // Comedic
    ],
    toneIds: [
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0', // Dramatic (default)
      '64898441-4d6f-47b8-8a4b-3fe0ce1a1fdd' // Inspirational
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public (default)
    ]
  },
  {
    id: 'e8ba9ad0-049f-47d3-998a-7d0f910e9532',
    name: 'Screenplay/Script Writing',
    description: 'Dialogue-driven story scripts',
    temperature: 0.9,
    categoryId: '54380511-0986-413e-b088-171a0e480a3b',
    defaultContentToneId: '96371a90-2c24-438c-b9b7-0d4037d8c2e0',
    defaultContentFormatId: 'dc326349-629c-48eb-ba27-c3b5e8dd3ef6',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    formatsIds: [
      'dc326349-629c-48eb-ba27-c3b5e8dd3ef6', // Screenplay/Script (default)
      '4ecb77f1-b44b-49c1-a5c4-fd2ac414c98f', // Video Script
      '32ab2b3b-b7f9-4891-80da-b7865966ba4f' // Narrative
    ],
    toneIds: [
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0', // Dramatic (default)
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d' // Funny
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public (default)
    ]
  },
  {
    id: 'f0fb65f8-57cc-4678-90d5-1460dfc14bc2',
    name: 'Joke/Comedy Writing',
    description: 'Humorous one-liners or sketches',
    temperature: 0.95,
    categoryId: '54380511-0986-413e-b088-171a0e480a3b',
    defaultContentToneId: '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d',
    defaultContentFormatId: '4ef14884-6931-4a40-97bf-b0cda0f3c78b',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    formatsIds: [
      '4ef14884-6931-4a40-97bf-b0cda0f3c78b', // Comedic (default)
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      '9e89d54a-b213-4bfd-b882-193743646e84' // Twitter/X Thread
    ],
    toneIds: [
      '7e2f7cb8-c30a-443a-9ec9-f61b1d41690d', // Funny (default)
      '7c612eb3-5a98-4fbd-8f4d-b0b2e22db27e' // Sarcastic
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public (default)
    ]
  },
  {
    id: '7f038f6e-2de5-4b8b-9567-8b5402434f8e',
    name: 'Song Lyrics',
    description: 'Lyrics for various musical genres',
    temperature: 0.9,
    categoryId: '54380511-0986-413e-b088-171a0e480a3b',
    defaultContentToneId: '96371a90-2c24-438c-b9b7-0d4037d8c2e0',
    defaultContentFormatId: '854e7c12-18bb-49cf-929b-b021ce0aa3b9',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    formatsIds: [
      '854e7c12-18bb-49cf-929b-b021ce0aa3b9', // Song Lyrics (default)
      '6c56d248-6a07-4536-a20d-6bd5d4b79491', // Poem
      '4ef14884-6931-4a40-97bf-b0cda0f3c78b' // Comedic
    ],
    toneIds: [
      '96371a90-2c24-438c-b9b7-0d4037d8c2e0', // Dramatic (default)
      '64898441-4d6f-47b8-8a4b-3fe0ce1a1fdd' // Inspirational
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public (default)
    ]
  },
  {
    id: '58c246ab-05fa-41bb-9689-4dc1cea4e0e9',
    name: 'Resume/CV Builder',
    description: 'Tailored resume content generation',
    temperature: 0.3,
    categoryId: 'b9edd036-a2e5-4dbb-bd7e-104c23251f2a',
    defaultContentToneId: '16bdde7e-b6b6-47b9-b93f-b5ae30cdb6b3',
    defaultContentFormatId: '2dcca7e8-6559-4297-8681-6eaa8ad8d742',
    defaultAudienceId: '5b4a28f9-d7f9-4fe1-8572-55dd0dcde2c3',
    formatsIds: [
      '2dcca7e8-6559-4297-8681-6eaa8ad8d742', // Resume (default)
      '33100dd3-9fa3-479b-8ef0-fa6478d5653a', // Cover Letter
      '8379c808-d6ab-4229-ac80-d639070e4f83' // Profile Optimization
    ],
    toneIds: [
      '16bdde7e-b6b6-47b9-b93f-b5ae30cdb6b3', // Empathetic (default)
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98' // Formal
    ],
    audiencesIds: [
      '5b4a28f9-d7f9-4fe1-8572-55dd0dcde2c3' // Job Seekers (default)
    ]
  },
  {
    id: 'd5bb36b3-a8e2-4e56-98e0-8a21b2ac92fe',
    name: 'Cover Letter Generator',
    description: 'Job-specific cover letter writing',
    temperature: 0.5,
    categoryId: 'b9edd036-a2e5-4dbb-bd7e-104c23251f2a',
    defaultContentToneId: '16bdde7e-b6b6-47b9-b93f-b5ae30cdb6b3',
    defaultContentFormatId: '33100dd3-9fa3-479b-8ef0-fa6478d5653a',
    defaultAudienceId: '5b4a28f9-d7f9-4fe1-8572-55dd0dcde2c3',
    formatsIds: [
      '33100dd3-9fa3-479b-8ef0-fa6478d5653a', // Cover Letter (default)
      '2dcca7e8-6559-4297-8681-6eaa8ad8d742', // Resume
      '2c68291e-5de8-4199-8327-19dd03dab5e9' // Journal Entry
    ],
    toneIds: [
      '16bdde7e-b6b6-47b9-b93f-b5ae30cdb6b3', // Empathetic (default)
      'a961b50e-183b-4af0-91df-d0200b4a6fe3' // Persuasive
    ],
    audiencesIds: [
      '5b4a28f9-d7f9-4fe1-8572-55dd0dcde2c3' // Job Seekers (default)
    ]
  },
  {
    id: '044c0ceb-35f7-45c5-afa1-eb2f80eda160',
    name: 'LinkedIn Profile Optimization',
    description: 'Optimized headline and summary',
    temperature: 0.5,
    categoryId: 'b9edd036-a2e5-4dbb-bd7e-104c23251f2a',
    defaultContentToneId: 'a961b50e-183b-4af0-91df-d0200b4a6fe3',
    defaultContentFormatId: '8379c808-d6ab-4229-ac80-d639070e4f83',
    defaultAudienceId: '5b4a28f9-d7f9-4fe1-8572-55dd0dcde2c3',
    formatsIds: [
      '8379c808-d6ab-4229-ac80-d639070e4f83', // Profile Optimization (default)
      '2dcca7e8-6559-4297-8681-6eaa8ad8d742', // Resume
      'b607d82b-4fec-446d-899f-9a965254b790' // Blog Post
    ],
    toneIds: [
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive (default)
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98' // Formal
    ],
    audiencesIds: [
      '5b4a28f9-d7f9-4fe1-8572-55dd0dcde2c3', // Job Seekers (default)
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73' // Business Professionals
    ]
  },
  {
    id: '439f7731-d53d-446f-948b-a78223559470',
    name: 'Personal Blog/Journal Entry',
    description: 'Reflective or informal writing',
    temperature: 0.8,
    categoryId: 'b9edd036-a2e5-4dbb-bd7e-104c23251f2a',
    defaultContentFormatId: '2c68291e-5de8-4199-8327-19dd03dab5e9',
    defaultAudienceId: 'f744bc27-9885-4958-8b0b-f59947893d0f',
    defaultContentToneId: 'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26',
    formatsIds: [
      '2c68291e-5de8-4199-8327-19dd03dab5e9', // Journal Entry (default)
      'b607d82b-4fec-446d-899f-9a965254b790', // Blog Post
      '32ab2b3b-b7f9-4891-80da-b7865966ba4f' // Narrative
    ],
    toneIds: [
      'd8c87b6e-53cd-47e0-b0c8-72e65bcf1e26', // Casual (default)
      '16bdde7e-b6b6-47b9-b93f-b5ae30cdb6b3' // Empathetic
    ],
    audiencesIds: [
      'f744bc27-9885-4958-8b0b-f59947893d0f' // General Public (default)
    ]
  },
  {
    id: '18abe0d8-9034-4148-84c9-b5c4aaa8bb77',
    name: 'Business Proposals',
    description: 'Structured pitch and business plans',
    temperature: 0.5,
    categoryId: '9aa06006-d7de-401f-8bf5-e9c408d527de',
    defaultContentToneId: 'a961b50e-183b-4af0-91df-d0200b4a6fe3',
    defaultContentFormatId: '775f0368-6ccc-42da-9ac5-620edb0fb7fe',
    defaultAudienceId: 'b7a7687a-3231-4d94-9e10-c0f7a107ab73',
    formatsIds: [
      '775f0368-6ccc-42da-9ac5-620edb0fb7fe', // Business Proposal (default)
      '6810d492-e6a9-4c15-afa2-3a9a0be8f589', // Case Study
      '0f2fc004-d216-4c07-b30a-60185ca52b6a' // Pitch Deck Slide
    ],
    toneIds: [
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive (default)
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289' // Authoritative
    ],
    audiencesIds: [
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73' // Business Professionals (default)
    ]
  },
  {
    id: '45d387ab-6939-4e49-989a-09c9a5e08148',
    name: 'Investor Pitch Decks',
    description: 'Slide content for startups seeking funding',
    temperature: 0.6,
    categoryId: '9aa06006-d7de-401f-8bf5-e9c408d527de',
    defaultContentFormatId: '0f2fc004-d216-4c07-b30a-60185ca52b6a',
    defaultAudienceId: 'b7a7687a-3231-4d94-9e10-c0f7a107ab73',
    defaultContentToneId: '2c888b13-f3ec-4e0b-91cf-9a843cbe0289',
    formatsIds: [
      '0f2fc004-d216-4c07-b30a-60185ca52b6a', // Pitch Deck Slide (default)
      '775f0368-6ccc-42da-9ac5-620edb0fb7fe' // Business Proposal
    ],
    toneIds: [
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289', // Authoritative (default)
      'a961b50e-183b-4af0-91df-d0200b4a6fe3' // Persuasive
    ],
    audiencesIds: [
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73' // Business Professionals (default)
    ]
  },
  {
    id: 'e4674db8-e84d-481e-af7b-070a6c211a86',
    name: 'Legal Templates',
    description: 'Contracts, NDAs, and agreement documents',
    temperature: 0.2,
    categoryId: '9aa06006-d7de-401f-8bf5-e9c408d527de',
    defaultContentToneId: '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98',
    defaultContentFormatId: 'fe0a159d-cb10-4df1-a449-e57c19210012',
    defaultAudienceId: 'f444521e-9e1e-4983-906e-6831f803f499',
    formatsIds: [
      'fe0a159d-cb10-4df1-a449-e57c19210012', // Legal Template (default)
      '1ea4dd4f-65ef-41e3-b6fa-fcd0098a0764', // User Manual
      '7e51da78-c604-46e8-9cbb-ac1a1679c14a' // API Documentation
    ],
    toneIds: [
      '0c0a173e-49cf-4d26-b8ae-4a2be1a2cb98', // Formal (default)
      '2c888b13-f3ec-4e0b-91cf-9a843cbe0289' // Authoritative
    ],
    audiencesIds: [
      'f444521e-9e1e-4983-906e-6831f803f499' // Legal Professionals (default)
    ]
  },
  {
    id: '4e7735fb-0fe3-4576-8cc7-bf5cff694309',
    name: 'Grant Writing',
    description: 'Persuasive applications for funding',
    temperature: 0.4,
    categoryId: '9aa06006-d7de-401f-8bf5-e9c408d527de',
    defaultContentFormatId: 'd0bd9f4f-e9c6-47fb-aa14-a35b49dfd3c4',
    defaultAudienceId: 'b7a7687a-3231-4d94-9e10-c0f7a107ab73',
    defaultContentToneId: 'a961b50e-183b-4af0-91df-d0200b4a6fe3',
    formatsIds: [
      'd0bd9f4f-e9c6-47fb-aa14-a35b49dfd3c4', // Grant Proposal (default)
      '775f0368-6ccc-42da-9ac5-620edb0fb7fe', // Business Proposal
      'e6fa9582-3d37-4932-ae7f-e5e71bf6f5d3' // Email Marketing
    ],
    toneIds: [
      'a961b50e-183b-4af0-91df-d0200b4a6fe3', // Persuasive (default)
      '16bdde7e-b6b6-47b9-b93f-b5ae30cdb6b3' // Empathetic
    ],
    audiencesIds: [
      'b7a7687a-3231-4d94-9e10-c0f7a107ab73' // Business Professionals (default)
    ]
  }
];
