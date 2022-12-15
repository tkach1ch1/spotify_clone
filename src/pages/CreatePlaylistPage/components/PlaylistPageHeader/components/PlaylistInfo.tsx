import { PlayListInfoBox } from '../../../style'
import { Box } from '@mui/system'
import { PlaylistTitle } from './PlaylistTitle'
import { PlaylistDescription } from './PlaylistDescription'

export interface PlaylistInfoProps {
    handleOpen: () => void
    onEnterOpen: (e: React.KeyboardEvent) => void
}

export const PlaylistInfo = ({ handleOpen, onEnterOpen }: PlaylistInfoProps) => {
    return (
        <PlayListInfoBox>
            <Box
                sx={{
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    fontWeight: '500',
                }}
            >
                Playlist
            </Box>
            <PlaylistTitle
                handleOpen={handleOpen}
                onEnterOpen={onEnterOpen}
            />
            <PlaylistDescription
                handleOpen={handleOpen}
                onEnterOpen={onEnterOpen}
            />

            <Box sx={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Bogdan Tkach</Box>
        </PlayListInfoBox>
    )
}
