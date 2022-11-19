import { StyledIcon, StyledTooltip } from '../style';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

export const PreviousButton = () => {
  return (
    <StyledIcon>
      <StyledTooltip title='Previous' placement='top'>
        <SkipPreviousIcon sx={{ width: '30px', height: '30px' }} />
      </StyledTooltip>
    </StyledIcon>
  );
};
