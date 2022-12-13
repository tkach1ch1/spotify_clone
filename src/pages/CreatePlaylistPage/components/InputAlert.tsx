import { AlertText, StyledAlertBox } from '../style'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import { theme } from 'src/assets/theme'

export const InputAlert = () => {
    return (
        <StyledAlertBox>
            <ErrorOutlineOutlinedIcon
                fontSize='small'
                sx={{ color: theme.palette.primary.main }}
            />
            <AlertText>Playlist name is required</AlertText>
        </StyledAlertBox>
    )
}
