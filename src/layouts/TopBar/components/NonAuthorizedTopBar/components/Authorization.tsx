import { useNavigate } from 'react-router-dom'
import { WhiteButton } from 'src/components/WhiteButton'
import { AuthorizationBox, StyledLink } from 'src/layouts/TopBar/style'

export const Authorization = () => {
    const navigate = useNavigate()
    return (
        <AuthorizationBox>
            <StyledLink
                to='/signup'
                style={{ letterSpacing: 'initial' }}
            >
                Sign up
            </StyledLink>
            <WhiteButton onButtonAction={() => navigate('/login')}>Log in</WhiteButton>
        </AuthorizationBox>
    )
}
