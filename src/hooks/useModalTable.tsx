import { useContext } from 'react';
import { ModalTableContext } from '../contexts/modalTableContext/modalTableContext';
import { IModalTableContext } from '../contexts/modalTableContext/modalTableContext.interface';

export function useModalTable(): IModalTableContext {
  const context = useContext(ModalTableContext);

  return context;
}
