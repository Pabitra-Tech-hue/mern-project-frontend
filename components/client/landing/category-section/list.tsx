"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./card";
import { getAllCategories } from "@/api/category.api";
import { TCategory } from "@/types/ResponseCategory.types";

const CategoryList = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllCategories,
    queryKey: ["get-all-category"],
  });

  return (
    <div className="min-h-50 mt-5">

      {isLoading ? (
        <div className="w-full flex justify-center items-center h-50">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {data?.data?.map((category: TCategory) => (
            <CategoryCard
              key={category._id}
              category={category}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default CategoryList;