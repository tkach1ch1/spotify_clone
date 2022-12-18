import { ModalNameAndDescriptionSection } from 'src/pages/CreatePlaylistPage/style'
import { useEffect } from 'react'
import { MainSectionModalProps } from './MainModalSection'
import { ModalNameInput } from './ModalNameInput'
import { ModalDescriptionArea } from './ModalDescriptionArea'
import { WhiteButton } from 'src/components/WhiteButton'
import { Box } from '@mui/system'
import { useModalInputsInfo } from '../../../hooks/useModalnputsInfo'

export const ModalInputs = ({ handleClose, nameInputHandler }: MainSectionModalProps) => {
    const { name, description, onNameChange, onDescriptionChange, loading, onButtonAction } =
        useModalInputsInfo()

    //Sending name state to ChangePlaylistInfoModal component to show Alert component if name === ''
    useEffect(() => {
        nameInputHandler(name)
    }, [name, nameInputHandler])

    return (
        <ModalNameAndDescriptionSection>
            <ModalNameInput
                onNameChange={onNameChange}
                value={name}
            />
            <ModalDescriptionArea
                onDescriptionChange={onDescriptionChange}
                value={description}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '-10px',
                }}
            >
                {loading ? null : (
                    <WhiteButton onButtonAction={() => onButtonAction(handleClose)}>
                        Save
                    </WhiteButton>
                )}
            </Box>
        </ModalNameAndDescriptionSection>
    )
}
