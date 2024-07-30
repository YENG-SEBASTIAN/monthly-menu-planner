// src/components/RecipeList.js
import React, { useState } from 'react';

const RecipeList = ({ recipes, onAddRecipe, onDeleteRecipe, onEditRecipe }) => {
  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '', instructions: '' });
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRecipe !== null) {
      onEditRecipe(editingRecipe, newRecipe);
      setEditingRecipe(null);
    } else {
      onAddRecipe(newRecipe);
    }
    setNewRecipe({ name: '', ingredients: '', instructions: '' });
  };

  const handleEdit = (index) => {
    setEditingRecipe(index);
    setNewRecipe(recipes[index]);
  };

  return (
    <div className="container my-4">
      <h2>Recipe List</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={newRecipe.name}
            onChange={handleChange}
            placeholder="Recipe Name"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleChange}
            placeholder="Ingredients"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="instructions"
            value={newRecipe.instructions}
            onChange={handleChange}
            placeholder="Instructions"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingRecipe !== null ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-danger" onClick={() => onDeleteRecipe(index)}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;
