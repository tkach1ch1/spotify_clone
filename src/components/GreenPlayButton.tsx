import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import React, { memo } from 'react'
import { useAppDispatch } from 'src/hooks/hooks'
import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { addToNowPlayingPlaylist } from 'src/redux/nowPlayingPlaylistReducer'
import { GreenPlayButtonBox } from './style'

interface GreenPlayButtonProps {
    width: string
    height: string
    tabIndex?: number
    playlistTracks: AllPlaylistTracksElements[]
}

export const GreenPlayButton = memo(
    ({ width, height, tabIndex, playlistTracks }: GreenPlayButtonProps) => {
        const dispatch = useAppDispatch()

        const addPlaylistToNowPlayingPlaylist = (event: React.SyntheticEvent) => {
            event.stopPropagation()
            dispatch(addToNowPlayingPlaylist(playlistTracks))
        }

        return (
            <GreenPlayButtonBox
                width={width}
                height={height}
                tabIndex={tabIndex}
                onClick={addPlaylistToNowPlayingPlaylist}
            >
                <PlayArrowIcon fontSize='large' />
            </GreenPlayButtonBox>
        )
    }
)
