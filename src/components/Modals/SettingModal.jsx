import SettingPage from '../../pages/SettingPage';
import DefaultModal from '../Modals/DefaultModal';

const SettingModal = ({ isOpen, onClose }) => {
  return (
    <DefaultModal isOpen={isOpen} onClose={onClose}>
      <p>설정</p>
      <SettingPage />
    </DefaultModal>
  );
};

export default SettingModal;
