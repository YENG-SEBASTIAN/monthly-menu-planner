// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menus from './components/Menus';
import AllMenusList from './components/AllMenusList';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu-list" element={<AllMenusList />} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </>
  );
};

export default App;
