import { Box, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { drawerWidth } from '../../globalConstants/appConstants';
import Discover from '../Discover';
import Header from '../Header';
import SideBar from '../SideBar';

const Layout = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header/>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflowX: 'auto', width: { sm: `calc(100% - ${drawerWidth}px)` }, bgcolor: '#273244', height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Discover />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Layout;
