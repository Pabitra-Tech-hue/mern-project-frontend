
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { TProduct } from "@/types/ResponseProductTypes";

import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "@/api/wishlist.api";

interface IProps {
  product: TProduct;
}

const ProductCard = ({ product }: IProps) => {
  const queryClient = useQueryClient();

  // =========================
  // GET WISHLIST
  // =========================

  const { data } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  const wishlist = data?.data || [];

  const isWishlisted = wishlist.some(
    (item: TProduct) => item._id === product._id
  );

  // =========================
  // ADD TO WISHLIST
  // =========================

  const addMutation = useMutation({
    mutationFn: addToWishlist,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });

  // =========================
  // REMOVE FROM WISHLIST
  // =========================

  const removeMutation = useMutation({
    mutationFn: removeFromWishlist,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });

  // =========================
  // WISHLIST HANDLER
  // =========================

  const handleWishlist = () => {
    if (isWishlisted) {
      removeMutation.mutate(product._id);
    } else {
      addMutation.mutate(product._id);
    }
  };

  return (
    <div className="group w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* =========================
          IMAGE
      ========================= */}

      <div className="relative h-44 w-full overflow-hidden bg-white">

        <Image
          src={product.cover_image?.path}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* WISHLIST */}

        <button
          type="button"
          onClick={handleWishlist}
          disabled={
            addMutation.isPending ||
            removeMutation.isPending
          }
          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-200 hover:scale-110"
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          {isWishlisted ? (
            <FaHeart
              size={15}
              className="text-red-500"
            />
          ) : (
            <FaRegHeart
              size={15}
              className="text-gray-500"
            />
          )}
        </button>
      </div>

      {/* =========================
          CONTENT
      ========================= */}

      <div className="p-3">

        {/* PRODUCT NAME */}

        <h2
          title={product.name}
          className="truncate text-sm font-semibold text-gray-800"
        >
          {product.name}
        </h2>

        {/* BRAND + CATEGORY */}

        <div className="mt-1.5 flex items-center gap-1.5">

          {product.brand?.name && (
            <span className="max-w-[50%] truncate rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
              {product.brand.name}
            </span>
          )}

          {product.category?.name && (
            <span className="max-w-[50%] truncate rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
              {product.category.name}
            </span>
          )}

        </div>

        {/* =========================
            PRICE
        ========================= */}

        <div className="mt-2 flex items-center gap-0.5">

          <TbCurrencyRupeeNepalese
            size={17}
            className="text-orange-500"
          />

          <span className="text-lg font-bold text-orange-500">
            {product.price}
          </span>

        </div>

        {/* =========================
            RATING
        ========================= */}

        <div className="mt-1.5 flex items-center gap-2">

          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={11}
                className="text-yellow-400"
              />
            ))}
          </div>

          <span className="text-[11px] font-medium text-gray-600">
            4.5
          </span>

          <span className="text-[11px] text-gray-400">
            | 120 Reviews
          </span>

        </div>

        {/* =========================
            DESCRIPTION
        ========================= */}

        <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-gray-500">
          {product.description}
        </p>

        {/* =========================
            VIEW DETAILS
        ========================= */}

        <Link
          href={`/products/${product._id}`}
          className="mt-3 block"
        >
          <button
            type="button"
            className="w-full rounded-md border border-gray-300 bg-white py-2 text-xs font-semibold text-gray-700 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ProductCard;







