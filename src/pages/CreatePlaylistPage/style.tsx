import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { theme } from 'src/assets/theme'
import { BsSearch } from 'react-icons/bs'

//Playlist info section
export const MainPlaylistTitleBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '25px',
    heigth: '100%',
    padding: '24px 32px 0 32px',
    [theme.breakpoints.down('lg')]: {
        padding: '65px 32px 0 32px',
    },
    [theme.breakpoints.down('md')]: {
        padding: '65px 16px 0 16px',
    },
})

export const TitleBackground = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '300px',
})

export const GradientBackground = styled(TitleBackground)({
    backgroundImage:
        'linear-gradient(transparent 0,rgba(0,0,0,.5) 100%),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDov…0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=)',
})

export const PlaylistImageBox = styled('button')({
    all: 'unset',
    width: '100%',
    height: '100%',
    background: theme.palette.secondary.light,
    boxShadow: '0 4px 60px rgba(0,0,0,.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    '&:focus-visible': {
        outline: '1px solid white',
        border: '2px solid #1a54c7',
    },
})

export const UneditStyledImageBox = styled(Box)({
    width: '232px',
    height: '232px',
    minWidth: '232px',
    minHeight: '232px',
    userSelect: 'none',
    background: theme.palette.secondary.light,
    [theme.breakpoints.down('lg')]: {
        width: '192px',
        height: '192px',
        minWidth: '192px',
        minHeight: '192px',
    },
})

export const StyledImageLabel = styled('label')({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const HoveredDefaultImage = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'default',
    color: theme.palette.primary.main,
})

export const PlayListInfoBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    color: theme.palette.primary.main,
})

export const StyledPlaylistTitle = styled(Box)({
    fontWeight: '700',
    cursor: 'pointer',
    marginBottom: '10px',
})

export const PlaylistDescriptionBox = styled(Box)({
    width: '100%',
    cursor: 'pointer',
    wordBreak: 'break-all',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    color: theme.palette.primary.light,
})

export const PlaylistDetailsBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.875rem',
    color: theme.palette.primary.main,
    marginTop: '15px',
})

//Modal window
export const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const MainModalBox = styled(Box)({
    width: '524px',
    minHeight: '384px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '8px',
    boxShadow: '0 4px 4px rgba(0,0,0,.3)',
    '&:focus-visible': {
        outline: 'none',
        border: 'none',
    },
})

export const CloseButton = styled('button')({
    all: 'unset',
    width: '32px',
    height: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'hsla(0,0%,100%,.7)',
    borderRadius: '32px',
    '&:hover': {
        backgroundColor: 'hsla(0,0%,100%,.1)',
    },
})

export const StyledAlertBox = styled(Box)({
    padding: '0 8px',
    margin: '0 24px 16px',
    backgroundColor: '#e22134',
    borderRadius: '4px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
})

export const AlertText = styled('p')({
    all: 'unset',
    fontSize: '0.6875rem',
    color: theme.palette.primary.main,
})

export const ModalSection = styled('section')({
    display: 'flex',
    padding: '0 24px',
    gap: '15px',
})

export const ModalPlaylistImage = styled(PlaylistImageBox)({
    minWidth: '180px',
    minHeight: '180px',
})

export const ModalNameAndDescriptionSection = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
})

//Modal inputs
export const StyledTextField = styled('input')({
    backgroundColor: 'hsla(0,0%,100%,.1)',
    borderRadius: '4px',
    width: '100%',
    outline: 'none',
    height: '40px',
    border: 'none',
    color: theme.palette.primary.main,
    fontSize: '14px',
    padding: '0 12px',
    '&:focus': {
        backgroundColor: theme.palette.secondary.light,
        outline: '1px solid rgba(255, 255, 255, 0.1)',
    },
})

export const StyledTextArea = styled('textarea')({
    backgroundColor: 'hsla(0,0%,100%,.1)',
    color: theme.palette.primary.main,
    fontSize: '14px',
    borderRadius: '4px',
    width: '100%',
    outline: 'none',
    border: 'none',
    resize: 'none',
    padding: '10px 8px 28px',
    fontFamily: 'inherit',
    '&:focus': {
        backgroundColor: theme.palette.secondary.light,
        outline: '1px solid rgba(255, 255, 255, 0.1)',
    },
})

export const TextFieldName = styled(Box)({
    position: 'absolute',
    top: '-9px',
    left: '10px',
    fontSize: '0.6875rem;',
    fontWeight: '500',
    color: theme.palette.primary.main,
})

export const StyledAgreeText = styled('p')({
    fontSize: '0.6875rem',
    fontWeight: '500',
    color: theme.palette.primary.main,
})

//Songs list

export const PlayButtonBox = styled(Box)({
    padding: '24px 0',
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
})

export const PlaylistLikeButton = styled('button')({
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    color: 'hsla(0,0%,100%,.7)',
    '&:hover': {
        color: theme.palette.primary.main,
    },
})

export const StyledShowMoreBox = styled(Box)({
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    color: 'hsla(0,0%,100%,.7)',
    '&:hover': {
        color: theme.palette.primary.main,
    },
})

export const StyledSongsBox = styled(Box)({
    maxWidth: '1955px',
    '&:focus-visible ': {
        outline: '1px solid #b3b3b3',
        border: 'none',
    },
})

//Songs list header
export const SongsListHeaderBox = styled(Box)({
    display: 'grid',
    padding: '0 16px',
    gridGap: '16px',
    alignItems: 'center',
    color: theme.palette.primary.light,
    height: '36px',
    borderBottom: '1px solid hsla(0,0%,100%,.1)',
    gridTemplateColumns: '[index] 16px [first] 6fr [var1] 4fr [var2] 4fr [last] minmax(120px,1fr)',
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '[index] 16px [first] 6fr [var1] 3fr [last] minmax(120px,1fr)',
    },
    [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: '[index] 16px [first] 4fr [last] minmax(120px,1fr)',
    },
})

export const SongSegment = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifySelf: 'start',
    border: 'none',
})

export const SegmentTitleText = styled('span')({
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
})

export const IndexSegment = styled('span')({
    justifySelf: 'end',
})

export const Var1Segment = styled(SongSegment)({
    [theme.breakpoints.down('xs')]: {
        display: 'none',
    },
})

export const Var2Segment = styled(SongSegment)({
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
})

export const LastSegment = styled(Box)({
    gridColumn: 'last',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

//Song
export const SongBox = styled(SongsListHeaderBox)({
    height: '56px',
    position: 'relative',
    userSelect: 'none',
    borderRadius: '4px',
    border: 'none',
    '&:hover': {
        backgroundColor: 'hsla(0,0%,100%,.1)',
    },
})

export const SongLink = styled(Link)({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'unset',
    wordBreak: 'break-all',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
        textDecoration: 'underline',
    },
})

export const StyledSongLink = styled(SongLink)({
    fontSize: '0.875rem',
    color: theme.palette.primary.light,
    '&:hover': {
        color: theme.palette.primary.main,
    },
})

export const SegmentText = styled('span')({
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.875rem',
    color: theme.palette.primary.light,
})

export const StyledSearchSongSection = styled('section')({
    borderTop: '1px solid hsla(0,0%,100%,.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '24px',
    padding: '24px 0',
})

//Search section
export const SearchBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
})

export const SearchTitle = styled('h1')({
    all: 'unset',
    fontSize: '1.5rem',
    fontWeight: '500',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
        fontSize: '1.4rem',
    },
})

export const StyledSearchBar = styled('input')({
    backgroundColor: 'hsla(0,0%,100%,.1)',
    border: '0',
    borderRadius: '4px',
    height: '40px',
    padding: '8px 32px',
    width: '100%',
    fontSize: '0.875rem',
    color: 'hsla(0,0%,100%,.7)',
    '&:focus': {
        outline: '1px solid #b3b3b3',
    },
})

export const StyledSearchIcon = styled(BsSearch)({
    color: 'hsla(0,0%,100%,.7)',
    position: 'absolute',
    left: '10px',
    top: '12px',
})

export const StyledCloseButton = styled('button')({
    border: 'none',
    backgroundColor: 'transparent',
    color: theme.palette.primary.light,
    cursor: 'pointer',
    position: 'absolute',
    right: '10px',
    top: '6px',
})

//Result section
export const ResultBox = styled(StyledSongsBox)({
    minHeight: '40vh',
})

export const NoResultFoundBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    color: theme.palette.primary.light,
})

export const NoResult = styled(Box)({
    fontSize: '1.5rem',
    fontWeight: '500',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'unset',
    wordBreak: 'break-all',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

//Result song
export const ResultSongBox = styled(SongBox)({
    gridTemplateColumns: '[first] 3fr [var1] 2fr [last] minmax(120px,1fr)',
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '[first] 4fr [var1] 2fr [last] minmax(120px,1fr)',
    },
    [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: '[first] 4fr [last] minmax(120px,1fr)',
    },
})

export const Var1ResultSegment = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    width: 'fit-content',

    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
        display: 'none',
    },
})

export const AddButtonBox = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
})

export const AddButton = styled('button')({
    fontSize: '0.875rem',
    color: theme.palette.primary.main,
    fontWeight: '700',
    borderRadius: '500px',
    backgroundColor: 'transparent',
    textAlign: 'center',
    border: '1px solid #878787',
    paddingInline: '15px',
    minBlockSize: '32px',
    marginRight: '10px',
})

//Result artist

export const FoundArtistBox = styled(SongBox)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const ArtistImageBox = styled(Box)({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '16px',
})
