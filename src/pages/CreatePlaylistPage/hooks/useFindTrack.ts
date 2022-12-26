import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { useEffect, useState } from 'react'
import { APIController } from 'src/controllers/APIController'
export const useFindTrack = (id: string) => {
    const [findTrack, setFindTrack] = useState<AllPlaylistTracksElements>()

    const { getToken, getTrack } = APIController

    //Geting all genres from API
    useEffect(() => {
        try {
            //Taking data from API
            const fetchedData = async () => {
                try {
                    const token = await getToken()
                    const track = await getTrack(token, id)
                    setFindTrack(track)
                } catch (error) {
                    console.log('Fetched data error: ' + error)
                }
            }
            fetchedData()
        } catch (error) {
            console.log('Error: ' + error)
        }
    }, [getToken, getTrack, id])
    return {
        findTrack,
    }
}
