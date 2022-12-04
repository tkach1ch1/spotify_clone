import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { HideTextBox, LikedSongsButtonLink, StyledIconBox } from '../style';

export const LikedSongsButton = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', padding: '4px 10px' }}>
      <LikedSongsButtonLink to='/collection/tracks'>
        <StyledIconBox>
          <FavoriteIcon
            sx={{
              width: '15px',
              height: '15px',
            }}
          />
        </StyledIconBox>
        <HideTextBox>Liked Songs</HideTextBox>
      </LikedSongsButtonLink>
    </Box>
  );
};
