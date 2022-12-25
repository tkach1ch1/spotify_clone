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
        playlistTracks: [],
    },
}

const playlistReducer = createSlice({
    name: 'curPlaylist',
    initialState,
    reducers: {
        getPlaylistInfo: (state, action) => {
            state.playlistInfo = action.payload
        },
        getPlaylistTracks: (state, action) => {
            state.playlistInfo = { ...state.playlistInfo, playlistTracks: action.payload }
        },
    },
})

export const { getPlaylistInfo, getPlaylistTracks } = playlistReducer.actions

export default playlistReducer.reducer
