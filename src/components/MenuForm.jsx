// src/components/MenuForm.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MenuForm = ({ showModal, handleClose, handleSubmit, handleChange, newMenu, editingMenu }) => (
  <Modal show={showModal} onHide={handleClose}>
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
);

export default MenuForm;
