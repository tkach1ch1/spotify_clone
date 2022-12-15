import AddBoxIcon from '@mui/icons-material/AddBox'
import { HideTextBox, NavBarButtonBox } from '../style'
import { usePlaylist } from 'src/features/Playlists/usePlaylist'

export const CreatePlaylistButton = () => {
    const { createPlaylist, onEnterCreatePlaylist } = usePlaylist()

    return (
        <NavBarButtonBox
            onClick={createPlaylist}
            onKeyDown={onEnterCreatePlaylist}
            tabIndex={0}
            role='button'
        >
            <AddBoxIcon sx={{ width: '32px', height: '32px' }} />
            <HideTextBox>Create Playlist</HideTextBox>
        </NavBarButtonBox>
    )
}
