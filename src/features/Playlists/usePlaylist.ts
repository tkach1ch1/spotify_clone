import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from 'src/hooks/hooks'
import { addPlaylist } from 'src/redux/allPlaylistsReducer'

export const usePlaylist = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const allPlaylistsArray = useAppSelector((state) => state.allPlaylists.allPlaylistsArray)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //Taking only user created playlists
    //to give next created playlistName number based only on user created playlists length
    //not on allPlaylistsArray length
    const allUserCreatedPlaylists = allPlaylistsArray.filter((elem) => !!elem.playlistCollab)

    //Create playlist onClick on CreatePlaylistButton in NavBar and add him to allPlaylistsArray
    const createPlaylist = () => {
        setOpenSnackbar(true)
        let newPlaylist = {
            playlistName: 'My Playlist #' + (allUserCreatedPlaylists.length + 1),
            playlistId: nanoid(),
            playlistDescription: '',
            playlistImage: '',
            playlistTracks: [],
            playlistCollab: true,
            playlistOwnerName: '',
            playlistOwnerId: '',
        }

        dispatch(addPlaylist(newPlaylist))

        navigate(`/playlist/${newPlaylist.playlistId}`)

        setTimeout(() => {
            setOpenSnackbar(false)
        }, 2000)
    }

    const onEnterCreatePlaylist = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setOpenSnackbar(true)

            createPlaylist()
            setTimeout(() => {
                setOpenSnackbar(false)
            }, 2000)
        }
    }

    return { allPlaylistsArray, createPlaylist, onEnterCreatePlaylist, openSnackbar }
}
