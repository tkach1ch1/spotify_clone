import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    // Text colors
    primary: {
      main: '#FFFFFF',
      dark: '#A7A7A7',
    },
    // Background colors
    secondary: {
      main: '#1c1c1c',
      light: '#282828',
    },
    success: {
      main: '#1db954',
    },
  },
  typography: {
    allVariants: {
      fontFamily: ['Rubik', 'sans-serif'].join(),
    },
  },
  breakpoints: {
    values: {
      xs: 769,
      sm: 890,
      md: 1024,
      lg: 1280,
      xl: 1500,
    },
  },
});
