import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { useDispatch } from 'react-redux'
import { StyledIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { getPrevTrack } from 'src/redux/nowPlayingPlaylistReducer'

export const PreviousButton = () => {
    const dispatch = useDispatch()
    return (
        <StyledIcon onClick={() => dispatch(getPrevTrack())}>
            <StyledTooltip
                title='Previous'
                placement='top'
            >
                <SkipPreviousIcon sx={{ width: '30px', height: '30px' }} />
            </StyledTooltip>
        </StyledIcon>
    )
}
