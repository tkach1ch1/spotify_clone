import { APIController } from 'src/controllers/APIController'
import { useState, useEffect } from 'react'

interface ArtistsElement {
    id: string
    name: string
}

interface ImagesElements {
    url: string
}

export interface AllPlaylistTracksElements {
    duration_ms: number
    name: string
    id: string
    artists: ArtistsElement[]
    album: { id: string; name: string; images: ImagesElements[]; release_date: string }
    dateAdded: string
    preview_url: string
    isPlaying?: boolean
    current_duration?: number
}

export const usePlaylistTracks = (playlistId: string) => {
    const [allPlaylistTracks, setAllPlaylistTracks] = useState<AllPlaylistTracksElements[]>([])

    const { getToken, getPlaylistTracks } = APIController

    //Geting all genres from API
    useEffect(() => {
        try {
            if (!!playlistId) {
                //Taking data from API
                const fetchedData = async () => {
                    try {
                        const token = await getToken()
                        const tracks = await getPlaylistTracks(token, playlistId)
                        const playlistTracks = tracks && tracks.map((elem: any) => elem.track)
                        playlistTracks && setAllPlaylistTracks(playlistTracks)
                    } catch (error) {
                        console.log('Fetched data error: ' + error)
                    }
                }
                fetchedData()
            }
        } catch (error) {
            console.log('Error: ' + error)
        }
    }, [getToken, getPlaylistTracks, playlistId])

    return { allPlaylistTracks }
}
