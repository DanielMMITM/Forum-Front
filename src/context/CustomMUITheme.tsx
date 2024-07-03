import { ThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#038ad8',
      light: '#2998e1',
      dark: '#003459',
    },
    secondary: {
      main: '#efbdeb',
      dark: '#b68cb8',
    },
    info: {
      main: '#616161',
    },
    tertiary: {
      main: '#c2d076',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});

export const CustomMUITheme = ({ children }: Props) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};
