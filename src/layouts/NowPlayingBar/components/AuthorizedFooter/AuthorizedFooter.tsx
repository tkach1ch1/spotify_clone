import { AuthorizedFooterBox } from 'src/layouts/NowPlayingBar/style'
import { SongDescription } from './components/SongDescription/SongDescription'
import { PlayBar } from './components/PlayBar/PlayBar'
import { RightSideBar } from './components/RightSideBar/RightSideBar'
import { memo, useEffect, useState } from 'react'
import { useNowPlayingTrack } from 'src/layouts/NowPlayingBar/components/AuthorizedFooter/hooks/useNowPlayingTrack'
import { Snackbar } from 'src/components/Snackbar'
import { useAppDispatch } from 'src/hooks/hooks'
import { trackIsPlaying } from 'src/redux/nowPlayingPlaylistReducer'

export const AuthorizedFooter = memo(() => {
    const { currentlyPlayingTrack, nowPlayingPlaylist, isPlaying } = useNowPlayingTrack()

    const audio = currentlyPlayingTrack?.file

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isPlaying && audio) {
            audio.play()
        } else if (!isPlaying && audio) {
            audio.pause()
        }
    }, [isPlaying, audio])

    const [openSnack, setOpenSnack] = useState(false)

    //If Spotify Api doesn't have track url, open Snackbar with warning
    useEffect(() => {
        if (audio && currentlyPlayingTrack?.preview_url === null) {
            setOpenSnack(true)
            dispatch(trackIsPlaying(false))

            setTimeout(() => {
                setOpenSnack(false)
            }, 1500)
        }
    }, [currentlyPlayingTrack?.preview_url, dispatch, audio])

    return (
        <>
            <AuthorizedFooterBox>
                {nowPlayingPlaylist.length > 0 && !!currentlyPlayingTrack ? (
                    <>
                        {/* Taking first elem in now playing playlist   */}
                        {/* and then on prev and next button changing track elements */}
                        <SongDescription
                            image={currentlyPlayingTrack?.album.images[0].url}
                            songName={currentlyPlayingTrack?.name}
                            artistName={currentlyPlayingTrack?.artists
                                .map((elem) => elem.name)
                                .join(' ')}
                            albumName={currentlyPlayingTrack?.album.name}
                            id={currentlyPlayingTrack?.id}
                        />
                        <PlayBar
                            audio={audio}
                            isPlaying={currentlyPlayingTrack?.isPlaying}
                            current_duration={currentlyPlayingTrack?.current_duration}
                        />

                        <RightSideBar audio={audio} />
                    </>
                ) : (
                    <>
                        <SongDescription
                            image=''
                            songName=''
                            artistName=''
                            albumName=''
                            id=''
                        />
                        <PlayBar
                            audio={new Audio()}
                            isPlaying={false}
                            current_duration={0}
                        />
                        <RightSideBar audio={new Audio()} />
                    </>
                )}
            </AuthorizedFooterBox>
            {openSnack ? <Snackbar content='Failed to load track, try another one' /> : null}
        </>
    )
})
