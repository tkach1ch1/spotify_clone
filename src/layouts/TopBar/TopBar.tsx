import { useUserContext } from '../../context/UserContext';
import { AuthorizedTopBar } from './components/AuthorizedTopBar';
import { NonAuthorizedTopBar } from './components/NonAuthorizedTopBar';
import { Header, TopBarBox } from './style';

export const TopBar = () => {
  const { user } = useUserContext();

  return (
    <TopBarBox className='top-bar'>
      <Header>{user ? <AuthorizedTopBar /> : <NonAuthorizedTopBar />}</Header>
    </TopBarBox>
  );
};
