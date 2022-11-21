import { Box } from '@mui/system';
import { PlayBarBox } from 'src/layouts/NowPlayingBar/style';
import { ShuffleButton } from './components/ShuffleButton';
import { PreviousButton } from './components/PreviousButton';
import { PlayButton } from './components/PlayButton';
import { NextButton } from './components/NextButton';
import { RepeatButton } from './components/RepeatButton';
import { PlaySlider } from './components/PlaySlider';

export const PlayBar = () => {
  return (
    <PlayBarBox>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <ShuffleButton />
        <PreviousButton />
        <PlayButton />
        <NextButton />
        <RepeatButton />
      </Box>
      <Box>
        <PlaySlider />
      </Box>
    </PlayBarBox>
  );
};
