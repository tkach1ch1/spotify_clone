import { ReactNode } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { NowPlayingBar } from '../NowPlayingBar/NowPlayingBar';
import { TopBar } from '../TopBar/TopBar';
import { TopContainer } from './style';
import { Box } from '@mui/system';
import { useUserContext } from 'src/context/UserContext';
import { theme } from 'src/assets/theme';

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  const { user } = useUserContext();

  return (
    <TopContainer>
      <TopBar />
      <NavBar />
      <NowPlayingBar />
      <Box className='main-view'>
        {!user ? (
          <Box
            sx={{
              height: '64px',
              marginTop: '-64px',
              zIndex: '-1',
              backgroundColor: 'rgb(83, 83, 83)',
              backgroundImage: 'linear-gradient(rgba(0,0,0,.6) 0,#121212 100%)',
            }}
          ></Box>
        ) : null}

        <Box
          sx={{
            p: '24px 32px 0 32px',
            background: theme.palette.secondary.main,
            color: 'white',
          }}
        >
          {children}
        </Box>
      </Box>
    </TopContainer>
  );
};
