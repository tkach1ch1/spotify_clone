import { Box } from '@mui/system';
import { Nav, StyledDividingLine } from './style';
import { Logo } from './components/Logo';
import { NavBarCategories } from './components/NavBarCategories';
import { CreatePlaylistButton } from './components/CreatePlaylistButton';
import { LikedSongsButton } from './components/LikedSongsButton';
import { AllPlaylistsList } from './components/AllPlaylistsList';

export const NavBar = () => {
  return (
    <Nav className='nav-bar'>
      <Logo />
      <NavBarCategories />
      <Box>
        <CreatePlaylistButton />
        <LikedSongsButton />
      </Box>
      <StyledDividingLine></StyledDividingLine>
      <AllPlaylistsList />
    </Nav>
  );
};
