import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { theme } from './assets/theme'
import { Routing } from './features/Routing/Routing'
import { store } from './redux/store'

//This application is responsive only till tablet sizes.

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Routing />
                </CssBaseline>
            </ThemeProvider>
        </Provider>
    )
}

export default App
