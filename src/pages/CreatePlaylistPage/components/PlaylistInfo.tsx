import {
    PlaylistDescription,
    PlaylistDescriptionBox,
    PlayListInfoBox,
    PlaylistTitle,
} from '../style'
import { Box } from '@mui/system'
import { useCurrentPlaylist } from '../hooks/useCurrentPlaylist'

interface PlaylistInfoProps {
    handleOpen: () => void
}

export const PlaylistInfo = ({ handleOpen }: PlaylistInfoProps) => {
    const { currentPlaylist } = useCurrentPlaylist()
    return (
        <PlayListInfoBox>
            <Box
                sx={{
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    fontWeight: '500',
                }}
            >
                Playlist
            </Box>
            <PlaylistTitle onClick={handleOpen}>{currentPlaylist?.playlistName}</PlaylistTitle>
            <PlaylistDescriptionBox>
                {!!currentPlaylist?.playlistDescription ? (
                    <PlaylistDescription onClick={handleOpen}>
                        {currentPlaylist?.playlistDescription}
                    </PlaylistDescription>
                ) : null}
            </PlaylistDescriptionBox>
            <Box sx={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Bogdan Tkach</Box>
        </PlayListInfoBox>
    )
}
