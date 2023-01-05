import { useNowPlayingTrack } from 'src/layouts/NowPlayingBar/components/AuthorizedFooter/hooks/useNowPlayingTrack'
import {
    trackCurrentDuration,
    trackIsPlaying,
    updateTrackIndex,
} from 'src/redux/nowPlayingPlaylistReducer'
import { useAppDispatch } from '../../../../../hooks/hooks'

export const useNextAndPrevTrack = () => {
    const dispatch = useAppDispatch()
    const { nowPlayingPlaylist, trackIndex } = useNowPlayingTrack()

    const getNextTrack = (audio: HTMLAudioElement) => {
        //Reset current track values
        dispatch(trackIsPlaying(false))
        audio.pause()
        audio.currentTime = 0
        dispatch(trackCurrentDuration(audio.currentTime * 0))

        //Play next track
        if (trackIndex !== nowPlayingPlaylist.length - 1) {
            let nextTrackIndex = trackIndex + 1
            dispatch(updateTrackIndex(nextTrackIndex))
            dispatch(trackIsPlaying(true))
            const audio = nowPlayingPlaylist[nextTrackIndex]?.file
            audio.play()
        }
    }

    const getPrevTrack = (audio: HTMLAudioElement) => {
        //Reset current track values
        dispatch(trackIsPlaying(false))
        audio.pause()
        audio.currentTime = 0
        dispatch(trackCurrentDuration(audio.currentTime * 0))
        //Play previous track
        if (trackIndex !== 0) {
            let nextTrackIndex = trackIndex - 1
            dispatch(updateTrackIndex(nextTrackIndex))
            dispatch(trackIsPlaying(true))
            const audio = nowPlayingPlaylist[nextTrackIndex]?.file
            audio.play()
        }
    }

    return { getNextTrack, getPrevTrack }
}
