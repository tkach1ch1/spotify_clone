import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { theme } from 'src/assets/theme'

export const LikedSongsPageTitle = styled(Box)({
    fontWeight: '700',
    cursor: 'pointer',
    marginBottom: '10px',
    fontSize: '6rem',
    [theme.breakpoints.down('lg')]: {
        fontSize: '4.5rem',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
    },
})
