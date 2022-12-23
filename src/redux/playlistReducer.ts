import { createSlice } from '@reduxjs/toolkit'
import { PlaylistElementProps } from 'src/assets/types/types'

interface PlaylistReducerElements {
    playlistInfo: PlaylistElementProps
}

const initialState: PlaylistReducerElements = {
    playlistInfo: {
        playlistDescription: '',
        playlistName: '',
        playlistCollab: false,
        playlistId: '',
        playlistImage: '',
        playlistOwnerId: '',
        playlistOwnerName: '',
    },
}

const playlistReducer = createSlice({
    name: 'curPlaylist',
    initialState,
    reducers: {
        getPlaylistInfo: (state, action) => {
            state.playlistInfo = action.payload
        },
    },
})

export const { getPlaylistInfo } = playlistReducer.actions

export default playlistReducer.reducer
