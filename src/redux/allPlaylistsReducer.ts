import { createSlice } from '@reduxjs/toolkit';

export interface AllPlaylistsArrayProps {
  playlistName: string;
  playlistId: string;
  playlistDescription: string
}

interface AllPlaylistsReducerState {
  allPlaylistsArray: AllPlaylistsArrayProps[];
}

const initialState: AllPlaylistsReducerState = {
  allPlaylistsArray: [],
};

const allPlaylistsReducer = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    addPlaylist: (state, action) => {
      state.allPlaylistsArray = action.payload;
    },
  },
});

export const { addPlaylist } = allPlaylistsReducer.actions;

export default allPlaylistsReducer.reducer;
