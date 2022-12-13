import { StyledTextArea, TextFieldName } from '../style'
import React, { useState } from 'react'
import { Box, ClickAwayListener } from '@mui/material'

interface ModalDescriptionAreaProps {
    onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    value: string | undefined
}

export const ModalDescriptionArea = ({ onDescriptionChange, value }: ModalDescriptionAreaProps) => {
    //On click show Input title
    const [descriptionInput, setDescriptionInput] = useState(false)

    return (
        <ClickAwayListener onClickAway={() => setDescriptionInput(false)}>
            <Box sx={{ position: 'relative' }}>
                <StyledTextArea
                    style={{ height: '124px' }}
                    onClick={() => setDescriptionInput(true)}
                    placeholder='Add an optional description'
                    onChange={onDescriptionChange}
                    value={value}
                />
                {descriptionInput ? <TextFieldName>Description</TextFieldName> : null}
            </Box>
        </ClickAwayListener>
    )
}
