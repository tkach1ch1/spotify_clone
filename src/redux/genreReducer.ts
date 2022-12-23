import { createSlice } from '@reduxjs/toolkit'

interface genreReducerState {
    genre: {
        genreId: string
        genreName: string
    }
}

const initialState: genreReducerState = {
    genre: {
        genreId: '',
        genreName: '',
    },
}

const genreReducer = createSlice({
    name: 'genre',
    initialState,
    reducers: {
        getGenreInfo: (state, action) => {
            state.genre = action.payload
        },
    },
})

export const { getGenreInfo } = genreReducer.actions

export default genreReducer.reducer
