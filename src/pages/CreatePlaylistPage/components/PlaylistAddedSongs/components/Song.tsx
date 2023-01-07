import { Box } from '@mui/system'
import {
    IndexSegment,
    LastSegment,
    SegmentText,
    SongBox,
    SongSegment,
    StyledSongLink,
    Var1Segment,
    Var2Segment,
} from 'src/pages/CreatePlaylistPage/style'
import { InfoSongSegment } from './InfoSongSegment'
import { useHover } from 'usehooks-ts'
import { memo, useEffect, useRef, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { useFormatDuration } from 'src/hooks/useFormatDuration'
import { useTrackAddedDate } from 'src/hooks/useTrackAddedDate'
import { ResultSongProps } from './ResultSong'
import { LikeButton } from './LikeButton'
import { MoreOptionsButton } from '../../../../../components/MoreOptionsButton'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { useSongActions } from 'src/pages/CreatePlaylistPage/hooks/useSongActions'
import { useAddSongToSelectedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddSongToSelectedPlaylist'
import { useFindTrack } from 'src/hooks/useFindTrack'
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks'
import { addToNowPlayingPlaylist, trackIsPlaying } from 'src/redux/nowPlayingPlaylistReducer'
import { getSnackbar } from 'src/redux/openSnackbar'
import PauseIcon from '@mui/icons-material/Pause'
import { useNowPlayingTrack } from 'src/layouts/NowPlayingBar/components/AuthorizedFooter/hooks/useNowPlayingTrack'

export const Song = memo(
    ({ name, id, artists, album, duration_ms, dateAdded, ariaRowIndex }: ResultSongProps) => {
        const hoverRef = useRef(null)
        const isHovered = useHover(hoverRef)

        const dispatch = useAppDispatch()

        //--//

        const { trackDuration } = useFormatDuration()
        const { addedTrackTimeAgo } = useTrackAddedDate()

        const [addedDate, setAddedDate] = useState<any>(addedTrackTimeAgo(dateAdded))
        const [pageReload, setPageReload] = useState(false)

        //Prevent addedDate render by hovering on song component
        useEffect(() => {
            setPageReload(true)
            if (pageReload) {
                setAddedDate(addedTrackTimeAgo(dateAdded))
            }
            setPageReload(false)
        }, [addedTrackTimeAgo, dateAdded, pageReload])

        //--//

        // -- ADD SONG TO SELECTED PLAYLIST ON MORE OPTIONS BUTTON CLICK -- //

        //Sort all self created playlists from all user
        const { allPlaylistsArray } = useAddedPlaylist()
        const allCreatedPlaylists = allPlaylistsArray.filter((elem) => !!elem.playlistCollab)

        //Songs select list on More options button click
        const selectElementsArray = allCreatedPlaylists.map((elem) => ({
            name: elem.playlistName,
            id: elem.playlistId,
            actionFunction: () => {
                addSongsToSelectedPlaylist(elem.playlistId)
                dispatch(getSnackbar(true))
            },
        }))

        //Add song to selected playlist
        const { addSongsToSelectedPlaylist } = useAddSongToSelectedPlaylist(id, selectElementsArray)

        // -- //

        // -- ADD/REMOVE SONG TO/FROM LIKED SONGS -- //

        const {
            openSnackbar,
            alreadyLikedSong,
            onButtonAddToLikedSongs,
            onButtonRemoveFromLikedSongs,
        } = useSongActions(id)

        //--//

        const isSnackbar = useAppSelector((state) => state.openSnack.snackbar)

        useEffect(() => {
            if (isSnackbar) {
                setTimeout(() => {
                    dispatch(getSnackbar(false))
                }, 2000)
            }
        })

        // -- ADD TRACK TO NOW PLAYING BAR -- //

        //Add song to NowPlayingBar
        //Find track on his id
        const { findTrack } = useFindTrack(id)

        const { nowPlayingPlaylist } = useNowPlayingTrack()

        const currentlyPlayingTrack = nowPlayingPlaylist.find((elem) => elem.id === findTrack?.id)
        const isPlaying = currentlyPlayingTrack?.isPlaying

        //Add single song to nowPlayingPlaylist
        const trackPlay = () => {
            if (findTrack) {
                dispatch(
                    addToNowPlayingPlaylist({
                        ...findTrack,
                        isPlaying: true,
                        file: new Audio(findTrack.preview_url),
                        current_duration: 0,
                    })
                )
            }
        }

        const trackPause = () => {
            dispatch(trackIsPlaying(false))
        }

        //--//

        return (
            <>
                <SongBox
                    role='row'
                    aria-rowindex={ariaRowIndex}
                    aria-selected='false'
                    ref={hoverRef}
                    id={id}
                >
                    <>
                        {isPlaying ? (
                            <SongSegment
                                role='gridcell'
                                aria-colindex={1}
                                onClick={trackPause}
                            >
                                <PauseIcon
                                    sx={{ position: 'absolute', left: '12px' }}
                                    fontSize='small'
                                />
                            </SongSegment>
                        ) : (
                            <SongSegment
                                role='gridcell'
                                aria-colindex={1}
                                onClick={trackPlay}
                            >
                                {isHovered ? (
                                    <PlayArrowIcon sx={{ position: 'absolute', left: '10px' }} />
                                ) : (
                                    <IndexSegment>{ariaRowIndex}</IndexSegment>
                                )}
                            </SongSegment>
                        )}
                    </>
                    <Box
                        role='gridcell'
                        aria-colindex={2}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <InfoSongSegment
                            songName={name}
                            authorName={artists.map((elem) => elem.name).join(' ')}
                            image={album.images && album.images[0].url}
                            isPlaying={isPlaying}
                        />
                    </Box>
                    <Var1Segment
                        role='gridcell'
                        aria-colindex={3}
                    >
                        <StyledSongLink
                            to=''
                            tabIndex={-1}
                        >
                            {album.name}
                        </StyledSongLink>
                    </Var1Segment>
                    <Var2Segment
                        role='gridcell'
                        aria-colindex={4}
                    >
                        <SegmentText>{addedDate || album.release_date}</SegmentText>
                    </Var2Segment>
                    <LastSegment
                        role='gridcell'
                        aria-colindex={5}
                    >
                        <LikeButton
                            sx={{ width: '20px', height: '20px' }}
                            addTitle='Add to Liked Songs'
                            removeTitle='Remove from Liked Songs'
                            onButtonAdd={onButtonAddToLikedSongs}
                            onButtonRemove={onButtonRemoveFromLikedSongs}
                            alreadyAddedByUser={!!alreadyLikedSong}
                            openSnackbar={openSnackbar}
                        />
                        <SegmentText style={{ width: '50px' }}>
                            {trackDuration(duration_ms)}
                        </SegmentText>
                        <MoreOptionsButton
                            moreOptionsArray={selectElementsArray}
                            fontSize='medium'
                            style={{ right: '0', bottom: '0' }}
                            selectTitle='Add to Playlist'
                            snackBarContent='Add to Playlist'
                            openSnackbar={isSnackbar}
                        />
                    </LastSegment>
                </SongBox>
            </>
        )
    }
)
