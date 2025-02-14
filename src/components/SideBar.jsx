import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = () => {
  return (
    <GrandfatherStyledDiv>
      <Link to="/add-feed">
        <StyledButton>피드추가</StyledButton>
      </Link>
      <Link to="/bookmarks">
        <StyledButton>북마크</StyledButton>
      </Link>
      <StyledButton>알림</StyledButton>
      <StyledButton>설정</StyledButton>
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

export default SideBar;
