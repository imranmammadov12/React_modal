import React, { useState } from 'react';
import Modal from './/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Открыть модальное окно</button>
      {showModal && <Modal onClose={toggleModal} />}
      <div id="modals"></div>
    </div>
  );
};

export default App;
