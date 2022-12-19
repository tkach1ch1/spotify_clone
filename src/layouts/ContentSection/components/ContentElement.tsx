import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { HoveredGreenPlayButton } from 'src/components/HoveredGreenPlayButton'
import { ElementBox, ElementDescription, ElementName, PlaylistImageBox, StyledImg } from '../style'
import { FiMusic } from 'react-icons/fi'
import React from 'react'

interface ContentElementProps {
    elemName?: string
    elemDescription?: string
    elemImage?: string
    navigationPath?: string
    isPlayable?: boolean
}

export const ContentElement = ({
    elemName = 'Deep Focus',
    elemDescription = ' Keep calm and focus with ambient and positive music',
    elemImage,
    navigationPath,
    isPlayable,
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
                    position: 'relative',
                    marginBottom: '16px',
                }}
            >
                {!!elemImage ? (
                    <PlaylistImageBox>
                        <StyledImg
                            src={elemImage}
                            alt='Playlist'
                        />
                    </PlaylistImageBox>
                ) : (
                    <PlaylistImageBox>
                        <FiMusic
                            style={{
                                width: '100%',
                                height: '100%',
                                color: 'transparent',
                            }}
                        />
                        <FiMusic
                            style={{
                                width: '60px',
                                height: '60px',
                                position: 'absolute',
                            }}
                        />
                    </PlaylistImageBox>
                )}

                {/* If playlist has tracks PlayButton will appear */}
                {isPlayable ? (
                    <HoveredGreenPlayButton
                        bottom='5px'
                        right='5px'
                    />
                ) : null}
            </Box>
            <ElementName>{elemName}</ElementName>
            <ElementDescription>{elemDescription}</ElementDescription>
        </ElementBox>
    )
}
