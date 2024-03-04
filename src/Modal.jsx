import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.css'; 

const Modal = ({ onClose }) => {
  useEffect(() => {
    console.log('Модальное окно создано!');
    return () => {
      console.log('Модальное окно удалено!');
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="modal-content">
          <p>Modal</p>
        </div>
      </div>
    </div>,
    document.getElementById('modals')
  );
};

export default Modal;