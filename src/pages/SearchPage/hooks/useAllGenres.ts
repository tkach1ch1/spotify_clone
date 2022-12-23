import { APIController } from 'src/controllers/APIController'
import { useEffect, useState } from 'react'

interface IconsElements {
    url: string
}

export interface GenresElements {
    name: string
    id: string
    icons: IconsElements[]
}

export const useAllGenres = () => {
    const [allGenres, setAllGenres] = useState<GenresElements[]>([])

    const { getToken, getGenres } = APIController

    //Geting all genres from API
    useEffect(() => {
        try {
            //Taking data from API
            const fetchedData = async () => {
                try {
                    const token = await getToken()
                    const genres = await getGenres(token)
                    setAllGenres(genres)
                } catch (error) {
                    console.log('Fetched data error: ' + error)
                }
            }
            fetchedData()
        } catch (error) {
            console.log('Error: ' + error)
        }
    }, [getToken, getGenres])
    return { allGenres }
}
