import { createSlice } from '@reduxjs/toolkit'

const openSnackbar = createSlice({
    name: 'snackbar',
    initialState: {
        snackbar: false,
    },
    reducers: {
        getSnackbar: (state, action) => {
            state.snackbar = action.payload
        },
    },
})

export const { getSnackbar } = openSnackbar.actions

export default openSnackbar.reducer
