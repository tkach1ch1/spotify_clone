import { SongDescriptionBox } from '../style';
import { Box } from '@mui/material';
import { AlbumImage } from './AlbumImage';
import { SongAndArtistName } from './SongAndArtistName';
import { SaveToLibraryButton } from './SaveToLibraryButton';
import { PictureInPictureButton } from './PictureInPictureButton';

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
