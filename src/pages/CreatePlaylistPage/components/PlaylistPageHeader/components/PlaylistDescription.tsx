import { Box } from '@mui/material'
import { StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { useCurrentPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCurrentPlaylist'
import { PlaylistDescriptionBox } from 'src/pages/CreatePlaylistPage/style'
import { PlaylistInfoProps } from './PlaylistInfo'

export const PlaylistDescription = ({ handleOpen, onEnterOpen }: PlaylistInfoProps) => {
    const { currentPlaylist } = useCurrentPlaylist()

    return (
        <StyledTooltip
            placement='bottom-start'
            title={currentPlaylist?.playlistDescription}
            enterDelay={500}
        >
            <>
                {!!currentPlaylist?.playlistDescription ? (
                    <PlaylistDescriptionBox
                        tabIndex={0}
                        onClick={handleOpen}
                        onKeyDown={onEnterOpen}
                    >
                        <Box>{currentPlaylist?.playlistDescription}</Box>
                    </PlaylistDescriptionBox>
                ) : null}
            </>
        </StyledTooltip>
    )
}
