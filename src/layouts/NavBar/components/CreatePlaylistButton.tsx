import AddBoxIcon from '@mui/icons-material/AddBox'
import { HideTextBox, NavBarButtonBox } from '../style'
import { usePlaylist } from 'src/features/Playlists/usePlaylist'
import { Snackbar } from 'src/components/Snackbar'

export const CreatePlaylistButton = () => {
    const { createPlaylist, onEnterCreatePlaylist, openSnackbar } = usePlaylist()

    const onCreatePlaylistButtonClick = () => {
        createPlaylist()
    }

    return (
        <>
            <NavBarButtonBox
                onClick={onCreatePlaylistButtonClick}
                onKeyDown={onEnterCreatePlaylist}
                tabIndex={0}
                role='button'
            >
                <AddBoxIcon sx={{ width: '32px', height: '32px' }} />

                <HideTextBox>Create Playlist</HideTextBox>
            </NavBarButtonBox>
            {openSnackbar ? <Snackbar content='Saved to Your Library' /> : null}
        </>
    )
}
