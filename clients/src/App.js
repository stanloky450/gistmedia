import React from 'react';
import { Container, Content } from '@mui/material';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" exact element={<PostDetails />} />

          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/posts" />}
          />
        </Routes>
      </Container>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
};

export default App;
