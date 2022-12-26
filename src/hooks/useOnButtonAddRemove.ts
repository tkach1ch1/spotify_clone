import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { useNavigate } from 'react-router-dom'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { PlaylistElementProps } from 'src/assets/types/types'
import { removePlaylist, addPlaylist } from 'src/redux/allPlaylistsReducer'
import { useAppDispatch } from 'src/hooks/hooks'
import { useState } from 'react'
import { addSongToLikedSongs, removeSongFromLikedSongs } from 'src/redux/likedSongsReducer'

export const useOnButtonAddRemove = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { allPlaylistsArray } = useAddedPlaylist()

    const onButtonAddPlaylist = (playlist: PlaylistElementProps) => {
        if (playlist) {
            setOpenSnackbar(true)
            dispatch(addPlaylist(playlist))

            setTimeout(() => {
                try {
                    setOpenSnackbar(false)
                } catch (error) {
                    console.log(error)
                }
            }, 2000)
        }
    }

    const onButtonRemovePlaylist = (playlist: PlaylistElementProps) => {
        if (playlist) {
            setOpenSnackbar(true)
            dispatch(removePlaylist(playlist))

            //Find cur playlist index in all playlists list
            const playlistIndex =
                playlist &&
                allPlaylistsArray.findIndex((elem) => elem.playlistId === playlist.playlistId)

            //Find previous and next playlist to navigate there if cur playlist will be removed
            const prevPlaylist = allPlaylistsArray[playlistIndex - 1]
            const nextPlaylist = allPlaylistsArray[playlistIndex + 1]

            if (playlist.playlistCollab === true && !!prevPlaylist) {
                navigate(`/playlist/${prevPlaylist.playlistId}`)
            } else if (playlist.playlistCollab === true && !prevPlaylist && nextPlaylist) {
                navigate(`/playlist/${nextPlaylist.playlistId}`)
            } else if (playlist.playlistCollab === false) {
                navigate(`/playlist/${playlist.playlistId}`)
            } else if (!prevPlaylist && !nextPlaylist) {
                navigate(`/collection/playlists`)
            }

            setTimeout(() => {
                try {
                    setOpenSnackbar(false)
                } catch (error) {
                    console.log(error)
                }
            }, 2000)
        }
    }

    const onButtonAddSong = (song: AllPlaylistTracksElements) => {
        if (song) {
            setOpenSnackbar(true)
            dispatch(addSongToLikedSongs(song))

            setTimeout(() => {
                try {
                    setOpenSnackbar(false)
                } catch (error) {
                    console.log(error)
                }
            }, 2000)
        }
    }

    const onButtonRemoveSong = (song: AllPlaylistTracksElements) => {
        if (!!song) {
            setOpenSnackbar(true)
            dispatch(removeSongFromLikedSongs(song))

            setTimeout(() => {
                try {
                    setOpenSnackbar(false)
                } catch (error) {
                    console.log(error)
                }
            }, 2000)
        }
    }

    return {
        openSnackbar,
        onButtonAddPlaylist,
        onButtonRemovePlaylist,
        onButtonAddSong,
        onButtonRemoveSong,
    }
}
