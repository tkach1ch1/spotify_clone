import {
    SelectStyledLi,
    SelectStyledUl,
    SelectTitle,
    StyledSelectElement,
    StyledTyphographie,
} from './style'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { CSSProperties } from 'react'

export type ArrayProps = {
    name: string
    link?: string
    image?: JSX.Element
    actionFunction?: () => void
}

interface SelectProps {
    array: ArrayProps[]
    style: CSSProperties
    selectTitle?: string
}

export const Select = ({ array, style, selectTitle }: SelectProps) => {
    const navigate = useNavigate()

    return (
        <SelectStyledUl style={style}>
            {selectTitle ? <SelectTitle>{selectTitle}</SelectTitle> : null}
            {array &&
                array.map((elem) => (
                    <SelectStyledLi key={nanoid()}>
                        <StyledSelectElement
                            //If array of elements has links onClick will navigate to this links path
                            //If array has some actionFunctions this functions will be invoked
                            onClick={() => {
                                if (elem.link) {
                                    navigate(elem.link)
                                } else if (!elem.link) {
                                    elem.actionFunction && elem.actionFunction()
                                }
                            }}
                        >
                            <StyledTyphographie>{elem.name}</StyledTyphographie>
                            {elem.image ? elem.image : null}
                        </StyledSelectElement>
                    </SelectStyledLi>
                ))}
        </SelectStyledUl>
    )
}
