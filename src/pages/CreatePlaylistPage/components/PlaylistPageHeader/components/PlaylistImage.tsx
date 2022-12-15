import { HoveredDefaultImage, PlaylistImageBox, StyledImageLabel } from '../../../style'
import { FiMusic } from 'react-icons/fi'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { theme } from 'src/assets/theme'

interface PlaylistImageProps {
    handleOpen?: () => void
    sx?: React.CSSProperties
}

export const PlaylistImage = ({ handleOpen, sx }: PlaylistImageProps) => {
    const [onImageHover, setOnImageHover] = useState(false)

    return (
        <Box sx={sx}>
            <PlaylistImageBox
                onMouseEnter={() => setOnImageHover(true)}
                onMouseLeave={() => setOnImageHover(false)}
                onClick={handleOpen}
            >
                <input
                    accept='image/*'
                    style={{ display: 'none' }}
                    id='raised-button-file'
                    type='file'
                />
                <StyledImageLabel htmlFor='raised-button-file'>
                    {onImageHover ? (
                        <HoveredDefaultImage>
                            <CreateOutlinedIcon sx={{ width: '55px', height: '55px' }} />
                            <Box>Choose photo</Box>
                        </HoveredDefaultImage>
                    ) : (
                        <Box sx={{ color: theme.palette.primary.dark }}>
                            <FiMusic
                                style={{
                                    width: '60px',
                                    height: '60px',
                                }}
                            />
                        </Box>
                    )}
                </StyledImageLabel>
            </PlaylistImageBox>
        </Box>
    )
}
