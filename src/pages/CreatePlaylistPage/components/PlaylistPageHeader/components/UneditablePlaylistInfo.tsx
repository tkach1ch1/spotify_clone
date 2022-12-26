import { Box } from '@mui/system'
import { PlaylistElementProps } from 'src/assets/types/types'
import { useFontSizeChange } from 'src/hooks/useFontSizeChange'
import {
    PlaylistDescriptionBox,
    PlayListInfoBox,
    StyledPlaylistTitle,
} from 'src/pages/CreatePlaylistPage/style'
import { usePlaylistTracks } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { PlaylistDetails } from './PlaylistDetails'

interface UneditablePlaylistInfoProps {
    playlistInfo: PlaylistElementProps
}

export const UneditablePlaylistInfo = ({ playlistInfo }: UneditablePlaylistInfoProps) => {
    const { lengthCheck } = useFontSizeChange()
    const { allPlaylistTracks } = usePlaylistTracks()

    //Sum duration of all playlist tracks
    const allPlaylistTracksDuration = allPlaylistTracks
        .map((elem) => elem.duration_ms)
        .reduce((prev, cur) => prev + cur, 0)

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

            {/* Playlist name */}

            <StyledPlaylistTitle
                sx={!!playlistInfo ? lengthCheck(playlistInfo.playlistName) : null}
                style={{ cursor: 'initial' }}
            >
                {playlistInfo.playlistName}
            </StyledPlaylistTitle>

            {/* Playlist description  */}

            <PlaylistDescriptionBox style={{ cursor: 'initial' }}>
                <Box>{playlistInfo.playlistDescription}</Box>
            </PlaylistDescriptionBox>

            {/* Playlist owner, tracks amount and there duration */}

            <PlaylistDetails
                allTracksDuration={allPlaylistTracksDuration}
                playlistOwnerName={playlistInfo.playlistOwnerName}
                allPlaylistTracksLength={allPlaylistTracks.length}
            />
        </PlayListInfoBox>
    )
}
