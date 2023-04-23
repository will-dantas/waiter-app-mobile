import { AxiosResponse } from 'axios';
import { api } from '../api';

export class ProductsByCategory {
  async execute(categoryId: string): Promise<AxiosResponse> {
    return api.get(`/categories/${categoryId}/products`);
  }
}
