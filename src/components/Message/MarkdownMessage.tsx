import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';
import { defaultSchema } from 'rehype-sanitize';
import type { Pluggable } from 'unified';
import styled from 'styled-components';

interface MarkdownMessageProps {
  children: string;
}

/**
 * Wrapper that turns a markdown string into safe, syntax‑highlighted JSX.
 * All parsing + sanitation is centralised here so the rest of the codebase
 * only needs to render <MarkdownMessage>{text}</MarkdownMessage>.
 */
const MarkdownContainer = styled.div`
  /* Reset top / bottom margin so bubble padding controls spacing */
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  /* Allow code blocks to scroll horizontally without breaking layout */
  pre {
    overflow-x: auto;
  }
`;

// Extend the default rehype‑sanitize schema so syntax‑highlight classes survive.
const sanitizerSchema: Parameters<typeof rehypeSanitize>[0] = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    
    // Preserve className on <code> and <pre> for highlight.js styling
    code: [...(defaultSchema.attributes?.code ?? []), ['className']],
    pre: [...(defaultSchema.attributes?.pre ?? []), ['className']]
  }
};

// Give ReactMarkdown a correctly typed plugin reference without using "any".
const rehypeHighlightPlugin: Pluggable = rehypeHighlight;

export const MarkdownMessage = memo(({ children }: MarkdownMessageProps) => (
  <MarkdownContainer>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeHighlightPlugin,
        [rehypeSanitize, sanitizerSchema]
      ]}
    >
      {children}
    </ReactMarkdown>
  </MarkdownContainer>
));

MarkdownMessage.displayName = 'MarkdownMessage';
