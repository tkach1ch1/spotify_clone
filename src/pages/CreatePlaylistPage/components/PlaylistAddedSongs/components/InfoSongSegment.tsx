import { Box } from '@mui/system'
import { memo } from 'react'
import { SongLink, SongSegment, StyledSongLink } from 'src/pages/CreatePlaylistPage/style'

interface InfoSongSegmentProps {
    songName: string
    authorName: string
    image: string
    trackInPlayBar?: string
}

export const InfoSongSegment = memo(
    ({ songName, authorName, image, trackInPlayBar }: InfoSongSegmentProps) => {
        return (
            <SongSegment>
                <img
                    src={image}
                    alt={songName}
                    style={{ marginRight: '16px' }}
                    width='40px'
                    height='40px'
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', paddingRight: '8px' }}>
                    <SongLink
                        to=''
                        tabIndex={-1}
                        style={trackInPlayBar ? { color: '#1db954' } : { color: 'inherit' }}
                    >
                        {songName}
                    </SongLink>
                    <StyledSongLink
                        to=''
                        tabIndex={-1}
                    >
                        {authorName}
                    </StyledSongLink>
                </Box>
            </SongSegment>
        )
    }
)
