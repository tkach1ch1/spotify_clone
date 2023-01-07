import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo'
import { StyledTooltip, StyledIcon } from 'src/layouts/NowPlayingBar/style'

export const PictureInPictureButton = () => {
    return (
        <StyledIcon sx={{ cursor: 'not-allowed' }}>
            <StyledTooltip
                title='Picture in picture'
                placement='top'
            >
                <FeaturedVideoIcon fontSize='small' />
            </StyledTooltip>
        </StyledIcon>
    )
}
