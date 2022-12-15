import { SearchBox, SearchTitle, StyledSearchSongSection } from 'src/pages/CreatePlaylistPage/style'
import { SearchBar } from './SearchBar'
import { Box } from '@mui/system'
import { ResultSection } from './ResultSection'

export const SearchSongSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <StyledSearchSongSection>
                <SearchBox>
                    <SearchTitle>Let's find something for your playlist</SearchTitle>
                    <SearchBar />
                </SearchBox>
            </StyledSearchSongSection>
            <ResultSection />
        </Box>
    )
}
