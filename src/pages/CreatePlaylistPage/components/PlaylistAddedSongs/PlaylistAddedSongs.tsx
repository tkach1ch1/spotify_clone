import { Box } from '@mui/system'
import { GreenPlayButton } from 'src/components/GreenPlayButton'
import { PlayButtonBox } from 'src/pages/CreatePlaylistPage/style'
import { SongsSection } from './components/SongsSection'

export const PlaylistAddedSongs = () => {
    return (
        <Box>
            <PlayButtonBox>
                <GreenPlayButton
                    width='58px'
                    height='58px'
                    tabIndex={0}
                />
            </PlayButtonBox>
            <SongsSection />
        </Box>
    )
}
