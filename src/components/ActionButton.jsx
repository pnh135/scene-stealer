import styled from 'styled-components';

const ActionButton = () => {
  return;
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

export default ActionButton;
