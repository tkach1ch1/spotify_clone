import { HoveredDefaultImage } from 'src/pages/CreatePlaylistPage/style'
import { FiMusic } from 'react-icons/fi'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import { theme } from 'src/assets/theme'
import { Box } from '@mui/system'

interface DefaultPlaylistImageProps {
    onImageHover: boolean
}
export const DefaultPlaylistImage = ({ onImageHover }: DefaultPlaylistImageProps) => {
    return (
        <>
            {onImageHover ? (
                <HoveredDefaultImage>
                    <CreateOutlinedIcon sx={{ width: '55px', height: '55px' }} />
                    <Box>Choose photo</Box>
                </HoveredDefaultImage>
            ) : (
                <Box sx={{ color: theme.palette.primary.dark }}>
                    <FiMusic
                        style={{
                            width: '60px',
                            height: '60px',
                        }}
                    />
                </Box>
            )}
        </>
    )
}
