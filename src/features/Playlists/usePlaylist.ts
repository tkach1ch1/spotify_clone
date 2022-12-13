import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from 'src/hooks/hooks'
import { addPlaylist } from 'src/redux/allPlaylistsReducer'

export const usePlaylist = () => {
    const allPlaylistsArray = useAppSelector((state) => state.allPlaylists.allPlaylistsArray)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //Create playlist onClick on CreatePlaylistButton in NavBar

    const createPlaylist = () => {
        let newPlaylist = [
            {
                playlistName: 'My Playlist #' + (allPlaylistsArray.length + 1),
                playlistId: nanoid(),
                playlistDescription: '',
            },
        ].concat(allPlaylistsArray)

        dispatch(addPlaylist(newPlaylist))

        navigate('/playlist/' + newPlaylist[0].playlistId)
    }

    return { allPlaylistsArray, createPlaylist }
}

// { array }: createPlaylistProps
