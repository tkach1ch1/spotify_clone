import { StyledIcon, StyledTooltip } from '../style';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export const NextButton = () => {
  return (
    <StyledIcon>
      <StyledTooltip title='Next' placement='top'>
        <SkipNextIcon sx={{ width: '30px', height: '30px' }} />
      </StyledTooltip>
    </StyledIcon>
  );
};
