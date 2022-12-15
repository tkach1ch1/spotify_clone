import { AuthorizedTopBarBox, UpgradeAndProfileBox } from '../../style'
import { BackAndForwardButtons } from '../BackAndForwardButtons'
import { UpgradeButton } from './components/UpgradeButton'
import { ProfileButton } from './components/ProfileButton'
import { memo } from 'react'

export const AuthorizedTopBar = memo(() => {
    return (
        <AuthorizedTopBarBox>
            <BackAndForwardButtons />
            <UpgradeAndProfileBox>
                <UpgradeButton />
                <ProfileButton />
            </UpgradeAndProfileBox>
        </AuthorizedTopBarBox>
    )
})
