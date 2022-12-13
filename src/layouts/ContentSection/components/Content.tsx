import { ContentBox } from '../style'
import { ContentElement } from './ContentElement'

export const Content = () => {
    return (
        <ContentBox tabIndex={-1}>
            <ContentElement />
            <ContentElement />
            <ContentElement />
            <ContentElement />
            <ContentElement />
            <ContentElement />
            <ContentElement />
            <ContentElement />
            <ContentElement />
        </ContentBox>
    )
}
