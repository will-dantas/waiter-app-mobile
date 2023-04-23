import { AxiosResponse } from 'axios';
import { api } from '../api';
import { IOrderPayload } from '../../types/OrderPayload';

export class CreateOrderService {
  async execute(orderPayload: IOrderPayload): Promise<AxiosResponse> {
    return api.post('/order', orderPayload);
  }
}
