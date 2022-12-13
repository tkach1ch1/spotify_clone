import { createSlice } from '@reduxjs/toolkit'

export interface AllPlaylistsArrayProps {
    playlistName: string
    playlistId: string
    playlistDescription: string
}

interface AllPlaylistsReducerState {
    allPlaylistsArray: AllPlaylistsArrayProps[]
}

const initialState: AllPlaylistsReducerState = {
    allPlaylistsArray: [],
}

const allPlaylistsReducer = createSlice({
    name: 'playlists',
    initialState,
    reducers: {
        addPlaylist: (state, action) => {
            state.allPlaylistsArray = action.payload
        },
        changePlaylistDetails: (state, action) => {
            const filteredPlaylist = state.allPlaylistsArray.filter(
                (elem) => elem.playlistId === action.payload.playlistId
            )

            const changedPlaylist = filteredPlaylist.map((elem) => ({
                ...elem,
                playlistName: action.payload.playlistName,
                playlistDescription: action.payload.playlistDescription,
            }))

            state.allPlaylistsArray = changedPlaylist.concat(
                state.allPlaylistsArray.filter(
                    (elem) => elem.playlistId !== action.payload.playlistId
                )
            )
        },
    },
})

export const { addPlaylist, changePlaylistDetails } =
    allPlaylistsReducer.actions

export default allPlaylistsReducer.reducer
