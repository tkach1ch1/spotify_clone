import { Box } from '@mui/system'
import { useAppSelector } from 'src/hooks/hooks'
import { MainContainer } from 'src/layouts/MainContainer/MainContainer'
import { UneditablePlaylistSongs } from './components/PlaylistAddedSongs/components/UneditablePlaylistSongs'
import { PlaylistAddedSongs } from './components/PlaylistAddedSongs/PlaylistAddedSongs'
import { UneditablePlaylistPageHeader } from './components/PlaylistPageHeader/components/UneditablePlaylistPageHeader'
import { EditablePlaylistPageHeader } from './components/PlaylistPageHeader/EditablePlaylistPageHeader'
import { useAddedPlaylist } from './hooks/useAddedPlaylist'

export const CreatePlaylistPage = () => {
    const playlist = useAppSelector((state) => state.playlist.playlistInfo)
    const { addedPlaylist } = useAddedPlaylist()

    return (
        //Own created playlists are editable, so we can change there info, add tracks etc.,
        //that's why we are rendering editable playlist layout
        //Spotify already existed playlists aren't editable, so we are rendering unenditable playlist layout
        <MainContainer>
            {addedPlaylist?.playlistCollab === true ? (
                <>
                    <Box sx={{ margin: '0 -32px' }}>
                        <EditablePlaylistPageHeader />
                    </Box>

                    <PlaylistAddedSongs />
                </>
            ) : playlist.playlistCollab === false ? (
                <>
                    <Box sx={{ margin: '0 -32px' }}>
                        <UneditablePlaylistPageHeader
                            // We are passing on either a playlist from certain genre playlist on SearchPage
                            //which are not in all user playlists or we are passing on addedPlaylist which already
                            //in all user playlists
                            currentUneditPlaylist={addedPlaylist || playlist}
                        />
                    </Box>

                    <UneditablePlaylistSongs />
                </>
            ) : null}
        </MainContainer>
    )
}
