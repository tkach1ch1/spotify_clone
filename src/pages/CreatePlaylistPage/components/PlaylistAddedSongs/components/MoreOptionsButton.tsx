import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { ClickAwayListener } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Select } from 'src/components/Select'
import { Snackbar } from 'src/components/Snackbar'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { useOnButtonAddRemove } from 'src/pages/CreatePlaylistPage/hooks/useOnButtonAddRemove'

export const MoreOptionsButton = () => {
    const [openMoreOptions, setOpenMoreOptions] = useState(false)

    const { openSnackbar, onButtonRemovePlaylist } = useOnButtonAddRemove()

    //Finding existed playlist and remove him on click
    const { addedPlaylist } = useAddedPlaylist()

    const deletePlaylistOnClick = () => {
        if (addedPlaylist) {
            onButtonRemovePlaylist(addedPlaylist)
        }
    }

    const moreOptionsArray = [{ name: 'Delete', actionFunction: deletePlaylistOnClick }]

    return (
        <>
            <ClickAwayListener onClickAway={() => setOpenMoreOptions(false)}>
                <Box
                    sx={{ color: 'white', paddingTop: '5px' }}
                    onClick={() => setOpenMoreOptions(!openMoreOptions)}
                >
                    <MoreHorizIcon fontSize='large' />
                </Box>
            </ClickAwayListener>

            {/* Open more options select */}
            {openMoreOptions ? (
                <Box sx={{ position: 'relative' }}>
                    <Select
                        array={moreOptionsArray}
                        style={{ right: '-175px', bottom: '-40px' }}
                    />
                </Box>
            ) : null}
            {openSnackbar ? <Snackbar content='Remove from Your Library' /> : null}
        </>
    )
}
