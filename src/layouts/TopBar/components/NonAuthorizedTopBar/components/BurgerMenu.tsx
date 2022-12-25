import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { ShowBurger, StyledBurgerBox, StyledBurgerBoxClose } from 'src/layouts/TopBar/style'
import { useState } from 'react'
import { Select } from 'src/components/Select'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { topNavBarCategoriesArray } from 'src/layouts/TopBar/assets/assets'

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <ShowBurger>
                {isOpen ? (
                    <StyledBurgerBoxClose onClick={() => setIsOpen(!isOpen)}>
                        <CloseIcon />
                    </StyledBurgerBoxClose>
                ) : (
                    <StyledBurgerBox onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon />
                    </StyledBurgerBox>
                )}
                {isOpen ? (
                    <Select
                        array={topNavBarCategoriesArray}
                        style={{ right: '0', top: '28px' }}
                    />
                ) : null}
            </ShowBurger>
        </ClickAwayListener>
    )
}
