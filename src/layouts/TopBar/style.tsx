import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { theme } from '../../assets/theme';

export const TopBarBox = styled(Box)({
    gridArea: 'top-bar',
    height: '64px', 
    zIndex: '2'
})

export const Header = styled('header')({
    backgroundColor: theme.palette.secondary.main, 
    padding: '16px 32px',
    color: theme.palette.primary.dark
})