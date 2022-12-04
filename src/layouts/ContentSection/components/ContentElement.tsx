import { Box } from "@mui/material";
import {
  ElementBox,
  ElementDescription,
  ElementName,
  GreenPlayButton,
  StyledImg,
} from "../style";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const ContentElement = () => {
  return (
    <ElementBox tabIndex={0}>
      <Box sx={{ marginBottom: "16px", position: "relative" }}>
        <StyledImg
          src="https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5"
          alt="Sea"
        />
        <GreenPlayButton id="hoveredGreenButton">
          <PlayArrowIcon fontSize="large"/>
        </GreenPlayButton>
      </Box>
      <ElementName>Deep Focus</ElementName>
      <ElementDescription>
        Keep calm and focus with ambient and positive music
      </ElementDescription>
    </ElementBox>
  );
};
