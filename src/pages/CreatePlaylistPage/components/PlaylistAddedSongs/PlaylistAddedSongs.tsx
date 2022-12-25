import { Box } from '@mui/system'
import { GreenPlayButton } from 'src/components/GreenPlayButton'
import { PlayButtonBox } from 'src/pages/CreatePlaylistPage/style'
import { SongsSection } from './components/SongsSection'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { MoreOptionsButton } from './components/MoreOptionsButton'

export const PlaylistAddedSongs = () => {
    const { addedPlaylist } = useAddedPlaylist()
    return (
        <Box>
            <PlayButtonBox>
                {addedPlaylist?.playlistTracks.length ? (
                    <GreenPlayButton
                        width='58px'
                        height='58px'
                        tabIndex={0}
                    />
                ) : null}

                <MoreOptionsButton />
            </PlayButtonBox>
            <SongsSection
                songsArray={addedPlaylist?.playlistTracks}
                playlistCollab={true}
            />
        </Box>
    )
}
