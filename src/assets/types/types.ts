import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
export interface PlaylistElementProps {
    playlistName: string
    playlistDescription: string
    playlistImage: string
    playlistId: string
    isNotPlayable?: boolean //For own created playlists
    playlistCollab?: boolean
    playlistOwnerId?: string
    playlistOwnerName: string
    playlistTracks: AllPlaylistTracksElements[]
}
