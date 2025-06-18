// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      primary: string;
      secondary: string;
      success: string;
      warning: string;
      error: string;
      text: string;
      textMuted: string;
      border: string;
      hover: string;
    };
    spacing: (factor: number) => string;
    borderRadius: string;
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
}
