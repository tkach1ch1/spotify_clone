import {
    AddButton,
    AddButtonBox,
    ResultSongBox,
    StyledSongLink,
    Var1ResultSegment,
} from 'src/pages/CreatePlaylistPage/style'
import { InfoSongSegment } from './InfoSongSegment'

export const ResultSong = () => {
    return (
        <ResultSongBox
            role='row'
            aria-rowindex={1}
        >
            <InfoSongSegment />
            <Var1ResultSegment>
                <StyledSongLink
                    to=''
                    tabIndex={-1}
                >
                    Album
                </StyledSongLink>
            </Var1ResultSegment>
            <AddButtonBox>
                <AddButton tabIndex={-1}>Add</AddButton>
            </AddButtonBox>
        </ResultSongBox>
    )
}
