import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Link to="/add-feed">
        <SideBarButton>피드추가</SideBarButton>
      </Link>
      <Link to="/bookmarks">
        <SideBarButton>북마크</SideBarButton>
      </Link>
      <SideBarButton>알림</SideBarButton>
      <SideBarButton>설정</SideBarButton>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
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

const SideBarButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: #e90d0df7;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export default SideBar;
