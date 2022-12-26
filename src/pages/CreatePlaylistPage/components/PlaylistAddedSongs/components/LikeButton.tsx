import { PlaylistLikeButton } from 'src/pages/CreatePlaylistPage/style'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { CSSProperties, memo, useEffect, useState } from 'react'
import 'animate.css'
import { Snackbar } from 'src/components/Snackbar'

interface LikeButtonProps {
    sx: CSSProperties
    addTitle: string
    removeTitle: string
    onButtonAdd: () => void
    onButtonRemove: () => void
    alreadyAddedByUser: boolean
    openSnackbar: boolean
}

export const LikeButton = memo(
    ({
        sx,
        addTitle,
        removeTitle,
        onButtonAdd,
        onButtonRemove,
        alreadyAddedByUser,
        openSnackbar,
    }: LikeButtonProps) => {
        const [added, setAdded] = useState(false)
        const [animateOnAdd, setAnimateOnAdd] = useState(false)
        const [animateOnRemove, setAnimateOnRemove] = useState(false)

        const onAddButtonClick = () => {
            setAdded(true)
            setAnimateOnRemove(true)
            onButtonAdd()
        }

        const onRemoveButtonClick = () => {
            setAdded(false)
            setAnimateOnAdd(true)
            onButtonRemove()
        }

        useEffect(() => {
            alreadyAddedByUser && setAdded(true)
        }, [alreadyAddedByUser])

        return (
            <>
                {alreadyAddedByUser ? (
                    <StyledTooltip
                        title={removeTitle}
                        placement='top'
                        enterDelay={500}
                    >
                        <PlaylistLikeButton
                            onClick={onRemoveButtonClick}
                            className={
                                animateOnRemove ? 'animate__animated animate__heartBeat' : ''
                            }
                        >
                            <FavoriteIcon
                                sx={sx}
                                style={{ color: '#1db954' }}
                            />
                        </PlaylistLikeButton>
                    </StyledTooltip>
                ) : (
                    <StyledTooltip
                        title={addTitle}
                        placement='top'
                        enterDelay={500}
                    >
                        <PlaylistLikeButton
                            onClick={onAddButtonClick}
                            className={animateOnAdd ? 'animate__animated animate__tada' : ''}
                        >
                            <FavoriteBorderIcon sx={sx} />
                        </PlaylistLikeButton>
                    </StyledTooltip>
                )}
                {openSnackbar && added ? (
                    <Snackbar content={addTitle} />
                ) : openSnackbar && !added ? (
                    <Snackbar content={removeTitle} />
                ) : null}
            </>
        )
    }
)
