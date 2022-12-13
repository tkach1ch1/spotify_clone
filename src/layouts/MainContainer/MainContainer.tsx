import { NavBar } from '../NavBar/NavBar'
import { NowPlayingBar } from '../NowPlayingBar/NowPlayingBar'
import { TopBar } from '../TopBar/TopBar'
import { TopContainer } from './style'
import { ReactNode } from 'react'
import { MainView } from '../MainView/MainView'

interface MainContainerProps {
    children: ReactNode
}

export const MainContainer = ({ children }: MainContainerProps) => {
    return (
        <TopContainer>
            <TopBar />
            <NavBar />
            <NowPlayingBar />
            <MainView>{children}</MainView>
        </TopContainer>
    )
}
