import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { theme } from 'src/assets/theme';

export const MainPlaylistTitleBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: '25px',
  width: '100%',
  heigth: '100%',
  padding: '24px 32px 0 32px',
});

export const TitleBackground = styled(Box)({
  display: 'block',
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: 'rgb(83, 83, 83)',
  width: '100%',
  height: '300px',
});

export const GradientBackgound = styled(TitleBackground)({
  backgroundImage:
    'linear-gradient(transparent 0,rgba(0,0,0,.5) 100%),url(	data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDov…0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=)',
});

export const PlaylistImageBox = styled(Box)({
  minWidth: '232px',
  minHeight: '232px',
  background: theme.palette.secondary.light,
  boxShadow: ' 5px 6px 26px -7px rgba(0,0,0,0.75)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const PlayListInfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  color: theme.palette.primary.main,
});

export const PlaylistTitle = styled(Box)({
  fontSize: '96px',
  fontWeight: '700',
  cursor: 'pointer',
  width: 'fit-content'
});

export const PlaylistDescriptionBox = styled(Box)({
  width: '100%',
});

export const PlaylistDescription = styled(Box)({
  color: '#b3b3b3',
});
