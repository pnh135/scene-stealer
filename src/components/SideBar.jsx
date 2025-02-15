import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyPlus, Bookmark, BellRing, Settings } from 'lucide-react';
import { useState } from 'react';
import AlertModal from '../components/Modals/AlertModal';
import SettingModal from './Modals/SettingModal';

const SideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
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
        <SideBarButton onClick={handleModal}>
          <BellRing />
        </SideBarButton>
        <SideBarButton onClick={handleModal}>
          <Settings />
        </SideBarButton>
      </SideBarWrapper>
      <AlertModal isOpen={isModalOpen} handleModal={handleModal} />
      <SettingModal isOpen={isModalOpen} handleModal={handleModal} />
    </>
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
