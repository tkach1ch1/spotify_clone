import logo from 'src/assets/svg/Spotify_logo.svg'
import { LogoBox, StyledLogoLink } from '../style'

export const Logo = () => {
    return (
        <LogoBox>
            <StyledLogoLink to='/'>
                <img
                    src={logo}
                    alt='Spotify logo'
                    style={{
                        maxWidth: '131px',
                        width: '100%',
                        height: '40px',
                        color: 'white',
                    }}
                />
            </StyledLogoLink>
        </LogoBox>
    )
}
