// src/lib/styled-components.tsx
'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider
} from 'styled-components';
import { theme } from '@/styles/theme';

export default function StyledComponentsRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  // single sheet per request
  const [sheet] = useState(() => new ServerStyleSheet());

  // flush collected <style> tags into <head> during streaming
  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  // client render: just hand everything to styled-components
  if (typeof window !== 'undefined')
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  // server render: collect rules
  return (
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
}
