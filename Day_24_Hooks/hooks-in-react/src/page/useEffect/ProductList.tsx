import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/product.api";
import { ProductItem } from "../../components/ProductItem";
import type { Product } from "../../types/Product.type";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const res = await getProducts();

      if (res.status === 200) {
        setProducts(res.data.products);
      }
    };

    loadData();
  }, []);

  useEffect(() => {}, [value]);

  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />

      <h1 className="text-3xl font-bold mb-5">Product List</h1>
      <ul>
        {products.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </ul>
    </>
  );
};
