import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import MenuPlanner from './components/MenuPlanner';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <div>
      <h1>Monthly Menu Planner</h1>
      <RecipeList recipes={recipes} onAddRecipe={handleAddRecipe} />
      <MenuPlanner recipes={recipes} />
    </div>
  );
};

export default App;
