// src/components/Menus.js
import React, { useState, useEffect } from 'react';
import MenuList from './MenuList';

const Menus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const savedMenus = JSON.parse(localStorage.getItem('menus')) || [];
    setMenus(savedMenus);
  }, []);

  const handleAddMenu = (newMenu) => {
    const updatedMenus = [...menus, newMenu];
    setMenus(updatedMenus);
    localStorage.setItem('menus', JSON.stringify(updatedMenus));
  };

  const handleDeleteMenu = (index) => {
    const updatedMenus = menus.filter((_, i) => i !== index);
    setMenus(updatedMenus);
    localStorage.setItem('menus', JSON.stringify(updatedMenus));
  };

  const handleEditMenu = (index, updatedMenu) => {
    const updatedMenus = menus.map((menu, i) => (i === index ? updatedMenu : menu));
    setMenus(updatedMenus);
    localStorage.setItem('menus', JSON.stringify(updatedMenus));
  };

  return (
    <MenuList
      menus={menus}
      onAddMenu={handleAddMenu}
      onDeleteMenu={handleDeleteMenu}
      onEditMenu={handleEditMenu}
    />
  );
};

export default Menus;
