import { AllPlaylistTracksElements } from 'src/pages/CreatePlaylistPage/hooks/usePlaylistTracks'
export interface PlaylistElementProps {
    playlistName: string
    playlistDescription: string
    playlistImage: string
    playlistId: string
    isNotPlayable?: boolean //For own created playlists
    playlistCollab?: boolean //True - if playlist editable (self created playlists), false - if not editable (already exists spotify playlists)
    playlistOwnerId?: string
    playlistOwnerName: string
    playlistTracks: AllPlaylistTracksElements[]
}
