import AddBoxIcon from '@mui/icons-material/AddBox'
import { HideTextBox, NavBarButtonBox } from '../style'
import { usePlaylist } from 'src/features/Playlists/usePlaylist'
import { useState } from 'react'
import { Snackbar } from 'src/components/Snackbar'

export const CreatePlaylistButton = () => {
    const { createPlaylist, onEnterCreatePlaylist } = usePlaylist()

    const [openSnackbar, setOpenSnackbar] = useState(false)

    const onCreatePlaylistButtonClick = () => {
        setOpenSnackbar(true)
        createPlaylist()
        setTimeout(() => {
            try {
                setOpenSnackbar(false)
            } catch (error) {
                console.log(error)
            }
        }, 2000)
    }

    return (
        <NavBarButtonBox
            onClick={onCreatePlaylistButtonClick}
            onKeyDown={onEnterCreatePlaylist}
            tabIndex={0}
            role='button'
        >
            <AddBoxIcon sx={{ width: '32px', height: '32px' }} />
            <HideTextBox>Create Playlist</HideTextBox>
            {openSnackbar ? <Snackbar content='Saved to Your Library' /> : null}
        </NavBarButtonBox>
    )
}
