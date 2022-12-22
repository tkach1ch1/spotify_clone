import { useWindowSize } from 'usehooks-ts'
import { ContentBox } from '../style'
import { ContentElement } from './ContentElement'

export const Content = () => {
    const { width } = useWindowSize()

    //Changing Content element width depends on screen width
    const contentElementsWidthControl = () => {
        if (width > 1600) {
            return {
                gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(200px,100%/3, max(200px, 100%/9)), 200px))',
            }
        } else {
            return {
                gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(170px,100%/3, max(170px, 100%/9)), 1fr))',
            }
        }
    }
    return (
        <ContentBox
            tabIndex={-1}
            sx={contentElementsWidthControl()}
        >
            <ContentElement index='first' />
            <ContentElement index='second' />
            <ContentElement index='third' />
            <ContentElement index='four' />
            <ContentElement index='five' />
            <ContentElement index='six' />
            <ContentElement index='seven' />
            <ContentElement index='eight' />
            <ContentElement index='nine' />
        </ContentBox>
    )
}
