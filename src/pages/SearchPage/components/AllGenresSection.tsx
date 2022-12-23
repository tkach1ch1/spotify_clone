import { useAllGenres } from '../hooks/useAllGenres'
import { nanoid } from 'nanoid'
import { AllGenresBox } from '../style'
import { Genre } from './Genre'

export const AllGenresSection = () => {
    const { allGenres } = useAllGenres()

    const getRandomColor = () => {
        let color = Math.floor(Math.random() * 16777215).toString(16)
        return color
    }
    return (
        <AllGenresBox>
            {allGenres.map((elem) => (
                <Genre
                    key={nanoid()}
                    genreName={elem.name}
                    genreId={elem.id}
                    genreIcon={elem.icons[0].url}
                    bgColor={getRandomColor()}
                />
            ))}
        </AllGenresBox>
    )
}
