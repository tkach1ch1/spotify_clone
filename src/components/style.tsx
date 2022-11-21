import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { theme } from 'src/assets/theme';

export const StyledWhiteButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 32px',
  maxHeight: '48px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '500px',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  color: '#000000',
  fontSize: '1rem',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'white',
    cursor: 'default',
    transition: 'all 0.1s',
  },
});
