import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledWhiteButton } from './ReusableComponentsStyle';

interface WhiteButtonProps {
  children: ReactNode;
  navigation: string;
}

export const WhiteButton = ({ children, navigation }: WhiteButtonProps) => {
  let navigate = useNavigate();

  return (
    <StyledWhiteButton onClick={() => navigate('/' + navigation)}>
      {children}{' '}
    </StyledWhiteButton>
  );
};
