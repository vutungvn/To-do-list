import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product.type";

export const ProductItem = ({ product }: { product: Product }) => {
  return (
    <li style={{ marginBottom: "20px" }}>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h3>{product.title}</h3>
      </Link>
    </li>
  );
};
