import { ModalHeader } from './ModalHeader'
import { MainModalBox, StyledModal } from '../style'
import { MainModalSection } from './MainModalSection'
import { InputAlert } from './InputAlert'
import { useState } from 'react'
import { ImageUploadAgreeText } from './ImageUploadAgreeText'

interface ModalProps {
    open: boolean
    handleClose: () => void
}

export const ChangePlaylistInfoModal = ({ open, handleClose }: ModalProps) => {
    //Taking name input state from ModalInputs component to show Alert if input is empty
    const [inputNameInfo, setInputNameInfo] = useState<string | undefined>('input')

    const nameInputHandler = (value: string | undefined) => {
        setInputNameInfo(value)
    }

    return (
        <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <MainModalBox>
                <ModalHeader handleClose={handleClose} />
                {inputNameInfo === '' ? <InputAlert /> : null}
                <MainModalSection
                    handleClose={handleClose}
                    nameInputHandler={nameInputHandler}
                />
                <ImageUploadAgreeText />
            </MainModalBox>
        </StyledModal>
    )
}
