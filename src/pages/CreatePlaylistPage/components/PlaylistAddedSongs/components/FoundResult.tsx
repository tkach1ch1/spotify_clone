import { ResultSong } from './ResultSong'
import { nanoid } from 'nanoid'
import { FoundResultItems } from 'src/hooks/useSearch'
import { Result } from './Result'
import { memo } from 'react'

interface FoundResultProps {
    foundResult: FoundResultItems | undefined
}

export const FoundResult = memo(({ foundResult }: FoundResultProps) => {
    const foundTracks = foundResult && foundResult['tracks'].items
    const foundArtists = foundResult && foundResult['artists'].items
    const foundAlbums = foundResult && foundResult['albums'].items

    console.log(foundArtists)
    return (
        <>
            {/* Tracks */}
            {foundTracks
                ? foundTracks.map((elem) => (
                      <ResultSong
                          key={nanoid()}
                          name={elem.name}
                          artists={elem.artists}
                          id={elem.id}
                          album={elem.album}
                          duration_ms={elem.duration_ms}
                          ariaRowIndex={foundTracks.indexOf(elem) + 1}
                          dateAdded=''
                      />
                  ))
                : null}
            {/* Artists */}
            {foundArtists
                ? foundArtists.map((elem) => (
                      <Result
                          key={nanoid()}
                          name={elem.name}
                          image={elem.images[0].url}
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
                          image={elem.images[0].url}
                          subtitle='Album'
                      />
                  ))
                : null}
        </>
    )
})
