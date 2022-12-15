import {
    AllPlaylistsListBox,
    AllPlaylistsListLi,
    AllPlaylistsListUl,
    HideTextBox,
    StyledPlaylistLink,
} from '../style'
import { nanoid } from 'nanoid'
import { usePlaylist } from 'src/features/Playlists/usePlaylist'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AllPlaylistsList = () => {
    const { allPlaylistsArray } = usePlaylist()

    const navigate = useNavigate()

    const onEnterPlaylistClick = (playlistId: string) => {
        return (e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
                navigate(`/playlist/${playlistId}`)
            }
        }
    }

    return (
        <AllPlaylistsListBox tabIndex={-1}>
            <AllPlaylistsListUl>
                {allPlaylistsArray.map((elem) => (
                    <AllPlaylistsListLi key={nanoid()}>
                        <StyledPlaylistLink
                            to={`/playlist/${elem.playlistId}`}
                            tabIndex={-1}
                        >
                            <HideTextBox
                                tabIndex={0}
                                onKeyDown={onEnterPlaylistClick(elem.playlistId)}
                            >
                                {elem.playlistName}
                            </HideTextBox>
                        </StyledPlaylistLink>
                    </AllPlaylistsListLi>
                ))}
            </AllPlaylistsListUl>
        </AllPlaylistsListBox>
    )
}
