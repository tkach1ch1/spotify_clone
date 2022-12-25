import {
    ProfileButtonBox,
    ProfileButtonIcon,
    ProfileButtonName,
    ProfileButtonNameAndArrowBox,
} from 'src/layouts/TopBar/style'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Box } from '@mui/material'
import { StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { Select } from 'src/components/Select'
import { topNavBarUserProfileArray } from 'src/layouts/TopBar/assets/assets'
import ClickAwayListener from '@mui/material/ClickAwayListener'

export const ProfileButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <Box sx={{ position: 'relative' }}>
                <ProfileButtonBox onClick={() => setIsOpen(!isOpen)}>
                    <ProfileButtonIcon>
                        <PersonOutlineIcon />
                    </ProfileButtonIcon>

                    <ProfileButtonNameAndArrowBox>
                        {isOpen ? (
                            <ProfileButtonName>Bogdan Tkach</ProfileButtonName>
                        ) : (
                            <StyledTooltip title='Bogdan Tkach'>
                                <ProfileButtonName>Bogdan Tkach</ProfileButtonName>
                            </StyledTooltip>
                        )}

                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                            {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </Box>
                    </ProfileButtonNameAndArrowBox>
                </ProfileButtonBox>

                {isOpen ? (
                    <Select
                        array={topNavBarUserProfileArray}
                        style={{ right: '0', top: '28px' }}
                    />
                ) : null}
            </Box>
        </ClickAwayListener>
    )
}
