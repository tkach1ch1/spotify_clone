import { Box } from '@mui/system'
import { useAppSelector } from 'src/hooks/hooks'
import { MainContainer } from 'src/layouts/MainContainer/MainContainer'
import { UneditablePlaylistSongs } from './components/PlaylistAddedSongs/components/UneditablePlaylistSongs'
import { PlaylistAddedSongs } from './components/PlaylistAddedSongs/PlaylistAddedSongs'
import { UneditablePlaylistPageHeader } from './components/PlaylistPageHeader/components/UneditablePlaylistPageHeader'
import { EditablePlaylistPageHeader } from './components/PlaylistPageHeader/EditablePlaylistPageHeader'
import { useCreatedPlaylist } from './hooks/useCreatedPlaylist'

export const CreatePlaylistPage = () => {
    const playlist = useAppSelector((state) => state.playlist.playlistInfo)

    const { createdPlaylist } = useCreatedPlaylist()

    return (
        //Own created playlists are editable, so we can change there info, add tracks etc.,
        //that's why we are rendering editable playlist layout
        //Spotify already existed playlists aren't editable, so we are rendering unenditable playlist layout
        <MainContainer>
            {!!createdPlaylist && createdPlaylist.playlistCollab === true ? (
                <>
                    <Box sx={{ margin: '0 -32px' }}>
                        <EditablePlaylistPageHeader />
                    </Box>

                    <PlaylistAddedSongs />
                </>
            ) : playlist.playlistCollab === false ? (
                <>
                    <Box sx={{ margin: '0 -32px' }}>
                        <UneditablePlaylistPageHeader />
                    </Box>

                    <UneditablePlaylistSongs />
                </>
            ) : null}
        </MainContainer>
    )
}
