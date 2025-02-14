import styled from 'styled-components';

const PublicCommonHandle = () => {
  return <PublicCommonStyle onClick={PublicCommonHandle}>일반버튼</PublicCommonStyle>;
};

const PublicCommonStyle = styled.button`
  align-items: center;
  word-wrap: break-word;
  padding: 10px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  background-color: rgb(0, 0, 114);
  color: white;
  cursor: pointer;
  &:hover {
    transition: background-color 0.4s ease;
    background-color: rgb(180, 240, 80);
  }
`;

export default PublicCommonHandle;
