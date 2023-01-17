import { Box } from '@mui/system'
import { StyledSlider, TimerNumbers } from 'src/layouts/NowPlayingBar/style'
import { useFormatDuration } from 'src/hooks/useFormatDuration'
import { useAppDispatch } from 'src/hooks/hooks'
import { useEffect } from 'react'
import { trackCurrentDuration } from 'src/redux/nowPlayingPlaylistReducer'
import { useNextAndPrevTrack } from '../../../hooks/useNextAndPrevTrack'

interface PlaylSlider {
    ms_duration: number
    current_duration: number
    audio: HTMLAudioElement
}

export const PlaySlider = ({ ms_duration, current_duration, audio }: PlaylSlider) => {
    const { trackDuration } = useFormatDuration()

    const { getNextTrack } = useNextAndPrevTrack()

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (audio) {
            audio.ontimeupdate = () => {
                if (audio.currentTime) {
                    dispatch(trackCurrentDuration(audio.currentTime * 1000))
                    if (audio.ended) {
                        getNextTrack(audio)
                    }
                }
            }
        }
    }, [audio, current_duration, dispatch, getNextTrack])

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '15px',
            }}
        >
            <TimerNumbers sx={{ textAlign: 'right' }}>
                {trackDuration(current_duration)}
            </TimerNumbers>
            <StyledSlider
                aria-label='time-indicator'
                size='small'
                value={current_duration}
                min={0}
                step={1}
                max={ms_duration}
                onChange={(_, value) => {
                    dispatch(trackCurrentDuration(value as number))
                }}
            />
            <TimerNumbers sx={{ textAlign: 'left' }}>
                {trackDuration(ms_duration - current_duration)}
            </TimerNumbers>
        </Box>
    )
}
