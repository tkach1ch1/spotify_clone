import { AuthorizedFooterBox } from 'src/layouts/NowPlayingBar/style';
import { SongDescription } from './components/SongDescription/SongDescription';
import { PlayBar } from './components/PlayBar/PlayBar';
import { RightSideBar } from './components/RightSideBar/RightSideBar';

export const AuthorizedFooter = () => {
  return (
    <AuthorizedFooterBox>
      <SongDescription />
      <PlayBar />
      <RightSideBar />
    </AuthorizedFooterBox>
  );
};
