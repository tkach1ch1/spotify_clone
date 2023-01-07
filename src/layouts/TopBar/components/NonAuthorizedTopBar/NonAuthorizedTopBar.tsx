import { memo } from 'react'
import {
    DividingLine,
    NonAuthorizedTopBarBox,
    TopNavBarAndAuthorizationBox,
} from 'src/layouts/TopBar/style'
import { BackAndForwardButtons } from '../BackAndForwardButtons'
import { Authorization } from './components/Authorization'
import { BurgerMenu } from './components/BurgerMenu'
import { TopNavBar } from './components/TopNavBar'

export const NonAuthorizedTopBar = memo(() => {
    return (
        <NonAuthorizedTopBarBox>
            <BackAndForwardButtons />

            <TopNavBarAndAuthorizationBox>
                <TopNavBar />
                <DividingLine />
                <Authorization />
                <BurgerMenu />
            </TopNavBarAndAuthorizationBox>
        </NonAuthorizedTopBarBox>
    )
})
