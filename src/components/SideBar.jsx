import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyPlus, Bookmark, BellRing, Settings } from 'lucide-react';
import { useState } from 'react';
import AlertModal from '../components/Modals/AlertModal';
import SettingModal from './Modals/SettingModal';

const SideBar = () => {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAlertModal = () => {
    if (isModalOpen === true) {
      setIsModalOpen(false);
    }

    setIsAlertModalOpen(!isAlertModalOpen);
  };

  const handleModal = () => {
    if (isAlertModalOpen === true) {
      setIsAlertModalOpen(false);
    }

    setIsModalOpen(!isModalOpen);
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
      <SideBarButton onClick={handleModal}>
        <Settings />
      </SideBarButton>
      <AlertModal isAlertModalOpen={isAlertModalOpen} handleAlertModal={handleAlertModal} />
      <SettingModal isOpen={isModalOpen} handleModal={handleModal} />
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
