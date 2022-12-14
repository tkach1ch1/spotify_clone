import {
    Route,
    Navigate,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import { Account } from 'src/pages/Account'
import { CreatePlaylistPage } from 'src/pages/CreatePlaylistPage/CreatePlaylistPage'
import { GenrePage } from 'src/pages/GenrePage/GenrePage'
import { Profile } from 'src/pages/Profile'
import { AlbumsPage } from '../../pages/AlbumsPage'
import { ArtistsPage } from '../../pages/ArtistsPage'
import { DownloadPage } from '../../pages/DownloadPage'
import { Error404Page } from '../../pages/Error404Page'
import { HomePage } from '../../pages/HomePage'
import { LikedSongsPage } from '../../pages/LikedSongsPage/LikedSongsPage'
import { LogIn } from '../../pages/LogIn'
import { PlaylistsPage } from '../../pages/PlaylistsPage/PlaylistsPage'
import { PremiumSubscriptionPage } from '../../pages/PremiumSubscriptionPage'
import { SearchPage } from '../../pages/SearchPage/SearchPage'
import { SignUp } from '../../pages/SignUp'
import { SupportPage } from '../../pages/SupportPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* ASSIDE NAVBAR */}
            <Route
                path='/'
                element={<HomePage />}
            />
            <Route
                path='/search'
                element={<SearchPage />}
            />
            <Route
                path='/collection'
                element={
                    <Navigate
                        to='/collection/playlists'
                        replace={true}
                    />
                }
            />
            <Route
                path='/collection/playlists'
                element={<PlaylistsPage />}
            />
            <Route
                path='/collection/artists'
                element={<ArtistsPage />}
            />
            <Route
                path='/collection/albums'
                element={<AlbumsPage />}
            />
            <Route
                path='/playlist/:playlistId'
                element={<CreatePlaylistPage />}
            />
            <Route
                path='/genre/:genreId'
                element={<GenrePage />}
            />
            <Route
                path='/collection/tracks'
                element={<LikedSongsPage />}
            />
            {/* TOP NAVBAR */}
            <Route
                path='/premium'
                element={<PremiumSubscriptionPage />}
            />
            <Route
                path='/support'
                element={<SupportPage />}
            />
            <Route
                path='/download/windows'
                element={<DownloadPage />}
            />
            <Route
                path='/account'
                element={<Account />}
            />
            <Route
                path='/user'
                element={<Profile />}
            />
            <Route
                path='/download/windows'
                element={<DownloadPage />}
            />
            <Route
                path='/signup'
                element={<SignUp />}
            />
            <Route
                path='/login'
                element={<LogIn />}
            />
            <Route
                path='*'
                element={<Error404Page />}
            />
        </Route>
    )
)

export const Routing = () => {
    return <RouterProvider router={router} />
}
