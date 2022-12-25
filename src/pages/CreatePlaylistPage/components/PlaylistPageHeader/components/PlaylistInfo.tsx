import { PlayListInfoBox } from '../../../style'
import { Box } from '@mui/system'
import { PlaylistTitle } from './PlaylistTitle'
import { PlaylistDescription } from './PlaylistDescription'
import { PlaylistDetails } from './PlaylistDetails'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'

export interface PlaylistInfoProps {
    handleOpen: () => void
    onEnterOpen: (e: React.KeyboardEvent) => void
}

export const PlaylistInfo = ({ handleOpen, onEnterOpen }: PlaylistInfoProps) => {
    const { addedPlaylist } = useAddedPlaylist()

    //Sum duration of all playlist tracks
    const allCreatedPlaylistTracksDuration = addedPlaylist?.playlistTracks
        ?.map((elem) => elem.duration_ms)
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
            <PlaylistTitle
                handleOpen={handleOpen}
                onEnterOpen={onEnterOpen}
            />
            <PlaylistDescription
                handleOpen={handleOpen}
                onEnterOpen={onEnterOpen}
            />

            <PlaylistDetails
                allPlaylistTracksLength={addedPlaylist?.playlistTracks?.length}
                allTracksDuration={allCreatedPlaylistTracksDuration}
            />
        </PlayListInfoBox>
    )
}
