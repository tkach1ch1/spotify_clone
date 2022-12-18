import { Box } from '@mui/system'
import {
    StyledSearchBar,
    StyledSearchIcon,
    StyledCloseButton,
} from 'src/pages/CreatePlaylistPage/style'
import CloseIcon from '@mui/icons-material/Close'

interface SearchBarProps {
    search: string
    onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    clearSearchBarOnClick: () => void
}

export const SearchBar = ({
    search,
    onSearchInputChange,
    clearSearchBarOnClick,
}: SearchBarProps) => {
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
