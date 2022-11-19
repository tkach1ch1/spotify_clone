import { Box } from '@mui/system';
import { PlayBarBox } from '../style';

import { ShuffleButton } from './ShuffleButton';
import { PreviousButton } from './PreviousButton';
import { PlayButton } from './PlayButton';
import { NextButton } from './NextButton';
import { RepeatButton } from './RepeatButton';
import { PlaySlider } from './PlaySlider';

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
