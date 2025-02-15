import styled from 'styled-components';

const AlertModal = ({ isAlertModalOpen }) => {
  return (
    <StdModal $isAlertModalOpen={isAlertModalOpen}>
      <div>알림창</div>
    </StdModal>
  );
};

export default AlertModal;

const StdModal = styled.div`
  display: ${(props) => (props.$isAlertModalOpen ? 'block' : 'none')};
  /* background-color: #c2fff8; */
`;
