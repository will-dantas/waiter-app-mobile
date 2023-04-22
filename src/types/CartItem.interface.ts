import { IProduct } from './Products.interface';

export interface ICartItem {
  product: IProduct,
  quantity: number,
}
