import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { HoveredGreenPlayButton } from 'src/components/HoveredGreenPlayButton'
import {
    DefaultPlaylistImageBox,
    ElementBox,
    ElementDescription,
    ElementName,
    StyledImg,
} from '../style'
import { FiMusic } from 'react-icons/fi'
import React from 'react'

interface ContentElementProps {
    elemName?: string
    elemDescription?: string
    elemImage?: string
    navigationPath?: string
}

export const ContentElement = ({
    elemName = 'Deep Focus',
    elemDescription = ' Keep calm and focus with ambient and positive music',
    elemImage,
    navigationPath,
}: ContentElementProps) => {
    const navigate = useNavigate()

    const onEnterToElementNavigate = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            navigationPath && navigate(navigationPath)
        }
    }

    return (
        <ElementBox
            tabIndex={0}
            onClick={() => navigationPath && navigate(navigationPath)}
            onKeyDown={onEnterToElementNavigate}
        >
            <Box
                sx={{
                    marginBottom: '16px',
                    position: 'relative',
                }}
            >
                {elemImage ? (
                    <StyledImg
                        src={elemImage}
                        alt='Playlist'
                    />
                ) : (
                    <DefaultPlaylistImageBox>
                        <FiMusic
                            style={{
                                width: '60px',
                                height: '60px',
                            }}
                        />
                    </DefaultPlaylistImageBox>
                )}

                <HoveredGreenPlayButton
                    bottom='10px'
                    right='5px'
                />
            </Box>
            <ElementName>{elemName}</ElementName>
            <ElementDescription>{elemDescription}</ElementDescription>
        </ElementBox>
    )
}
