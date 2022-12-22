import { HoveredDefaultImage } from 'src/pages/CreatePlaylistPage/style'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import { Box } from '@mui/system'

export const HoveredPlaylistImage = () => {
    return (
        <>
            <HoveredDefaultImage>
                <CreateOutlinedIcon sx={{ width: '55px', height: '55px' }} />
                <Box>Choose photo</Box>
            </HoveredDefaultImage>
        </>
    )
}
