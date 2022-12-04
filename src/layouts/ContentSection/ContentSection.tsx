import { Box } from "@mui/system";
import { Content } from "./components/Content";
import { SectionTitle } from "./components/SectionTitle";
import { SectionBox } from "./style";

interface ConternSectionProps {
  title: string;
}

export const ContentSection = ({ title }: ConternSectionProps) => {
  return (
    <SectionBox>
      <SectionTitle title={title}/>
      <Content />
    </SectionBox>
  );
};
