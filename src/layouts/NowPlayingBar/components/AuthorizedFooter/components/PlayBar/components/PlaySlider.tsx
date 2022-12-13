import { useState } from 'react'
import { Box } from '@mui/system'
import { StyledSlider, TimerNumbers } from 'src/layouts/NowPlayingBar/style'

export const PlaySlider = () => {
    const [position, setPosition] = useState(0)

    const duration = 200 // seconds

    function formatDuration(value: number) {
        const minute = Math.floor(value / 60)
        const secondLeft = value - minute * 60
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '15px',
            }}
        >
            <TimerNumbers sx={{ textAlign: 'right' }}>{formatDuration(position)}</TimerNumbers>
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
                {formatDuration(duration - position)}
            </TimerNumbers>
        </Box>
    )
}
