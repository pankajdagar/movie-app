import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth } from '../../globalConstants/appConstants';
import SearchBox from '../SearchBox';
import { useDispatch } from 'react-redux';
import { toggleMobileSidebar } from '../../redux/actions/globalActions';
import { getMovieList } from '../../networkHandlers/movieListHandlers';
import { debounce } from '../../utils';

const Header = () => {
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    dispatch(toggleMobileSidebar);
  };
  const searchHandler = (e) => {
    dispatch(getMovieList(e.target.value));
  };
  const debouncedSearch = debounce(searchHandler, 400);
  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: 'block', sm: 'none' },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: '#1A2536',
      }}
    >
      <Toolbar>
        <IconButton color="primary" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <SearchBox isAppBar onInputChange={debouncedSearch} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
