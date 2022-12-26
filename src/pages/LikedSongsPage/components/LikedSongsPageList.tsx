import { Box } from '@mui/material'
import { GreenPlayButton } from 'src/components/GreenPlayButton'
import { useAppSelector } from 'src/hooks/hooks'
import { SongsList } from 'src/pages/CreatePlaylistPage/components/PlaylistAddedSongs/components/SongsList'
import { SongsListHeader } from 'src/pages/CreatePlaylistPage/components/PlaylistAddedSongs/components/SongsListHeader'
import { PlayButtonBox, StyledSongsBox } from 'src/pages/CreatePlaylistPage/style'

export const LikedSongsPageList = () => {
    const allLikedSongs = useAppSelector((state) => state.likedSongs.allLikedSongs)
    return (
        <>
            <Box>
                <PlayButtonBox>
                    <GreenPlayButton
                        width='58px'
                        height='58px'
                        tabIndex={0}
                    />
                </PlayButtonBox>
            </Box>

            <StyledSongsBox tabIndex={0}>
                <SongsListHeader />

                <SongsList songsArray={allLikedSongs} />
            </StyledSongsBox>
        </>
    )
}
