import { useAppSelector } from './../../../hooks/hooks'
import { useFindTrack } from '../../../hooks/useFindTrack'
import { useOnButtonAddRemove } from './../../../hooks/useOnButtonAddRemove'

export const useSongActions = (curTrackId: string) => {
    //Check if song is already in likedSongs to change heart button color

    const allSongsArray = useAppSelector((state) => state.likedSongs.allLikedSongs)
    const alreadyLikedSong = allSongsArray.find((elem) => elem.id === curTrackId)

    //--//

    const { openSnackbar, onButtonAddSong, onButtonRemoveSong } = useOnButtonAddRemove()

    //Looking for track on his id
    const { findTrack } = useFindTrack(curTrackId)

    const onButtonAddToLikedSongs = () => {
        findTrack && onButtonAddSong(findTrack)
    }

    const onButtonRemoveFromLikedSongs = () => {
        alreadyLikedSong && onButtonRemoveSong(alreadyLikedSong)
    }

    return { openSnackbar, alreadyLikedSong, onButtonAddToLikedSongs, onButtonRemoveFromLikedSongs }
}
