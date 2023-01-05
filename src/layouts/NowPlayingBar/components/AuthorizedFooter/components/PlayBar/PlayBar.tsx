import { Box } from '@mui/system'
import { PlayBarBox } from 'src/layouts/NowPlayingBar/style'
import { ShuffleButton } from './components/ShuffleButton'
import { PreviousButton } from './components/PreviousButton'
import { PlayButton } from './components/PlayButton'
import { NextButton } from './components/NextButton'
import { RepeatButton } from './components/RepeatButton'
import { PlaySlider } from './components/PlaySlider'

interface PlayBarProps {
    audio: HTMLAudioElement
    isPlaying: boolean
    current_duration: number
}

export const PlayBar = ({ audio, isPlaying, current_duration }: PlayBarProps) => {
    //Due to spotify API rules it is unallowed to get full track duration, only 30 sec
    let previewDuration = 30000

    return (
        <PlayBarBox>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '15px',
                }}
            >
                <ShuffleButton />
                <PreviousButton audio={audio} />
                <PlayButton
                    audio={audio}
                    isPlaying={isPlaying}
                    current_duration={current_duration}
                />
                <NextButton audio={audio} />
                <RepeatButton />
            </Box>
            <Box>
                <PlaySlider
                    ms_duration={previewDuration}
                    current_duration={current_duration}
                />
            </Box>
        </PlayBarBox>
    )
}
