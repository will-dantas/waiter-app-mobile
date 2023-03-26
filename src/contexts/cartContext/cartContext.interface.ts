import { ReactNode } from 'react';
import { ICartItem } from '../../types/Cart.interface';
import { IProduct } from '../../types/Products.interface';

export interface ICartProps {
  cartItens: ICartItem[];
  addToCart: (product: IProduct) => void;
  decreaseToCart: (product: IProduct) => void;
  clearOrder: () => void;
}

export interface ICartProviderProps {
  children: ReactNode;
}
