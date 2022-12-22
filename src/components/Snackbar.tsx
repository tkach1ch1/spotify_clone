import { SnackbarBox, SnackbarText } from './style'

interface SnackbarProps {
    content: string
}
export const Snackbar = ({ content }: SnackbarProps) => {
    return (
        <SnackbarBox>
            <SnackbarText>{content}</SnackbarText>
        </SnackbarBox>
    )
}
