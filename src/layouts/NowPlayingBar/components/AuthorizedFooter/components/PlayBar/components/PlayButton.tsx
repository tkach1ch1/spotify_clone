import { useState } from 'react';
import { Box } from '@mui/system';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { StyledPlayIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style';

export const PlayButton = () => {
  const [play, setPlay] = useState(false);

  return (
    <Box>
      {play ? (
        <StyledPlayIcon onClick={() => setPlay(false)}>
          <StyledTooltip title='Play' placement='top'>
            <PauseCircleIcon sx={{ width: '40px', height: '40px' }} />
          </StyledTooltip>
        </StyledPlayIcon>
      ) : (
        <StyledPlayIcon onClick={() => setPlay(true)}>
          <StyledTooltip title='Play' placement='top'>
            <PlayCircleIcon sx={{ width: '40px', height: '40px' }} />
          </StyledTooltip>
        </StyledPlayIcon>
      )}
    </Box>
  );
};
