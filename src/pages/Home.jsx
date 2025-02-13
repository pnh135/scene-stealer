import React, { useState } from 'react';
import Modal from '../components/Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div>test</div>
      <button onClick={handleModal}>열기</button>
      <Modal isOpen={isModalOpen} onClick={handleModal} />
    </>
  );
};

export default Home;
