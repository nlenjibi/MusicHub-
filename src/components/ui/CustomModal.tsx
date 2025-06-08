import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showFooter?: boolean;
  onConfirm?: () => void;
  confirmText?: string;
  closeText?: string;
  confirmVariant?: string;
  closeVariant?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
  showFooter = true,
  onConfirm,
  confirmText = "Confirm",
  closeText = "Close",
  confirmVariant = "primary",
  closeVariant = "secondary"
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {children}
      </Modal.Body>

      {showFooter && (
        <Modal.Footer>
          <Button variant={closeVariant} onClick={onClose}>
            {closeText}
          </Button>
          {onConfirm && (
            <Button variant={confirmVariant} onClick={onConfirm}>
              {confirmText}
            </Button>
          )}
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CustomModal;


/**
 *  const {toast, showToast, hideToast } = useToast();
      <Button variant="primary" onClick={openModal}>
        Launch static backdrop modal
      </Button>
        <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
        title="Confirm Action"
        confirmText="Yes, do it"
        closeText="Cancel"
        confirmVariant="danger"
      >
        <p>Are you sure you want to perform this action?</p>
      </CustomModal> */