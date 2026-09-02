"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { FaHeart, FaRegHeart } from "react-icons/fa";
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

  // ================= WISHLIST =================

  const { data } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  const wishlist = data?.data || [];

  const isWishlisted = wishlist.some(
    (item: TProduct) => item._id === product._id
  );

  // ================= ADD WISHLIST =================

  const addMutation = useMutation({
    mutationFn: addToWishlist,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });

  // ================= REMOVE WISHLIST =================

  const removeMutation = useMutation({
    mutationFn: removeFromWishlist,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });

  // ================= HANDLE WISHLIST =================

  const handleWishlist = () => {
    if (isWishlisted) {
      removeMutation.mutate(product._id);
    } else {
      addMutation.mutate(product._id);
    }
  };

  return (
    <div className="group mx-auto w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* ================= IMAGE ================= */}

      <div className="relative flex h-[210px] w-full items-center justify-center overflow-hidden bg-gray-50">

        <Image
          src={product.cover_image?.path}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain scale-[1.12] transition-transform duration-500 group-hover:scale-[1.18]"
        />

        {/* ================= WISHLIST ================= */}

        <button
          type="button"
          onClick={handleWishlist}
          disabled={
            addMutation.isPending ||
            removeMutation.isPending
          }
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110"
        >
          {isWishlisted ? (
            <FaHeart
              size={15}
              className="text-red-500"
            />
          ) : (
            <FaRegHeart
              size={15}
              className="text-gray-600"
            />
          )}
        </button>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="px-4 py-3">

        {/* PRODUCT NAME */}

        <h2
          title={product.name}
          className="truncate text-[15px] font-semibold leading-5 text-gray-800"
        >
          {product.name}
        </h2>

        {/* BRAND + CATEGORY */}

        <div className="mt-2 flex gap-2">

          {product.brand?.name && (
            <span
              title={product.brand.name}
              className="max-w-[50%] truncate rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-600"
            >
              {product.brand.name}
            </span>
          )}

          {product.category?.name && (
            <span
              title={product.category.name}
              className="max-w-[50%] truncate rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-600"
            >
              {product.category.name}
            </span>
          )}

        </div>

        {/* ================= PRICE ================= */}

        <div className="mt-2 flex items-center gap-1">

          <TbCurrencyRupeeNepalese
            size={17}
            className="text-primary"
          />

          <span className="text-[17px] font-bold text-primary">
            {product.price}
          </span>

        </div>

        {/* ================= DESCRIPTION ================= */}

        <p className="mt-1.5 line-clamp-2 text-[11px] leading-4 text-gray-500">
          {product.description}
        </p>

        {/* ================= VIEW DETAILS ================= */}

        <Link
          href={`/products/${product._id}`}
          className="mt-3 block"
        >
          <div className="w-full rounded-lg bg-primary py-2.5 text-center text-[11px] font-semibold text-white transition-all duration-200 hover:opacity-90">
            View Details
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ProductCard;