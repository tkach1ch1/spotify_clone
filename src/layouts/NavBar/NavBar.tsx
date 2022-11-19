import { Box } from '@mui/system';
import { theme } from '../../assets/theme';
import { Nav } from './style';

export const NavBar = () => {
  return (
    <Nav className='nav-bar'>
      <Box sx={{color: theme.palette.primary.main}}>NavBar</Box>
    </Nav>
  );
};
