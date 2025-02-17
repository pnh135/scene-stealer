import styled from 'styled-components';

const DefaultModal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 320px;
  height: 480px;
  position: fixed;
  top: 120px;
  left: 110px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 1rem;
  background-color: white;
  padding: 1.2rem;
  border: 1px solid #bdbdbd;
  text-align: left;
  cursor: pointer;
`;

export default DefaultModal;
