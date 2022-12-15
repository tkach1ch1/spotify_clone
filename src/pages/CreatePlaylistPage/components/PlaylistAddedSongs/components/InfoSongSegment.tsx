import { Box } from '@mui/system'
import { SongLink, SongSegment, StyledSongLink } from 'src/pages/CreatePlaylistPage/style'

export const InfoSongSegment = () => {
    return (
        <SongSegment>
            <img
                src='https://i.scdn.co/image/ab67616d000048516922e8b2d9fcd9d115748ba8'
                alt='Song name'
                style={{ marginRight: '16px' }}
                width='40px'
                height='40px'
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingRight: '8px' }}>
                <SongLink
                    to=''
                    tabIndex={-1}
                >
                    SongSong
                </SongLink>
                <StyledSongLink
                    to=''
                    tabIndex={-1}
                >
                    Author
                </StyledSongLink>
            </Box>
        </SongSegment>
    )
}
