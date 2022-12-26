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
import { useEffect, useRef, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { useFormatDuration } from 'src/hooks/useFormatDuration'
import { useTrackAddedDate } from 'src/hooks/useTrackAddedDate'
import { ResultSongProps } from './ResultSong'
import { LikeButton } from './LikeButton'
import { MoreOptionsButton } from '../../../../../components/MoreOptionsButton'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { useSongActions } from 'src/pages/CreatePlaylistPage/hooks/useSongActions'
import { useAddSongToSelectedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddSongToSelectedPlaylist'

export const Song = ({
    name,
    id,
    artists,
    album,
    duration_ms,
    dateAdded,
    ariaRowIndex,
}: ResultSongProps) => {
    const hoverRef = useRef(null)
    const isHovered = useHover(hoverRef)

    //--//

    const { trackDuration } = useFormatDuration()
    const { addedTrackTimeAgo } = useTrackAddedDate()

    const [addedDate, setAddedDate] = useState<any>(addedTrackTimeAgo(dateAdded))
    const [pageReload, setPageReload] = useState(false)

    //Takes duration in ms, converts it to sec + rounds it up
    let durationTrack = Math.floor(duration_ms / 1000)

    //Prevent addedDate render by hovering on song component
    useEffect(() => {
        setPageReload(true)
        if (pageReload) {
            setAddedDate(addedTrackTimeAgo(dateAdded))
        }
        setPageReload(false)
    }, [addedTrackTimeAgo, dateAdded, pageReload])

    //--//

    const {
        openSnackbar,
        alreadyLikedSong,
        onButtonAddToLikedSongs,
        onButtonRemoveFromLikedSongs,
    } = useSongActions(id)

    //Sort all self created playlists from all user
    const { allPlaylistsArray } = useAddedPlaylist()
    const allCreatedPlaylists = allPlaylistsArray.filter((elem) => !!elem.playlistCollab)

    //Songs select list on More options button click
    const selectElementsArray = allCreatedPlaylists.map((elem) => ({
        name: elem.playlistName,
        id: elem.playlistId,
        actionFunction: () => {
            addSongsToSelectedPlaylist(elem.playlistId)
        },
    }))

    const { addSongsToSelectedPlaylist, open } = useAddSongToSelectedPlaylist(
        id,
        selectElementsArray
    )
    return (
        <>
            <SongBox
                role='row'
                aria-rowindex={ariaRowIndex}
                aria-selected='false'
                ref={hoverRef}
                id={id}
            >
                <SongSegment
                    role='gridcell'
                    aria-colindex={1}
                >
                    {isHovered ? (
                        <PlayArrowIcon sx={{ position: 'absolute', left: '12px' }} />
                    ) : (
                        <IndexSegment>{ariaRowIndex}</IndexSegment>
                    )}
                </SongSegment>
                <Box
                    role='gridcell'
                    aria-colindex={2}
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <InfoSongSegment
                        songName={name}
                        authorName={artists.map((elem) => elem.name).join(' ')}
                        image={album.images && album.images[0].url}
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
                        {trackDuration(durationTrack)}
                    </SegmentText>
                    <MoreOptionsButton
                        moreOptionsArray={selectElementsArray}
                        fontSize='medium'
                        style={{ right: '0', bottom: '0' }}
                        selectTitle='Add to Playlist'
                        snackBarContent='Add to Playlist'
                        openSnackbar={open}
                    />
                </LastSegment>
            </SongBox>
        </>
    )
}
