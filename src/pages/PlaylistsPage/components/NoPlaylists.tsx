import { NoPlaylistBox, NoPlaylistsH1, NoPlaylistsSubtitle, StyledNoPlaylistsIcon } from '../style'
import { usePlaylist } from 'src/features/Playlists/usePlaylist'
import { WhiteButton } from 'src/components/WhiteButton'

export const NoPlaylists = () => {
    const { createPlaylist } = usePlaylist()

    return (
        <NoPlaylistBox>
            <StyledNoPlaylistsIcon />
            <NoPlaylistsH1>Create your first playlist</NoPlaylistsH1>
            <NoPlaylistsSubtitle>It's easy, we will help you</NoPlaylistsSubtitle>
            <WhiteButton onButtonAction={createPlaylist}>Create playlist</WhiteButton>
        </NoPlaylistBox>
    )
}
