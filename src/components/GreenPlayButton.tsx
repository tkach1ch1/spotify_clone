import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { memo } from 'react'
import { GreenPlayButtonBox } from './style'

interface GreenPlayButtonProps {
    width: string
    height: string
    tabIndex?: number
}

export const GreenPlayButton = memo(({ width, height, tabIndex }: GreenPlayButtonProps) => {
    return (
        <GreenPlayButtonBox
            width={width}
            height={height}
            tabIndex={tabIndex}
        >
            <PlayArrowIcon fontSize='large' />
        </GreenPlayButtonBox>
    )
})
