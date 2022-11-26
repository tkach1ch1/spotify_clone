import styled from '@emotion/styled';
import { Box, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { theme } from 'src/assets/theme';

export const NowPlayingBarBox = styled(Box)({
  gridArea: 'now-playing-bar',
  width: '100%',
  zIndex: '4',
});

export const Footer = styled('footer')({
  borderTop: '1px solid #282828',
});

export const NonAuthorizedFooterBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '24px',
  height: 'auto',
  padding: '11px 24px 7px 40px',
  backgroundImage: 'linear-gradient(90deg,#af2896,#509bf5)',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const AuthorizedFooterBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '20px',
  height: '90px',
  padding: '0 16px',
  backgroundColor: 'rgba(24, 24, 24, 0.95)',
});

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#363636',
    fontSize: '12px',
    boxShadow: '0 4px 4px -2px black',
  },
});

export const StyledIcon = styled(Box)({
  color: theme.palette.primary.dark,
  '&:hover': {
    color: theme.palette.primary.main,
    transition: 'all 0.2s',
  },
  '&:active': {
    color: theme.palette.primary.dark,
  },
});

export const StyledSlider = styled(Slider)({
  padding: '0',
  height: 4,
  width: '100%',
  color: theme.palette.primary.main,
  cursor: 'default',

  '&:hover': {
    color: theme.palette.success.main,
  },

  '&:hover .MuiSlider-thumb': {
    display: 'block',
    boxShadow: 'none',
  },

  '& .MuiSlider-thumb': {
    color: theme.palette.primary.main,
    display: 'none',
    width: 10,
    height: 10,
    boxShadow: 'none',
    '&.Mui-active': {
      display: 'block',
      boxShadow: 'none',
    },
  },
  '& .MuiSlider-rail': {
    color: theme.palette.primary.dark,
  },
});

// SongDescription section //

export const SongDescriptionBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexGrow: 1,
  gap: '10px',
});

export const SongAndArtistNameBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
});

export const StyledSongName = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  fontSize: '14px',
  '&:hover': {
    textDecoration: 'underline white',
    textUnderlineOffset: '3px',
  },
});

export const StyledArtistName = styled(Link)({
  color: theme.palette.primary.dark,
  textDecoration: 'none',
  fontSize: '11px',
  '&:hover': {
    textDecoration: 'underline white',
    color: theme.palette.primary.main,
  },
});

// PlayBar section //

export const StyledPlayIcon = styled(Box)({
  color: theme.palette.primary.main,
  '&:active': {
    transform: 'scale(0.9)',
    opacity: '0.9',
  },
});

export const PlayBarBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  maxWidth: '722px',
});

export const GreenDot = styled(Box)({
  position: 'absolute',
  left: '42%',
  bottom: '1px',
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  backgroundColor: '#1db954',
});

export const TimerNumbers = styled(Typography)({
  fontSize: '11px',
  color: theme.palette.primary.dark,
  minWidth: '40px',
});

// RightBar section //

export const RightSideBarBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  flexGrow: 1,
  gap: '15px',
});
