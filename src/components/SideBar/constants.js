import { LiveTv, Search, PlaylistPlay, ListOutlined } from '@mui/icons-material';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const navItems = {
  top: [
    {
      displayName: 'Discover',
      icon: Search,
      route: '/'
    },
    {
      displayName: 'Playlist',
      icon: PlaylistPlay,
      route: '/playlist'
    },
    {
      displayName: 'Movie',
      icon: LiveTv,
      route:'/movie'
    },
    {
      displayName: 'TV Shows',
      icon: DesktopWindowsOutlinedIcon,
      route: '/tv-shows'
    },
    {
      displayName: 'My List',
      icon: ListOutlined,
      route: '/my-list'
    },
  ],
  mid: [
    {
      displayName: 'Watch Later',
      icon: UpdateOutlinedIcon,
      route: '/watch-later'
    },
    {
      displayName: 'Recommended',
      icon: FavoriteBorderOutlinedIcon,
      route: '/recommended'
    },
  ],
  bottom: [
    {
      displayName: 'Settings',
      icon: SettingsOutlinedIcon,
      route: '/settings'
    },
    {
      displayName: 'Logout',
      icon: LogoutOutlinedIcon,
    },
  ],
};
