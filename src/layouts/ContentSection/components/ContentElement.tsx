import { Box } from '@mui/material'
import { GreenPlayButton } from 'src/components/GreenPlayButton'
import {
    ElementBox,
    ElementDescription,
    ElementName,
    HoveredGreenPlayButtonBox,
    StyledImg,
} from '../style'

export const ContentElement = () => {
    return (
        <ElementBox tabIndex={0}>
            <Box sx={{ marginBottom: '16px', position: 'relative' }}>
                <StyledImg
                    src='https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5'
                    alt='Sea'
                />
                <HoveredGreenPlayButtonBox
                    id='hoveredGreenButton'
                    sx={{ position: 'absolute', bottom: '10px', right: '5px' }}
                >
                    <GreenPlayButton
                        width='50px'
                        height='50px'
                    />
                </HoveredGreenPlayButtonBox>
            </Box>
            <ElementName>Deep Focus</ElementName>
            <ElementDescription>
                Keep calm and focus with ambient and positive music
            </ElementDescription>
        </ElementBox>
    )
}
