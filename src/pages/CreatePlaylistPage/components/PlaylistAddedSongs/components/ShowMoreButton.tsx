import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { StyledShowMoreBox } from 'src/pages/CreatePlaylistPage/style'

export const ShowMoreButton = () => {
    return (
        <StyledTooltip
            title='Show more options'
            placement='top'
            enterDelay={500}
        >
            <StyledShowMoreBox>
                <MoreHorizIcon sx={{ width: '20px', height: '20px' }} />
            </StyledShowMoreBox>
        </StyledTooltip>
    )
}
