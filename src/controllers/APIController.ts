export const APIController = (function () {
    const clientId = '9e1ba66256f74b26a1dc62ac0c3d759a'
    const clientSecret = '4e227549830d44149c9a6344641d602f'

    const _getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
            },
            body: 'grant_type=client_credentials',
        })
        const data = await result.json()
        return data.access_token
    }

    const _getGenres = async (token: string) => {
        const result = await fetch('https://api.spotify.com/v1/browse/categories', {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token },
        })

        const data = await result.json()

        return data
    }

    const _getTrack = async (token: string, trackEndPoint: string) => {
        const result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token },
        })

        const data = await result.json()

        return data
    }

    const _getSearch = async (token: string, searchInput: string) => {
        const result = await fetch(
            `https://api.spotify.com/v1/search?q=${searchInput}&type=artist,track,album&limit=5`,
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token },
            }
        )
        const data = await result.json()

        return data
    }

    return {
        getToken() {
            return _getToken()
        },

        getGenres(token: string) {
            return _getGenres(token)
        },

        getTrack(token: string, trackEndPoint: string) {
            return _getTrack(token, trackEndPoint)
        },

        getSearch(token: string, searchInput: string) {
            return _getSearch(token, searchInput)
        },
    }
})()
