import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { ClickAwayListener } from '@mui/material'
import { Box } from '@mui/system'
import { CSSProperties, memo, useState } from 'react'
import { ArrayProps, Select } from 'src/components/Select'
import { Snackbar } from 'src/components/Snackbar'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { MoreOptionsButtonBox } from './style'

interface MoreOptionsButtonProps {
    moreOptionsArray: ArrayProps[]
    snackBarContent?: string
    openSnackbar?: boolean
    fontSize: 'small' | 'inherit' | 'large' | 'medium' | undefined
    style: CSSProperties
    selectTitle?: string
}

export const MoreOptionsButton = memo(
    ({
        moreOptionsArray,
        snackBarContent,
        openSnackbar,
        fontSize,
        style,
        selectTitle,
    }: MoreOptionsButtonProps) => {
        const [openMoreOptions, setOpenMoreOptions] = useState(false)

        return (
            <>
                <ClickAwayListener onClickAway={() => setOpenMoreOptions(false)}>
                    <MoreOptionsButtonBox onClick={() => setOpenMoreOptions(!openMoreOptions)}>
                        <MoreHorizIcon fontSize={fontSize} />
                    </MoreOptionsButtonBox>
                </ClickAwayListener>

                {/* Open more options select */}
                {openMoreOptions ? (
                    <Box sx={{ position: 'relative' }}>
                        <Select
                            array={moreOptionsArray}
                            style={style}
                            selectTitle={selectTitle}
                        />
                    </Box>
                ) : null}
                {openSnackbar && snackBarContent ? <Snackbar content={snackBarContent} /> : null}
            </>
        )
    }
)
