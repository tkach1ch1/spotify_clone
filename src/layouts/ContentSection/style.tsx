import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { theme } from 'src/assets/theme'

export const SectionBox = styled('section')({
    minWidth: '100%',
    minHeight: '300px',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    marginBottom: '16px',
})

export const TitleBox = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    alignItems: 'center',
})

export const Title = styled(Link)({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: '500',
    '&:hover': {
        textDecoration: 'underline',
    },
})

export const ShowAllText = styled(Link)({
    textDecoration: 'none',
    color: theme.palette.primary.light,
    fontSize: '0.75rem  ',
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: '1.6px',
    '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
    },
})

export const ContentBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(155px,100%/3, max(155px, 100%/9)), 1fr))',
    overflowY: 'hidden',
    gridGap: '18px',
    gridTemplateRows: '1fr',
    gridAutoRows: '0',
    // rowGap: 0,
})

export const ElementBox = styled(Box)({
    width: '100%',
    padding: '16px',
    backgroundColor: '#181818',
    borderRadius: '6px',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        transition: 'all 0.5s',
    },
    '&:hover #hoveredGreenButton': {
        transform: 'translateY(0)',
        opacity: '1',
    },
    '&:focus-visible': {
        outline: 'none',
        backgroundColor: theme.palette.secondary.light,
        transition: 'all 0.5s',
    },
    '&:focus-visible #hoveredGreenButton': {
        opacity: '1',
        transform: 'translateY(0)',
        outline: '2px solid white',
    },
})

export const StyledImg = styled('img')({
    boxShadow: '0 8px 24px rgba(0,0,0,.5)',
    borderRadius: '6px',
    width: '100%',
})

export const ElementName = styled(Box)({
    color: theme.palette.primary.main,
    fontWeight: '500',
    marginBottom: '10px',
})

export const ElementDescription = styled(Box)({
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    fontSize: '13px',
    color: theme.palette.primary.dark,
})

export const PlaylistImageBox = styled(Box)({
    color: theme.palette.primary.dark,
    position: 'relative',
    backgroundColor: '#333',
    boxShadow: '0 8px 24px rgba(0,0,0,.5)',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})
