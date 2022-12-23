import { PlaylistImageBox, StyledImageLabel } from 'src/pages/CreatePlaylistPage/style'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useCreatedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCreatedPlaylist'
import { DefaultPlaylistImage } from './DefaultPlaylistImage'
import { useAppDispatch } from 'src/hooks/hooks'
import { changePlaylistDetails } from 'src/redux/allPlaylistsReducer'

interface PlaylistImageProps {
    handleOpen?: () => void
    sx?: React.CSSProperties
}

export const PlaylistImage = ({ handleOpen, sx }: PlaylistImageProps) => {
    const [onImageHover, setOnImageHover] = useState(false)

    const { createdPlaylist } = useCreatedPlaylist()

    const dispatch = useAppDispatch()

    //If playlist image doesn't have setted image, it takes the image from the first track in the songs list
    useEffect(() => {
        if (createdPlaylist?.playlistImage === '' && !!createdPlaylist?.playlistTracks.length) {
            const changedCurrentPlaylist = {
                ...createdPlaylist,
                playlistImage: createdPlaylist?.playlistTracks[0].album.images[0].url,
            }
            dispatch(changePlaylistDetails(changedCurrentPlaylist))
        }
    }, [createdPlaylist, dispatch])

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
                    {!createdPlaylist?.playlistImage ? (
                        <DefaultPlaylistImage onImageHover={onImageHover} />
                    ) : (
                        <img
                            src={createdPlaylist?.playlistImage}
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
