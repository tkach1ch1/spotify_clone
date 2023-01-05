import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { useNextAndPrevTrack } from 'src/layouts/NowPlayingBar/components/AuthorizedFooter/hooks/useNextAndPrevTrack'
import { StyledIcon, StyledTooltip } from 'src/layouts/NowPlayingBar/style'

interface PrevButtonProps {
    audio: HTMLAudioElement
}

export const PreviousButton = ({ audio }: PrevButtonProps) => {
    const { getPrevTrack } = useNextAndPrevTrack()

    const onPrevButtonClick = () => {
        getPrevTrack(audio)
    }

    return (
        <StyledIcon onClick={onPrevButtonClick}>
            <StyledTooltip
                title='Previous'
                placement='top'
            >
                <SkipPreviousIcon sx={{ width: '30px', height: '30px' }} />
            </StyledTooltip>
        </StyledIcon>
    )
}
