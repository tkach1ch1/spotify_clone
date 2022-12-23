import { useState } from 'react'
import { Snackbar } from 'src/components/Snackbar'
import { useAppDispatch } from 'src/hooks/hooks'
import { useCreatedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCreatedPlaylist'
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
}: ResultSongProps) => {
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const { createdPlaylist } = useCreatedPlaylist()

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
            trackDuration: duration_ms,
        }

        const changedCurrentPlaylist = {
            ...createdPlaylist,
            playlistTracks: createdPlaylist && [...createdPlaylist?.playlistTracks, newTrack],
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
