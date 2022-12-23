import { Box } from '@mui/material'
import { GreenPlayButton } from 'src/components/GreenPlayButton'
import { PlayButtonBox, PlaylistLikeButton } from 'src/pages/CreatePlaylistPage/style'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { SongsSection } from './SongsSection'
import { usePlaylistTracks } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'

export const UneditablePlaylistSongs = () => {
    const { allPlaylistTracks } = usePlaylistTracks()
    return (
        <Box>
            <PlayButtonBox>
                <GreenPlayButton
                    width='58px'
                    height='58px'
                    tabIndex={0}
                />
                <StyledTooltip
                    title='Save to Your Library'
                    placement='top'
                    enterDelay={500}
                >
                    <PlaylistLikeButton>
                        <FavoriteBorderIcon sx={{ width: '40px', height: '40px' }} />
                    </PlaylistLikeButton>
                </StyledTooltip>
            </PlayButtonBox>

            <SongsSection
                songsArray={allPlaylistTracks}
                playlistCollab={false}
            />
        </Box>
    )
}
