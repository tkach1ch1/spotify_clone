import { Box } from '@mui/system'
import { useState } from 'react'
import { GreenDot, StyledIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import { theme } from 'src/assets/theme'

export const QueueButton = () => {
    const [queue, setQueue] = useState(false)

    return (
        <Box sx={{ mt: '3px' }}>
            {queue ? (
                <Box sx={{ position: 'relative' }}>
                    <StyledIcon
                        style={{ color: theme.palette.success.main }}
                        onClick={() => setQueue(false)}
                    >
                        <StyledTooltip
                            title='Queue'
                            placement='top'
                        >
                            <QueueMusicIcon fontSize='medium' />
                        </StyledTooltip>
                    </StyledIcon>
                    <GreenDot />
                </Box>
            ) : (
                <StyledIcon onClick={() => setQueue(true)}>
                    <StyledTooltip
                        title='Queue'
                        placement='top'
                    >
                        <QueueMusicIcon fontSize='medium' />
                    </StyledTooltip>
                </StyledIcon>
            )}
        </Box>
    )
}
