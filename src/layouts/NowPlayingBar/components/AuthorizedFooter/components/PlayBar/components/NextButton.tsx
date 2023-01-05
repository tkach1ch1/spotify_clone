import SkipNextIcon from '@mui/icons-material/SkipNext'
import { useNextAndPrevTrack } from 'src/layouts/NowPlayingBar/components/AuthorizedFooter/hooks/useNextAndPrevTrack'
import { StyledIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'

interface NextButtonProps {
    audio: HTMLAudioElement
}

export const NextButton = ({ audio }: NextButtonProps) => {
    const { getNextTrack } = useNextAndPrevTrack()

    const onNextButtonClick = () => {
        getNextTrack(audio)
    }

    return (
        <StyledIcon onClick={onNextButtonClick}>
            <StyledTooltip
                title='Next'
                placement='top'
            >
                <SkipNextIcon sx={{ width: '30px', height: '30px' }} />
            </StyledTooltip>
        </StyledIcon>
    )
}
