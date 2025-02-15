import React from 'react';
import styled from 'styled-components';

const Modal = ({ isOpen, handleModal }) => {
  console.log({ isOpen });
  return (
    <StdModal $isOpen={isOpen}>
      <p>Modal</p>
      <button onClick={handleModal}>닫기</button>
    </StdModal>
  );
};

export default Modal;

const StdModal = styled.div`
  width: 100px;
  height: 100px;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  background-color: gray;
`;
