import { LikeButton } from 'src/pages/CreatePlaylistPage/components/PlaylistAddedSongs/components/LikeButton'
import { useSongActions } from 'src/pages/CreatePlaylistPage/hooks/useSongActions'

interface SaveToLibraryButtonProps {
    id: string
}

export const SaveToLibraryButton = ({ id }: SaveToLibraryButtonProps) => {
    const {
        openSnackbar,
        alreadyLikedSong,
        onButtonAddToLikedSongs,
        onButtonRemoveFromLikedSongs,
    } = useSongActions(id)
    return (
        <LikeButton
            sx={{ width: '20px', height: '20px' }}
            addTitle='Add to Liked Songs'
            removeTitle='Remove from Liked Songs'
            onButtonAdd={onButtonAddToLikedSongs}
            onButtonRemove={onButtonRemoveFromLikedSongs}
            alreadyAddedByUser={!!alreadyLikedSong}
            openSnackbar={openSnackbar}
        />
    )
}
