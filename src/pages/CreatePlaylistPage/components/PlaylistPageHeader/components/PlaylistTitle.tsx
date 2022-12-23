import { useFontSizeChange } from 'src/hooks/useFontSizeChange'
import { useCreatedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCreatedPlaylist'
import { StyledPlaylistTitle } from 'src/pages/CreatePlaylistPage/style'
import { PlaylistInfoProps } from './PlaylistInfo'

export const PlaylistTitle = ({ handleOpen, onEnterOpen }: PlaylistInfoProps) => {
    const { createdPlaylist } = useCreatedPlaylist()

    const { lengthCheck } = useFontSizeChange()

    return (
        <StyledPlaylistTitle
            sx={!!createdPlaylist ? lengthCheck(createdPlaylist.playlistName) : null}
            onClick={handleOpen}
            onKeyDown={onEnterOpen}
            tabIndex={0}
            data-testid='playlist_title'
        >
            {createdPlaylist?.playlistName}
        </StyledPlaylistTitle>
    )
}
