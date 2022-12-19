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
import { useTrackDuration } from 'src/hooks/useTrackDuration'
import { useTrackAddedDate } from 'src/hooks/useTrackAddedDate'

interface SongProps {
    dateAdded: string
    image: string
    songName: string
    authorName: string
    id: string
    albumName: string
    ariaRowIndex: number
    duration: number
}

export const Song = ({
    songName,
    authorName,
    id,
    albumName,
    image,
    ariaRowIndex,
    duration,
    dateAdded,
}: SongProps) => {
    const { formatDuration } = useTrackDuration()
    const { addedTrackTimeAgo } = useTrackAddedDate()

    const [addedDate, setAddedDate] = useState<any>(addedTrackTimeAgo(dateAdded))
    const [pageReload, setPageReload] = useState(false)

    //Takes duration in ms, converts it to sec + rounds it up
    let durationTrack = Math.floor(duration / 1000)

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
                    songName={songName}
                    authorName={authorName}
                    image={image}
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
                    {albumName}
                </StyledSongLink>
            </Var1Segment>
            <Var2Segment
                role='gridcell'
                aria-colindex={4}
            >
                <SegmentText>{addedDate}</SegmentText>
            </Var2Segment>
            <LastSegment
                role='gridcell'
                aria-colindex={5}
            >
                <SegmentText>{formatDuration(durationTrack)}</SegmentText>
            </LastSegment>
        </SongBox>
    )
}
