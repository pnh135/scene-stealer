import styled from 'styled-components';

const ActionButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return <HandleBackStyle onClick={handleBack}>뒤로 가기</HandleBackStyle>;
};

export const ActionButtonStyle = styled.button`
  word-break: keep-all;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  padding: 0.5rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #bdbdbd;
  }
`;

const HandleBackStyle = styled(ActionButtonStyle)`
  margin: 0 0 1rem 1rem;
`;

export default ActionButton;
