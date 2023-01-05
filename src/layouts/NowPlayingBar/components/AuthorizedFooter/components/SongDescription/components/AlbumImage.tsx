import { Box } from '@mui/system'
import { useAppSelector } from 'src/hooks/hooks'
import { FiMusic } from 'react-icons/fi'
import { theme } from 'src/assets/theme'
import { DefaultNowPlayingSongBox } from 'src/layouts/NowPlayingBar/style'

interface AlbumImageProps {
    image: string
    albumName: string
}

export const AlbumImage = ({ image, albumName }: AlbumImageProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {image ? (
                <img
                    style={{ width: '56px', height: '56px' }}
                    src={image}
                    alt={albumName}
                />
            ) : (
                <DefaultNowPlayingSongBox>
                    <FiMusic style={{ width: '23px', height: '23px' }} />
                </DefaultNowPlayingSongBox>
            )}
        </Box>
    )
}
