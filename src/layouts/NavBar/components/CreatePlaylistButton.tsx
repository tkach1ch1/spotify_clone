import AddBoxIcon from '@mui/icons-material/AddBox'
import { HideTextBox, NavBarButtonBox } from '../style'
import { usePlaylist } from 'src/features/Playlists/usePlaylist'
import React from 'react'

export const CreatePlaylistButton = () => {
    const { createPlaylist } = usePlaylist()

    const onEnterCreatePlaylist = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            createPlaylist()
        }
    }
    return (
        <NavBarButtonBox
            onClick={createPlaylist}
            onKeyDown={onEnterCreatePlaylist}
            tabIndex={0}
        >
            <AddBoxIcon sx={{ width: '32px', height: '32px' }} />
            <HideTextBox>Create Playlist</HideTextBox>
        </NavBarButtonBox>
    )
}
