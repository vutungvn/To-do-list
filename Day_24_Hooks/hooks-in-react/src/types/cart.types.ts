export type CartItem = {
  id: number;
  total: number;
  totalProducts: number;
  totalQuantity: number;
};

export type State = {
  carts: CartItem[];
  total: number;
};

export type CartAction = {
  type: string;
  payload: any;
};

export type ProductItem = {
  id: number;
  title: string;
  thumbnail: string;
  total: number;
  quantity: number;
  price: number;
};

export type ProductState = {
  products: ProductItem[];
  total: number;
  id: number;
};

export type ProductAction = {
  type: string;
  payload: any;
};
