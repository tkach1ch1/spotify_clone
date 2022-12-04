import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from 'src/assets/theme';
import { Box } from '@mui/system';

export const StyledWhiteButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 32px',
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

export const SelectStyledUl = styled('ul')({
  position: 'absolute',
  right: '0',
  top: '28px',
  display: 'flex',
  flexDirection: 'column',
  padding: '4px',
  backgroundColor: theme.palette.secondary.light,
  borderRadius: '4px',
  minWidth: '200px',
  maxWidth: '360px',
});

export const SelectStyledLi = styled('li')({
  listStyle: 'none',
  '&:hover': {
    backgroundColor: '#424242',
    borderRadius: '2px',
  },
});

export const StyledSelectLink = styled(Link)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.primary.main,
  padding: '10px',
  width: '100%',
  cursor: 'default',
});

export const StyledTyphographie = styled(Typography)({
  fontSize: '14px',
});
