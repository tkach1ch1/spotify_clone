import { StyledUpgradeLink, UpgradeButtonBox } from 'src/layouts/TopBar/style'

export const UpgradeButton = () => {
    return (
        <UpgradeButtonBox
            title='Upgrade to Premium'
            to='/premium'
            target='_blank'
        >
            <StyledUpgradeLink>Upgrade</StyledUpgradeLink>
        </UpgradeButtonBox>
    )
}
