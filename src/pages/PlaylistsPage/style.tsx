import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { theme } from 'src/assets/theme'
import { FiMusic } from 'react-icons/fi'

export const StyledPlaylistNameBox = styled(Box)({
    margin: '16px 0',
    padding: '0',
})

export const PlaylistPageTitle = styled('h1')({
    all: 'unset',
    fontSize: '1.5rem',
    fontWeight: '500',
    color: theme.palette.primary.main,
})

export const AllPlaylistsMainContainer = styled(Box)({
    display: 'grid',
    gridAutoRows: '1fr',
    gridGap: '24px',
})

//Liked songs section

export const LikedSongsBox = styled(Box)({
    position: 'relative',
    gridColumn: 'span 2',
    background: 'linear-gradient(149.46deg,#450af5,#8e8ee5 99.16%)',
    borderRadius: '4px',
    padding: '20px',
    cursor: 'pointer',
    '&:hover #hoveredGreenButton': {
        transform: 'translateY(0)',
        opacity: '1',
    },
    '&:focus-visible #hoveredGreenButton': {
        transform: 'translateY(0)',
        opacity: '1',
        outline: '1px solid white',
    },
})

export const InnerLikedSongsBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
})

export const LikedSongsListBox = styled(Box)({
    marginBottom: '12px',
    userSelect: 'none',
    paddingTop: '35px',
    height: '130px',
})

export const LikedSongsList = styled(Box)({
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    wordBreak: 'break-all',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    maxHeight: '130px',
    width: '100%',
})

export const LikedSongsTitleBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: theme.palette.primary.main,
})

export const LikedSongsTitle = styled(Box)({
    fontSize: '2rem',
    fontWeight: '600',
})

export const LikedSongsCount = styled(Box)({
    fontSize: '0.875rem',
})

//No playlist

export const NoPlaylistBox = styled(Box)({
    width: '100%',
    display: 'flex',
    height: '500px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main,
})

export const StyledNoPlaylistsIcon = styled(FiMusic)({
    width: '60px',
    height: '60px',
    [theme.breakpoints.down('sm')]: {
        width: '30px',
        height: '30px',
    },
})

export const NoPlaylistsH1 = styled('h1')({
    fontSize: '2rem',
    fontWeight: '600',
    margin: '30px 0',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
})

export const NoPlaylistsSubtitle = styled(Box)({
    marginBottom: '32px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
})
