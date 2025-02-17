import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyPlus, Bookmark, BellRing, Settings } from 'lucide-react';
import { useState } from 'react';
import AlertModal from '../components/Modals/AlertModal';
import SettingModal from './Modals/SettingModal';

const SideBar = () => {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);

  const handleAlertModal = () => {
    setIsAlertModalOpen(true);
    setIsSettingModalOpen(false);
  };

  const handleSettingModal = () => {
    setIsAlertModalOpen(false);
    setIsSettingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAlertModalOpen(false);
    setIsSettingModalOpen(false);
  };

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
      <SideBarButton onClick={handleAlertModal}>
        <BellRing />
      </SideBarButton>
      <SideBarButton onClick={handleSettingModal}>
        <Settings />
      </SideBarButton>
      <AlertModal isOpen={isAlertModalOpen} onClose={handleCloseModal} />
      <SettingModal isOpen={isSettingModalOpen} onClose={handleCloseModal} />
    </SideBarWrapper>
  );
};

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SideBarButton = styled.button`
  color: #333;
`;

export default SideBar;
