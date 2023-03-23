import { ICartItem } from '../../types/Cart.interface';
import { IProduct } from '../../types/Products.interface';

export interface ICart {
  cartItens: ICartItem[];
  onAdd: (product: IProduct) => void;
}
