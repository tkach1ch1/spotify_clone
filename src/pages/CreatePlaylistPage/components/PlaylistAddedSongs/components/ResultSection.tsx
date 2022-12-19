import { Box } from '@mui/system'
import { FoundResultItems } from 'src/hooks/useSearch'
import { NoResult, NoResultFoundBox, ResultBox } from 'src/pages/CreatePlaylistPage/style'
import { FoundResult } from './FoundResult'

interface ResultSectionProps {
    foundResult: FoundResultItems | undefined
    search: string
}
export const ResultSection = ({ search, foundResult }: ResultSectionProps) => {
    return (
        <ResultBox tabIndex={0}>
            {foundResult === undefined && !!search ? (
                <NoResultFoundBox>
                    <NoResult>No result found for "{search}"</NoResult>
                    <Box sx={{ fontSize: '0.875rem' }}>
                        Please make sure your words are spelled correctly or use less or different
                        keywords.
                    </Box>
                </NoResultFoundBox>
            ) : (
                <FoundResult foundResult={foundResult && foundResult} />
            )}
        </ResultBox>
    )
}
