import {
    IndexSegment,
    LastSegment,
    Var2Segment,
    SongsListHeaderBox,
    Var1Segment,
    SongSegment,
    SegmentTitleText,
} from 'src/pages/CreatePlaylistPage/style'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { Box } from '@mui/system'

export const SongsListHeader = () => {
    return (
        <Box sx={{ margin: '0 0 16px' }}>
            <SongsListHeaderBox
                role='row'
                aria-rowindex={1}
            >
                <SongSegment
                    role='columnheader'
                    aria-colindex={1}
                    aria-sort='none'
                >
                    <IndexSegment>#</IndexSegment>
                </SongSegment>
                <SongSegment
                    role='columnheader'
                    aria-colindex={2}
                    aria-sort='none'
                >
                    <SegmentTitleText>Title</SegmentTitleText>
                </SongSegment>
                <Var1Segment
                    role='columnheader'
                    aria-colindex={3}
                    aria-sort='none'
                >
                    <SegmentTitleText>Album</SegmentTitleText>
                </Var1Segment>
                <Var2Segment
                    role='columnheader'
                    aria-colindex={4}
                    aria-sort='none'
                >
                    <SegmentTitleText>Date added</SegmentTitleText>
                </Var2Segment>
                <StyledTooltip
                    title='Duration'
                    placement='top'
                >
                    <LastSegment
                        role='columnheader'
                        aria-colindex={5}
                        aria-sort='none'
                    >
                        <AccessTimeIcon fontSize='small' />
                    </LastSegment>
                </StyledTooltip>
            </SongsListHeaderBox>
        </Box>
    )
}
