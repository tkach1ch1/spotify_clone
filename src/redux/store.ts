import { configureStore } from '@reduxjs/toolkit'
import allPlaylistsReducer from './allPlaylistsReducer'
import genreReducer from './genreReducer'
import likedSongsReducer from './likedSongsReducer'
import playlistReducer from './playlistReducer'

export const store = configureStore({
    reducer: {
        allPlaylists: allPlaylistsReducer,
        genreInfo: genreReducer,
        playlist: playlistReducer,
        likedSongs: likedSongsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
