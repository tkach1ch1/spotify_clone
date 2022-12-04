import { PlaylistImageBox } from '../style';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Box } from '@mui/system';
import { useState } from 'react';
import { theme } from 'src/assets/theme';

interface PlaylistImageProps {
  handleOpen: () => void;
}

export const PlaylistImage = ({ handleOpen }: PlaylistImageProps) => {
  const [onImageHover, setOnImageHover] = useState(false);

  return (
    <PlaylistImageBox
      onMouseEnter={() => setOnImageHover(true)}
      onMouseLeave={() => setOnImageHover(false)}
      tabIndex={0}
      zIndex={10}
      onClick={handleOpen}
    >
      {onImageHover ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'default',
          }}
        >
          <CreateOutlinedIcon sx={{ width: '55px', height: '55px' }} />
          <Box>Choose photo</Box>
        </Box>
      ) : (
        <Box
          sx={{ transform: 'rotate(5deg)', color: theme.palette.primary.dark }}
        >
          <MusicNoteIcon
            sx={{
              width: '55px',
              height: '55px',
            }}
          />
        </Box>
      )}
    </PlaylistImageBox>
  );
};
