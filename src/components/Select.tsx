import {
  SelectStyledLi,
  SelectStyledUl,
  StyledSelectLink,
  StyledTyphographie,
} from './style';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box } from '@mui/material';

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
        <SelectStyledLi key={Math.floor(Math.random() * 10000)}>
          <StyledSelectLink
            to={elem.link}
            target={elem.targetBlank ? '_blank' : '_self'}
          >
            <StyledTyphographie>{elem.name}</StyledTyphographie>
            {elem.image ? (
              <OpenInNewIcon sx={{ width: '20px', height: '20px' }} />
            ) : null}
          </StyledSelectLink>
        </SelectStyledLi>
      ))}
    </SelectStyledUl>
  );
};
