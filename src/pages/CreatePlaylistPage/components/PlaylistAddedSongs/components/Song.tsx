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
import { useRef } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

export const Song = () => {
    const hoverRef = useRef(null)

    const isHovered = useHover(hoverRef)

    return (
        <SongBox
            role='row'
            aria-rowindex={2} //Should increase with next added song
            aria-selected='false'
            ref={hoverRef}
        >
            <SongSegment
                role='gridcell'
                aria-colindex={1}
            >
                {isHovered ? (
                    <PlayArrowIcon sx={{ position: 'absolute', left: '12px' }} />
                ) : (
                    <IndexSegment>1</IndexSegment>
                )}
            </SongSegment>
            <Box
                role='gridcell'
                aria-colindex={2}
                sx={{ display: 'flex', alignItems: 'center' }}
            >
                <InfoSongSegment />
            </Box>
            <Var1Segment
                role='gridcell'
                aria-colindex={3}
            >
                <StyledSongLink
                    to=''
                    tabIndex={-1}
                >
                    Album
                </StyledSongLink>
            </Var1Segment>
            <Var2Segment
                role='gridcell'
                aria-colindex={4}
            >
                <SegmentText>1 day ago</SegmentText>
            </Var2Segment>
            <LastSegment
                role='gridcell'
                aria-colindex={5}
            >
                <SegmentText>2:04</SegmentText>
            </LastSegment>
        </SongBox>
    )
}
