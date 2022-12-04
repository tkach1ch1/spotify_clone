import AddBoxIcon from '@mui/icons-material/AddBox';
import { HideTextBox, NavBarButtonBox } from '../style';
import { usePlaylist } from 'src/features/Playlists/usePlaylist';

export const CreatePlaylistButton = () => {
  const { createPlaylist } = usePlaylist();

  return (
    <NavBarButtonBox onClick={createPlaylist} tabIndex={0}>
      <AddBoxIcon sx={{ width: '32px', height: '32px' }} />
      <HideTextBox>Create Playlist</HideTextBox>
    </NavBarButtonBox>
  );
};
