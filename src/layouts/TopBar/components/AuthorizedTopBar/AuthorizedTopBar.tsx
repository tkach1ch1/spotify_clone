import { AuthorizedTopBarBox, UpgradeAndProfileBox } from '../../style';
import { BackAndForwardButtons } from '../BackAndForwardButtons';
import { UpgradeButton } from './components/UpgradeButton';
import { ProfileButton } from './components/ProfileButton';

export const AuthorizedTopBar = () => {
  return (
    <AuthorizedTopBarBox>
      <BackAndForwardButtons />

      <UpgradeAndProfileBox>
        <UpgradeButton />
        <ProfileButton />
      </UpgradeAndProfileBox>
    </AuthorizedTopBarBox>
  );
};
