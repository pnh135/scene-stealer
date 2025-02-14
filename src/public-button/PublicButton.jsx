import styled from 'styled-components';

const PublicButton = () => {
  return (
    <div>
      <PublicCommonStyle>안녕하세요</PublicCommonStyle>
    </div>
  );
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

const PublicBackButtonStyle = styled.button`
  align-items: center;
  word-wrap: break-word;
  padding: 10px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  background-color: #242424;
  color: wheat;
  cursor: pointer;
  &:hover {
    transition: background-color 0.4s ease;
    background-color: rgb(114, 0, 0);
  }
  &:active {
    background-color: #ff1515; /* 클릭했을 때 배경색 변경 */
    transform: scale(0.98); /* 클릭 시 버튼이 살짝 작아지는 효과 */
  }
`;

export default PublicButton;
