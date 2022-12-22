import { PlaylistImageBox, StyledImageLabel } from 'src/pages/CreatePlaylistPage/style'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useCurrentPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCurrentPlaylist'
import { DefaultPlaylistImage } from './DefaultPlaylistImage'
import { useAppDispatch } from 'src/hooks/hooks'
import { changePlaylistDetails } from 'src/redux/allPlaylistsReducer'

interface PlaylistImageProps {
    handleOpen?: () => void
    sx?: React.CSSProperties
}

export const PlaylistImage = ({ handleOpen, sx }: PlaylistImageProps) => {
    const [onImageHover, setOnImageHover] = useState(false)

    const { currentPlaylist } = useCurrentPlaylist()

    const dispatch = useAppDispatch()

    //If playlist image doesn't have setted image, it takes the image from the first track in the songs list
    useEffect(() => {
        if (currentPlaylist?.playlistImage === '' && !!currentPlaylist?.playlistTracks.length) {
            const changedCurrentPlaylist = {
                ...currentPlaylist,
                playlistImage: currentPlaylist?.playlistTracks[0].image[1].url,
            }
            dispatch(changePlaylistDetails(changedCurrentPlaylist))
        }
    }, [currentPlaylist, dispatch])

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
                    {!currentPlaylist?.playlistImage ? (
                        <DefaultPlaylistImage onImageHover={onImageHover} />
                    ) : (
                        <img
                            src={currentPlaylist?.playlistImage}
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
