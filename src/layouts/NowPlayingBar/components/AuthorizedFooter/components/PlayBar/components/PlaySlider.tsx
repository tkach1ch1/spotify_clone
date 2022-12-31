import { useState } from 'react'
import { Box } from '@mui/system'
import { StyledSlider, TimerNumbers } from 'src/layouts/NowPlayingBar/style'
import { useFormatDuration } from 'src/hooks/useFormatDuration'

interface PlaylSlider {
    ms_duration: number
}

export const PlaySlider = ({ ms_duration }: PlaylSlider) => {
    const [position, setPosition] = useState(0)

    const { trackDuration } = useFormatDuration()

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '15px',
            }}
        >
            <TimerNumbers sx={{ textAlign: 'right' }}>{trackDuration(position)}</TimerNumbers>
            <StyledSlider
                aria-label='time-indicator'
                size='small'
                value={position}
                min={0}
                step={1}
                max={ms_duration}
                onChange={(_, value) => setPosition(value as number)}
            />
            <TimerNumbers sx={{ textAlign: 'left' }}>
                {trackDuration(ms_duration - position)}
            </TimerNumbers>
        </Box>
    )
}
