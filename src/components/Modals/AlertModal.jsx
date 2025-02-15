import styled from 'styled-components';

const AlertModal = ({ isOpen, handleModal }) => {
  return (
    <StdModal $isOpen={isOpen}>
      <div>
        <button onClick={handleModal}>x</button>알림
      </div>
      <div>내용</div>
    </StdModal>
  );
};

export default AlertModal;

const StdModal = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  width: 100px;
  height: 80%;
  background-color: gray;
  position: fixed;
  left: auto;
`;
