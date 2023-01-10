import { Box } from '@mui/system'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { theme } from 'src/assets/theme'
import { HoveredGreenPlayButton } from 'src/components/HoveredGreenPlayButton'
import { useAppSelector } from 'src/hooks/hooks'
import {
    InnerLikedSongsBox,
    LikedSongsBox,
    LikedSongsCount,
    LikedSongsList,
    LikedSongsListBox,
    LikedSongsTitle,
    LikedSongsTitleBox,
} from 'src/pages/PlaylistsPage/style'

export const LikedSongs = () => {
    const allLikedSongs = useAppSelector((state) => state.likedSongs.allLikedSongs)

    const navigate = useNavigate()

    const onEnterToLikedSongsPageNavigate = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            navigate('/collection/tracks')
        }
    }
    return (
        <LikedSongsBox
            onClick={() => navigate('/collection/tracks')}
            onKeyDown={onEnterToLikedSongsPageNavigate}
            tabIndex={0}
        >
            <InnerLikedSongsBox>
                <LikedSongsListBox>
                    <LikedSongsList>
                        {allLikedSongs.map((elem) => (
                            <Box
                                sx={{ color: theme.palette.primary.main }}
                                key={nanoid()}
                            >
                                <span>{`${elem.name} `}</span>
                                <span style={{ opacity: '0.7' }}>{elem.album.name}</span>
                                <span>•</span>
                            </Box>
                        ))}
                    </LikedSongsList>
                </LikedSongsListBox>

                <LikedSongsTitleBox>
                    <LikedSongsTitle>Liked Songs</LikedSongsTitle>
                    <LikedSongsCount>{`${allLikedSongs.length} songs liked`}</LikedSongsCount>
                </LikedSongsTitleBox>
                <HoveredGreenPlayButton
                    bottom='20px'
                    right='20px'
                    playlistTracks={allLikedSongs}
                    playlistId=''
                />
            </InnerLikedSongsBox>
        </LikedSongsBox>
    )
}
