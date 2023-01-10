import { Loader } from 'src/components/Loader'
import { MainContainer } from 'src/layouts/MainContainer/MainContainer'
import { GenrePageTitleBox, GenrePageTitle } from '../SearchPage/style'
import { AllGenrePlaylists } from './components/AllGenrePlaylists'
import { useGenrePlaylists } from './hooks/useGenrePlaylists'

export const GenrePage = () => {
    const { genrePlaylists, genreName, loading } = useGenrePlaylists()

    return (
        <MainContainer>
            <GenrePageTitleBox>
                <GenrePageTitle>{genreName}</GenrePageTitle>
            </GenrePageTitleBox>
            {loading ? (
                <Loader />
            ) : (
                <AllGenrePlaylists playlistsArray={!!genrePlaylists && genrePlaylists} />
            )}
        </MainContainer>
    )
}
