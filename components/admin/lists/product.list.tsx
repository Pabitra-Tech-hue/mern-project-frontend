"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllproducts } from "@/api/product.api";
import ProductCard from "@/components/client/landing/products-section/card";

const ProductList = () => {
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllproducts,
  });

  if (isLoading) {
    return (
      <div className="py-10 text-center text-gray-500">
        Loading products...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-10 text-center text-red-500">
        Failed to load products.
      </div>
    );
  }

  const products = data?.data || [];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;