import { useState } from 'react';

interface AllPlaylistsProps {
  playlistName: string;
}

export const usePlaylist = () => {
  const [allPlaylistsArray, setAllPlaylistsArray] = useState<
    AllPlaylistsProps[]
  >([]);

  //Create playlist onClick on CreatePlaylistButton in NavBar 

  const createPlaylist = () => {
    let newPlaylist = allPlaylistsArray.concat([
      {
        playlistName: 'My Playlist #' + (allPlaylistsArray.length + 1),
      },
    ]);
    setAllPlaylistsArray(newPlaylist);
  };

  return {allPlaylistsArray, createPlaylist}
};
