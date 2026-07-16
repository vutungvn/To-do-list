import type { ProductAction, ProductState } from "../../../types/cart.types";

export const productInitialState = {
  products: [],
  total: 0,
  id: 0,
};

export const productReducer = (
  productState: ProductState,
  action: ProductAction,
): ProductState => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DETAIL_CART":
      return { ...productState, ...payload };

    default:
      return productState;
  }
};
