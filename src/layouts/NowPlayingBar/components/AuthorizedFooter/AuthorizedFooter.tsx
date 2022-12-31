import { AuthorizedFooterBox } from 'src/layouts/NowPlayingBar/style'
import { SongDescription } from './components/SongDescription/SongDescription'
import { PlayBar } from './components/PlayBar/PlayBar'
import { RightSideBar } from './components/RightSideBar/RightSideBar'
import { useAppSelector } from 'src/hooks/hooks'

export const AuthorizedFooter = () => {
    const nowPlayingPlaylist = useAppSelector((state) => state.playingPlaylist.nowPlayingPlaylist)
    const trackIndex = useAppSelector((state) => state.playingPlaylist.trackIndex)
    return (
        <AuthorizedFooterBox>
            {nowPlayingPlaylist && nowPlayingPlaylist.length > 0 ? (
                <>
                    <SongDescription
                        image={nowPlayingPlaylist[trackIndex].album.images[0].url}
                        songName={nowPlayingPlaylist[trackIndex].name}
                        artistName={nowPlayingPlaylist[trackIndex].artists
                            .map((elem) => elem.name)
                            .join(' ')}
                        albumName={nowPlayingPlaylist[trackIndex].album.name}
                    />
                    <PlayBar duration_ms={nowPlayingPlaylist[trackIndex].duration_ms} />
                    <RightSideBar />
                </>
            ) : (
                <>
                    <SongDescription
                        image=''
                        songName=''
                        artistName=''
                        albumName=''
                    />
                    <PlayBar duration_ms={0} />
                    <RightSideBar />
                </>
            )}
        </AuthorizedFooterBox>
    )
}
