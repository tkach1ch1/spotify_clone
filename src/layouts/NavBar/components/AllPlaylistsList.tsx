import {
    AllPlaylistsListBox,
    AllPlaylistsListLi,
    AllPlaylistsListUl,
    HideTextBox,
    StyledPlaylistLink,
} from '../style'
import { nanoid } from 'nanoid'
import { usePlaylist } from 'src/features/Playlists/usePlaylist'

export const AllPlaylistsList = () => {
    const { allPlaylistsArray } = usePlaylist()

    return (
        <AllPlaylistsListBox>
            <AllPlaylistsListUl>
                {allPlaylistsArray.map((elem) => (
                    <AllPlaylistsListLi key={nanoid()}>
                        <StyledPlaylistLink to={'/playlist/' + elem.playlistId}>
                            <HideTextBox>{elem.playlistName}</HideTextBox>
                        </StyledPlaylistLink>
                    </AllPlaylistsListLi>
                ))}
            </AllPlaylistsListUl>
        </AllPlaylistsListBox>
    )
}
