import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { createSlice } from '@reduxjs/toolkit'

interface NowPlayingPlaylistElements extends AllPlaylistTracksElements {
    isPlaying: boolean
    preview_url: string
    file: HTMLAudioElement
    current_duration: number
}

interface NowPlayingPlaylistReducerElements {
    nowPlayingPlaylist: NowPlayingPlaylistElements[]
    trackIndex: number
    track_volume: number
    muted: boolean
}

const initialState: NowPlayingPlaylistReducerElements = {
    nowPlayingPlaylist: [],
    trackIndex: 0,
    track_volume: 30,
    muted: false,
}

const nowPlayingPlaylistReducer = createSlice({
    name: 'nowPlayingPlaylist',
    initialState,
    reducers: {
        addToNowPlayingPlaylist: (state, action) => {
            state.nowPlayingPlaylist = [action.payload].flat(1)
        },
        updateTrackIndex: (state, action) => {
            state.trackIndex = action.payload
        },

        trackVolumeControll: (state, action) => {
            state.track_volume = action.payload
        },
        trackMuted: (state, action) => {
            state.muted = action.payload
        },

        trackCurrentDuration: (state, action) => {
            state.nowPlayingPlaylist[state.trackIndex] = {
                ...state.nowPlayingPlaylist[state.trackIndex],
                current_duration: action.payload,
            }
        },

        trackIsPlaying: (state, action) => {
            state.nowPlayingPlaylist[state.trackIndex] = {
                ...state.nowPlayingPlaylist[state.trackIndex],
                isPlaying: action.payload,
            }
        },
    },
})

export const {
    addToNowPlayingPlaylist,
    updateTrackIndex,
    trackVolumeControll,
    trackMuted,
    trackCurrentDuration,
    trackIsPlaying,
} = nowPlayingPlaylistReducer.actions

export default nowPlayingPlaylistReducer.reducer
