// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MonthlyMenu from './components/MonthlyMenu';
import AllMenusList from './components/AllMenusList';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu-list" element={<AllMenusList />} />
        <Route path="/menus" element={<MonthlyMenu />} />
      </Routes>
    </>
  );
};

export default App;
