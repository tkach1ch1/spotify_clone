import { SongDescriptionBox } from 'src/layouts/NowPlayingBar/style';
import { Box } from '@mui/material';
import { AlbumImage } from '../SongDescription/components/AlbumImage';
import { SongAndArtistName } from '../SongDescription/components/SongAndArtistName';
import { SaveToLibraryButton } from '../SongDescription/components/SaveToLibraryButton';
import { PictureInPictureButton } from '../SongDescription/components/PictureInPictureButton';

export const SongDescription = () => {
  return (
    <SongDescriptionBox>
      <AlbumImage />
      <SongAndArtistName />

      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: '15px', pl: '20px' }}
      >
        <SaveToLibraryButton />
        <PictureInPictureButton />
      </Box>
      
    </SongDescriptionBox>
  );
};
