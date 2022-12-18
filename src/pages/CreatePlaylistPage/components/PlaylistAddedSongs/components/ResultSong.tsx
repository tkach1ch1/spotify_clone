import { useAppDispatch } from 'src/hooks/hooks'
import { useCurrentPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCurrentPlaylist'
import {
    AddButton,
    AddButtonBox,
    ResultSongBox,
    StyledSongLink,
    Var1ResultSegment,
} from 'src/pages/CreatePlaylistPage/style'
import { changePlaylistDetails } from 'src/redux/allPlaylistsReducer'
import { InfoSongSegment } from './InfoSongSegment'

export interface ResultSongProps {
    songName: string
    authorName: string
    id: string
    albumName: string
    image: string
    ariaRowIndex: number
    duration: number
}
export const ResultSong = ({
    songName,
    authorName,
    id,
    albumName,
    image,
    ariaRowIndex,
    duration,
}: ResultSongProps) => {
    const { currentPlaylist } = useCurrentPlaylist()

    const dispatch = useAppDispatch()

    //onClick adds track to current playlist
    const onButtonAddTrack = () => {
        let newTrack = {
            trackId: id,
            trackName: songName,
            artistName: authorName,
            albumName: albumName,
            dateAdded: new Date().toISOString(),
            trackDuration: duration,
            image: image,
        }

        //TODO: add Added to your library and added to your playlist blue popup
        const changedCurrentPlaylist = {
            ...currentPlaylist,
            playlistTracks: currentPlaylist && [...currentPlaylist?.playlistTracks, newTrack],
        }
        dispatch(changePlaylistDetails(changedCurrentPlaylist))
    }

    return (
        <ResultSongBox
            role='row'
            aria-rowindex={ariaRowIndex}
            id={id}
        >
            <InfoSongSegment
                image={image}
                songName={songName}
                authorName={authorName}
            />
            <Var1ResultSegment>
                <StyledSongLink
                    to=''
                    tabIndex={-1}
                >
                    {albumName}
                </StyledSongLink>
            </Var1ResultSegment>
            <AddButtonBox>
                <AddButton
                    tabIndex={-1}
                    onClick={onButtonAddTrack}
                >
                    Add
                </AddButton>
            </AddButtonBox>
        </ResultSongBox>
    )
}
