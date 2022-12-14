import { useEffect, useState } from 'react'
import { APIController } from 'src/controllers/APIController'
import { useAppSelector } from 'src/hooks/hooks'

interface GenrePlaylistImage {
    url: string
}

export interface GenrePlaylistsElements {
    description: string
    name: string
    images: GenrePlaylistImage[]
    id: string
    collaborative: boolean
    owner: { display_name: string; id: string }
}

export const useGenrePlaylists = () => {
    const { getGenrePlaylists, getToken } = APIController

    const genreId = useAppSelector((state) => state.genreInfo.genre.genreId)
    const genreName = useAppSelector((state) => state.genreInfo.genre.genreName)

    const [genrePlaylists, setGenrePlaylists] = useState<GenrePlaylistsElements[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        try {
            //Taking data from API
            const fetchedData = async () => {
                try {
                    const token = await getToken()
                    const fetchGenrePlaylists = await getGenrePlaylists(token, genreId)
                    fetchGenrePlaylists && setGenrePlaylists(fetchGenrePlaylists)
                    setLoading(false)
                } catch (error) {
                    console.log('Fetched data error: ' + error)
                }
            }
            fetchedData()
        } catch (error) {
            console.log('Error: ' + error)
        }
    }, [getToken, getGenrePlaylists, genreId])

    return { genrePlaylists, genreName, loading }
}
