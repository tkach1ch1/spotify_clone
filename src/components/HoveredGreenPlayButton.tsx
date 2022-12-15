import { GreenPlayButton } from './GreenPlayButton'
import { HoveredGreenPlayButtonBox } from './style'

interface HoveredGreenPlayButtonProps {
    top?: string
    bottom?: string
    right?: string
    left?: string
}

export const HoveredGreenPlayButton = ({
    top,
    bottom,
    right,
    left,
}: HoveredGreenPlayButtonProps) => {
    return (
        <HoveredGreenPlayButtonBox
            id='hoveredGreenButton'
            sx={{
                position: 'absolute',
                bottom: { bottom },
                right: { right },
                top: { top },
                left: { left },
            }}
        >
            <GreenPlayButton
                width='50px'
                height='50px'
            />
        </HoveredGreenPlayButtonBox>
    )
}
