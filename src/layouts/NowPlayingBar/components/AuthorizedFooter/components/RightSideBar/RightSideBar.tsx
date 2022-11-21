import { RightSideBarBox } from 'src/layouts/NowPlayingBar/style';
import { ConnectToDeviceButton } from '../RightSideBar/components/ConnectToDeviceButton';
import { LyricsButton } from '../RightSideBar/components/LyricsButton';
import { QueueButton } from '../RightSideBar/components/QueueButton';
import { SoundBar } from '../RightSideBar/components/SoundBar';

export const RightSideBar = () => {
  return (
    <RightSideBarBox>
      <LyricsButton />
      <QueueButton />
      <ConnectToDeviceButton />
      <SoundBar />
    </RightSideBarBox>
  );
};
