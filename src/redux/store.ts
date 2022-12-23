import { configureStore } from '@reduxjs/toolkit'
import allPlaylistsReducer from './allPlaylistsReducer'
import genreReducer from './genreReducer'
import playlistReducer from './playlistReducer'

export const store = configureStore({
    reducer: {
        allPlaylists: allPlaylistsReducer,
        genreInfo: genreReducer,
        playlist: playlistReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
