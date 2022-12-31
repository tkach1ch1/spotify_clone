import { Box } from '@mui/material'
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo'
import { StyledTooltip, StyledIcon } from 'src/layouts/NowPlayingBar/style'

export const PictureInPictureButton = () => {
    return (
        <StyledIcon>
            <StyledTooltip
                title='Picture in picture'
                placement='top'
            >
                <FeaturedVideoIcon fontSize='small' />
            </StyledTooltip>
        </StyledIcon>
    )
}
