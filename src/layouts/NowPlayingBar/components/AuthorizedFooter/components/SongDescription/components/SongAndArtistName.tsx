import { Box } from '@mui/system'
import {
    SongAndArtistNameBox,
    StyledArtistName,
    StyledSongName,
} from 'src/layouts/NowPlayingBar/style'

interface SongAndArtistNameProps {
    songName: string
    artistName: string
}

export const SongAndArtistName = ({ songName, artistName }: SongAndArtistNameProps) => {
    return (
        <SongAndArtistNameBox>
            {/* SONG NAME */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <StyledSongName to={''}>{songName}</StyledSongName>
            </Box>

            {/* ARTIST NAME */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <StyledArtistName to={''}>{artistName}</StyledArtistName>
            </Box>
        </SongAndArtistNameBox>
    )
}
