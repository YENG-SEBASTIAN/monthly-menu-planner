// src/components/MenuList.js
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MenuList = ({ menus, onAddMenu, onDeleteMenu, onEditMenu }) => {
  const [newMenu, setNewMenu] = useState({ name: '', mealType: '', description: '', benefit: '' });
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
    setNewMenu({ name: '', mealType: '', description: '', benefit: '' });
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

      {
        menus.length === 0 ? (
          <p className='text-center'>You do not have any menus yet. Please use the button above to add some.</p>
        ) : (
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th>ID</th>
            <th>Menu Name</th>
            <th>Meal Type</th>
            <th>Description</th>
            <th>Benefit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{menu.name}</td>
              <td>{menu.mealType}</td>
              <td>{menu.description}</td>
              <td>{menu.benefit}</td>
              <td className='align-items-center justify-content-between gap-3'>
                <Button variant="warning" className="me-2" onClick={() => handleEdit(index)}>
                  <i className="bi bi-pencil"></i> Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  <i className="bi bi-trash"></i> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        )
      }


      {/* Modal for Adding/Editing Menu */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingMenu !== null ? 'Edit Menu' : 'Add Menu'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                value={newMenu.name}
                onChange={handleChange}
                placeholder="Menu Name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <select
                name="mealType"
                value={newMenu.mealType}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select Meal Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
            <div className="mb-3">
              <textarea
                name="description"
                value={newMenu.description}
                onChange={handleChange}
                placeholder="Description"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="benefit"
                value={newMenu.benefit}
                onChange={handleChange}
                placeholder="Benefit"
                className="form-control"
                required
              />
            </div>
            <Button type="submit" variant="primary">
              {editingMenu !== null ? 'Update Menu' : 'Add Menu'}
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Modal for Confirming Deletion */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this menu?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MenuList;
