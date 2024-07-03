import { useState } from 'react';

export const useModalHandler = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return { open, handleOpenModal, handleCloseModal };
};
