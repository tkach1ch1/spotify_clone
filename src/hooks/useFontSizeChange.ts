import { useWindowSize } from 'usehooks-ts'
export const useFontSizeChange = () => {
    const { width } = useWindowSize()

    //Changing playlist name fontSize dependes on name input length and widow width
    const lengthCheck = (str: string) => {
        if (str.length <= 14 && width < 1024) {
            return {
                fontSize: '2rem',
            }
        } else if (str.length <= 14 && width < 1280) {
            return {
                fontSize: '4rem',
            }
        } else if (str.length <= 14) {
            return {
                fontSize: '6rem',
            }
        } else if (str.length > 14) {
            return {
                fontSize: '2rem',
                wordBreak: 'break-all',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
            }
        }
    }

    return { lengthCheck }
}
