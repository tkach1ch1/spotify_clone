import { Box } from '@mui/material'
import { useState } from 'react'
import { StyledIcon, StyledSlider, StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'

export const SoundBar = () => {
    const [mute, setMute] = useState(false)
    const [soundVolume, setSoundVolume] = useState(100)

    return (
        <Box
            sx={{
                display: 'flex',
                mb: '2px',
                justifyContent: 'space-between',
                gap: '10px',
            }}
        >
            <Box sx={{ mt: '5px' }}>
                {mute || soundVolume === 0 ? (
                    <StyledIcon onClick={() => setMute(false)}>
                        <StyledTooltip
                            title='Unmute'
                            placement='top'
                        >
                            <VolumeOffIcon fontSize='small' />
                        </StyledTooltip>
                    </StyledIcon>
                ) : (
                    <StyledIcon onClick={() => setMute(true)}>
                        <StyledTooltip
                            title='Mute'
                            placement='top'
                        >
                            <VolumeUpIcon fontSize='small' />
                        </StyledTooltip>
                    </StyledIcon>
                )}
            </Box>
            <Box sx={{ width: '93px' }}>
                <StyledSlider
                    aria-label='Volume'
                    size='small'
                    value={mute ? 0 : soundVolume}
                    onChange={(_, value) => setSoundVolume(value as number)}
                />
            </Box>
        </Box>
    )
}
