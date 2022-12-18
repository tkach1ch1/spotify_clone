import { StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { useCurrentPlaylist } from 'src/pages/CreatePlaylistPage/hooks/useCurrentPlaylist'
import { StyledPlaylistTitle } from 'src/pages/CreatePlaylistPage/style'
import { useWindowSize } from 'usehooks-ts'
import { PlaylistInfoProps } from './PlaylistInfo'

export const PlaylistTitle = ({ handleOpen, onEnterOpen }: PlaylistInfoProps) => {
    const { currentPlaylist } = useCurrentPlaylist()

    const curPlaylistLength =
        currentPlaylist?.playlistName !== undefined && currentPlaylist?.playlistName.length
    const { width } = useWindowSize()

    //Chenging playlist name fontSize dependes on name input length and widow width
    const lengthCheck = () => {
        if (curPlaylistLength <= 14 && width < 1024) {
            return {
                fontSize: '2rem',
            }
        } else if (curPlaylistLength <= 14 && width < 1280) {
            return {
                fontSize: '4rem',
            }
        } else if (curPlaylistLength <= 14) {
            return {
                fontSize: '6rem',
            }
        } else if (curPlaylistLength > 14) {
            return {
                fontSize: '2rem',
                wordBreak: 'break-all',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
            }
        }
    }
    return (
        <StyledTooltip
            placement='top'
            title={currentPlaylist?.playlistName}
            enterDelay={500}
        >
            <StyledPlaylistTitle
                sx={lengthCheck()}
                onClick={handleOpen}
                onKeyDown={onEnterOpen}
                tabIndex={0}
                data-testid='playlist_title'
            >
                {currentPlaylist?.playlistName}
            </StyledPlaylistTitle>
        </StyledTooltip>
    )
}
