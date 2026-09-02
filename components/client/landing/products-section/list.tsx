"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./card";
import { getAllproducts } from "@/api/product.api";
import { TProduct } from "@/types/ResponseProductTypes";

const ProductList = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllproducts,
    queryKey: ["get-all-products"],
  });

  return (
    <div className="min-h-50 mt-5">
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-50">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data?.data?.map((product: TProduct) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;


