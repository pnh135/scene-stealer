import styled from 'styled-components';

const PublicButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return <BackButtonStyle onClick={handleBack}>뒤로가기</BackButtonStyle>;
};

const BackButtonStyle = styled.button`
  background-color: rgb(0, 0, 114);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgb(114, 0, 0);
  }
  &:active {
    background-color: #ca0000;
  }
`;

export default PublicButton;
