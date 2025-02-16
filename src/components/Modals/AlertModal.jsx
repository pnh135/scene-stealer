import styled from 'styled-components';

const AlertModal = ({ isAlertModalOpen }) => {
  return <AlertModalStyle $isAlertModalOpen={isAlertModalOpen}>알림</AlertModalStyle>;
};

const AlertModalStyle = styled.div`
  display: ${(props) => (props.$isAlertModalOpen ? 'block' : 'none')};
  width: 320px;
  height: 480px;
  position: fixed;
  top: 120px;
  left: 110px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
  padding: 1.2rem;
  border: 1px solid #bdbdbd;
  text-align: left;
  border-radius: 1rem;
`;

export default AlertModal;
