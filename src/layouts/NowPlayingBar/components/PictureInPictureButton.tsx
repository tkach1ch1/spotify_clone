import { Box } from '@mui/material';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import { StyledTooltip, StyledIcon } from '../style';

export const PictureInPictureButton = () => {
  return (
    <Box>
      <StyledIcon>
        <StyledTooltip title='Picture in picture' placement='top'>
          <FeaturedVideoIcon fontSize='small' />
        </StyledTooltip>
      </StyledIcon>
    </Box>
  );
};
