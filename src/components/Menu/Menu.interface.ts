import { IProduct } from '../../types/Products.interface';

export interface IMenu {
  onAddToCart: (product: IProduct) => void;
}
