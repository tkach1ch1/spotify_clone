import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "src/assets/theme";

export const TopContainer = styled(Box)({
  display: "grid",
  gridTemplateAreas: `
                          'nav-bar top-bar'
                          'nav-bar main-view'
                          'now-playing-bar now-playing-bar'
                       `,
<<<<<<< HEAD
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "auto 1fr auto",
  height: "100%",
  minHeight: "100%",
  position: "relative",
  width: "100%",
=======
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto 1fr auto',
  height: '100%',
  maxHeight: '100vh',
  position: 'relative',
  width: '100%',
>>>>>>> 453e594e4b47d65c527df0c9ec90df0f19591954
});

export const MainViewContainer = styled(Box)({
  gridArea: "main-view",
  overflow: "auto",
  background: theme.palette.secondary.main,
  position: 'relative', 
});

export const MainViewBox = styled(Box)({
  padding: "24px 16px",
});
