import { Box } from '@mui/material'
import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { StyledSongsBox } from 'src/pages/CreatePlaylistPage/style'
import { SearchSongSection } from './SearchSongSection'
import { SongsList } from './SongsList'
import { SongsListHeader } from './SongsListHeader'

interface SongsSectionProps {
    songsArray: AllPlaylistTracksElements[] | undefined
    playlistCollab: boolean
}

export const SongsSection = ({ songsArray, playlistCollab }: SongsSectionProps) => {
    return (
        <Box>
            <StyledSongsBox tabIndex={0}>
                {songsArray && !!songsArray.length ? <SongsListHeader /> : null}
                <SongsList songsArray={songsArray} />
            </StyledSongsBox>
            {playlistCollab ? <SearchSongSection /> : null}
        </Box>
    )
}
