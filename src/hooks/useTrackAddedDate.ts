export const useTrackAddedDate = () => {
    const addedTrackTimeAgo = (dateParam: string) => {
        if (typeof new Date(dateParam) !== 'object') {
            return null
        }

        //Value of track's added date
        const trackAddedDate = new Date(dateParam).valueOf()

        //Value of today's date
        const todayDate = new Date().valueOf()

        const seconds = Math.round((todayDate - trackAddedDate) / 1000)
        const minutes = Math.round(seconds / 60)
        const hours = Math.round(minutes / 60)
        const daysAgo = new Date(todayDate).getDate() - new Date(trackAddedDate).getDate()
        const monthsAgo = new Date(todayDate).getMonth() - new Date(trackAddedDate).getMonth()

        if (seconds < 60) {
            return `${seconds} seconds ago`
        } else if (minutes < 60) {
            return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`
        } else if (hours < 24) {
            return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`
        } else if (daysAgo > 0) {
            return daysAgo === 1 ? `${daysAgo} day ago` : `${daysAgo} days ago`
        } else if (monthsAgo > 0) {
            return monthsAgo === 1 ? `${monthsAgo} month ago` : `${monthsAgo} months ago`
        }
    }
    return { addedTrackTimeAgo }
}
