import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

export const navBarCategoriesArray = [
  { name: 'Home', image: HomeOutlinedIcon, imageActive: HomeIcon, link: '/' },
  { name: 'Search', image: SearchIcon, imageActive: SearchIcon, link: '/search' },
  {
    name: 'Your Library',
    image: CollectionsBookmarkOutlinedIcon,
    imageActive: CollectionsBookmarkIcon,
    link: '/collection/playlists',
  },
];
