import { PlaylistElement } from 'src/layouts/ContentSection/components/PlaylistElement'
import { AllGenresBox } from 'src/pages/SearchPage/style'
import { GenrePlaylistsElements } from '../hooks/useGenrePlaylists'
import { nanoid } from 'nanoid'

interface AllGenrePlaylistsProps {
    playlistsArray: GenrePlaylistsElements[]
}

export const AllGenrePlaylists = ({ playlistsArray }: AllGenrePlaylistsProps) => {
    return (
        <AllGenresBox>
            {playlistsArray.map(
                (elem) =>
                    elem !== null && (
                        <PlaylistElement
                            key={nanoid()}
                            playlistDescription={elem.description}
                            playlistImage={elem.images[0].url}
                            playlistName={elem.name}
                            playlistId={elem.id}
                            playlistOwnerId={elem.owner.id}
                            playlistOwnerName={elem.owner.display_name}
                            playlistTracks={[]}
                        />
                    )
            )}
        </AllGenresBox>
    )
}
