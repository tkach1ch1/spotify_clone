import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { StyledIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'

export const PreviousButton = () => {
    return (
        <StyledIcon>
            <StyledTooltip
                title='Previous'
                placement='top'
            >
                <SkipPreviousIcon sx={{ width: '30px', height: '30px' }} />
            </StyledTooltip>
        </StyledIcon>
    )
}
