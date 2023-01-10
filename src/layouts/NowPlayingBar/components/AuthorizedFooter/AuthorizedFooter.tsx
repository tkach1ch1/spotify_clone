import { AuthorizedFooterBox } from 'src/layouts/NowPlayingBar/style'
import { SongDescription } from './components/SongDescription/SongDescription'
import { PlayBar } from './components/PlayBar/PlayBar'
import { RightSideBar } from './components/RightSideBar/RightSideBar'
import { memo, useEffect } from 'react'
import { useNowPlayingTrack } from 'src/layouts/NowPlayingBar/components/AuthorizedFooter/hooks/useNowPlayingTrack'

export const AuthorizedFooter = memo(() => {
    const { currentlyPlayingTrack, nowPlayingPlaylist, isPlaying } = useNowPlayingTrack()

    const audio = currentlyPlayingTrack?.file

    useEffect(() => {
        if (audio && audio.currentSrc !== '') {
            if (isPlaying) {
                audio.play()
            } else if (!isPlaying) {
                audio.pause()
            }
        }
    }, [isPlaying, audio])

    return (
        <AuthorizedFooterBox>
            {currentlyPlayingTrack !== undefined && nowPlayingPlaylist.length > 0 ? (
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
    )
})
