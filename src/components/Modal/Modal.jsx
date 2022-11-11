import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";





const SuccessModal = ({ orderData, isOpen, setIsOpen }) => {
    const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false)
    navigate(`/`);
};
 return (
    <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gracias por su compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>
            Order Id: {orderData?.id}
        </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
 );
};

export default SuccessModal;
