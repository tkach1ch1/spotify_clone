import { Box } from '@mui/material'
import { StyledTextField, TextFieldName } from 'src/pages/CreatePlaylistPage/style'
import { ClickAwayListener } from '@mui/material'
import { useState } from 'react'

interface NameInputProps {
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string | undefined
}
export const ModalNameInput = ({ onNameChange, value }: NameInputProps) => {
    //On click show Input title
    const [nameInput, setNameInput] = useState(false)

    return (
        <ClickAwayListener
            onClickAway={() => {
                setNameInput(false)
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <StyledTextField
                    type='text'
                    onClick={() => setNameInput(true)}
                    value={value}
                    onChange={onNameChange}
                    placeholder='Add a name'
                    maxLength={50}
                />
                {nameInput ? <TextFieldName>Name</TextFieldName> : null}
            </Box>
        </ClickAwayListener>
    )
}
