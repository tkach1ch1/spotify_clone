import { AuthorizedFooter } from './components/AuthorizedFooter';
import { NonAuthorizedFooter } from './components/NonAuthorizedFooter';
import { Footer, NowPlayingBarBox } from './style';

export const NowPlayingBar = () => {
  //NOTE: User will come from database
  let user = true;
  return (
    <NowPlayingBarBox className='now-playing-bar'>
      <Footer>{user ? <AuthorizedFooter /> : <NonAuthorizedFooter />}</Footer>
    </NowPlayingBarBox>
  );
};
