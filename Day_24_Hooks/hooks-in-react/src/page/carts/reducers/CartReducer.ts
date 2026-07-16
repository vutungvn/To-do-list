import type { CartAction, State } from "../../../types/cart.types";

export const initialState = {
  carts: [],
  total: 0,
};

export const cartReducer = (cartState: State, action: CartAction): State => {
  switch (action.type) {
    case "GET_CARTS":
      return { ...cartState, ...action.payload };
    case "DELETE_CARTS":
      const updateCarts = cartState.carts.filter(
        (item) => item.id !== action.payload,
      );
      return { ...cartState, carts: updateCarts, total: cartState.total - 1 };
    default:
      return cartState;
  }
};
