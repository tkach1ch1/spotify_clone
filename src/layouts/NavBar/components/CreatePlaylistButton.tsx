import { Box } from '@mui/system';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { NavBarButtonBox } from '../style';
import { usePlaylist } from 'src/features/Playlists/usePlaylist';

export const CreatePlaylistButton = () => {
  const { createPlaylist } = usePlaylist();

  return (
    <NavBarButtonBox onClick={createPlaylist}>
      <AddBoxIcon sx={{ width: '32px', height: '32px' }} />
      <Box>Create Playlist</Box>
    </NavBarButtonBox>
  );
};
