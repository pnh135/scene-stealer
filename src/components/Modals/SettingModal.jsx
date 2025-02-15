import styled from 'styled-components';

const SettingModal = ({ isOpen }) => {
  return (
    <StdModal $isOpen={isOpen}>
      <div>세팅</div>
      <div>내용22</div>
    </StdModal>
  );
};

export default SettingModal;

const StdModal = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  flex: 1 1 auto;
  height: 80%;
  background-color: #caefff;
  position: relative;
  transform: translate(100%, -100%);
`;
