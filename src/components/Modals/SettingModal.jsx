import styled from 'styled-components';

const SettingModal = ({ isOpen }) => {
  return (
    <StdModal $isOpen={isOpen}>
      <div>세팅창</div>
    </StdModal>
  );
};

export default SettingModal;

const StdModal = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  background-color: #c2fff8;
`;
