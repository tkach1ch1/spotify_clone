import { APIController } from 'src/controllers/APIController'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface ImagesElements {
    url: string
}

export interface AlbumElements {
    name: string
    images: ImagesElements[]
}

export interface FoundResultElements {
    name: string
    artists: [{ name: string }]
    id: string
    album: AlbumElements
    images: ImagesElements[]
    type: string
    duration_ms: number
}

export interface FoundResultItems {
    albums: { items: FoundResultElements[] }
    tracks: { items: FoundResultElements[] }
    artists: { items: FoundResultElements[] }
}

export const useSearch = () => {
    const [search, setSearch] = useState('')
    const [foundResult, setFoundResult] = useState<FoundResultItems | undefined>()

    const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const clearSearchBarOnClick = () => {
        setSearch('')
    }

    //If locations aren't equel clears search input
    const location = useLocation()

    const [curLocation, setCurLocation] = useState('')

    useEffect(() => {
        if (curLocation !== location.pathname) {
            setSearch('')
            setCurLocation(location.pathname)
        }
    }, [curLocation, location.pathname])

    //Taking functions from APIController
    const { getSearch, getToken } = APIController

    //Searching for tracks and artists on search value
    useEffect(() => {
        try {
            //Taking data from API
            const fetchedData = async () => {
                try {
                    if (search) {
                        const token = await getToken()
                        const searchResult = await getSearch(token, search)
                        setFoundResult(searchResult)
                    }
                } catch (error) {
                    console.log('Fetched data error: ' + error)
                }
            }
            fetchedData()
            return setFoundResult(undefined)
        } catch (error) {
            console.log('Error: ' + error)
        }
    }, [search, getSearch, getToken])

    return {
        search,
        onSearchInputChange,
        clearSearchBarOnClick,
        foundResult,
    }
}
