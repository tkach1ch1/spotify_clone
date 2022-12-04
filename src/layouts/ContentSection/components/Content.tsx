import { ContentBox } from "../style";
import { Box } from "@mui/system";
import { ContentElement } from "./ContentElement";

export const Content = () => {
  return (
    <ContentBox tabIndex={-1}>
      <ContentElement />
      <ContentElement />
      <ContentElement />
      <ContentElement />
      <ContentElement />
      <ContentElement />
      <ContentElement />
      <ContentElement />
      <ContentElement />
    </ContentBox>
  );
};
