import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { LikedSongsButtonLink, StyledIconBox } from '../style';

export const LikedSongsButton = () => {
  return (
    <Box sx={{ padding: '4px 6px' }}>
      <LikedSongsButtonLink to='/collection/tracks'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '32px',
          }}
        >
          <StyledIconBox>
            <FavoriteIcon sx={{ width: '15px', height: '15px' }} />
          </StyledIconBox>
        </Box>
        <Box>LikedSongs</Box>
      </LikedSongsButtonLink>
    </Box>
  );
};
