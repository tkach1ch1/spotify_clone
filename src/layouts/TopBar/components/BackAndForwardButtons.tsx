import { Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowBox, ArrowBoxRight } from 'src/layouts/TopBar/style';

export const BackAndForwardButtons = () => {
  return (
    <Box sx={{ display: 'flex', gap: '15px' }}>
      <ArrowBox>
        <ArrowBackIosNewIcon sx={{ width: '20px', height: '20px' }} />
      </ArrowBox>
      <ArrowBoxRight>
        <ArrowForwardIosIcon sx={{ width: '20px', height: '20px' }} />
      </ArrowBoxRight>
    </Box>
  );
};
