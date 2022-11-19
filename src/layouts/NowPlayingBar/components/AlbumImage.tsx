import { Box } from '@mui/system';

export const AlbumImage = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img
        style={{ width: '56px', height: '56px' }}
        src='https://i.scdn.co/image/ab67616d00004851749901160fa2d11425c9a8fc'
        alt='Album'
      />
    </Box>
  );
};
