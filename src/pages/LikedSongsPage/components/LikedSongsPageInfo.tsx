import { Box } from '@mui/system'
import { useAppSelector } from 'src/hooks/hooks'
import { PlaylistDetailsBox, PlayListInfoBox } from 'src/pages/CreatePlaylistPage/style'
import { LikedSongsPageTitle } from '../style'

export const LikedSongsPageInfo = () => {
    const allLikedSongs = useAppSelector((state) => state.likedSongs.allLikedSongs)

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

            <LikedSongsPageTitle>Liked Songs</LikedSongsPageTitle>

            <PlaylistDetailsBox>
                <Box sx={{ fontWeight: '500' }}>Bogdan Tkach</Box>
                <Box>•</Box>
                <Box>{`${allLikedSongs.length} songs`}</Box>
            </PlaylistDetailsBox>
        </PlayListInfoBox>
    )
}
