import { AuthorizedFooterBox } from 'src/layouts/NowPlayingBar/style'
import { SongDescription } from './components/SongDescription/SongDescription'
import { PlayBar } from './components/PlayBar/PlayBar'
import { RightSideBar } from './components/RightSideBar/RightSideBar'
import { memo } from 'react'
import { useNowPlayingTrack } from 'src/layouts/NowPlayingBar/components/AuthorizedFooter/hooks/useNowPlayingTrack'

export const AuthorizedFooter = memo(() => {
    const { currentlyPlayingTrack, nowPlayingPlaylist } = useNowPlayingTrack()

    const audio = currentlyPlayingTrack?.file

    return (
        <AuthorizedFooterBox>
            {currentlyPlayingTrack && nowPlayingPlaylist.length > 0 ? (
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
