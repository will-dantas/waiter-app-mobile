import { createContext, useState } from 'react';
import { useModalTable } from '../../hooks/useModalTable';
import { ICartItem } from '../../types/Cart.interface';
import { IProduct } from '../../types/Products.interface';
import { ICartProps, ICartProviderProps } from './cartContext.interface';

export const CartContext = createContext<ICartProps>({} as ICartProps);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartItens, setCartItens] = useState<ICartItem[]>([]);
  const { openModal, selectedTable } = useModalTable();

  const clearOrder = () => {
    setCartItens([]);
  };

  const addToCart = (product: IProduct) => {
    if (!selectedTable) {
      openModal();
      setCartItens([]);
    }

    setCartItens((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product
        });
      }

      const newCartItens = [...prevState];
      const item = newCartItens[itemIndex];

      newCartItens[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      };

      return newCartItens;
    });
  };

  const decreaseToCart = (product: IProduct) => {
    setCartItens((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      const item = prevState[itemIndex];
      const newCartItens = [...prevState];

      if (item.quantity === 1) {
        newCartItens.splice(itemIndex, 1);

        return newCartItens;
      }

      newCartItens[itemIndex] = {
        ...item,
        quantity: item.quantity - 1
      };

      return newCartItens;
    });
  };

  return (
    <CartContext.Provider value={{ cartItens, addToCart, decreaseToCart, clearOrder }}>
      {children}
    </CartContext.Provider>
  );
};
