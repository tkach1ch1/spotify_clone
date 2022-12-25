import { useState } from 'react'
import { Box } from '@mui/system'
import { StyledSlider, TimerNumbers } from 'src/layouts/NowPlayingBar/style'
import { useFormatDuration } from 'src/hooks/useFormatDuration'

export const PlaySlider = () => {
    const [position, setPosition] = useState(0)

    const { trackDuration } = useFormatDuration()

    const duration = 200 // seconds

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
                max={duration}
                onChange={(_, value) => setPosition(value as number)}
            />
            <TimerNumbers sx={{ textAlign: 'left' }}>
                {trackDuration(duration - position)}
            </TimerNumbers>
        </Box>
    )
}
