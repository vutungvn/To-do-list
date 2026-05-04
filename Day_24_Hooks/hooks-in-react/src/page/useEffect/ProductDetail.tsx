import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../types/Product.type";
import { getProductById } from "../../api/product.api";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const res = await getProductById(Number(id));

      if (res.status === 200) {
        setProduct(res.data);
      }
    };

    loadData();
  }, [id]);

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl">Product Detail</h1>
        {product && (
          <div>
            <img src={product.thumbnail} alt={product.title} />
            <h2>Name: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        )}
        className="text-white bg-linear-to-r from-blue-500 via-blue-600
        to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none
        focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base
        text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
      </div>

      <button
        onClick={() => navigate(-1)}
        className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
      >
        Back
      </button>
    </>
  );
};
