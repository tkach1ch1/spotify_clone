import { Box } from '@mui/system'
import { theme } from 'src/assets/theme'
import { CloseButton } from 'src/pages/CreatePlaylistPage/style'
import CloseIcon from '@mui/icons-material/Close'

interface ModalHeaderProp {
    handleClose: () => void
}

export const ModalHeader = ({ handleClose }: ModalHeaderProp) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '24px' }}>
            <Box
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: theme.palette.primary.main,
                }}
            >
                Edit details
            </Box>
            <CloseButton onClick={handleClose}>
                <CloseIcon />
            </CloseButton>
        </Box>
    )
}
