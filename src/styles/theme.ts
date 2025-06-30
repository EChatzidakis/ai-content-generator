import { DefaultTheme } from 'styled-components';

// theme.ts  – Soft-Dark neutrals
export const theme: DefaultTheme = {
  colors: {
    background: '#EDEDF4',
    surface: '#F7F7FB',
    surfaceAlt: '#ECECF3',
    border: '#D4D4E0',
    hover: '#E2E2F0',

    text: '#2A2B38',
    textMuted: '#5F6170',
    textSubtle: '#8A8BA0',

    primary: '#6F7BFF',
    secondary: '#B18BFF',
    success: '#4BAE8C',
    warning: '#F0B65A',
    error: '#E1787A'
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  borderRadius: '0.5rem',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md:  '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem'
  }
};
