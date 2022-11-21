import { Box } from '@mui/material';
import { NonAuthorizedTopBarBox } from 'src/layouts/TopBar/style';
import { BackAndForwardButtons } from './BackAndForwardButtons';

export const NonAuthorizedTopBar = () => {
  return (
    <NonAuthorizedTopBarBox>
      <BackAndForwardButtons />
      <Box></Box>
    </NonAuthorizedTopBarBox>
  );
};
