import { Box } from '@mui/system'
import { PlaylistElementProps } from 'src/assets/types/types'
import { useFontSizeChange } from 'src/hooks/useFontSizeChange'
import {
    PlaylistDescriptionBox,
    PlayListInfoBox,
    StyledPlaylistTitle,
    PlaylistDetailsBox,
} from 'src/pages/CreatePlaylistPage/style'
import { theme } from 'src/assets/theme'

interface UneditablePlaylistInfoProps {
    playlistInfo: PlaylistElementProps
}

export const UneditablePlaylistInfo = ({ playlistInfo }: UneditablePlaylistInfoProps) => {
    const { lengthCheck } = useFontSizeChange()
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

            {/* Playlist name */}

            <StyledPlaylistTitle
                sx={!!playlistInfo ? lengthCheck(playlistInfo.playlistName) : null}
                data-testid='playlist_title'
                style={{ cursor: 'initial' }}
            >
                {playlistInfo.playlistName}
            </StyledPlaylistTitle>

            {/* Playlist description  */}

            <PlaylistDescriptionBox style={{ cursor: 'initial' }}>
                <Box>{playlistInfo.playlistDescription}</Box>
            </PlaylistDescriptionBox>

            {/* Playlist owner, tracks amount and there duration */}

            <PlaylistDetailsBox>
                <Box sx={{ fontWeight: '500' }}>{playlistInfo.playlistOwnerName}</Box>
                <Box>•</Box>
                <Box>50 songs, </Box>
                <Box sx={{ color: theme.palette.primary.light }}>2 hr 51 min</Box>
            </PlaylistDetailsBox>
        </PlayListInfoBox>
    )
}
