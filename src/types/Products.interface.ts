export interface IIngredients {
  _id: string;
  name: string;
  icon: string;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: IIngredients[];
}
