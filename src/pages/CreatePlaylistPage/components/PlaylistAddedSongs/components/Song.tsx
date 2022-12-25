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
import { ShowMoreButton } from './ShowMoreButton'

export const Song = ({
    name,
    id,
    artists,
    album,
    duration_ms,
    dateAdded,
    ariaRowIndex,
}: ResultSongProps) => {
    const { trackDuration } = useFormatDuration()
    const { addedTrackTimeAgo } = useTrackAddedDate()

    const [addedDate, setAddedDate] = useState<any>(addedTrackTimeAgo(dateAdded))
    const [pageReload, setPageReload] = useState(false)

    //Takes duration in ms, converts it to sec + rounds it up
    let durationTrack = Math.floor(duration_ms / 1000)

    //Prevent component render by hovering component
    useEffect(() => {
        setPageReload(true)
        if (pageReload) {
            setAddedDate(addedTrackTimeAgo(dateAdded))
        }
        setPageReload(false)
    }, [addedTrackTimeAgo, dateAdded, pageReload])

    const hoverRef = useRef(null)
    const isHovered = useHover(hoverRef)

    return (
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
                    onButtonAdd={() => {}}
                    onButtonRemove={() => {}}
                    alreadyAddedByUser={false}
                    openSnackbar={false}
                />
                <SegmentText>{trackDuration(durationTrack)}</SegmentText>
                <ShowMoreButton />
            </LastSegment>
        </SongBox>
    )
}
