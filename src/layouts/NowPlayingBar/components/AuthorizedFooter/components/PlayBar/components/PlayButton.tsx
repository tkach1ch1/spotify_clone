import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import { StyledPlayIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { useAppDispatch } from 'src/hooks/hooks'
import { trackIsPlaying } from 'src/redux/nowPlayingPlaylistReducer'
import { useNowPlayingTrack } from '../../../hooks/useNowPlayingTrack'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/system'

interface PlayButtonProps {
    audio: HTMLAudioElement
    isPlaying: boolean
    current_duration: number
}

export const PlayButton = ({ audio, isPlaying, current_duration }: PlayButtonProps) => {
    const dispatch = useAppDispatch()

    const { currentlyPlayingTrack } = useNowPlayingTrack()

    //On Play and Pause button click
    const trackPlay = () => {
        if (!!currentlyPlayingTrack) {
            if (!isPlaying) {
                audio.play()
                dispatch(trackIsPlaying(true))
            }
        }
    }

    const trackPause = () => {
        if (!!currentlyPlayingTrack) {
            if (isPlaying) {
                audio.pause()
                dispatch(trackIsPlaying(false))
            }
        }
    }

    //Play and pause track on whitespace press
    window.onkeydown = (event: KeyboardEvent): any => {
        if (event.key === ' ' && !!currentlyPlayingTrack) {
            event.preventDefault()

            if (audio.paused) {
                audio.play()
                dispatch(trackIsPlaying(true))
            } else if (!audio.paused) {
                audio.pause()
                dispatch(trackIsPlaying(false))
            }
        }
    }

    return (
        <>
            {isPlaying && !audio?.HAVE_ENOUGH_DATA ? (
                <Box
                    sx={{
                        width: '48px',
                        height: '45px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <CircularProgress
                        size={30}
                        sx={{ color: '#1db954' }}
                    />
                </Box>
            ) : isPlaying && audio?.HAVE_ENOUGH_DATA ? (
                <StyledTooltip
                    title={'Pause'}
                    placement='top'
                >
                    <StyledPlayIcon onClick={trackPause}>
                        <PauseCircleIcon sx={{ width: '40px', height: '40px' }} />
                    </StyledPlayIcon>
                </StyledTooltip>
            ) : !isPlaying ? (
                <StyledTooltip
                    title={'Play'}
                    placement='top'
                >
                    <StyledPlayIcon onClick={trackPlay}>
                        <PlayCircleIcon sx={{ width: '40px', height: '40px' }} />
                    </StyledPlayIcon>
                </StyledTooltip>
            ) : null}
        </>
    )
}
