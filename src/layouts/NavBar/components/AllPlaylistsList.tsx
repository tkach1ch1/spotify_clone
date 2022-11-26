import { Box } from '@mui/system';
import { usePlaylist } from 'src/features/Playlists/usePlaylist';
import {
  AllPlaylistsListBox,
  AllPlaylistsListLi,
  AllPlaylistsListUl,
} from '../style';
import { nanoid } from 'nanoid';

export const AllPlaylistsList = () => {
  const { allPlaylistsArray } = usePlaylist();

  return (
    <AllPlaylistsListBox>
      <AllPlaylistsListUl>
        {allPlaylistsArray.map((elem) => (
          <AllPlaylistsListLi key={nanoid()}>
            {elem.playlistName}
          </AllPlaylistsListLi>
        ))}
      </AllPlaylistsListUl>
    </AllPlaylistsListBox>
  );
};
