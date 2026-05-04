import React, { useEffect, useState } from "react";
import type { Product } from "../../types/Product.type";
import { getProductById } from "../../api/product.api";

export const ProductDetail2 = () => {
  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const loadData = async () => {
      const res = await getProductById(productId);

      if (res.status === 200) {
        setProduct(res.data);
      }
    };

    loadData();
  }, [productId]);

  return (
    <>
      <div className="flex gap-5">
        <button
          className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
          onClick={() => setProductId(1)}
        >
          Product 1
        </button>
        <button
          className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
          onClick={() => setProductId(2)}
        >
          Product 2
        </button>
        <button
          className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
          onClick={() => setProductId(3)}
        >
          Product 3
        </button>
      </div>

      <div>
        <h1 className="font-bold text-3xl">Product Detail</h1>
        {product && (
          <div>
            <p>ID: {product.id}</p>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        )}
      </div>
    </>
  );
};
