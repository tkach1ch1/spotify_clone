import { Box } from '@mui/system'
import { ThreeDots } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <Box sx={{ position: 'absolute', top: '45%', left: '45%' }}>
            <ThreeDots
                height='80'
                width='80'
                radius='9'
                color='#B3B3B3'
                ariaLabel='three-dots-loading'
                visible={true}
            />
        </Box>
    )
}
