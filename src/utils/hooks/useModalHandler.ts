import { useState } from 'react';
import { ActionTypes } from '../types/commonTypes';

export const useModalHandler = () => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<ActionTypes>();

  const handleOpenModal = (actionModal: ActionTypes) => {
    setOpen(true);
    setAction(actionModal);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return { open, handleOpenModal, handleCloseModal, action };
};
