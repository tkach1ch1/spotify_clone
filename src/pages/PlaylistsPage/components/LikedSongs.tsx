import { useNavigate } from 'react-router-dom'
import { HoveredGreenPlayButton } from 'src/components/HoveredGreenPlayButton'
import {
    InnerLikedSongsBox,
    LikedSongsBox,
    LikedSongsCount,
    LikedSongsList,
    LikedSongsListBox,
    LikedSongsTitle,
    LikedSongsTitleBox,
} from 'src/pages/PlaylistsPage/style'

export const LikedSongs = () => {
    const navigate = useNavigate()

    const onEnterToLikedSongsPageNavigate = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            navigate('/collection/tracks')
        }
    }
    return (
        <LikedSongsBox
            onClick={() => navigate('/collection/tracks')}
            onKeyDown={onEnterToLikedSongsPageNavigate}
            tabIndex={0}
        >
            <InnerLikedSongsBox>
                <LikedSongsListBox>
                    <LikedSongsList>
                        <span></span>
                    </LikedSongsList>
                </LikedSongsListBox>

                <LikedSongsTitleBox>
                    <LikedSongsTitle>Liked Songs</LikedSongsTitle>
                    <LikedSongsCount>5 songs liked</LikedSongsCount>
                </LikedSongsTitleBox>
                <HoveredGreenPlayButton
                    bottom='20px'
                    right='20px'
                />
            </InnerLikedSongsBox>
        </LikedSongsBox>
    )
}
