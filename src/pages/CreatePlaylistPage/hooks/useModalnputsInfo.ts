import { useAppDispatch } from './../../../hooks/hooks'
import { useCreatedPlaylist } from './useCreatedPlaylist'
import React, { useState } from 'react'
import { changePlaylistDetails } from 'src/redux/allPlaylistsReducer'

export const useModalInputsInfo = () => {
    const { createdPlaylist } = useCreatedPlaylist()

    //Input's value
    const [name, setName] = useState(createdPlaylist?.playlistName)
    const [description, setDescription] = useState(createdPlaylist?.playlistDescription)

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
                ...createdPlaylist,
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
