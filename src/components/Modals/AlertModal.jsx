import DefaultModal from '../Modals/DefaultModal';

const AlertModal = ({ isOpen, onClose }) => {
  return (
    <DefaultModal isOpen={isOpen} onClose={onClose}>
      알림
    </DefaultModal>
  );
};

export default AlertModal;
