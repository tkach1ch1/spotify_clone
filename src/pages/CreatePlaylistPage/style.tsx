import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import { theme } from 'src/assets/theme'

export const MainPlaylistTitleBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '25px',
    width: '100%',
    heigth: '100%',
    padding: '24px 32px 0 32px',
    [theme.breakpoints.down('lg')]: {
        padding: '65px 32px 0 32px',
    },
})

export const TitleBackground = styled(Box)({
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: 'rgb(83, 83, 83)',
    width: '100%',
    height: '300px',
})

export const GradientBackgound = styled(TitleBackground)({
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
    border: '2px solid transparent',
    '&:focus-visible': {
        outline: '1px solid white',
        border: '2px solid #1a54c7',
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
    width: '80%',
    color: theme.palette.primary.main,
})

export const PlaylistTitle = styled(Box)({
    fontSize: '6rem',
    fontWeight: '700',
    cursor: 'pointer',
    width: 'fit-content',
    marginBottom: '10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: '827px',

    [theme.breakpoints.down('lg')]: {
        fontSize: '4.5rem',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '3rem',
    },
})

export const PlaylistDescriptionBox = styled(Box)({
    width: '100%',
    cursor: 'pointer',
})

export const PlaylistDescription = styled(Box)({
    color: '#b3b3b3',
})

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
