import { SearchBox, SearchTitle, StyledSearchSongSection } from 'src/pages/CreatePlaylistPage/style'
import { SearchBar } from './SearchBar'
import { Box } from '@mui/system'
import { ResultSection } from './ResultSection'
import { useSearch } from 'src/hooks/useSearch'

export const SearchSongSection = () => {
    const { search, onSearchInputChange, clearSearchBarOnClick, foundResult } = useSearch()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <StyledSearchSongSection>
                <SearchBox>
                    <SearchTitle>Let's find something for your playlist</SearchTitle>
                    <SearchBar
                        search={search}
                        onSearchInputChange={onSearchInputChange}
                        clearSearchBarOnClick={clearSearchBarOnClick}
                    />
                </SearchBox>
            </StyledSearchSongSection>
            <ResultSection
                search={search}
                foundResult={foundResult}
            />
        </Box>
    )
}
