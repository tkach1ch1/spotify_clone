import { useAppSelector } from './../../../hooks/hooks'
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
}

export const usePlaylistTracks = () => {
    const [allPlaylistTracks, setAllPlaylistTracks] = useState<AllPlaylistTracksElements[]>([])

    const { getToken, getPlaylistTracks } = APIController

    const playlistId = useAppSelector((state) => state.playlist.playlistInfo.playlistId)
    //Geting all genres from API
    useEffect(() => {
        try {
            //Taking data from API
            const fetchedData = async () => {
                try {
                    const token = await getToken()
                    const tracks = await getPlaylistTracks(token, playlistId)
                    setAllPlaylistTracks(tracks.map((elem: any) => elem.track))
                } catch (error) {
                    console.log('Fetched data error: ' + error)
                }
            }
            fetchedData()
        } catch (error) {
            console.log('Error: ' + error)
        }
    }, [getToken, getPlaylistTracks, playlistId])
    return { allPlaylistTracks }
}
