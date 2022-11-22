import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './assets/theme';
import { Routing } from './features/Routing/Routing';

//This application is responsive only till tablet sizes.

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
