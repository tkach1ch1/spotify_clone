import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { theme } from 'src/assets/theme';

export const TopBarBox = styled(Box)({
  gridArea: 'top-bar',
  height: '64px',
  zIndex: '2',
});

export const Header = styled(Box)({
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.secondary.main,
  height: '100%', 
  padding: '16px 32px',
});

export const ArrowBox = styled(Box)({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '32px', 
    height: '32px', 
    borderRadius: '50%', 
    backgroundColor: 'black',
    color: 'white'
})

// NonAuthorizedTopBar

export const NonAuthorizedTopBarBox = styled(Box)({

})

