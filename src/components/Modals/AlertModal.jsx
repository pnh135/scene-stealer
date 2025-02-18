import DefaultModal from '../Modals/DefaultModal';

const AlertModal = ({ isOpen, onClose }) => {
  return (
    <DefaultModal isOpen={isOpen} onClose={onClose}>
      <p>알림</p>
    </DefaultModal>
  );
};

export default AlertModal;
