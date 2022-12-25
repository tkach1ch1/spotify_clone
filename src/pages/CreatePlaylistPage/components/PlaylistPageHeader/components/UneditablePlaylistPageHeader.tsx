import { MainPlaylistTitleBox, UneditStyledImageBox } from 'src/pages/CreatePlaylistPage/style'
import { UneditablePlaylistInfo } from './UneditablePlaylistInfo'
import { PlaylistElementProps } from 'src/assets/types/types'

interface UneditablePlaylistPageHeaderProps {
    currentUneditPlaylist: PlaylistElementProps
}

export const UneditablePlaylistPageHeader = ({
    currentUneditPlaylist,
}: UneditablePlaylistPageHeaderProps) => {
    return (
        <MainPlaylistTitleBox>
            <UneditStyledImageBox>
                <img
                    src={currentUneditPlaylist.playlistImage}
                    alt={currentUneditPlaylist.playlistName}
                    style={{ width: '100%', height: '100%' }}
                />
            </UneditStyledImageBox>
            <UneditablePlaylistInfo playlistInfo={currentUneditPlaylist} />
        </MainPlaylistTitleBox>
    )
}
