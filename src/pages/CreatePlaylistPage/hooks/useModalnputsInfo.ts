import { useCurrentPlaylist } from '../hooks/useCurrentPlaylist'
import React, { useState } from 'react'

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
    return { name, description, onNameChange, onDescriptionChange }
}
