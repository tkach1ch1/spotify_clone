import { PlaylistImageBox, StyledImageLabel } from 'src/pages/CreatePlaylistPage/style'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { DefaultPlaylistImage } from './DefaultPlaylistImage'
import { useAppDispatch } from 'src/hooks/hooks'
import { changePlaylistDetails } from 'src/redux/allPlaylistsReducer'

interface PlaylistImageProps {
    handleOpen?: () => void
    sx?: React.CSSProperties
}

export const PlaylistImage = ({ handleOpen, sx }: PlaylistImageProps) => {
    const [onImageHover, setOnImageHover] = useState(false)

    const { addedPlaylist } = useAddedPlaylist()

    const dispatch = useAppDispatch()

    //If playlist image doesn't have setted image, it takes the image from the first track in the songs list
    useEffect(() => {
        if (addedPlaylist?.playlistImage === '' && !!addedPlaylist.playlistTracks?.length) {
            const changedCurrentPlaylist = {
                ...addedPlaylist,
                playlistImage: addedPlaylist?.playlistTracks[0].album.images[0].url,
            }
            dispatch(changePlaylistDetails(changedCurrentPlaylist))
        }
    }, [addedPlaylist, dispatch])

    return (
        <Box sx={sx}>
            <PlaylistImageBox
                onMouseEnter={() => setOnImageHover(true)}
                onMouseLeave={() => setOnImageHover(false)}
                onClick={handleOpen}
            >
                <input
                    accept='image/*'
                    style={{ display: 'none' }}
                    id='raised-button-file'
                    type='file'
                />
                <StyledImageLabel htmlFor='raised-button-file'>
                    {!addedPlaylist?.playlistImage ? (
                        <DefaultPlaylistImage onImageHover={onImageHover} />
                    ) : (
                        <img
                            src={addedPlaylist?.playlistImage}
                            alt={'Playlist'}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    )}
                </StyledImageLabel>
            </PlaylistImageBox>
        </Box>
    )
}
