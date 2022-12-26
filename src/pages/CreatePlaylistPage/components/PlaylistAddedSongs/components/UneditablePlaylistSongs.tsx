import { Box } from '@mui/material'
import { GreenPlayButton } from 'src/components/GreenPlayButton'
import { PlayButtonBox } from 'src/pages/CreatePlaylistPage/style'
import { SongsSection } from './SongsSection'
import { usePlaylistTracks } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { LikeButton } from './LikeButton'
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks'
import { useEffect } from 'react'
import { getPlaylistInfo, getPlaylistTracks } from 'src/redux/playlistReducer'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { useOnButtonAddRemove } from 'src/hooks/useOnButtonAddRemove'

export const UneditablePlaylistSongs = () => {
    const dispatch = useAppDispatch()

    //--//
    //Finding existed playlist
    const { addedPlaylist, allPlaylistsArray } = useAddedPlaylist()
    const { allPlaylistTracks } = usePlaylistTracks()

    //Current spotify playlist, that not added yet
    const notAddedPlaylist = useAppSelector((state) => state.playlist.playlistInfo)

    //Add playlist tracks to current playlist in playlistReducer
    //to get this tracks if the playlist will added to all user Playlists
    useEffect(() => {
        if (
            !allPlaylistsArray.find((elem) => elem.playlistId === notAddedPlaylist.playlistId)
                ?.playlistTracks.length
        ) {
            dispatch(getPlaylistTracks(allPlaylistTracks))
        }
    }, [dispatch, allPlaylistTracks, allPlaylistsArray, notAddedPlaylist.playlistId])

    //--//

    const { openSnackbar, onButtonAddPlaylist, onButtonRemovePlaylist } = useOnButtonAddRemove()

    const onButtonClickAdd = () => {
        return onButtonAddPlaylist(notAddedPlaylist)
    }

    const onButtonClickRemove = () => {
        if (addedPlaylist) {
            return onButtonRemovePlaylist(addedPlaylist)
        }
    }
    //Overwrite playlistReducer with added playlist to stay on this playlist
    //in case when playlist will be removed and not to go to memorized previous playlist in playlisReducer
    useEffect(() => {
        if (allPlaylistsArray.find((elem) => elem.playlistId === addedPlaylist?.playlistId)) {
            dispatch(getPlaylistInfo(addedPlaylist))
        }
    })

    return (
        <Box>
            {!!allPlaylistTracks.length ? (
                <>
                    <PlayButtonBox>
                        <GreenPlayButton
                            width='58px'
                            height='58px'
                            tabIndex={0}
                        />
                        <LikeButton
                            sx={{ width: '40px', height: '40px' }}
                            addTitle='Add to Your Library'
                            removeTitle='Remove from Your Library'
                            onButtonAdd={onButtonClickAdd}
                            onButtonRemove={onButtonClickRemove}
                            alreadyAddedByUser={!!addedPlaylist}
                            openSnackbar={openSnackbar}
                        />
                    </PlayButtonBox>

                    <SongsSection
                        songsArray={addedPlaylist?.playlistTracks || allPlaylistTracks}
                        playlistCollab={false}
                    />
                </>
            ) : null}
        </Box>
    )
}
