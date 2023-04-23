import { ReactNode } from 'react';

export interface IModalTableContext {
  modalTable: boolean;
  openModal: () => void;
  closeModal: () => void;
  selectedTable: string;
  saveTable: (table: string) => void;
  cancelOrder: () => void;
}

export interface IModalTableProviderProps {
  children: ReactNode;
}