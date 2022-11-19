import { Box } from '@mui/material';
import { Header, TopBarBox } from './style';

export const TopBar = () => {
  return (
    <TopBarBox className='top-bar'>
      <Header>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box>Arrows</Box>
          <Box>Menu</Box>
        </Box>
      </Header>
    </TopBarBox>
  );
};
