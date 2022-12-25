import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from 'src/hooks/hooks'
import { addPlaylist } from 'src/redux/allPlaylistsReducer'

export const usePlaylist = () => {
    const allPlaylistsArray = useAppSelector((state) => state.allPlaylists.allPlaylistsArray)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //Create playlist onClick on CreatePlaylistButton in NavBar and add him to allPlaylistsArray
    const createPlaylist = () => {
        let newPlaylist = {
            playlistName: 'My Playlist #' + (allPlaylistsArray.length + 1),
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
    }

    const onEnterCreatePlaylist = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            createPlaylist()
        }
    }

    return { allPlaylistsArray, createPlaylist, onEnterCreatePlaylist }
}
