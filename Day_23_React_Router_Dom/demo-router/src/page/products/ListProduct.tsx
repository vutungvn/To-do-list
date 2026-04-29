import React, { useEffect, useState } from "react";
import type { Product } from "../../types/products.type";
import { Link, useLoaderData } from "react-router-dom";

export const ListProduct = () => {
  // const [products, setProducts] = useState<Product[]>([]);

  const product = useLoaderData();

  console.log("product::", product.products);

  // const loadData = () => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products));
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl">List Products</h1>
      {product.products.map((item: any) => (
        <Link key={item.id} to={`/products/${item.id}`}>
          {item.title}
        </Link>
      ))}
      <h1>==========================</h1>
      {product.products.map((item: any) => (
        <Link key={item.id} to={`/products/detail?id=${item.id}`}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
