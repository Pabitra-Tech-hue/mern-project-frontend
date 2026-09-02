"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllproducts } from "@/api/product.api";
import ProductCard from "../products-section/card";
import { TProduct } from "@/types/ResponseProductTypes";

const NewArrivalsProductsList = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: getAllproducts,
    queryKey: ["get-all-new-arrivals"],
  });

  // Get only products where new_arrival is true
  const newArrivalProducts =
    data?.data?.filter(
      (product: TProduct) => product.new_arrival === true
    ) || [];

  return (
    <div className="min-h-50 mt-5">

      {/* Loading */}
      {isLoading && (
        <div className="w-full flex justify-center items-center h-50">
          <p>Loading...</p>
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="w-full flex justify-center items-center h-50">
          <p>Failed to load products.</p>
        </div>
      )}

      {/* Products */}
      {!isLoading && !isError && (
        <>
          {newArrivalProducts.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
              {newArrivalProducts.map((product: TProduct) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="w-full flex justify-center items-center h-50">
              <p className="text-gray-500">
                No new arrival products found.
              </p>
            </div>
          )}
        </>
      )}

    </div>
  );
};

export default NewArrivalsProductsList;

