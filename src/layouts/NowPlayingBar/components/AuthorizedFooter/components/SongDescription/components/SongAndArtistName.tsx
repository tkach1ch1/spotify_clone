import { Box } from '@mui/system';
import {
  SongAndArtistNameBox,
  StyledArtistName,
  StyledSongName,
} from 'src/layouts/NowPlayingBar/style';

export const SongAndArtistName = () => {
  return (
    <SongAndArtistNameBox>
      {/* SONG NAME */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <StyledSongName to={''}>Simply the best</StyledSongName>
      </Box>

      {/* ARTIST NAME */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <StyledArtistName to={''}>
          Black Eyed Peas, Anitta, El Alfa
        </StyledArtistName>
      </Box>
    </SongAndArtistNameBox>
  );
};
