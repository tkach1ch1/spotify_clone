import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const TopContainer = styled(Box)({
  display: 'grid',
  gridTemplateAreas: `
                          'nav-bar top-bar'
                          'nav-bar main-view'
                          'now-playing-bar now-playing-bar'
                       `,
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto 1fr auto',
  position: 'relative',
  width: '100%',
  height: '100%',
  minHeight: '100%',
});
