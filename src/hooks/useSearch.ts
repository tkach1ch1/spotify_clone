import { APIController } from 'src/controllers/APIController'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'

export interface FoundResultElements extends AllPlaylistTracksElements {
    type: string
}

interface ImagesElements {
    url: string
}

interface FoundArtistsAndAlbumsResults {
    id: string
    name: string
    images: ImagesElements[]
}

export interface FoundResultItems {
    tracks: { items: FoundResultElements[] }
    albums: { items: FoundArtistsAndAlbumsResults[] }
    artists: { items: FoundArtistsAndAlbumsResults[] }
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
