import styled from 'styled-components';

const AlertModal = ({ isAlertModalOpen }) => {
  return (
    <StdModal $isAlertModalOpen={isAlertModalOpen}>
      <div>알림</div>
      <div>내용11</div>
    </StdModal>
  );
};

export default AlertModal;

const StdModal = styled.div`
  display: ${(props) => (props.$isAlertModalOpen ? 'block' : 'none')};
  flex: 1 1 auto;
  height: 80%;
  background-color: #c2fff8;
  position: relative;
  transform: translate(100%, -100%);
`;
