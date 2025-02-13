
import styled from 'styled-components';

const Side = () => {
  
  return (
    <GrandfatherStyledDiv>
      <StyledButton
        onClick={() => {
        
        }}
      >
        피드추가
      </StyledButton>
      <StyledButton
        onClick={() => {
          
        }}
      >
        북마크
      </StyledButton>
      <StyledButton
        onClick={() => {
          return;
        }}
      >
        알림
      </StyledButton>
      <StyledButton
        onClick={() => {
          return;
        }}
      >
        설정
      </StyledButton>
    </GrandfatherStyledDiv>
  );
};
const GrandfatherStyledDiv = styled.div`
  background-color: #d6dad5;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 200px;
  height: 1200px;
  justify-content: flex-start;
  align-items: center;
  margin-top: -10px;
  margin-left: -10px;
`;
const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: #e90d0df7;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
export default Side;
