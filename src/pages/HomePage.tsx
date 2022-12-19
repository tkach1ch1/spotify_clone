import { Box } from '@mui/system'
import { ContentSection } from 'src/layouts/ContentSection/ContentSection'
import { MainContainer } from '../layouts/MainContainer/MainContainer'

export const HomePage = () => {
    return (
        <MainContainer>
            <Box>
                <ContentSection title='Focus' />
            </Box>
        </MainContainer>
    )
}
