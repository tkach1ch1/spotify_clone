import { useUserContext } from '../../context/UserContext';
import { AuthorizedTopBar } from './components/AuthorizedTopBar/AuthorizedTopBar';
import { NonAuthorizedTopBar } from './components/NonAuthorizedTopBar/NonAuthorizedTopBar';
import { TopBarBox } from './style';

export const TopBar = () => {
  const { user } = useUserContext();

  return (
    <TopBarBox className='top-bar'>
      {user ? <AuthorizedTopBar /> : <NonAuthorizedTopBar />}
    </TopBarBox>
  );
};
