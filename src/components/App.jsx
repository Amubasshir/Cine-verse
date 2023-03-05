import { CssBaseline } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from './Movies/Movies';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';

const App = () => {
  return (
    <div>
      <NavBar />
      <CssBaseline />
      <main>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="Profile" element={<Profile />}></Route>
          <Route path="Profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
