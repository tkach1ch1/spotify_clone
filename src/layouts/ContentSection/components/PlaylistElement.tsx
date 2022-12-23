import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { HoveredGreenPlayButton } from 'src/components/HoveredGreenPlayButton'
import { ElementBox, ElementDescription, ElementName, PlaylistImageBox, StyledImg } from '../style'
import { FiMusic } from 'react-icons/fi'
import { PlaylistElementProps } from 'src/assets/types/types'
import { useAppDispatch } from 'src/hooks/hooks'
import { getPlaylistInfo } from 'src/redux/playlistReducer'

export const PlaylistElement = ({
    playlistName,
    playlistDescription,
    playlistImage,
    playlistId,
    playlistOwnerId,
    playlistOwnerName,
    isNotPlayable, //For playlists
}: PlaylistElementProps) => {
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const navigatePlaylistAndGetInfo = () => {
        navigate(`/playlist/${playlistId}`)
        dispatch(
            getPlaylistInfo({
                playlistDescription,
                playlistName,
                playlistCollab: false,
                playlistId,
                playlistImage,
                playlistOwnerId,
                playlistOwnerName,
            })
        )
    }

    //On Enter navigate
    const onEnterToElementNavigate = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            navigatePlaylistAndGetInfo()
        }
    }

    return (
        <ElementBox
            tabIndex={0}
            onClick={() => navigatePlaylistAndGetInfo()}
            onKeyDown={onEnterToElementNavigate}
        >
            <Box
                sx={{
                    position: 'relative',
                    marginBottom: '16px',
                }}
            >
                {!!playlistImage ? (
                    <PlaylistImageBox>
                        <StyledImg
                            src={playlistImage}
                            alt='Playlist'
                        />
                    </PlaylistImageBox>
                ) : (
                    <PlaylistImageBox>
                        <FiMusic
                            style={{
                                width: '100%',
                                height: '100%',
                                color: 'transparent',
                            }}
                        />
                        <FiMusic
                            style={{
                                width: '60px',
                                height: '60px',
                                position: 'absolute',
                            }}
                        />
                    </PlaylistImageBox>
                )}

                {/* If playlist has no tracks PlayButton will disappear */}
                {isNotPlayable ? null : (
                    <HoveredGreenPlayButton
                        bottom='5px'
                        right='5px'
                    />
                )}
            </Box>
            <ElementName>{playlistName}</ElementName>
            <ElementDescription>{playlistDescription}</ElementDescription>
        </ElementBox>
    )
}
