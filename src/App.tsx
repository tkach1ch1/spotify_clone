import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { theme } from './assets/theme';
import { Routing } from './features/Routing/Routing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routing />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
