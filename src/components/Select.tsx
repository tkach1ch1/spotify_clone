import {
  SelectStyledLi,
  SelectStyledUl,
  StyledSelectLink,
  StyledTyphographie,
<<<<<<< HEAD
} from "./style";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { nanoid } from "nanoid";
=======
} from './style';
import { Box } from '@mui/system';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { nanoid } from 'nanoid';
>>>>>>> 453e594e4b47d65c527df0c9ec90df0f19591954

type ArrayProps = {
  name: string;
  link: string;
  image?: boolean;
  targetBlank?: boolean;
};

interface SelectProps {
  array: ArrayProps[];
}

export const Select = ({ array }: SelectProps) => {
  return (
    <SelectStyledUl>
      {array.map((elem) => (
        <SelectStyledLi key={nanoid()}>
          <StyledSelectLink
            to={elem.link}
            target={elem.targetBlank ? "_blank" : "_self"}
          >
            <StyledTyphographie>{elem.name}</StyledTyphographie>
            {elem.image ? (
              <OpenInNewIcon sx={{ width: "20px", height: "20px" }} />
            ) : null}
          </StyledSelectLink>
        </SelectStyledLi>
      ))}
    </SelectStyledUl>
  );
};



