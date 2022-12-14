import ShuffleIcon from '@mui/icons-material/Shuffle'
// import { useState } from 'react'
// import { theme } from 'src/assets/theme'
// import { Box } from '@mui/system'
import { StyledIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'

export const ShuffleButton = () => {
    // const [shuffle, setShuffle] = useState(false)

    return (
        // <Box>
        //     {shuffle ? (
        //         <Box sx={{ position: 'relative' }}>
        //             <StyledIcon
        //                 style={{ color: theme.palette.success.main }}
        //                 onClick={() => setShuffle(false)}
        //             >
        //                 <StyledTooltip
        //                     title='Disable shuffle'
        //                     placement='top'
        //                 >
        //                     <ShuffleIcon fontSize='medium' />
        //                 </StyledTooltip>
        //             </StyledIcon>
        //             <GreenDot />
        //         </Box>
        //     ) : (
        <StyledIcon sx={{ cursor: 'not-allowed' }}>
            <StyledTooltip
                title='Enable shuffle'
                placement='top'
            >
                <ShuffleIcon fontSize='medium' />
            </StyledTooltip>
        </StyledIcon>
        // )}
        // </Box>
    )
}
