import { DefaultTheme } from 'styled-components';

// export const theme: DefaultTheme = {
//   colors: {
//     background: '#121212',
//     surface: '#1E1E1E',
//     primary: '#90CAF9',
//     secondary: '#F48FB1',
//     success: '#81C784',
//     warning: '#FFB74D',
//     error: '#E57373',
//     text: '#E0E0E0',
//     textMuted: '#BDBDBD',
//     border: '#2C2C2C',
//     hover: '#2A2A2A',
//   },
//   spacing: (factor: number) => `${0.25 * factor}rem`,
//   borderRadius: '0.5rem',
//   fontSizes: {
//     xs: '0.75rem',
//     sm: '0.875rem',
//     base: '1rem',
//     lg: '1.125rem',
//     xl: '1.25rem',
//     '2xl': '1.5rem',
//   },
// };

// theme.ts  – Soft-Dark neutrals
export const theme: DefaultTheme = {
  colors: {
    background: '#1A1A1A', // softer charcoal
    surface: '#252525', // cards & sheets
    border: '#353535',
    hover: '#2F2F2F',

    // Text
    text: '#EEEEEE',
    textMuted: '#CCCCCC',

    // Accents stay as-is for now
    primary: '#90CAF9',
    secondary: '#F48FB1',
    success: '#81C784',
    warning: '#FFB74D',
    error: '#E57373'
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  borderRadius: '0.5rem',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem'
  }
};
