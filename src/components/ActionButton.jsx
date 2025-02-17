import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ActionButton = () => {
  return (
    <Link to="/main">
      <HandleBackStyle>뒤로 가기</HandleBackStyle>
    </Link>
  );
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
  margin-bottom: 1rem;
`;

export default ActionButton;
