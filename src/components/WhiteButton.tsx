import { ReactNode } from 'react'
import { StyledWhiteButton } from './style'

interface WhiteButtonProps {
    children: ReactNode
    onButtonAction: () => void
}

export const WhiteButton = ({ children, onButtonAction }: WhiteButtonProps) => {
    return <StyledWhiteButton onClick={onButtonAction}>{children} </StyledWhiteButton>
}
