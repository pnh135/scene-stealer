import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyPlus, Bookmark, BellRing, Settings } from 'lucide-react';
import { useState } from 'react';
import AlertModal from '../components/Modals/AlertModal';
import SettingModal from './Modals/SettingModal';

const SideBar = () => {
  // 세팅 열고닫기에 필요한 useState
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 알림 열고닫기에 필요한 useState
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  // 세팅 모달 열고닫기
  const handleModal = () => {
    if (isAlertModalOpen === true) {
      setIsAlertModalOpen(false);
    }
    setIsModalOpen(!isModalOpen);
  };

  // 알림 모달 열고닫기
  const handleAlertModal = () => {
    if (isModalOpen === true) {
      setIsModalOpen(false);
    }
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  return (
    <>
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
      </SideBarWrapper>
      <AlertModal isAlertModalOpen={isAlertModalOpen} handleAlertModal={handleAlertModal} />
      <SettingModal isOpen={isModalOpen} handleModal={handleModal} />
    </>
  );
};
export default SideBar;

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
