import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { theme } from 'src/assets/theme'

export const TopBarBox = styled('header')({
    gridArea: 'top-bar',
    height: '64px',
    zIndex: 2,
})

export const ArrowBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.dark,
    color: 'white',
})

export const ArrowBoxRight = styled(ArrowBox)({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
})

//NOTE: NonAuthorizedTopBar

export const NonAuthorizedTopBarBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#121212',
    height: '100%',
    padding: '4px 32px',
    [theme.breakpoints.down('md')]: {
        padding: '4px 16px',
    },
})

export const TopNavBarAndAuthorizationBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
})

export const TopNavBarUl = styled('ul')({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
})

export const TopNavBarLi = styled('li')({
    listStyle: 'none',
    cursor: 'default',
    '&:hover': {
        transform: 'scale(1.04)',
    },
})

export const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: theme.palette.primary.dark,
    fontWeight: 500,
    letterSpacing: '1.5px',
    '&:hover': {
        color: theme.palette.primary.main,
        transform: 'scale(1.04)',
    },
})

export const DividingLine = styled(Box)({
    width: '1px',
    height: '25px',
    margin: '0 10px',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
})

export const AuthorizationBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    paddingLeft: '10px',
})

export const ShowBurger = styled(Box)({
    position: 'relative',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block ',
    },
})

export const StyledBurgerBox = styled(Box)({
    color: theme.palette.primary.main,
    backgroundColor: 'black',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '7px 3px',
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
    },
})

export const StyledBurgerBoxClose = styled(StyledBurgerBox)({
    backgroundColor: theme.palette.secondary.light,
})

//NOTE: AuthorizedTopBar

export const AuthorizedTopBarBox = styled(NonAuthorizedTopBarBox)({
    backgroundColor: '#121212',
})

export const UpgradeAndProfileBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
})

export const UpgradeButtonBox = styled(Box)({
    padding: '3px 14px',
    border: '1px solid #A7A7A7',
    borderRadius: '500px',
    '&:hover': {
        border: '1px solid white',
        backgroundColor: 'black',
        transform: 'scale(1.05)',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
})

export const StyledUpgradeLink = styled(Link)({
    textDecoration: 'none',
    fontSize: '14px',
    color: theme.palette.primary.main,
    fontWeight: '500',
    cursor: 'default',
})

export const ProfileButtonBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '2px',
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: '23px',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.palette.secondary.light,
    },
})

export const ProfileButtonIcon = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '28px',
    height: '28px',
    backgroundColor: '#535353',
    color: theme.palette.primary.main,
    borderRadius: '50%',
})

export const ProfileButtonNameAndArrowBox = styled(Box)({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
})

export const ProfileButtonName = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontWeight: '500',
    fontSize: '14px',
})
