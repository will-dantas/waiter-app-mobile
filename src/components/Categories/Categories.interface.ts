import { ICategory } from '../../types/Category.interface.';

export interface ICategoryProps {
  categories: ICategory[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}
