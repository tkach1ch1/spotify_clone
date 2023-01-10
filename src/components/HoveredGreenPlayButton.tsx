import { memo } from 'react'
import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { GreenPlayButton } from './GreenPlayButton'
import { HoveredGreenPlayButtonBox } from './style'

interface HoveredGreenPlayButtonProps {
    top?: string
    bottom?: string
    right?: string
    left?: string
    playlistId: string
    playlistTracks: AllPlaylistTracksElements[]
}

export const HoveredGreenPlayButton = memo(
    ({ top, bottom, right, left, playlistId, playlistTracks }: HoveredGreenPlayButtonProps) => {
        return (
            <>
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
                        playlistTracks={playlistTracks}
                    />
                </HoveredGreenPlayButtonBox>
            </>
        )
    }
)
