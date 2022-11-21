// import { GreenDot, StyledIcon, StyledTooltip } from '@layouts/NowPlayingBar/style';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import { useState } from 'react';
import { Box } from '@mui/system';
import { theme } from 'src/assets/theme';
import {
  GreenDot,
  StyledIcon,
  StyledTooltip,
} from 'src/layouts/NowPlayingBar/style';

export const RepeatButton = () => {
  const [repeat, setRepeat] = useState(false);
  const [repeatOne, setRepeatOne] = useState(false);

  return (
    <Box>
      {repeat ? (
        <Box sx={{ position: 'relative' }}>
          <StyledIcon
            style={{ color: theme.palette.success.main }}
            onClick={() => {
              setRepeatOne(true);
              setRepeat(false);
            }}
          >
            <StyledTooltip title='Enable repeat one' placement='top'>
              <RepeatIcon fontSize='medium' />
            </StyledTooltip>
          </StyledIcon>
          <GreenDot />
        </Box>
      ) : repeatOne ? (
        <Box sx={{ position: 'relative' }}>
          <StyledIcon
            style={{ color: theme.palette.success.main }}
            onClick={() => setRepeatOne(false)}
          >
            <StyledTooltip title='Disable repeat' placement='top'>
              <RepeatOneIcon fontSize='medium' />
            </StyledTooltip>
          </StyledIcon>
          <GreenDot />
        </Box>
      ) : (
        <StyledIcon onClick={() => setRepeat(true)}>
          <StyledTooltip title='Enable repeat' placement='top'>
            <RepeatIcon fontSize='medium' />
          </StyledTooltip>
        </StyledIcon>
      )}
    </Box>
  );
};
