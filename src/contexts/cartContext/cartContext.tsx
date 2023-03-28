import { createContext, useState } from "react";
import { useModalTable } from "../../hooks/useModalTable";
import { ICartItem } from "../../types/Cart.interface";
import { IProduct } from "../../types/Products.interface";
import { ICartProps, ICartProviderProps } from "./cartContext.interface";

export const CartContext = createContext<ICartProps>({} as ICartProps);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const { openModal, selectedTable } = useModalTable();

  const clearOrder = () => {
    setCartItems([]);
  };

  const addToCart = (product: IProduct) => {
    if (!selectedTable) {
      openModal();
      setCartItems([]);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  };

  const decreaseToCart = (product: IProduct) => {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseToCart, clearOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};
