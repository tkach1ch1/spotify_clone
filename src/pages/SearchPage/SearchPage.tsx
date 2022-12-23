import { MainContainer } from '../../layouts/MainContainer/MainContainer'
import { AllGenresSection } from './components/AllGenresSection'
import { SearchPageBox, SearchPageTitle } from './style'

export const SearchPage = () => {
    return (
        <MainContainer>
            <SearchPageBox>
                <SearchPageTitle>Browse all</SearchPageTitle>
                <AllGenresSection />
            </SearchPageBox>
        </MainContainer>
    )
}
