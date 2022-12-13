import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box } from '@mui/material'
import { StyledTooltip, StyledIcon } from 'src/layouts/NowPlayingBar/style'

export const SaveToLibraryButton = () => {
    return (
        <Box>
            <StyledIcon>
                <StyledTooltip
                    title='Save to Your Library'
                    placement='top'
                >
                    <FavoriteBorderIcon fontSize='small' />
                </StyledTooltip>
            </StyledIcon>
        </Box>
    )
}
