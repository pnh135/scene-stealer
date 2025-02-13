import React, { useState } from 'react';
import Modal from '../components/Modal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => setIsOpen(!isOpen);
  return (
    <>
      <div>test</div>
      <button onClick={handleModal}>열기</button>
      <Modal isOpen={isOpen} />
    </>
  );
};

export default Home;
