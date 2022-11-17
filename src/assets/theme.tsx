import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    // Text colors
    primary: {
      main: '#FFFFF',
      dark: '#A7A7A7',
    },
    // Background colors
    secondary: {
      main: '#121212',
    },
  },
  typography: {
    allVariants: {
      fontFamily: ['Rubik', 'sans-serif'].join(),
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0, // min-width for mobile devices
      sm: 480, // min-width for tablets
      md: 768, // min-width for small screens, laptops
      lg: 1024, // 1024x768
      xl: 1280, // 1280x720
    },
  },
});
