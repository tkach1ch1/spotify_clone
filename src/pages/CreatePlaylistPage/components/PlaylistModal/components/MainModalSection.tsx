import { ModalSection } from 'src/pages/CreatePlaylistPage/style'
import { PlaylistImage } from '../../PlaylistPageHeader/components/PlaylistImage'
import { Box } from '@mui/system'
import { ModalInputs } from './ModalInputs'

export interface MainSectionModalProps {
    handleClose: () => void
    nameInputHandler: (value: string | undefined) => void
}
export const MainModalSection = ({ handleClose, nameInputHandler }: MainSectionModalProps) => {
    return (
        <ModalSection>
            <Box>
                <PlaylistImage
                    sx={{
                        width: '176px',
                        height: '176px',
                    }}
                />
            </Box>
            <ModalInputs
                handleClose={handleClose}
                nameInputHandler={nameInputHandler}
            />
        </ModalSection>
    )
}
