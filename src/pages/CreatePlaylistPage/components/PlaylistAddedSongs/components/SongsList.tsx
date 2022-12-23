import { Song } from './Song'
import { nanoid } from 'nanoid'
import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'

interface SongsListProps {
    songsArray: AllPlaylistTracksElements[] | undefined
}

export const SongsList = ({ songsArray }: SongsListProps) => {
    return (
        <>
            {!!songsArray
                ? songsArray.map((elem) => (
                      <Song
                          key={nanoid()}
                          ariaRowIndex={songsArray.indexOf(elem) + 1}
                          name={elem.name}
                          artists={elem.artists}
                          id={elem.id}
                          album={elem.album}
                          duration_ms={elem.duration_ms}
                          dateAdded={elem.dateAdded}
                      />
                  ))
                : null}
        </>
    )
}
