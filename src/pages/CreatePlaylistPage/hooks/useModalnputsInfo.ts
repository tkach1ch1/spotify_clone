import { useAppDispatch } from './../../../hooks/hooks'
import { useCurrentPlaylist } from '../hooks/useCurrentPlaylist'
import React, { useState } from 'react'
import { changePlaylistDetails } from 'src/redux/allPlaylistsReducer'

export const useModalInputsInfo = () => {
    const { currentPlaylist } = useCurrentPlaylist()

    //Input's value
    const [name, setName] = useState(currentPlaylist?.playlistName)
    const [description, setDescription] = useState(currentPlaylist?.playlistDescription)

    //Input's validation
    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value)
    }

    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()

    //Sending changed playlist info to redux and close modal window
    const onButtonAction = (handleClose: () => void) => {
        setLoading(true)
        if (name?.trim()) {
            const changedCurrentPlaylist = {
                ...currentPlaylist,
                playlistName: name.trim(),
                playlistDescription: description,
            }

            dispatch(changePlaylistDetails(changedCurrentPlaylist))
            setLoading(false)
            handleClose()
        }
    }
    return { name, description, onNameChange, onDescriptionChange, loading, onButtonAction }
}
