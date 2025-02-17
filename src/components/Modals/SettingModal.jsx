import DefaultModal from '../Modals/DefaultModal';

const SettingModal = ({ isOpen, onClose }) => {
  return (
    <DefaultModal isOpen={isOpen} onClose={onClose}>
      설정
    </DefaultModal>
  );
};

export default SettingModal;
