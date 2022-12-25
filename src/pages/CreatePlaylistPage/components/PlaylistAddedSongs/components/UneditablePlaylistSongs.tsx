import { Box } from '@mui/material'
import { GreenPlayButton } from 'src/components/GreenPlayButton'
import { PlayButtonBox } from 'src/pages/CreatePlaylistPage/style'
import { SongsSection } from './SongsSection'
import { usePlaylistTracks } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import { LikeButton } from './LikeButton'
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks'
import { useEffect, useState } from 'react'
import { addPlaylist } from 'src/redux/allPlaylistsReducer'
import { Snackbar } from 'src/components/Snackbar'
import { getPlaylistTracks } from 'src/redux/playlistReducer'

export const UneditablePlaylistSongs = () => {
    const playlist = useAppSelector((state) => state.playlist.playlistInfo)
    const { allPlaylistTracks } = usePlaylistTracks()

    const allPlaylistsArray = useAppSelector((state) => state.allPlaylists.allPlaylistsArray)

    const isCurrentPlaylistInUserPlaylistsArray = allPlaylistsArray.find(
        (elem) => elem.playlistId === playlist.playlistId
    )

    const [openSnackbar, setOpenSnackbar] = useState(false)

    const dispatch = useAppDispatch()

    //Add playlist tracks to current playlist in playlistReducer
    //to get this tracks if the playlist will added to all user Playlists
    useEffect(() => {
        dispatch(getPlaylistTracks(allPlaylistTracks))
    }, [dispatch, allPlaylistTracks])

    const onButtonAdd = () => {
        setOpenSnackbar(true)
        dispatch(addPlaylist(playlist))

        setTimeout(() => {
            try {
                setOpenSnackbar(false)
            } catch (error) {
                console.log(error)
            }
        }, 2000)
    }

    // const onCreatePlaylistButtonClick = () => {}

    return (
        <>
            <Box>
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
                        onButtonAdd={onButtonAdd}
                        alreadyAddedByUser={!!isCurrentPlaylistInUserPlaylistsArray}
                        // onButtonRemove={}
                    />
                </PlayButtonBox>

                <SongsSection
                    songsArray={allPlaylistTracks}
                    playlistCollab={false}
                />
            </Box>
            {openSnackbar ? <Snackbar content='Saved to Your Library' /> : null}
        </>
    )
}
