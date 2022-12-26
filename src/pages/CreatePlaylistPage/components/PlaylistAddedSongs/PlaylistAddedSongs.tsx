import { Box } from '@mui/system'
import { GreenPlayButton } from 'src/components/GreenPlayButton'
import { PlayButtonBox } from 'src/pages/CreatePlaylistPage/style'
import { SongsSection } from './components/SongsSection'
import { useAddedPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useAddedPlaylist'
import { MoreOptionsButton } from '../../../../components/MoreOptionsButton'
import { useOnButtonAddRemove } from 'src/hooks/useOnButtonAddRemove'
import { ArrayProps } from 'src/components/Select'

export const PlaylistAddedSongs = () => {
    const { addedPlaylist } = useAddedPlaylist()

    const { openSnackbar, onButtonRemovePlaylist } = useOnButtonAddRemove()

    const deletePlaylistOnClick = () => {
        if (addedPlaylist) {
            onButtonRemovePlaylist(addedPlaylist)
        }
    }

    //Array for Select component
    const moreOptionsArray: ArrayProps[] = [
        { name: 'Delete', actionFunction: deletePlaylistOnClick },
    ]
    return (
        <Box>
            <PlayButtonBox>
                {addedPlaylist?.playlistTracks.length ? (
                    <GreenPlayButton
                        width='58px'
                        height='58px'
                        tabIndex={0}
                    />
                ) : null}

                <MoreOptionsButton
                    moreOptionsArray={moreOptionsArray}
                    snackBarContent='Remove from Your Library'
                    openSnackbar={openSnackbar}
                    fontSize='large'
                    style={{ right: '-175px', bottom: '-40px' }}
                />
            </PlayButtonBox>
            <SongsSection
                songsArray={addedPlaylist?.playlistTracks}
                playlistCollab={true}
            />
        </Box>
    )
}
