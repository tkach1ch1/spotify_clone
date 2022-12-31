import { Box } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { ArrowBox, ArrowBoxRight } from 'src/layouts/TopBar/style'
import { useNavigate } from 'react-router-dom'

export const BackAndForwardButtons = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: 'flex', gap: '15px' }}>
            <ArrowBox onClick={() => navigate(-1)}>
                <ArrowBackIosNewIcon sx={{ width: '20px', height: '20px' }} />
            </ArrowBox>

            <ArrowBoxRight onClick={() => navigate(+1)}>
                <ArrowForwardIosIcon sx={{ width: '20px', height: '20px' }} />
            </ArrowBoxRight>
        </Box>
    )
}
