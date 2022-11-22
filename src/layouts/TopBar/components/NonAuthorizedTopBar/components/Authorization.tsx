import { WhiteButton } from 'src/components/WhiteButton';
import { AuthorizationBox, StyledLink } from 'src/layouts/TopBar/style';

export const Authorization = () => {
  return (
    <AuthorizationBox>
      <StyledLink to='/signup' style={{ letterSpacing: 'initial' }}>
        Sign up
      </StyledLink>
      <WhiteButton navigation='login'>Log in</WhiteButton>
    </AuthorizationBox>
  );
};
