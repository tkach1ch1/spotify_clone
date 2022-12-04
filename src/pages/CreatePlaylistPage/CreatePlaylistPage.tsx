import { MainContainer } from 'src/layouts/MainContainer/MainContainer';
import { PlaylistImage } from './components/PlaylistImage';
import { PlaylistInfo } from './components/PlaylistInfo';
import {
  GradientBackgound,
  MainPlaylistTitleBox,
  TitleBackground,
} from './style';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/hooks';
import { ChangePlaylistInfoModal } from './components/ChangePlaylistInfoModal';
import { useModal } from './hooks/useModal';

export const CreatePlaylistPage = () => {
  const allPlaylistsArray = useAppSelector(
    (state) => state.allPlaylists.allPlaylistsArray
  );

  const location = useLocation();

  const currentPlaylist = allPlaylistsArray.find(
    (elem) => '/playlist/' + elem.playlistId === location.pathname
  );

  const { open, handleClose, handleOpen } = useModal();

  return (
    <MainContainer>
      <TitleBackground>
        <GradientBackgound>
          <MainPlaylistTitleBox>
            <PlaylistImage handleOpen={handleOpen}/>
            <PlaylistInfo
              currentPlaylist={!!currentPlaylist ? currentPlaylist : null} handleOpen={handleOpen}
            />
          </MainPlaylistTitleBox>
        </GradientBackgound>
      </TitleBackground>
      {open ? <ChangePlaylistInfoModal open={open} handleClose={handleClose} /> : null}
    </MainContainer>
  );
};
