import { ShowAllText, Title, TitleBox } from '../style'

interface SectionTitleProps {
    title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <TitleBox>
            <Title to=''>{title}</Title>
            <ShowAllText to=''>Show all</ShowAllText>
        </TitleBox>
    )
}
