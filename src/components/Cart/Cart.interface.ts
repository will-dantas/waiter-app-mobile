import { ICartItem } from '../../types/CartItem.interface';
import { IProduct } from '../../types/Products.interface';

export interface ICart {
  cartItems: ICartItem[];
  onAdd: (product: IProduct) => void;
}

