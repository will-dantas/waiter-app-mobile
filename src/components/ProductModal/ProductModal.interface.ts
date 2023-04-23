import { IProduct } from '../../types/Products.interface';

export interface IProductModal {
  visible: boolean;
  onClose: () => void;
  product: IProduct | null;
  onAddToCart: (product: IProduct) => void;
}
