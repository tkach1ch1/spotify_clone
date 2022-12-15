import { SongsListMainContainer, StyledSongsBox } from 'src/pages/CreatePlaylistPage/style'
import { SearchSongSection } from './SearchSongSection'
import { SongsList } from './SongsList'
import { SongsListHeader } from './SongsListHeader'

export const SongsSection = () => {
    return (
        <SongsListMainContainer>
            <StyledSongsBox tabIndex={0}>
                <SongsListHeader />
                <SongsList />
            </StyledSongsBox>
            <SearchSongSection />
        </SongsListMainContainer>
    )
}
