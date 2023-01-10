import { useState } from 'react'
import { Snackbar } from 'src/components/Snackbar'
import { useAppDispatch } from 'src/hooks/hooks'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
import {
    AddButton,
    AddButtonBox,
    ResultSongBox,
    StyledSongLink,
    Var1ResultSegment,
} from 'src/pages/CreatePlaylistPage/style'
import { changePlaylistDetails } from 'src/redux/allPlaylistsReducer'
import { InfoSongSegment } from './InfoSongSegment'

export interface ResultSongProps extends AllPlaylistTracksElements {
    ariaRowIndex?: number
}
export const ResultSong = ({
    id,
    ariaRowIndex,
    album,
    artists,
    name,
    duration_ms,
    preview_url,
}: ResultSongProps) => {
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const { addedPlaylist } = useAddedPlaylist()

    const dispatch = useAppDispatch()

    //onClick adds track to current playlist
    const onButtonAddTrack = () => {
        //Show Added track to playlist snackbar
        setOpenSnackbar(true)

        let newTrack = {
            id: id,
            name: name,
            artists: artists,
            album: album,
            dateAdded: new Date().toISOString(),
            duration_ms: duration_ms,
            preview_url: preview_url,
        }

        const changedCurrentPlaylist = {
            ...addedPlaylist,
            playlistTracks: addedPlaylist && [...addedPlaylist.playlistTracks, newTrack],
        }
        dispatch(changePlaylistDetails(changedCurrentPlaylist))

        //Close Snackbar
        setTimeout(() => {
            try {
                setOpenSnackbar(false)
            } catch (error) {
                console.log(error)
            }
        }, 2000)
    }

    return (
        <>
            <ResultSongBox
                role='row'
                aria-rowindex={ariaRowIndex}
                id={id}
            >
                <InfoSongSegment
                    image={album.images[0].url}
                    songName={name}
                    authorName={artists.map((elem) => elem.name).join(' ')}
                />
                <Var1ResultSegment>
                    <StyledSongLink
                        to=''
                        tabIndex={-1}
                    >
                        {album.name}
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
            {openSnackbar ? <Snackbar content='Added to Playlist' /> : null}
        </>
    )
}
