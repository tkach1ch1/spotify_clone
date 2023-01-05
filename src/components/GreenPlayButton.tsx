import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import React, { memo } from 'react'
import { useAppDispatch } from 'src/hooks/hooks'
import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { addToNowPlayingPlaylist, trackIsPlaying } from 'src/redux/nowPlayingPlaylistReducer'
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

        //Add necessary keys to all playlist tracks
        const updatedPlaylistTracks = [...playlistTracks].map((elem) => ({
            ...elem,
            isPlaying: false,
            file: new Audio(elem.preview_url),
            current_duration: 0,
        }))

        const addPlaylistToNowPlayingPlaylist = (event: React.SyntheticEvent) => {
            event.stopPropagation()
            dispatch(trackIsPlaying(false))
            dispatch(addToNowPlayingPlaylist([]))

            dispatch(addToNowPlayingPlaylist(updatedPlaylistTracks))
            dispatch(trackIsPlaying(true))
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
