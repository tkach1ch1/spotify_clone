import {
  AuthorizedTopBarBox,
  UpgradeAndProfileBox,
  UpgradeButton,
} from '../../style';
import { BackAndForwardButtons } from '../BackAndForwardButtons';
import { Box } from '@mui/material';

export const AuthorizedTopBar = () => {
  return (
    <AuthorizedTopBarBox>
      <BackAndForwardButtons />

      <UpgradeAndProfileBox>
        <UpgradeButton to='/premium' target='_blank'>
          Upgrade
        </UpgradeButton>
      </UpgradeAndProfileBox>
    </AuthorizedTopBarBox>
  );
};
