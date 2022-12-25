import { PlaylistLikeButton } from 'src/pages/CreatePlaylistPage/style'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import { CSSProperties, useEffect, useState } from 'react'
import 'animate.css'

interface LikeButtonProps {
    sx: CSSProperties
    addTitle: string
    removeTitle: string
    onButtonAdd: () => void
    onButtonRemove?: () => void
    alreadyAddedByUser: boolean
}

export const LikeButton = ({
    sx,
    addTitle,
    removeTitle,
    onButtonAdd,
    onButtonRemove,
    alreadyAddedByUser,
}: LikeButtonProps) => {
    const [added, setAdded] = useState(false)
    const [animateOnAdd, setAnimateOnAdd] = useState(false)
    const [animateOnRemove, setAnimateOnRemove] = useState(false)

    useEffect(() => {
        alreadyAddedByUser && setAdded(true)
    }, [alreadyAddedByUser])

    const onAddButtonClick = () => {
        setAdded(true)
        setAnimateOnRemove(true)
        onButtonAdd()
    }

    const onRemoveButtonClick = () => {
        setAdded(false)
        setAnimateOnAdd(true)
    }

    return (
        <>
            {added ? (
                <StyledTooltip
                    title={removeTitle}
                    placement='top'
                    enterDelay={500}
                >
                    <PlaylistLikeButton
                        onClick={onRemoveButtonClick}
                        className={animateOnRemove ? 'animate__animated animate__heartBeat' : ''}
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
        </>
    )
}
