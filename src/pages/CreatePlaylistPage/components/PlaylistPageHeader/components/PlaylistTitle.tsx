import { useFontSizeChange } from 'src/hooks/useFontSizeChange'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { StyledPlaylistTitle } from 'src/pages/CreatePlaylistPage/style'
import { PlaylistInfoProps } from './PlaylistInfo'

export const PlaylistTitle = ({ handleOpen, onEnterOpen }: PlaylistInfoProps) => {
    const { addedPlaylist } = useAddedPlaylist()

    const { lengthCheck } = useFontSizeChange()

    return (
        <StyledPlaylistTitle
            sx={addedPlaylist ? lengthCheck(addedPlaylist.playlistName) : null}
            onClick={handleOpen}
            onKeyDown={onEnterOpen}
            tabIndex={0}
            data-testid='playlist_title'
        >
            {addedPlaylist?.playlistName}
        </StyledPlaylistTitle>
    )
}
