import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { theme } from 'src/assets/theme'

export const TopContainer = styled(Box)({
    display: 'grid',
    gridTemplateAreas: `
                          'nav-bar top-bar'
                          'nav-bar main-view'
                          'now-playing-bar now-playing-bar'
                       `,
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto 1fr auto',
    height: '100%',
    minHeight: '100%',
    position: 'relative',
    width: '100%',
})

export const MainViewContainer = styled(Box)({
    gridArea: 'main-view',
    background: '#121212',
    position: 'relative',
    minWidth: '519px',
    minHeight: '450px',

    width: '100%',
    overflowY: 'auto',
    paddingBottom: '32px',
    scrollbarWidth: 'none',
})

export const MainViewBox = styled(Box)({
    padding: '0 32px',
    maxWidth: '1955px',
    [theme.breakpoints.down('md')]: {
        padding: '0 16px',
    },
})
