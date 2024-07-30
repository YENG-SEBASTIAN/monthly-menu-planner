import React, { useState, useEffect } from 'react';

const RecipeList = ({ recipes, onAddRecipe }) => {
  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '', instructions: '' });

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(newRecipe);
    setNewRecipe({ name: '', ingredients: '', instructions: '' });
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={handleChange}
          placeholder="Recipe Name"
          required
        />
        <textarea
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={handleChange}
          placeholder="Ingredients"
          required
        />
        <textarea
          name="instructions"
          value={newRecipe.instructions}
          onChange={handleChange}
          placeholder="Instructions"
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
