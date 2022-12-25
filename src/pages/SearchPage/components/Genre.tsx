import { useAppDispatch } from 'src/hooks/hooks'
import { getGenreInfo } from 'src/redux/genreReducer'
import { GenreIconBox, GenreLink, GenreName } from '../style'

interface GenreProps {
    genreName: string
    genreIcon: string
    genreId: string
    bgColor: string
}

export const Genre = ({ genreName, genreIcon, genreId, bgColor }: GenreProps) => {
    const dispatch = useAppDispatch()

    const navigateAndGetGenreIdOnClick = () => {
        dispatch(getGenreInfo({ genreId: genreId, genreName: genreName }))
    }

    return (
        <GenreLink
            onClick={navigateAndGetGenreIdOnClick}
            to={`/genre/${genreId}`}
            style={{ backgroundColor: bgColor }}
        >
            <GenreName>{genreName}</GenreName>
            <GenreIconBox>
                <img
                    src={genreIcon}
                    alt={genreName}
                    style={{ width: '105px', height: '105px' }}
                />
            </GenreIconBox>
        </GenreLink>
    )
}
