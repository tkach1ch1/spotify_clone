import { RightSideBarBox } from '../style';
import { ConnectToDeviceButton } from './ConnectToDeviceButton';
import { LyricsButton } from './LyricsButton';
import { QueueButton } from './QueueButton';
import { SoundBar } from './SoundBar';

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
