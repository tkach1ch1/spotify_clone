export const useTrackDuration = () => {
    function formatDuration(value: number) {
        const minute = Math.floor(value / 60)
        const secondLeft = value - minute * 60
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
    }

    return { formatDuration }
}
