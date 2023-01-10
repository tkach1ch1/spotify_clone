import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import React, { memo } from 'react'
import { useAppDispatch } from 'src/hooks/hooks'
import { useNowPlayingTrack } from 'src/layouts/NowPlayingBar/components/AuthorizedFooter/hooks/useNowPlayingTrack'
import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { addToNowPlayingPlaylist, trackIsPlaying } from 'src/redux/nowPlayingPlaylistReducer'
import { GreenPlayButtonBox } from './style'

interface GreenPlayButtonProps {
    width: string
    height: string
    tabIndex?: number
    playlistTracks?: AllPlaylistTracksElements[]
    playlistId: string
}

export const GreenPlayButton = memo(
    ({ width, height, tabIndex, playlistTracks, playlistId }: GreenPlayButtonProps) => {
        const dispatch = useAppDispatch()

        const { audio } = useNowPlayingTrack()

        const addPlaylistToNowPlayingPlaylist = (event: React.SyntheticEvent) => {
            event.stopPropagation()
            //Add necessary keys to all playlist tracks
            const updatedPlaylistTracks =
                playlistTracks &&
                [...playlistTracks].map((elem) => ({
                    ...elem,
                    isPlaying: false,
                    file: new Audio(elem?.preview_url),
                    current_duration: 0,
                }))

            if (audio) {
                audio.pause()
                audio.currentTime = 0

                dispatch(addToNowPlayingPlaylist(updatedPlaylistTracks))
                dispatch(trackIsPlaying(true))
            } else if (!audio) {
                dispatch(addToNowPlayingPlaylist(updatedPlaylistTracks))
                dispatch(trackIsPlaying(true))
            }
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
