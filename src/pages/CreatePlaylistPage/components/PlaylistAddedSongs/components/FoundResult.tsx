import { ResultSong } from './ResultSong'
import { nanoid } from 'nanoid'
import { FoundResultItems } from 'src/pages/CreatePlaylistPage/hooks/useSearch'
import { Result } from './Result'
import { memo } from 'react'

interface FoundResultProps {
    foundResult: FoundResultItems | undefined
}

export const FoundResult = memo(({ foundResult }: FoundResultProps) => {
    const foundTracks = foundResult && foundResult['tracks'].items
    const foundArtists = foundResult && foundResult['artists'].items
    const foundAlbums = foundResult && foundResult['albums'].items

    return (
        <>
            {/* Tracks */}
            {foundTracks
                ? foundTracks.map((elem) => (
                      <ResultSong
                          key={nanoid()}
                          songName={elem.name}
                          authorName={elem.artists[0]?.name}
                          id={elem.id}
                          albumName={elem.album?.name}
                          image={elem.album?.images[2]?.url}
                          duration={elem.duration_ms}
                          ariaRowIndex={foundTracks.indexOf(elem) + 1}
                      />
                  ))
                : null}
            {/* Artists */}
            {foundArtists
                ? foundArtists.map((elem) => (
                      <Result
                          key={nanoid()}
                          name={elem.name}
                          image={elem.images[2]?.url}
                          subtitle='Artist'
                      />
                  ))
                : null}

            {/* Albums */}
            {foundAlbums
                ? foundAlbums.map((elem) => (
                      <Result
                          key={nanoid()}
                          name={elem.name}
                          image={elem.images[2]?.url}
                          subtitle='Album'
                      />
                  ))
                : null}
        </>
    )
})
