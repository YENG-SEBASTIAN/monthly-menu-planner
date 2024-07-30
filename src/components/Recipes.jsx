// src/components/Recipes.js
import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';

const Recipes = () => {
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

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const handleEditRecipe = (index, updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe, i) => (i === index ? updatedRecipe : recipe));
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return <RecipeList recipes={recipes} onAddRecipe={handleAddRecipe} onDeleteRecipe={handleDeleteRecipe} onEditRecipe={handleEditRecipe} />;
};

export default Recipes;
