import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { createSlice } from '@reduxjs/toolkit'

interface nowPlayingPlaylistReducerElements {
    nowPlayingPlaylist: AllPlaylistTracksElements[]
    trackIndex: number
}

const initialState: nowPlayingPlaylistReducerElements = {
    nowPlayingPlaylist: [],
    trackIndex: 0,
}

const nowPlayingPlaylistReducer = createSlice({
    name: 'nowPlayingPlaylist',
    initialState,
    reducers: {
        addToNowPlayingPlaylist: (state, action) => {
            state.nowPlayingPlaylist = [action.payload].flat(1)
        },
        getNextTrack: (state) => {
            if (state.trackIndex !== state.nowPlayingPlaylist.length - 1)
                state.trackIndex = state.trackIndex + 1
        },
        getPrevTrack: (state) => {
            if (state.trackIndex !== 0) {
                state.trackIndex = state.trackIndex - 1
            }
        },
    },
})

export const { addToNowPlayingPlaylist, getNextTrack, getPrevTrack } =
    nowPlayingPlaylistReducer.actions

export default nowPlayingPlaylistReducer.reducer
