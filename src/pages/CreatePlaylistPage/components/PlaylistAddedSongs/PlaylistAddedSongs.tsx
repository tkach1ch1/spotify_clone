import { Box } from '@mui/system'
import { GreenPlayButton } from 'src/components/GreenPlayButton'
import { PlayButtonBox } from 'src/pages/CreatePlaylistPage/style'
import { SongsSection } from './components/SongsSection'
import { useCreatedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCreatedPlaylist'

export const PlaylistAddedSongs = () => {
    const { createdPlaylist } = useCreatedPlaylist()
    return (
        <Box>
            <PlayButtonBox>
                <GreenPlayButton
                    width='58px'
                    height='58px'
                    tabIndex={0}
                />
            </PlayButtonBox>
            <SongsSection
                songsArray={createdPlaylist?.playlistTracks}
                playlistCollab={true}
            />
        </Box>
    )
}
