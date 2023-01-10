import { configureStore } from '@reduxjs/toolkit'
import allPlaylistsReducer from './allPlaylistsReducer'
import genreReducer from './genreReducer'
import likedSongsReducer from './likedSongsReducer'
import nowPlayingPlaylistReducer from './nowPlayingPlaylistReducer'
import openSnackbar from './openSnackbar'
import playlistReducer from './playlistReducer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    allPlaylists: allPlaylistsReducer,
    genreInfo: genreReducer,
    playlist: playlistReducer,
    likedSongs: likedSongsReducer,
    playingPlaylist: nowPlayingPlaylistReducer,
    openSnack: openSnackbar,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['allPlaylists', 'genreInfo', 'playlist', 'likedSongs', 'playingPlaylist'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
