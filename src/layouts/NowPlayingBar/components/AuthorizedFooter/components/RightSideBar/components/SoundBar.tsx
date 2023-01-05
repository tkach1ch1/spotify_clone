import { Box } from '@mui/material'
import { useEffect } from 'react'
import { StyledIcon, StyledSlider, StyledTooltip } from 'src/layouts/NowPlayingBar/style'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks'
import { trackMuted, trackVolumeControll } from 'src/redux/nowPlayingPlaylistReducer'

interface SoundBarProps {
    audio: HTMLAudioElement
}

export const SoundBar = ({ audio }: SoundBarProps) => {
    const current_volume = useAppSelector((state) => state.playingPlaylist.track_volume)
    const muted = useAppSelector((state) => state.playingPlaylist.muted)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!muted && current_volume) {
            audio.volume = current_volume / 100
        } else if (muted) {
            audio.volume = 0
        } else if (current_volume === 0) {
            dispatch(trackMuted(true))
        }
    }, [current_volume, audio, muted, dispatch])

    return (
        <Box
            sx={{
                display: 'flex',
                mb: '2px',
                justifyContent: 'space-between',
                gap: '10px',
            }}
        >
            <StyledTooltip
                title={muted || current_volume === 0 ? 'Unmute' : 'Mute'}
                placement='top'
            >
                <StyledIcon
                    sx={{ mt: '5px' }}
                    onClick={() => {
                        dispatch(trackMuted(!muted))
                        if (current_volume === 0) {
                            dispatch(trackVolumeControll(30))
                        }
                    }}
                >
                    {muted || current_volume === 0 ? (
                        <VolumeOffIcon fontSize='small' />
                    ) : current_volume < 60 ? (
                        <VolumeDownIcon fontSize='small' />
                    ) : (
                        <VolumeUpIcon fontSize='small' />
                    )}
                </StyledIcon>
            </StyledTooltip>
            <Box sx={{ width: '93px' }}>
                <StyledSlider
                    aria-label='Volume'
                    size='small'
                    value={muted ? 0 : current_volume ? current_volume : 0}
                    onChange={(_, value) => {
                        dispatch(dispatch(trackVolumeControll(value)))
                    }}
                />
            </Box>
        </Box>
    )
}
