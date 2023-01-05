import { SongDescriptionBox } from 'src/layouts/NowPlayingBar/style'
import { Box } from '@mui/material'
import { AlbumImage } from '../SongDescription/components/AlbumImage'
import { SongAndArtistName } from '../SongDescription/components/SongAndArtistName'
import { SaveToLibraryButton } from '../SongDescription/components/SaveToLibraryButton'
import { PictureInPictureButton } from '../SongDescription/components/PictureInPictureButton'

interface SongDescriptionProps {
    image: string
    songName: string
    artistName: string
    albumName: string
    id: string
}

export const SongDescription = ({
    image,
    songName,
    artistName,
    albumName,
    id,
}: SongDescriptionProps) => {
    return (
        <SongDescriptionBox>
            <AlbumImage
                image={image}
                albumName={albumName}
            />
            <SongAndArtistName
                songName={songName}
                artistName={artistName}
            />

            <Box sx={{ display: 'flex', gap: '15px', pl: '20px' }}>
                <SaveToLibraryButton id={id} />
                <PictureInPictureButton />
            </Box>
        </SongDescriptionBox>
    )
}
