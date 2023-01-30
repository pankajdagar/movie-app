import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import { navItems } from './constants';
import { Avatar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { drawerWidth } from '../../globalConstants/appConstants';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileSidebar } from '../../redux/actions/globalActions';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 20px;
`;

const SideBar = (props) => {
  const { window } = props;
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    dispatch(toggleMobileSidebar);
  };
  const { pathname } = useLocation();
  const globalStateData = useSelector((state) => state.global);
  const { isSideBarOpen } = globalStateData;
  const drawer = (
    <div>
      <StyledToolbar>
        <Avatar alt="Eric Hoffman" src="/images/eric.jpg" sx={{ width: 100, height: 100 }} />
        <Typography variant="h3" component="div" sx={{ marginTop: '10px' }}>
          Eric Hoffman
        </Typography>
      </StyledToolbar>
      {Object.keys(navItems).map((item) => (
        <React.Fragment key={item}>
          <Divider sx={{ bgcolor: '#D4D7DD' }} />
          <List>
            {navItems[item].map((text) => (
              <Link to={text.route} key={text.displayName} relative="path" style={{ textDecoration: 'none' }}>
                <ListItem key={text.displayName} disablePadding>
                  <ListItemButton sx={{ paddingLeft: '52px', paddingRight: 0, borderRight: text.route === pathname ? '3px solid #00E0FF' : '' }}>
                    <ListItemIcon>
                      <text.icon color={text.route === pathname ? 'secondary' : 'primary'} />
                    </ListItemIcon>
                    <ListItemText primary={text.displayName} sx={{ lineHeight: '37px', color: text.route === pathname ? '#00E0FF' : '#D4D7DD' }} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </React.Fragment>
      ))}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={isSideBarOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            '& .MuiPaper-root': {
              backgroundColor: '#1F2A3C',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            bgColor: '#1F2A3C',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            '& .MuiPaper-root': {
              backgroundColor: '#1F2A3C',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideBar;
