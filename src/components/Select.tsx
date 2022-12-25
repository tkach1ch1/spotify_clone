import { SelectStyledLi, SelectStyledUl, StyledSelectLink, StyledTyphographie } from './style'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { CSSProperties } from 'react'

type ArrayProps = {
    name: string
    link?: string
    image?: boolean
    actionFunction?: () => void
}

interface SelectProps {
    array: ArrayProps[]
    style: CSSProperties
}

export const Select = ({ array, style }: SelectProps) => {
    const navigate = useNavigate()

    return (
        <SelectStyledUl style={style}>
            {array &&
                array.map((elem) => (
                    <SelectStyledLi key={nanoid()}>
                        <StyledSelectLink
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
                            {elem.image ? (
                                <OpenInNewIcon sx={{ width: '20px', height: '20px' }} />
                            ) : null}
                        </StyledSelectLink>
                    </SelectStyledLi>
                ))}
        </SelectStyledUl>
    )
}
