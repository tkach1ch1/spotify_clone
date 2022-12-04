import {
  PlaylistDescription,
  PlaylistDescriptionBox,
  PlayListInfoBox,
  PlaylistTitle,
} from '../style';
import { Box } from '@mui/system';
import { AllPlaylistsArrayProps } from 'src/redux/allPlaylistsReducer';
import { useModal } from '../hooks/useModal';

type PlaylistInfoProps = {
  currentPlaylist: AllPlaylistsArrayProps | null;
  handleOpen: () => void;
};

export const PlaylistInfo = ({
  currentPlaylist,
  handleOpen,
}: PlaylistInfoProps) => {
  return (
    <PlayListInfoBox>
      <Box
        sx={{
          textTransform: 'uppercase',
          fontSize: '12px',
          fontWeight: '500',
          marginTop: '4px',
          marginBottom: '-15px',
        }}
      >
        Playlist
      </Box>
      <PlaylistTitle onClick={handleOpen}>
        {currentPlaylist?.playlistName}
      </PlaylistTitle>
      <PlaylistDescriptionBox>
        {!!currentPlaylist?.playlistDescription ? (
          <PlaylistDescription onClick={handleOpen}>
            {currentPlaylist?.playlistDescription}
          </PlaylistDescription>
        ) : null}
      </PlaylistDescriptionBox>
      <Box sx={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>
        Bogdan Tkach
      </Box>
    </PlayListInfoBox>
  );
};
