import { APIController } from 'src/controllers/APIController'
import { useEffect, useState } from 'react'

interface IconsElements {
    url: string
}

export interface GenresElements {
    name: string
    id: string
    icons: IconsElements[]
    bgColor?: string
}

export const useAllGenres = () => {
    const [allGenres, setAllGenres] = useState<GenresElements[]>([])
    const [loading, setLoading] = useState(false)
    const { getToken, getGenres } = APIController

    //Geting all genres from API
    useEffect(() => {
        setLoading(true)

        try {
            //Taking data from API
            const fetchedData = async () => {
                try {
                    const token = await getToken()
                    const genres = await getGenres(token)
                    setAllGenres(genres)
                    setLoading(false)
                } catch (error) {
                    console.log('Fetched data error: ' + error)
                }
            }
            fetchedData()
        } catch (error) {
            console.log('Error: ' + error)
        }
    }, [getToken, getGenres])
    return { allGenres, loading }
}
