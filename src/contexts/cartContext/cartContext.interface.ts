import { ReactNode } from 'react';
import { ICartItem } from '../../types/CartItem.interface';
import { IProduct } from '../../types/Products.interface';

export interface ICartProps {
  cartItems: ICartItem[];
  addToCart: (product: IProduct) => void;
  decreaseToCart: (product: IProduct) => void;
  clearOrder: () => void;
}

export interface ICartProviderProps {
  children: ReactNode;
}
