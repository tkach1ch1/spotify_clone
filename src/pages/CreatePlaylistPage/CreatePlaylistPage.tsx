import { MainContainer } from 'src/layouts/MainContainer/MainContainer'
import { PlaylistImage } from './components/PlaylistImage'
import { PlaylistInfo } from './components/PlaylistInfo'
import { GradientBackgound, MainPlaylistTitleBox, TitleBackground } from './style'
import { ChangePlaylistInfoModal } from './components/ChangePlaylistInfoModal'
import { useModal } from './hooks/useModal'
import { theme } from 'src/assets/theme'

export const CreatePlaylistPage = () => {
    const { open, handleClose, handleOpen } = useModal()

    return (
        <MainContainer>
            <TitleBackground>
                <GradientBackgound>
                    <MainPlaylistTitleBox>
                        <PlaylistImage
                            handleOpen={handleOpen}
                            sx={{
                                width: '230px',
                                height: '230px',
                                [theme.breakpoints.down('lg')]: {
                                    width: '192px',
                                    height: '192px',
                                    minWidth: '192px',
                                    minHeight: '192px',
                                },
                            }}
                        />
                        <PlaylistInfo handleOpen={handleOpen} />
                    </MainPlaylistTitleBox>
                </GradientBackgound>
            </TitleBackground>
            {open ? (
                <ChangePlaylistInfoModal
                    open={open}
                    handleClose={handleClose}
                />
            ) : null}
        </MainContainer>
    )
}
