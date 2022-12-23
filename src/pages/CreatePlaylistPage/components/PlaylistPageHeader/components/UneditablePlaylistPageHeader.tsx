import { MainPlaylistTitleBox, UneditStyledImageBox } from 'src/pages/CreatePlaylistPage/style'
import { useAppSelector } from 'src/hooks/hooks'
import { UneditablePlaylistInfo } from './UneditablePlaylistInfo'

export const UneditablePlaylistPageHeader = () => {
    const playlist = useAppSelector((state) => state.playlist.playlistInfo)
    return (
        <MainPlaylistTitleBox>
            <UneditStyledImageBox>
                <img
                    src={playlist.playlistImage}
                    alt={playlist.playlistName}
                    style={{ width: '100%', height: '100%' }}
                />
            </UneditStyledImageBox>
            <UneditablePlaylistInfo playlistInfo={playlist && playlist} />
        </MainPlaylistTitleBox>
    )
}
