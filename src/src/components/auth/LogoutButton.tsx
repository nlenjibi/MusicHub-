import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AuthService } from '../../services/authService';
import Button from '../ui/Button';
import { useModal } from '../../hooks/useModal';
import Modal from '../ui/Modal';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      logout();
      navigate('/login', { replace: true });
    } catch (err) {
      console.error('Logout error:', err);
      closeModal();
    }
  };

  return (
    <>
      <Button variant="danger" onClick={openModal}>
        Sign Out
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Confirm Sign Out"
      >
        <div className="space-y-4">
          <Text>Are you sure you want to sign out?</Text>
          
          <div className="flex justify-end space-x-3">
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LogoutButton;