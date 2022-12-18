import { useCurrentPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCurrentPlaylist'
import { Song } from './Song'
import { nanoid } from 'nanoid'

//Array iteration
export const SongsList = () => {
    const { currentPlaylist } = useCurrentPlaylist()

    return (
        <>
            {currentPlaylist && currentPlaylist.playlistTracks
                ? currentPlaylist.playlistTracks.map((elem) => (
                      <Song
                          key={nanoid()}
                          ariaRowIndex={currentPlaylist.playlistTracks.indexOf(elem) + 1}
                          songName={elem.trackName}
                          authorName={elem.artistName}
                          id={elem.trackId}
                          image={elem.image}
                          albumName={elem.albumName}
                          duration={elem.trackDuration}
                          dateAdded={elem.dateAdded}
                      />
                  ))
                : null}
        </>
    )
}
