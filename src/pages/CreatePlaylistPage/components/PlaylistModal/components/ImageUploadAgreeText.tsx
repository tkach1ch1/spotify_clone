import { Box } from '@mui/material'
import { StyledAgreeText } from 'src/pages/CreatePlaylistPage/style'

export const ImageUploadAgreeText = () => {
    return (
        <Box sx={{ padding: '0 24px' }}>
            <StyledAgreeText>
                By proceeding, you agree to give Spotify access to the image you choose to upload.
                Please make sure you have the right to upload the image.
            </StyledAgreeText>
        </Box>
    )
}
