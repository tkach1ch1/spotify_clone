import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { HoveredGreenPlayButton } from 'src/components/HoveredGreenPlayButton'
import { ElementBox, ElementDescription, ElementName, PlaylistImageBox, StyledImg } from '../style'
import { FiMusic } from 'react-icons/fi'
import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

interface ContentElementProps {
    elemName?: string
    elemDescription?: string
    elemImage?: string
    navigationPath?: string
    isNotPlayable?: boolean
    index?: string
}

export const ContentElement = ({
    elemName = 'Deep Focus',
    elemDescription = ' Keep calm and focus with ambient and positive music',
    elemImage,
    navigationPath,
    isNotPlayable, //For playlists
    index, //For content on Home page
}: ContentElementProps) => {
    const navigate = useNavigate()

    //On Enter navigate
    const onEnterToElementNavigate = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            navigationPath && navigate(navigationPath)
        }
    }

    //Disable tabindex on elements in a row which are hidden
    const [inView, setInView] = useState(true)

    //Taking window width to force useEffect every time the width will change
    const { width } = useWindowSize()

    useEffect(() => {
        //Taking first element in a row
        const firstElement = document.querySelector('#first')
        //Taking another element according to it's id
        const element = document.querySelector(`#${index}`)
        //Compare if this two elements on the same hight in a row
        //If not, the hidden element will not tabindex
        if (firstElement?.getBoundingClientRect().top !== element?.getBoundingClientRect().top) {
            setInView(false)
        } else {
            setInView(true)
        }
    }, [width, index])

    return (
        <ElementBox
            id={index}
            tabIndex={!inView ? -1 : 0}
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

                {/* If playlist has no tracks PlayButton will disappear */}
                {isNotPlayable ? null : (
                    <HoveredGreenPlayButton
                        bottom='5px'
                        right='5px'
                    />
                )}
            </Box>
            <ElementName>{elemName}</ElementName>
            <ElementDescription>{elemDescription}</ElementDescription>
        </ElementBox>
    )
}
