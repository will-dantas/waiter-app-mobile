import { AxiosResponse } from "axios";
import { api } from "../api";

export class CategoriesService {
  async execute(): Promise<AxiosResponse> {
    return api.get('/categories');
  }
}
