import { AuthorizedFooter } from './components/AuthorizedFooter/AuthorizedFooter';
import { NonAuthorizedFooter } from './components/NonAuthorizedFooter/NonAuthorizedFooter';
import { Footer, NowPlayingBarBox } from 'src/layouts/NowPlayingBar/style';
import { useUserContext } from 'src/context/UserContext';


export const NowPlayingBar = () => {
  
  const {user} = useUserContext()

  return (
    <NowPlayingBarBox className='now-playing-bar'>
      <Footer>{user ? <AuthorizedFooter /> : <NonAuthorizedFooter />}</Footer>
    </NowPlayingBarBox>
  );
};
