import styled from 'styled-components';

const PublicBackButtonHandle = () => {
  window.history.back();

  return <PublicBackButtonStyle onClick={PublicBackButtonHandle}>뒤로가기</PublicBackButtonStyle>;
};

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
    background-color: #ff1515;
    transform: scale(0.98);
  }
`;

export default PublicBackButtonHandle;
