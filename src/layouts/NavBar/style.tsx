import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Link, NavLink } from 'react-router-dom'
import { theme } from 'src/assets/theme'

export const Nav = styled('nav')({
    gridArea: 'nav-bar',
    backgroundColor: 'black',
    width: '250px',
    paddingTop: '24px',
})

export const LogoBox = styled(Box)({
    display: 'flex',
    width: '100%',
})

export const HideTextBox = styled(Box)({
    whiteSpace: 'nowrap',
})

export const StyledLogoLink = styled(Link)({
    padding: '0 24px',
    width: '100%',
    marginBottom: '10px',
})

export const StyledNavBarUl = styled('ul')({
    listStyle: 'none',
    padding: '0',
    marginBottom: '35px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '13px',
})

export const StyledNavBarLi = styled('li')({
    width: '100%',
    display: 'flex',
    padding: '0 8px',
})

export const StyledNavBarLink = styled(NavLink)({
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    textDecoration: 'none',
    color: theme.palette.primary.dark,
    fontSize: '14px',
    fontWeight: '500',
    width: '100%',
    padding: '0 13px',

    '&:hover': {
        color: theme.palette.primary.main,
        transition: 'all 0.3s',
    },
    '&:active': {
        transform: 'scale(0.95)',
    },
})

export const NavBarButtonBox = styled(Box)({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    margin: '0 10px 10px 10px',
    padding: '0 8px',
    color: theme.palette.primary.dark,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    '&:hover': {
        color: theme.palette.primary.main,
        transition: 'all 0.3s',
    },
})

export const LikedSongsButtonLink = styled(StyledNavBarLink)({
    '&:active': {
        transform: 'none',
    },
})

export const StyledIconBox = styled(Box)({
    width: '24px',
    height: '24px',
    minHeight: '24px',
    minWidth: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(135deg,#450af5,#c4efd9)',
    borderRadius: '2px',
})

export const StyledDividingLine = styled('hr')({
    margin: '8px 24px',
    height: '1px',
    border: 'none',
    backgroundColor: theme.palette.primary.dark,
    opacity: '0.3',
})

export const AllPlaylistsListBox = styled(Box)({
    width: '100%',
    height: '25vh',
    overflow: 'auto',
})

export const AllPlaylistsListUl = styled('ul')({
    listStyle: 'none',
    padding: '0',
    margin: '0',
})

export const AllPlaylistsListLi = styled('li')({
    display: 'flex',
})

export const StyledPlaylistLink = styled(Link)({
    textDecoration: 'none',
    padding: '4px 24px',
    color: theme.palette.primary.dark,
    fontSize: '14px',
    cursor: 'default',
    width: '100%',
    '&:hover': {
        color: theme.palette.primary.main,
    },
})
