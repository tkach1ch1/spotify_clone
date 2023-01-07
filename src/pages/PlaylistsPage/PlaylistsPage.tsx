import { MainContainer } from '../../layouts/MainContainer/MainContainer'
import { useAppSelector } from 'src/hooks/hooks'
import { ExistPlaylists } from './components/ExistPlaylists'
import { NoPlaylists } from './components/NoPlaylists'

export const PlaylistsPage = () => {
    const allPlaylistsArray = useAppSelector((state) => state.allPlaylists.allPlaylistsArray)

    return (
        <MainContainer>
            {!!allPlaylistsArray.length ? <ExistPlaylists /> : <NoPlaylists />}
        </MainContainer>
    )
}
