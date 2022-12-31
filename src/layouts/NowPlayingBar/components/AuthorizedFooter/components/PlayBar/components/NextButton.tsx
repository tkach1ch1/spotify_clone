import SkipNextIcon from '@mui/icons-material/SkipNext'
import { useAppDispatch } from 'src/hooks/hooks'
import { StyledIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { getNextTrack } from 'src/redux/nowPlayingPlaylistReducer'

export const NextButton = () => {
    const dispatch = useAppDispatch()
    return (
        <StyledIcon onClick={() => dispatch(getNextTrack())}>
            <StyledTooltip
                title='Next'
                placement='top'
            >
                <SkipNextIcon sx={{ width: '30px', height: '30px' }} />
            </StyledTooltip>
        </StyledIcon>
    )
}
