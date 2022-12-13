import SkipNextIcon from '@mui/icons-material/SkipNext'
import { StyledIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'

export const NextButton = () => {
    return (
        <StyledIcon>
            <StyledTooltip
                title='Next'
                placement='top'
            >
                <SkipNextIcon sx={{ width: '30px', height: '30px' }} />
            </StyledTooltip>
        </StyledIcon>
    )
}
