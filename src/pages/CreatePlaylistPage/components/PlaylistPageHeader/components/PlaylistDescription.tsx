import { Box } from '@mui/material'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { PlaylistDescriptionBox } from 'src/pages/CreatePlaylistPage/style'
import { PlaylistInfoProps } from './PlaylistInfo'

export const PlaylistDescription = ({ handleOpen, onEnterOpen }: PlaylistInfoProps) => {
    const { addedPlaylist } = useAddedPlaylist()

    return (
        <>
            {!!addedPlaylist?.playlistDescription ? (
                <PlaylistDescriptionBox
                    tabIndex={0}
                    onClick={handleOpen}
                    onKeyDown={onEnterOpen}
                >
                    <Box>{addedPlaylist?.playlistDescription}</Box>
                </PlaylistDescriptionBox>
            ) : null}
        </>
    )
}
