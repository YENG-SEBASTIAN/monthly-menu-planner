// src/components/MenuList.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MenuForm from './MenuForm';
import ConfirmModal from './ConfirmModal';

const MenuList = ({ menus, onAddMenu, onDeleteMenu, onEditMenu }) => {
  const [newMenu, setNewMenu] = useState({ name: '', mealType: '', description: '', benefit: '', price: '' });
  const [editingMenu, setEditingMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(null);

  const handleChange = (e) => {
    setNewMenu({ ...newMenu, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMenu !== null) {
      onEditMenu(editingMenu, newMenu);
      setEditingMenu(null);
    } else {
      onAddMenu(newMenu);
    }
    setNewMenu({ name: '', mealType: '', description: '', benefit: '', price: '' });
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setEditingMenu(index);
    setNewMenu(menus[index]);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    setDeletingIndex(index);
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    onDeleteMenu(deletingIndex);
    setShowConfirmModal(false);
  };

  return (
    <div className="container my-4">
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Add Menu
      </Button>

      <h4 className="mt-4 text-center fw-bolder text-primary">Menu List</h4>

      {menus.length === 0 ? (
        <p className="text-center">You do not have any menus yet. Please use the button above to add some.</p>
      ) : (
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th>ID</th>
              <th>Menu Name</th>
              <th>Meal Type</th>
              <th>Description</th>
              <th>Benefit</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{menu.name}</td>
                <td>{menu.mealType}</td>
                <td>{menu.description}</td>
                <td>{menu.benefit}</td>
                <td>{menu.price}</td>
                <td className="align-items-center justify-content-between gap-3">
                  <Button variant="warning" className="me-2" onClick={() => handleEdit(index)}>
                    <i className="bi bi-pencil"></i> 
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    <i className="bi bi-trash"></i> 
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <MenuForm
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newMenu={newMenu}
        editingMenu={editingMenu}
      />

      <ConfirmModal
        showConfirmModal={showConfirmModal}
        handleClose={() => setShowConfirmModal(false)}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default MenuList;
