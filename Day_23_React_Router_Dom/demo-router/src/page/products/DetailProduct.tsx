import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../types/products.type";

export const DetailProduct = () => {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState<Product>();
  const navigate = useNavigate();

  const loadDeatailData = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailProduct(data));
  };

  useEffect(() => {
    loadDeatailData();
  }, [id]);

  const handleBackPage = () => {
    navigate("/products");
  };

  return (
    <div>
      {detailProduct && (
        <>
          <img src={detailProduct.thumbnail} alt={detailProduct.title} />
          <h1>Title: {detailProduct.title}</h1>
          <button onClick={handleBackPage}>Back</button>
        </>
      )}
    </div>
  );
};
