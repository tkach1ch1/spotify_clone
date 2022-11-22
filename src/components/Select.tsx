import {
  SelectStyledLi,
  SelectStyledUl,
  StyledSelectLink,
  StyledTyphographie,
} from './style';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

type ArrayProps = {
  name: string;
  link: string;
  image?: boolean;
};

interface SelectProps {
  array: ArrayProps[];
}

export const Select = ({ array }: SelectProps) => {
  return (
    <SelectStyledUl>
      {array.map((elem) => (
        <SelectStyledLi key={Math.floor(Math.random() * 10000)}>
          <StyledSelectLink to={elem.link}>
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
