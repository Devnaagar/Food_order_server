import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastComponent = ({ show, message, onClose }) => {
    return (
        <ToastContainer position="bottom-end">
            <Toast onClose={onClose} show={show} delay={4000} autohide style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1050 }}>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default ToastComponent;
