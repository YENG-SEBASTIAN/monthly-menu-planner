import React, { useState, useEffect } from 'react';

const MenuPlanner = ({ recipes }) => {
  const [menu, setMenu] = useState([]);

  const generateMenu = () => {
    const newMenu = [];
    for (let i = 0; i < 30; i++) {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      newMenu.push({ date: new Date(2024, 7, i + 1).toDateString(), mealType: 'Dinner', recipe: randomRecipe });
    }
    setMenu(newMenu);
  };

  return (
    <div>
      <h2>Monthly Menu Planner</h2>
      <button onClick={generateMenu}>Generate Monthly Menu</button>
      <div>
        {menu.map((item, index) => (
          <div key={index}>
            <h3>{item.date}</h3>
            <p><strong>Meal Type:</strong> {item.mealType}</p>
            <p><strong>Recipe:</strong> {item.recipe.name}</p>
            <p><strong>Ingredients:</strong> {item.recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {item.recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPlanner;
