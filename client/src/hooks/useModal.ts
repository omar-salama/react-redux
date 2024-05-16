import { SetStateAction, useState } from 'react';

export const useModal = (
  initialMode: boolean = false
): [boolean, React.Dispatch<SetStateAction<boolean>>, () => void] => {
  const [modalOpen, setModalOpen] = useState<boolean>(initialMode);
  const toggle = () => setModalOpen(!modalOpen);
  return [modalOpen, setModalOpen, toggle];
};
