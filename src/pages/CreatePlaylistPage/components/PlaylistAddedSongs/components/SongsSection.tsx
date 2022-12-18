import { useCurrentPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCurrentPlaylist'
import { SongsListMainContainer, StyledSongsBox } from 'src/pages/CreatePlaylistPage/style'
import { SearchSongSection } from './SearchSongSection'
import { SongsList } from './SongsList'
import { SongsListHeader } from './SongsListHeader'

export const SongsSection = () => {
    const { currentPlaylist } = useCurrentPlaylist()
    return (
        <SongsListMainContainer>
            <StyledSongsBox tabIndex={0}>
                {currentPlaylist && !!currentPlaylist.playlistTracks.length ? (
                    <SongsListHeader />
                ) : null}
                <SongsList />
            </StyledSongsBox>
            <SearchSongSection />
        </SongsListMainContainer>
    )
}
