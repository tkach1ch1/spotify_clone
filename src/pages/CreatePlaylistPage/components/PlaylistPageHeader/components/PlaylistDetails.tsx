import { Box } from '@mui/material'
import React from 'react'
import { theme } from 'src/assets/theme'
import { useFormatDuration } from 'src/hooks/useFormatDuration'
import { PlaylistDetailsBox } from 'src/pages/CreatePlaylistPage/style'

interface PlaylistDetailsProps {
    allTracksDuration: number | undefined
    playlistOwnerName?: string
    allPlaylistTracksLength: number | undefined
}

export const PlaylistDetails = ({
    allTracksDuration,
    playlistOwnerName = 'Bogdan Tkach',
    allPlaylistTracksLength,
}: PlaylistDetailsProps) => {
    const { playlistDuration } = useFormatDuration()

    return (
        <PlaylistDetailsBox>
            <Box sx={{ fontWeight: '500' }}>{playlistOwnerName}</Box>
            <Box>•</Box>
            <Box> {`${allPlaylistTracksLength} songs, `} </Box>
            <Box sx={{ color: theme.palette.primary.light }}>
                {allTracksDuration ? playlistDuration(allTracksDuration) : '0 hr 0 min'}
            </Box>
        </PlaylistDetailsBox>
    )
}
