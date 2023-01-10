import { useAllGenres } from '../hooks/useAllGenres'
import { nanoid } from 'nanoid'
import { AllGenresBox } from '../style'
import { Genre } from './Genre'
import { genreColor } from '../assets/genreColor'

export const AllGenresSection = () => {
    const { allGenres } = useAllGenres()

    //Adding to every genre bgColor
    const allGenresWithBgColor =
        allGenres && allGenres.map((elem, i) => ({ ...elem, bgColor: genreColor[i] }))

    return (
        <>
            <AllGenresBox>
                {allGenresWithBgColor &&
                    allGenresWithBgColor.map((elem) => (
                        <Genre
                            key={nanoid()}
                            genreName={elem.name}
                            genreId={elem.id}
                            genreIcon={elem.icons[0].url}
                            bgColor={elem.bgColor}
                        />
                    ))}
            </AllGenresBox>
        </>
    )
}
