import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { theme } from 'src/assets/theme'

export const SearchPageBox = styled(Box)({
    marginTop: '40px',
})

export const SearchPageTitle = styled(Box)({
    color: theme.palette.primary.main,
    fontSize: '1.5rem',
    fontWeight: '500',
    marginBottom: '16px',
})

export const AllGenresBox = styled(Box)({
    display: 'grid',
    gridTemplateRows: '1fr',
    gridAutoRows: 'auto',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px,100%/4, max(180px, 100%/5)), 1fr))',
    gridGap: '25px',
    width: '100%',
    overflow: 'hidden',
})

export const GenreLink = styled(Link)({
    width: '100%',
    backgroundColor: 'red',
    textDecoration: 'none',
    borderRadius: '8px',
    userSelect: 'none',
    paddingBottom: '100%',
    position: 'relative',
    overflow: 'hidden',
})

export const GenreName = styled(Box)({
    fontSize: '1.5rem',
    fontWeight: '500',
    color: theme.palette.primary.main,
    wordBreak: 'break-all',
    position: 'absolute',
    padding: '16px',
    zIndex: '1',
})

export const GenreIconBox = styled(Box)({
    width: '105px',
    height: '105px',
    position: 'absolute',
    bottom: '0',
    right: '0',
    transform: 'rotate(25deg) translate(18%,-2%)',
})

export const GenrePageTitleBox = styled(Box)({
    height: '20vh',
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('lg')]: {
        height: '20vh',
    },
})

export const GenrePageTitle = styled(Typography)({
    fontSize: '6rem',
    color: theme.palette.primary.main,
    margin: '0.08em 0px 0.12em',
    width: '100%',
    fontWeight: '700',
    [theme.breakpoints.down('lg')]: {
        fontSize: '4.5rem',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '3rem',
    },
})
