import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyPlus, Bookmark, BellRing, Settings } from 'lucide-react';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Link to="/add-feed">
        <SideBarButton>
          <CopyPlus />
        </SideBarButton>
      </Link>
      <Link to="/bookmarks">
        <SideBarButton>
          <Bookmark />
        </SideBarButton>
      </Link>
      <SideBarButton>
        <BellRing />
      </SideBarButton>
      <SideBarButton>
        <Settings />
      </SideBarButton>
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
