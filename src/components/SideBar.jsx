import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyPlus, Bookmark, BellRing, Settings } from 'lucide-react';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Link to="/main/add-feed">
        <SideBarButton>
          <CopyPlus />
        </SideBarButton>
      </Link>
      <Link to="/main/bookmark">
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  padding: 1rem;
  margin-right: 1rem;
`;

const SideBarButton = styled.button`
  color: #333;
`;

export default SideBar;
