export interface PlaylistElementProps {
    playlistName: string
    playlistDescription: string
    playlistImage: string
    isNotPlayable?: boolean //For own created playlists
    playlistId: string
    playlistCollab?: boolean
    playlistOwnerId?: string
    playlistOwnerName?: string
}
