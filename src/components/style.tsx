import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { theme } from 'src/assets/theme'

export const StyledWhiteButton = styled(Button)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 32px',
    maxHeight: '48px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '500px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    color: '#000000',
    fontSize: '1rem',
    '&:hover': {
        transform: 'scale(1.05)',
        backgroundColor: 'white',
        cursor: 'default',
        transition: 'all 0.1s',
    },
    '&:active': {
        backgroundColor: theme.palette.primary.light,
    },
})

export const SelectStyledUl = styled('ul')({
    position: 'absolute',
    right: '0',
    top: '28px',
    display: 'flex',
    flexDirection: 'column',
    padding: '4px',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '4px',
    minWidth: '200px',
    maxWidth: '360px',
})

export const SelectStyledLi = styled('li')({
    listStyle: 'none',
    '&:hover': {
        backgroundColor: '#424242',
        borderRadius: '2px',
    },
})

export const StyledSelectLink = styled(Link)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    padding: '10px',
    width: '100%',
    cursor: 'default',
})

export const StyledTyphographie = styled(Typography)({
    fontSize: '14px',
})

export const GreenPlayButtonBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: theme.palette.success.main,
    '&:hover': {
        transform: 'scale(1.05)',
        backgroundColor: '#1fdf64',
    },
    '&:active': {
        transform: 'scale(0.97)',
        backgroundColor: '#169c46',
    },
})

export const HoveredGreenPlayButtonBox = styled(Box)({
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: theme.palette.success.main,
    transform: 'translateY(8px)',
    opacity: '0',
    transition: 'all .5s ease',
    boxShadow: '0 8px 8px rgba(0,0,0,.3)',
})
