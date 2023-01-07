import { Box } from '@mui/system'
import { StyledSlider, TimerNumbers } from 'src/layouts/NowPlayingBar/style'
import { useFormatDuration } from 'src/hooks/useFormatDuration'
import { useAppDispatch } from 'src/hooks/hooks'
import { trackCurrentDuration } from 'src/redux/nowPlayingPlaylistReducer'

interface PlaylSlider {
    ms_duration: number
    current_duration: number
}

export const PlaySlider = ({ ms_duration, current_duration }: PlaylSlider) => {
    const { trackDuration } = useFormatDuration()

    const dispatch = useAppDispatch()

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
                    dispatch(trackCurrentDuration(value))
                }}
            />
            <TimerNumbers sx={{ textAlign: 'left' }}>
                {trackDuration(ms_duration - current_duration)}
            </TimerNumbers>
        </Box>
    )
}
