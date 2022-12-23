import { Box } from '@mui/material'
import { useCreatedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCreatedPlaylist'
import { PlaylistDescriptionBox } from 'src/pages/CreatePlaylistPage/style'
import { PlaylistInfoProps } from './PlaylistInfo'

export const PlaylistDescription = ({ handleOpen, onEnterOpen }: PlaylistInfoProps) => {
    const { createdPlaylist } = useCreatedPlaylist()

    return (
        <>
            {!!createdPlaylist?.playlistDescription ? (
                <PlaylistDescriptionBox
                    tabIndex={0}
                    onClick={handleOpen}
                    onKeyDown={onEnterOpen}
                >
                    <Box>{createdPlaylist?.playlistDescription}</Box>
                </PlaylistDescriptionBox>
            ) : null}
        </>
    )
}
