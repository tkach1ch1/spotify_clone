import { useState } from 'react'
import { Box } from '@mui/system'
import { StyledSlider, TimerNumbers } from 'src/layouts/NowPlayingBar/style'
import { useTrackDuration } from 'src/hooks/useTrackDuration'

export const PlaySlider = () => {
    const [position, setPosition] = useState(0)

    const { formatDuration } = useTrackDuration()

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
