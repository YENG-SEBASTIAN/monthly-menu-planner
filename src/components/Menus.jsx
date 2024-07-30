// src/components/Menus.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Menus = () => {
  const [menus, setMenus] = useState([]);
  const [monthlyMenu, setMonthlyMenu] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const savedMenus = JSON.parse(localStorage.getItem('menus')) || [];
    const savedMonthlyMenu = JSON.parse(localStorage.getItem('monthlyMenu')) || [];
    setMenus(savedMenus);
    setMonthlyMenu(savedMonthlyMenu);
  }, []);

  const generateMenu = () => {
    if (menus.length === 0) {
      alert('No menus available to generate a monthly menu.');
      return;
    }
    const newMenu = [];
    for (let i = 0; i < 30; i++) {
      const randomMenu = menus[Math.floor(Math.random() * menus.length)];
      newMenu.push({ date: new Date(2024, 7, i + 1).toDateString(), mealType: 'Dinner', ...randomMenu });
    }
    setMonthlyMenu(newMenu);
    localStorage.setItem('monthlyMenu', JSON.stringify(newMenu));
  };

  const handleDeleteAll = () => {
    setShowConfirmModal(true);
  };

  const confirmDeleteAll = () => {
    localStorage.removeItem('monthlyMenu');
    setMonthlyMenu([]);
    setShowConfirmModal(false);
  };

  const handleGridClick = (menuItem) => {
    setSelectedMenu(menuItem);
    setShowDetailModal(true);
  };

  return (
    <div className="container my-4">
      <h2>Monthly Menu</h2>
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={generateMenu} disabled={menus.length === 0}>
          Generate Menu
        </Button>
        {monthlyMenu.length > 0 && (
          <Button variant="danger" onClick={handleDeleteAll}>
            Delete Monthly Menu
          </Button>
        )}
      </div>

      {monthlyMenu.length === 0 ? (
        <p>You do not have any menus for the month yet. Kindly add menus and generate one.</p>
      ) : (
        <div className="row">
          {monthlyMenu.map((menuItem, index) => (
            <div
              key={index}
              className="col-md-3 mb-3"
              onClick={() => handleGridClick(menuItem)}
            >
              <div className="card" style={{ cursor: 'pointer', backgroundColor: 'lightgreen' }}>
                <div className="card-body">
                  <h5 className="card-title">{menuItem.date}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{menuItem.mealType}</h6>
                  <p className="card-text">{menuItem.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Confirming Deletion */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the monthly menu?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeleteAll}>
            Delete Menu
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Showing Details */}
      {selectedMenu && (
        <Modal show={showDetailModal} onHide={() => setShowDetailModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Menu Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Meal Type:</strong> {selectedMenu.mealType}</p>
            <p><strong>Name:</strong> {selectedMenu.name}</p>
            <p><strong>Description:</strong> {selectedMenu.description}</p>
            <p><strong>Benefit:</strong> {selectedMenu.benefit}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDetailModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Menus;
