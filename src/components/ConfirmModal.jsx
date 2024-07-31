// src/components/ConfirmModal.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ConfirmModal = ({ showConfirmModal, handleClose, confirmDelete }) => (
  <Modal show={showConfirmModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Confirm Deletion</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete this menu?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="danger" onClick={confirmDelete}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ConfirmModal;
