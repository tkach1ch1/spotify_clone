import { useAppSelector } from 'src/hooks/hooks'

export const useNowPlayingTrack = () => {
    const nowPlayingPlaylist = useAppSelector((state) => state.playingPlaylist.nowPlayingPlaylist)
    const trackIndex = useAppSelector((state) => state.playingPlaylist.trackIndex)

    const currentlyPlayingTrack = nowPlayingPlaylist[trackIndex] && nowPlayingPlaylist[trackIndex]

    const audio = currentlyPlayingTrack && currentlyPlayingTrack.file

    const isPlaying = currentlyPlayingTrack?.isPlaying

    return { nowPlayingPlaylist, trackIndex, currentlyPlayingTrack, audio, isPlaying }
}
