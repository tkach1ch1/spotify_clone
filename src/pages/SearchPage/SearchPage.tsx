import { MainContainer } from '../../layouts/MainContainer/MainContainer'
import { AllGenresSection } from './components/AllGenresSection'
import { SearchPageBox, SearchPageTitle } from './style'
import { Loader } from 'src/components/Loader'
import { useAllGenres } from './hooks/useAllGenres'

export const SearchPage = () => {
    const { loading } = useAllGenres()

    return (
        <MainContainer>
            <SearchPageBox>
                <SearchPageTitle>Browse all</SearchPageTitle>
                {loading ? <Loader /> : <AllGenresSection />}
            </SearchPageBox>
        </MainContainer>
    )
}
