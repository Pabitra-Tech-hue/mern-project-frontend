"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { toast } from "react-hot-toast";

import { getWishlist, removeFromWishlist } from "@/api/wishlist.api";

const WishlistPage = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  const wishlist = data?.data || [];

  const removeMutation = useMutation({
    mutationFn: (id: string) => removeFromWishlist(id),
    onSuccess: () => {
      toast.success("Removed from wishlist");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: () => toast.error("Failed to remove product"),
  });

  if (isLoading)
    return (
      <main className="min-h-screen bg-gray-50 p-10 text-center">
        <p className="text-gray-500">Loading wishlist...</p>
      </main>
    );

  if (isError)
    return (
      <main className="min-h-screen bg-gray-50 p-10 text-center">
        <FaHeart className="mx-auto text-4xl text-red-300" />
        <h1 className="mt-4 text-2xl font-bold">Unable to load wishlist</h1>
      </main>
    );

  if (!wishlist.length)
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <FaHeart className="mx-auto text-5xl text-gray-300" />
          <h1 className="mt-5 text-3xl font-bold">Wishlist is Empty</h1>
          <p className="mt-2 text-gray-500">
            You haven't added any products yet.
          </p>
          <Link
            href="/products"
            className="mt-5 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-white"
          >
            Explore Products
          </Link>
        </div>
      </main>
    );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <FaHeart className="mx-auto text-4xl text-primary" />
          <h1 className="mt-3 text-3xl font-bold">My Wishlist</h1>
          <p className="mt-2 text-gray-500">
            {wishlist.length} products saved
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((product: any) => (
            <div
              key={product._id}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 bg-gray-100">
                {product.cover_image?.path && (
                  <Image
                    src={product.cover_image.path}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                )}

                <button
                  onClick={() => removeMutation.mutate(product._id)}
                  disabled={removeMutation.isPending}
                  className="absolute right-3 top-3 rounded-full bg-white p-3 shadow"
                >
                  <FaHeart className="text-red-500" />
                </button>
              </div>

              <div className="p-4">
                <h2 className="truncate text-lg font-bold">
                  {product.name}
                </h2>

                <div className="mt-2 flex gap-2">
                  {product.brand?.name && (
                    <span className="rounded bg-gray-100 px-2 py-1 text-xs">
                      {product.brand.name}
                    </span>
                  )}
                  {product.category?.name && (
                    <span className="rounded bg-gray-100 px-2 py-1 text-xs">
                      {product.category.name}
                    </span>
                  )}
                </div>

                <p className="mt-3 flex items-center font-bold text-primary">
                  <TbCurrencyRupeeNepalese />
                  {product.price}
                </p>

                <Link
                  href={`/products/${product._id}`}
                  className="mt-4 block rounded-md bg-primary py-3 text-center font-semibold text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WishlistPage;

