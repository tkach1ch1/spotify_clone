import { Box } from '@mui/system';
import { useState } from 'react';
import { StyledIcon, StyledTooltip } from '../style';
import PhonelinkIcon from '@mui/icons-material/Phonelink';

export const ConnectToDeviceButton = () => {
  const [connect, setConnect] = useState(false);

  return (
    <Box sx={{mb: '2px'}}>
      <StyledIcon onClick={() => setConnect(true)}>
        <StyledTooltip title='Connect to a device' placement='top'>
          <PhonelinkIcon fontSize='small' />
        </StyledTooltip>
      </StyledIcon>
    </Box>
  );
};
