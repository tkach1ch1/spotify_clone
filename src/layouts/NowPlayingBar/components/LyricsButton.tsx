import { useState } from 'react';
import { Box } from '@mui/system';
import { GreenDot, StyledIcon, StyledTooltip } from '../style';
import { theme } from '../../../assets/theme';
import LyricsIcon from '@mui/icons-material/Lyrics';

export const LyricsButton = () => {
  const [lyrics, setLyrics] = useState(false);

  return (
    <Box >
      {lyrics ? (
        <Box sx={{ position: 'relative' }}>
          <StyledIcon
            style={{ color: theme.palette.success.main }}
            onClick={() => setLyrics(false)}
          >
            <StyledTooltip title='Lyrics' placement='top'>
              <LyricsIcon fontSize='small' />
            </StyledTooltip>
          </StyledIcon>
          <GreenDot />
        </Box>
      ) : (
        <StyledIcon onClick={() => setLyrics(true)}>
          <StyledTooltip title='Lyrics' placement='top'>
            <LyricsIcon fontSize='small' />
          </StyledTooltip>
        </StyledIcon>
      )}
    </Box>
  );
};
