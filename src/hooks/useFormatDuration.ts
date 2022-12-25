export const useFormatDuration = () => {
    const trackDuration = (value: number) => {
        const minute = Math.floor(value / 60)
        const secondLeft = value - minute * 60
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
    }

    const playlistDuration = (value: number) => {
        if (value) {
            const hour = Math.floor((value / (1000 * 60 * 60)) % 24)
            const minute = Math.floor((value / (1000 * 60)) % 60)
            return `${hour} hr ${minute} min`
        }
    }

    return { trackDuration, playlistDuration }
}
