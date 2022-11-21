import { Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowBox } from 'src/layouts/TopBar/style';

export const BackAndForwardButtons = () => {
  return (
    <Box sx={{ display: 'flex', gap: '15px' }}>
      <ArrowBox>
        <ArrowBackIosNewIcon sx={{ width: '20px', height: '20px' }} />
      </ArrowBox>
      <ArrowBox>
        <ArrowForwardIosIcon sx={{ width: '20px', height: '20px' }} />
      </ArrowBox>
    </Box>
  );
};
