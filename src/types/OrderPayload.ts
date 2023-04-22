interface ICartOrder {
  product: string,
  quantity: number;
}

export interface IOrderPayload {
  table: string;
  products: ICartOrder[];
}
