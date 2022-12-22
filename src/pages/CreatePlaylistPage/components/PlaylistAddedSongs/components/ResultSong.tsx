import { useEffect, useState } from 'react'
import { Snackbar } from 'src/components/Snackbar'
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

interface ImageProps {
    url: string
}

export interface ResultSongProps {
    songName: string
    authorName: string
    id: string
    albumName: string
    image: ImageProps[]
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
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const { currentPlaylist } = useCurrentPlaylist()

    const dispatch = useAppDispatch()

    //onClick adds track to current playlist
    const onButtonAddTrack = () => {
        //Show Added track to playlist snackbar
        setOpenSnackbar(true)

        let newTrack = {
            trackId: id,
            trackName: songName,
            artistName: authorName,
            albumName: albumName,
            dateAdded: new Date().toISOString(),
            trackDuration: duration,
            image: image,
        }

        const changedCurrentPlaylist = {
            ...currentPlaylist,
            playlistTracks: currentPlaylist && [...currentPlaylist?.playlistTracks, newTrack],
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
        <ResultSongBox
            role='row'
            aria-rowindex={ariaRowIndex}
            id={id}
        >
            <InfoSongSegment
                image={image[2].url}
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
                {openSnackbar ? <Snackbar content='Added to Playlist' /> : null}
            </AddButtonBox>
        </ResultSongBox>
    )
}
