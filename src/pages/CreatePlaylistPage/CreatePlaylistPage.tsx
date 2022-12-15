import { MainContainer } from 'src/layouts/MainContainer/MainContainer'
import { PlaylistAddedSongs } from './components/PlaylistAddedSongs/PlaylistAddedSongs'
import { PlaylistPageHeader } from './components/PlaylistPageHeader/PlaylistPageHeader'

export const CreatePlaylistPage = () => {
    return (
        <MainContainer padding={'0'}>
            <PlaylistPageHeader />
            <PlaylistAddedSongs />
        </MainContainer>
    )
}
