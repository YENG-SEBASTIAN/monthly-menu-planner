// src/components/Menus.js
import React, { useState, useEffect } from 'react';

const Menus = () => {
  const [recipes, setRecipes] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const savedMenu = JSON.parse(localStorage.getItem('menu')) || [];
    setRecipes(savedRecipes);
    setMenu(savedMenu);
  }, []);

  const generateMenu = () => {
    if (recipes.length === 0) {
      alert('No recipes available to generate a menu.');
      return;
    }
    const newMenu = [];
    for (let i = 0; i < 30; i++) {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      newMenu.push({ date: new Date(2024, 7, i + 1).toDateString(), mealType: 'Dinner', recipe: randomRecipe });
    }
    setMenu(newMenu);
    localStorage.setItem('menu', JSON.stringify(newMenu));
  };

  return (
    <div className="container my-4">
      <h2>Monthly Menu</h2>
      <button className="btn btn-primary mb-3" onClick={generateMenu}>
        Generate Menu
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Meal Type</th>
            <th>Recipe</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((menuItem, index) => (
            <tr key={index}>
              <td>{menuItem.date}</td>
              <td>{menuItem.mealType}</td>
              <td>{menuItem.recipe.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menus;
