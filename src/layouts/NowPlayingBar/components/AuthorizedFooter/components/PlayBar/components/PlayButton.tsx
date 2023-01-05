import { useEffect } from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import { StyledPlayIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { useAppDispatch } from 'src/hooks/hooks'
import { trackCurrentDuration, trackIsPlaying } from 'src/redux/nowPlayingPlaylistReducer'
import { useNextAndPrevTrack } from 'src/layouts/NowPlayingBar/components/AuthorizedFooter/hooks/useNextAndPrevTrack'

interface PlayButtonProps {
    audio: HTMLAudioElement
    isPlaying: boolean
    current_duration: number
}

export const PlayButton = ({ audio, isPlaying, current_duration }: PlayButtonProps) => {
    const dispatch = useAppDispatch()

    const { getNextTrack } = useNextAndPrevTrack()

    //Updating currentTrackTime on every audio update
    //When track ended turn next track on
    audio.ontimeupdate = () => {
        dispatch(trackCurrentDuration(audio.currentTime * 1000))
        if (audio.ended) {
            getNextTrack(audio)
        }
    }

    // Change currentTrackTime on PlaySlider pull
    useEffect(() => {
        if (current_duration !== audio.currentTime * 1000) {
            audio.currentTime = current_duration / 1000
        }
    }, [current_duration, audio])

    // Automatically play newly added track to NowPlaylingBar
    // and pause him if another track was chosen
    useEffect(() => {
        if (isPlaying) {
            audio.currentTime = 0
            dispatch(trackCurrentDuration(audio.currentTime * 0))

            audio.play()
        } else if (!isPlaying) {
            audio.pause()
        }
    }, [isPlaying, audio])

    //On Play and Pause button click
    const trackPlay = () => {
        if (audio.paused) {
            audio.play()
            dispatch(trackIsPlaying(true))
        }
    }

    const trackPause = () => {
        if (!audio.paused) {
            audio.pause()
            dispatch(trackIsPlaying(false))
        }
    }

    //Play and pause track on whitespace press
    window.onkeydown = (event: KeyboardEvent): any => {
        if (event.key === ' ') {
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
            {isPlaying ? (
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
