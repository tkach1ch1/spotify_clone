import { Box } from '@mui/system'
import { useState } from 'react'
import {
    StyledSearchBar,
    StyledSearchIcon,
    StyledCloseButton,
} from 'src/pages/CreatePlaylistPage/style'
import CloseIcon from '@mui/icons-material/Close'

export const SearchBar = () => {
    const [search, setSearch] = useState('')

    const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const clearSearchBarOnClick = () => {
        setSearch('')
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <StyledSearchBar
                type='search'
                placeholder='Search for songs or episodes'
                value={search}
                onChange={onSearchInputChange}
            />
            <StyledSearchIcon />
            {search ? (
                <StyledCloseButton>
                    <CloseIcon onClick={clearSearchBarOnClick} />
                </StyledCloseButton>
            ) : null}
        </Box>
    )
}
