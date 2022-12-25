import { useLocation } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/hooks'

export const useAddedPlaylist = () => {
    //Looking for certain playlist
    const allPlaylistsArray = useAppSelector((state) => state.allPlaylists.allPlaylistsArray)

    const location = useLocation()

    const addedPlaylist = allPlaylistsArray.find(
        (elem) => `/playlist/${elem.playlistId}` === location.pathname
    )

    //--//
    return { addedPlaylist, allPlaylistsArray }
}
