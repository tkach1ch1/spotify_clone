import { Box } from '@mui/system'
import { theme } from 'src/assets/theme'
import { MainContainer } from 'src/layouts/MainContainer/MainContainer'
import { LikedSongsPageHeader } from './components/LikedSongsPageHeader'
import { LikedSongsPageList } from './components/LikedSongsPageList'

export const LikedSongsPage = () => {
    return (
        <MainContainer>
            <Box
                sx={{
                    margin: '0 -32px',
                    [theme.breakpoints.down('md')]: {
                        margin: '0 -16px',
                    },
                }}
            >
                <LikedSongsPageHeader />
            </Box>
            <LikedSongsPageList />
        </MainContainer>
    )
}
