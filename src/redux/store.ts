import { configureStore } from '@reduxjs/toolkit'
import allPlaylistsReducer from './allPlaylistsReducer'

export const store = configureStore({
    reducer: {
        allPlaylists: allPlaylistsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
