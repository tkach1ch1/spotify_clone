import { ReactNode } from 'react'
import { MainViewContainer, MainViewBox } from '../MainContainer/style'
import { useUserContext } from 'src/context/UserContext'
import { useWindowSize } from 'usehooks-ts'

interface MainViewProps {
    children: ReactNode
}

export const MainView = ({ children }: MainViewProps) => {
    const { user } = useUserContext()

    const { width } = useWindowSize()

    return (
        <main>
            <section>
                <MainViewContainer
                    className='main-view'
                    //   Changing main view height
                    height={
                        user
                            ? 'calc((100vh - 65px) - 90px)'
                            : !user && width < 927
                            ? 'calc((100vh - 65px) - 90px)'
                            : !user
                            ? 'calc((100vh - 65px) - 66px)'
                            : '0'
                    }
                >
                    <MainViewBox>{children}</MainViewBox>
                </MainViewContainer>
            </section>
        </main>
    )
}
