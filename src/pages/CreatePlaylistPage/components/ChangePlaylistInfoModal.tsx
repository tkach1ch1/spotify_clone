import Modal from '@mui/material/Modal';
import { useModal } from '../hooks/useModal';
import { Box } from '@mui/system';

interface ModalProps {
    open: boolean, 
    handleClose: () => void
}

export const ChangePlaylistInfoModal = ({open, handleClose}: ModalProps) => {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box>ewdwed</Box>
    </Modal>
  );
};
