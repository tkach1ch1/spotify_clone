import { MainContainer } from 'src/layouts/MainContainer/MainContainer'
import { GenrePageTitleBox, GenrePageTitle } from '../SearchPage/style'
import { AllGenrePlaylists } from './components/AllGenrePlaylists'
import { useGenrePlaylists } from './hooks/useGenrePlaylists'

export const GenrePage = () => {
    const { genrePlaylists, genreName } = useGenrePlaylists()

    return (
        <MainContainer>
            <GenrePageTitleBox>
                <GenrePageTitle>{genreName}</GenrePageTitle>
            </GenrePageTitleBox>
            <AllGenrePlaylists playlistsArray={!!genrePlaylists && genrePlaylists} />
        </MainContainer>
    )
}
