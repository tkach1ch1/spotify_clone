import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { createSlice } from '@reduxjs/toolkit'

interface likedSongsReducerProps {
    allLikedSongs: AllPlaylistTracksElements[]
}

const initialState: likedSongsReducerProps = {
    allLikedSongs: [],
}

const likedSongsReducer = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        addSongToLikedSongs: (state, action) => {
            state.allLikedSongs = [...state.allLikedSongs, action.payload]
        },
        removeSongFromLikedSongs: (state, action) => {
            state.allLikedSongs = [...state.allLikedSongs].filter(
                (elem) => elem.id !== action.payload.id
            )
        },
    },
})

export const { addSongToLikedSongs, removeSongFromLikedSongs } = likedSongsReducer.actions

export default likedSongsReducer.reducer
