import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { GreenPlayButtonBox } from './style'

interface GreenPlayButtonProps {
    width: string
    height: string
}

export const GreenPlayButton = ({ width, height }: GreenPlayButtonProps) => {
    return (
        <GreenPlayButtonBox
            width={width}
            height={height}
        >
            <PlayArrowIcon fontSize='large' />
        </GreenPlayButtonBox>
    )
}
