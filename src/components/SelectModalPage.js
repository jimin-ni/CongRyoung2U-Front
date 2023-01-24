import React from 'react';
import { useState } from 'react';
import SelectModal from './SelectModal';

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>모달 띄우기</button>
      {modalOpen && <SelectModal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default Modal;