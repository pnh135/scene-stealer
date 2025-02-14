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
  background-color: #fff8e9;
`;

const SideBarButton = styled.button`
  background-color: #e90d0df7;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export default SideBar;
