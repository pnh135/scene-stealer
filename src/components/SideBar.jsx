import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyPlus, Bookmark, BellRing, Settings } from 'lucide-react';
import AlertModal from './Modals/AlertModal';

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
      <SideBarButton onClick={hadleModal}>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  padding-top: 30px;
`;

const SideBarButton = styled.button`
  width: 50px;
  height: 50px;
  color: #333;
`;

export default SideBar;
