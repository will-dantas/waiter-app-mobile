import { AxiosResponse } from "axios";
import { api } from "../api";

export class ProductsService {
  async execute(): Promise<AxiosResponse> {
    return api.get('/products');
  }
}
