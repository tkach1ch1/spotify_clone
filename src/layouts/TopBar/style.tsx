import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from 'src/assets/theme';

export const TopBarBox = styled('header')({
  gridArea: 'top-bar',
  zIndex: '2',
  height: '64px',
});

export const ArrowBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: 'black',
  color: 'white',
});

export const ArrowBoxRight = styled(ArrowBox)({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});

// NonAuthorizedTopBar

export const NonAuthorizedTopBarBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0,0,0,0.5)',
  height: '100%',
  padding: '4px 32px',
  [theme.breakpoints.down('md')]: {
    padding: '4px 16px',
  },
});

export const TopNavBarAndAuthorizationBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '20px',
});

export const TopNavBarUl = styled('ul')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '15px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const TopNavBarLi = styled('li')({
  listStyle: 'none',
  cursor: 'default',
  '&:hover': {
    transform: 'scale(1.04)',
  },
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: theme.palette.primary.dark,
  fontWeight: 500,
  letterSpacing: '1.5px',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'scale(1.04)',
  },
});

export const DividingLine = styled(Box)({
  width: '1px',
  height: '25px',
  margin: '0 10px',
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const AuthorizationBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  paddingLeft: '10px',
});

export const ShowBurger = styled(Box)({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block ',
  },
});

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
});

export const StyledBurgerBoxClose = styled(StyledBurgerBox)({
  backgroundColor: theme.palette.secondary.light,
});

//AuthorizedTopBar

export const AuthorizedTopBarBox = styled(NonAuthorizedTopBarBox)({
  backgroundColor: theme.palette.secondary.main,
});

export const UpgradeAndProfileBox = styled(Box)({

})

export const UpgradeButton = styled(Link)({
  
})