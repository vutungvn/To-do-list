import React, { useEffect, useReducer, useState } from "react";
import { getCarts } from "../../api/carts.api";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { productInitialState, productReducer } from "./reducers/ProductReducer";
import { Product } from "./Product";

export const Cart = () => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const [productState, dispatchDetailCart] = useReducer(
    productReducer,
    productInitialState,
  );
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);

  const fetchCartsData = async () => {
    const data = await getCarts();
    dispatch({
      type: "GET_CARTS",
      payload: {
        carts: data.carts,
        total: data.total,
      },
    });
  };

  useEffect(() => {
    fetchCartsData();
  }, []);

  const handleDeleteCart = (id: number) => {
    dispatch({
      type: "DELETE_CARTS",
      payload: id,
    });
  };

  const handleDetailCart = (id: number) => {
    const detailCarts = cartState.carts.find((item) => item.id === id);
    if (detailCarts) {
      dispatchDetailCart({
        type: "GET_DETAIL_CART",
        payload: detailCarts,
      });
    }
    setIsShowDetail(true);
  };

  return (
    <div>
      {isShowDetail ? (
        <Product
          onBack={() => setIsShowDetail(false)}
          productState={productState}
        />
      ) : (
        <>
          <h1 className="font-bold text-3xl">Total: {cartState.total}</h1>
          {cartState.carts.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-center pt-2 font-bold cursor-pointer"
            >
              <p>Đơn hàng số {item.id}</p>
              <button
                onClick={() => handleDeleteCart(item.id)}
                className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200"
              >
                Delete
              </button>
              <button
                onClick={() => handleDetailCart(item.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Xem chi tiết
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
