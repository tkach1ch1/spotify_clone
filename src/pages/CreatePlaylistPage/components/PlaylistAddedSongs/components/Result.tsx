import { Box } from '@mui/material'
import { theme } from 'src/assets/theme'
import { ArtistImageBox, FoundArtistBox, SongLink } from 'src/pages/CreatePlaylistPage/style'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface ResultArtistProps {
    name: string
    image: string
    subtitle: string
}
export const Result = ({ name, image, subtitle }: ResultArtistProps) => {
    return (
        <FoundArtistBox>
            <Box sx={{ display: 'flex' }}>
                <ArtistImageBox>
                    <img
                        src={image}
                        alt='Artist'
                        style={{ marginRight: '16px', borderRadius: '50%' }}
                        width='40px'
                        height='40px'
                    />
                </ArtistImageBox>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <SongLink to=''>{name}</SongLink>
                    <Box sx={{ fontSize: '0.875rem', color: theme.palette.primary.light }}>
                        {subtitle}
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    marginRight: '10px',
                    marginTop: '4px',
                    [theme.breakpoints.down('sm')]: {
                        marginRight: '35px',
                    },
                }}
            >
                <ArrowForwardIosIcon />
            </Box>
        </FoundArtistBox>
    )
}
