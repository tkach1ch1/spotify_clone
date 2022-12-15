import { Box } from '@mui/system'
import { NoResultFoundBox, ResultBox } from 'src/pages/CreatePlaylistPage/style'
import { FoundResult } from './FoundResult'

export const ResultSection = () => {
    let searchResult = 's'
    return (
        <ResultBox tabIndex={0}>
            {!searchResult ? (
                <NoResultFoundBox>
                    <Box
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: '500',
                        }}
                    >
                        No result found for " ( searchResult ) "
                    </Box>
                    <Box sx={{ fontSize: '0.875rem' }}>
                        Please make sure your words are spelled correctly or use less or different
                        keywords.
                    </Box>
                </NoResultFoundBox>
            ) : (
                <FoundResult />
            )}
        </ResultBox>
    )
}
