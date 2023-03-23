import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext/cartContext';
import { ICartProps } from '../contexts/cartContext/cartContext.interface';

export function useCartItens(): ICartProps {
  const context = useContext(CartContext);

  return context;
}
