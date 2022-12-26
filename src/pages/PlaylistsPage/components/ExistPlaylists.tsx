import { PlaylistElement } from 'src/layouts/ContentSection/components/PlaylistElement'
import { AllPlaylistsMainContainer } from 'src/pages/PlaylistsPage/style'
import { useAppSelector } from 'src/hooks/hooks'
import { nanoid } from 'nanoid'
import { useWindowSize } from 'usehooks-ts'
import { PlaylistPageName } from './PlaylistPageName'
import { LikedSongs } from './LikedSongs'
export const ExistPlaylists = () => {
    const allPlaylistsArray = useAppSelector((state) => state.allPlaylists.allPlaylistsArray)

    const { width } = useWindowSize()

    //Changing Content element width depends on how many elements is in array and depends on screen width
    const contentElementsPlaylistsWidthControl = () => {
        if (allPlaylistsArray.length === 1) {
            return {
                gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(200px,100%/4, max(200px, 100%/9)), 200px))',
            }
        } else if (width > 1450) {
            return {
                gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(200px,100%/4, max(200px, 100%/9)), 200px))',
            }
        } else {
            return {
                gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(170px,100%/4, max(170px, 100%/9)), 1fr))',
            }
        }
    }
    return (
        <>
            <PlaylistPageName />
            <AllPlaylistsMainContainer sx={contentElementsPlaylistsWidthControl()}>
                <LikedSongs />
                {allPlaylistsArray.map((elem) => (
                    <PlaylistElement
                        key={nanoid()}
                        playlistName={elem?.playlistName}
                        playlistDescription={elem?.playlistDescription}
                        playlistId={elem?.playlistId}
                        playlistImage={elem?.playlistImage}
                        isNotPlayable={!elem.playlistTracks?.length}
                        playlistOwnerName={''}
                        playlistTracks={[]}
                    />
                ))}
            </AllPlaylistsMainContainer>
        </>
    )
}
