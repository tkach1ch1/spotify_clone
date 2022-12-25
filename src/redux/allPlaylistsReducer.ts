import { PlaylistElementProps } from 'src/assets/types/types'
import { createSlice } from '@reduxjs/toolkit'
import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'

export interface AllPlaylistsArrayProps {
    playlistName: string
    playlistId: string
    playlistDescription: string
    playlistImage: string
    playlistTracks: AllPlaylistTracksElements[]
    playlistCollab: boolean
}

interface AllPlaylistsReducerState {
    allPlaylistsArray: PlaylistElementProps[]
}

const initialState: AllPlaylistsReducerState = {
    allPlaylistsArray: [],
}

const allPlaylistsReducer = createSlice({
    name: 'playlists',
    initialState,
    reducers: {
        addPlaylist: (state, action) => {
            state.allPlaylistsArray = [...state.allPlaylistsArray, action.payload]
        },
        // Changing playlist details and removing previous version of changed playlist
        changePlaylistDetails: (state, action) => {
            let currentPlaylistIndex = state.allPlaylistsArray.findIndex(
                (elem) => elem.playlistId === action.payload.playlistId
            )

            if (currentPlaylistIndex !== -1) {
                state.allPlaylistsArray[currentPlaylistIndex] = action.payload
            }
        },
    },
})

export const { addPlaylist, changePlaylistDetails } = allPlaylistsReducer.actions

export default allPlaylistsReducer.reducer
