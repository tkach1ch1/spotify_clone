import { PlaylistImage } from './components/PlaylistImage'
import { PlaylistInfo } from './components/PlaylistInfo'
import {
    GradientBackground,
    MainPlaylistTitleBox,
    TitleBackground,
} from 'src/pages/CreatePlaylistPage/style'
import { ChangePlaylistInfoModal } from '../PlaylistModal/ChangePlaylistInfoModal'
import { useModal } from '../../hooks/useModal'
import { theme } from 'src/assets/theme'

export const EditablePlaylistPageHeader = () => {
    const { open, handleClose, handleOpen, onEnterOpen } = useModal()

    return (
        <>
            <TitleBackground
                sx={{
                    backgroundColor: 'rgb(83, 83, 83)',
                }}
            >
                <GradientBackground>
                    <MainPlaylistTitleBox>
                        <PlaylistImage
                            handleOpen={handleOpen}
                            sx={{
                                width: '232px',
                                height: '232px',
                                minWidth: '232px',
                                minHeight: '232px',
                                [theme.breakpoints.down('lg')]: {
                                    width: '192px',
                                    height: '192px',
                                    minWidth: '192px',
                                    minHeight: '192px',
                                },
                            }}
                        />
                        <PlaylistInfo
                            handleOpen={handleOpen}
                            onEnterOpen={onEnterOpen}
                        />
                    </MainPlaylistTitleBox>
                </GradientBackground>
            </TitleBackground>

            {/* Modal window */}
            {open ? (
                <ChangePlaylistInfoModal
                    open={open}
                    handleClose={handleClose}
                />
            ) : null}
        </>
    )
}
