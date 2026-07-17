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
  const { products } = productState;

  switch (type) {
    case "GET_DETAIL_CART":
      return { ...productState, ...payload };
    case "INCREMENT_QUANTITY":
      const updateProductsIncrement = products.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      return { ...productState, products: updateProductsIncrement };
    case "DECREMENT_QUANTITY":
      const updateProductsDecrement = products.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });

      return { ...productState, products: updateProductsDecrement };
    default:
      return productState;
  }
};
