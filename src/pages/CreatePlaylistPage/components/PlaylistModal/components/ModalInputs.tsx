import { ModalNameAndDescriptionSection } from 'src/pages/CreatePlaylistPage/style'
import { useEffect, useState } from 'react'
import { useAppDispatch } from 'src/hooks/hooks'
import { changePlaylistDetails } from 'src/redux/allPlaylistsReducer'
import { MainSectionModalProps } from './MainModalSection'
import { ModalNameInput } from './ModalNameInput'
import { ModalDescriptionArea } from './ModalDescriptionArea'
import { WhiteButton } from 'src/components/WhiteButton'
import { Box } from '@mui/system'
import { useModalInputsInfo } from '../../../hooks/useModalnputsInfo'
import { useCurrentPlaylist } from '../../../hooks/useCurrentPlaylist'

export const ModalInputs = ({ handleClose, nameInputHandler }: MainSectionModalProps) => {
    const { currentPlaylist } = useCurrentPlaylist()

    const { name, description, onNameChange, onDescriptionChange } = useModalInputsInfo()

    const [loading, setLoading] = useState(false)

    //Sending name state to ChangePlaylistInfoModal component to show Alert component if name === ''
    useEffect(() => {
        nameInputHandler(name)
    }, [name, nameInputHandler])

    const dispatch = useAppDispatch()

    //Sending changed playlist info to redux and close modal window
    const onButtonAction = () => {
        setLoading(true)
        if (name?.trim()) {
            dispatch(
                changePlaylistDetails({
                    playlistId: currentPlaylist?.playlistId,
                    playlistName: name?.trim(),
                    playlistDescription: description,
                })
            )
            setLoading(false)
            handleClose()
        }
    }

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
                {loading ? null : <WhiteButton onButtonAction={onButtonAction}>Save</WhiteButton>}
            </Box>
        </ModalNameAndDescriptionSection>
    )
}
