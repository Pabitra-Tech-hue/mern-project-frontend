"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllproducts } from "@/api/product.api";
import ProductCard from "../products-section/card";
import { TProduct } from "@/types/ResponseProductTypes";

const FeaturedProductsList = () => {
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getAllproducts,
    queryKey: ["products"],
  });

  // Get only featured products
  const featuredProducts =
    data?.data?.filter(
      (product: TProduct) => product.is_featured === true
    ) || [];

  // Loading
  if (isLoading) {
    return (
      <div className="flex h-50 w-full items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // Error
  if (isError) {
    return (
      <div className="flex h-50 w-full items-center justify-center">
        <p className="text-red-500">
          Failed to load products
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 min-h-50">

      {featuredProducts.length === 0 ? (
        <div className="flex h-50 w-full items-center justify-center">
          <p className="text-gray-500">
            No featured products available.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {featuredProducts.map((product: TProduct) => (
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

export default FeaturedProductsList;