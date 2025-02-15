import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyPlus, Bookmark, BellRing, Settings } from 'lucide-react';
import { useState } from 'react';
import AlertModal from '../components/Modals/AlertModal';
import SettingModal from './Modals/SettingModal';

const SideBar = () => {
  // 알림 열고닫기에 필요한 useState
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  // 세팅 열고닫기에 필요한 useState
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 알림 모달 열고닫기
  const handleAlertModal = () => {
    if (isModalOpen === true) {
      setIsModalOpen(false);
    }
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  // 세팅 모달 열고닫기
  const handleModal = () => {
    if (isAlertModalOpen === true) {
      setIsAlertModalOpen(false);
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <SideBarWrapper>
        <Ssdfs>
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
        </Ssdfs>

        <SideBarModalWrapper>
          <SideBarModal>
            <AlertModal isAlertModalOpen={isAlertModalOpen} handleAlertModal={handleAlertModal} />
            <SettingModal isOpen={isModalOpen} handleModal={handleModal} />
          </SideBarModal>
        </SideBarModalWrapper>
      </SideBarWrapper>
    </>
  );
};

export const SideBarWrapper = styled.div`
  display: flex;
`;

const Ssdfs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
`;

const SideBarButton = styled.button`
  color: #333;
`;

const SideBarModalWrapper = styled.button`
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 320px;
  /* background-color: yellowgreen; */
  height: 100vh;
`;

const SideBarModal = styled.div``;

export default SideBar;
