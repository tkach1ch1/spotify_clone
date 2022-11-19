import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../assets/theme';
import { WhiteButton } from '../../../components/WhiteButton';
import { NonAuthorizedFooterBox } from '../style';

export const NonAuthorizedFooter = () => {
  let navigate = useNavigate();

  return (
    <NonAuthorizedFooterBox onClick={() => navigate('/signup')}>
      <Box sx={{padding: '3px'}}>
        <Typography
          sx={{
            fontSize: '12px',
            color: theme.palette.primary.main,
            textTransform: 'uppercase',
            letterSpacing: '0.1rem',
          }}
        >
          Preview of Spotify
        </Typography>
        <Typography sx={{ color: theme.palette.primary.main }}>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </Typography>
      </Box>
      <Box>
        <WhiteButton navigation={'signup'}>Sign up free</WhiteButton>
      </Box>
    </NonAuthorizedFooterBox>
  );
};
