import styled from 'styled-components';

const PublicButton = () => {
  return (
    <div>
      <PublicCommonStyle>안녕하세요</PublicCommonStyle>
    </div>
  );
};

const PublicCommonStyle = styled.button`
  padding: 10px 15px;
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

export default PublicButton;
