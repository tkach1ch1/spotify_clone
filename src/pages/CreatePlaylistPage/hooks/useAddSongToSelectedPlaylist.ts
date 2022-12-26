import { useEffect, useState } from 'react'
import { useFindTrack } from './useFindTrack'
import { useAddedPlaylist } from './useAddedPlaylist'
import { useAppDispatch } from './../../../hooks/hooks'
import { changePlaylistDetails } from 'src/redux/allPlaylistsReducer'

export const useAddSongToSelectedPlaylist = (curTrackId: string, selectElementsArray: any[]) => {
    const dispatch = useAppDispatch()

    //Looking for track on his id
    const { findTrack } = useFindTrack(curTrackId)

    //Sort all self created playlists from all user
    const { allPlaylistsArray } = useAddedPlaylist()
    const allCreatedPlaylists = allPlaylistsArray.filter((elem) => !!elem.playlistCollab)

    const [open, setOpen] = useState(false)

    const addSongsToSelectedPlaylist = (id: string) => {
        //Find clicked playlist in Select
        const clickedPlaylist = selectElementsArray.find((elem) => elem.id === id)
        //Find playlist in all created playlists
        const findPlaylist = allCreatedPlaylists.find(
            (elem) => elem.playlistId === clickedPlaylist?.id
        )
        //Update playlist
        const changedCurrentPlaylist = {
            ...findPlaylist,
            playlistTracks: findPlaylist && [...findPlaylist.playlistTracks, findTrack],
        }
        //Send it to all playlists
        dispatch(changePlaylistDetails(changedCurrentPlaylist))
    }

    useEffect(() => {
        setOpen(true)
        setTimeout(() => {
            try {
                setOpen(false)
            } catch (error) {
                console.log(error)
            }
        }, 2000)
    }, [])

    return { addSongsToSelectedPlaylist, open }
}
