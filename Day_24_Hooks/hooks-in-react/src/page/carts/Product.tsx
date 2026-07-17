import React from "react";
import type { ProductState } from "../../types/cart.types";

type ProductDetailProps = {
  onBack: () => void;
  productState: ProductState;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
};

export const Product = ({
  onBack,
  productState,
  handleIncrement,
  handleDecrement,
}: ProductDetailProps) => {
  console.log("productState::", productState);

  const { products } = productState;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={onBack}
        className="mb-6 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
      >
        ← Quay trở lại
      </button>

      <h2 className="text-2xl font-bold mb-6">
        Danh sách sản phẩm của đơn hàng {productState.id}
      </h2>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Ảnh */}
            <div className="flex items-center gap-4">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div>
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500">Đơn giá: ${product.price}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    disabled={product.quantity === 1}
                    onClick={() => handleDecrement(product.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-red-500 hover:bg-red-600 text-white font-bold transition"
                  >
                    -
                  </button>

                  <span className="w-10 text-center font-semibold">
                    {product.quantity}
                  </span>

                  <button
                    onClick={() => handleIncrement(product.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-green-500 hover:bg-green-600 text-white font-bold transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Thành tiền */}
            <div className="text-right">
              <p className="text-xl font-bold text-blue-600">
                ${(product.price * product.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tổng tiền */}
      <div className="mt-8 border-t pt-4 flex justify-between items-center">
        <span className="text-xl font-bold">Tổng tiền:</span>
        <span className="text-2xl font-bold text-red-600">
          $
          {productState.products
            .reduce((acc, item) => {
              acc += item.price * item.quantity;
              return acc;
            }, 0)
            .toFixed(2)}
        </span>
      </div>
    </div>
  );
};
