import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MonthlyMenu = () => {
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
    const newMenu = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const randomBreakfast = menus.filter(menu => menu.mealType === 'Breakfast')[Math.floor(Math.random() * menus.filter(menu => menu.mealType === 'Breakfast').length)] || null;
      const randomLunch = menus.filter(menu => menu.mealType === 'Lunch')[Math.floor(Math.random() * menus.filter(menu => menu.mealType === 'Lunch').length)] || null;
      const randomDinner = menus.filter(menu => menu.mealType === 'Dinner')[Math.floor(Math.random() * menus.filter(menu => menu.mealType === 'Dinner').length)] || null;
      const menuDate = new Date(today);
      menuDate.setDate(today.getDate() + i);
      newMenu.push({ date: menuDate.toDateString(), breakfast: randomBreakfast, lunch: randomLunch, dinner: randomDinner });
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
          <Modal.Header>
            <Modal.Title className='text-center text-success fw-bolder'>Menu Details for {selectedMenu.date}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="breakfast">
              <h5 className='text-center text-danger fw-bold'>Breakfast</h5>
              {selectedMenu.breakfast ? (
                <>
                  <p><strong>Name:</strong> {selectedMenu.breakfast.name}</p>
                  <p><strong>Description:</strong> {selectedMenu.breakfast.description}</p>
                  <p><strong>Benefit:</strong> {selectedMenu.breakfast.benefit}</p>
                  <p><strong>Price:</strong> <strong className='text-danger'>Ghs {selectedMenu.breakfast.price}</strong></p>
                </>
              ) : (
                <p>Breakfast has no entry yet kindly add some and regenerate the menu.</p>
              )}
            </div>
            <div className="lunch">
              <h5 className='text-center text-danger fw-bold'>Lunch</h5>
              {selectedMenu.lunch ? (
                <>
                  <p><strong>Name:</strong> {selectedMenu.lunch.name}</p>
                  <p><strong>Description:</strong> {selectedMenu.lunch.description}</p>
                  <p><strong>Benefit:</strong> {selectedMenu.lunch.benefit}</p>
                  <p><strong>Price:</strong> <strong className='text-danger'>Ghs {selectedMenu.lunch.price}</strong></p>
                </>
              ) : (
                <p>Lunch has no entry yet kindly add some and regenerate the menu.</p>
              )}
            </div>
            <div className="dinner">
              <h5 className='text-center text-danger fw-bold'>Dinner</h5>
              {selectedMenu.dinner ? (
                <>
                  <p><strong>Name:</strong> {selectedMenu.dinner.name}</p>
                  <p><strong>Description:</strong> {selectedMenu.dinner.description}</p>
                  <p><strong>Benefit:</strong> {selectedMenu.dinner.benefit}</p>
                  <p><strong>Price:</strong> <strong className='text-danger'>Ghs {selectedMenu.dinner.price}</strong></p>
                </>
              ) : (
                <p>Dinner has no entry yet kindly add some and regenerate the menu.</p>
              )}
            </div>
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

export default MonthlyMenu;
