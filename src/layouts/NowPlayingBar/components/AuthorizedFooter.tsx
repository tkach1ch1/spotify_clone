import { AuthorizedFooterBox} from '../style';
import { SongDescription } from './SongDescription';
import { PlayBar } from './PlayBar';
import { RightSideBar } from './RightSideBar';

export const AuthorizedFooter = () => {
  return (
    <AuthorizedFooterBox>
      <SongDescription />
      <PlayBar />
      <RightSideBar />
    </AuthorizedFooterBox>
  );
};
