import { useState } from 'react'
import { Box } from '@mui/system'
import { GreenDot, StyledIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import LyricsIcon from '@mui/icons-material/Lyrics'
import { theme } from 'src/assets/theme'

export const LyricsButton = () => {
    const [lyrics, setLyrics] = useState(false)

    return (
        <>
            {/* {lyrics ? (
                <Box sx={{ position: 'relative' }}>
                    <StyledIcon
                        style={{ color: theme.palette.success.main }}
                        onClick={() => setLyrics(false)}
                    >
                        <StyledTooltip
                            title='Lyrics'
                            placement='top'
                        >
                            <LyricsIcon fontSize='small' />
                        </StyledTooltip>
                    </StyledIcon>
                    <GreenDot />
                </Box>
            ) : ( */}
            <StyledIcon
                onClick={() => setLyrics(true)}
                sx={{ cursor: 'not-allowed' }}
            >
                <StyledTooltip
                    title='Lyrics'
                    placement='top'
                >
                    <LyricsIcon fontSize='small' />
                </StyledTooltip>
            </StyledIcon>
            {/* )} */}
        </>
    )
}
