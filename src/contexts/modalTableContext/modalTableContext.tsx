import { createContext, useState } from 'react';
import { IModalTableContext, IModalTableProviderProps } from './modalTableContext.interface';

export const ModalTableContext = createContext({} as IModalTableContext);

export const ModalTableProvider = ({ children }: IModalTableProviderProps) => {
  const [modalTable, setModalTable] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  const openModal = () => {
    setModalTable(true);
  };

  const closeModal = () => {
    setModalTable(false);
  };

  const saveTable = (table: string) => {
    setSelectedTable(table);
  };

  const cancelOrder = () => {
    setSelectedTable('');
  };

  return (
    <ModalTableContext.Provider value={{
      modalTable,
      openModal,
      closeModal,
      selectedTable,
      saveTable,
      cancelOrder
    }}>
      {children}
    </ModalTableContext.Provider>
  );
};
