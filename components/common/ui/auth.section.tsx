
"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { IoMdHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";

import { AuthContext } from "@/contexts/auth.context";
import { getWishlist } from "@/api/wishlist.api";
import { Role } from "@/types/global.types";

const AuthSection = () => {
  const { user, isLoading, logout } = useContext(AuthContext);

  const { data } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
    enabled: !!user,
  });

  const wishlistCount = data?.data?.length || 0;

  // Loading
  if (isLoading) {
    return (
      <p className="text-sm text-gray-400">
        Loading...
      </p>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/login"
         
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-800"
        >
          Login
        </Link>

        <Link
          href="/sign-up"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-800"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">

      {/* Wishlist + Cart */}
      {user.role !== Role.ADMIN && (
        <div className="flex items-center gap-2">

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition hover:bg-red-50 hover:text-red-500"
          >
            <IoMdHeart size={22} />

            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition hover:bg-teal-50 hover:text-teal-600"
          >
            <HiShoppingBag size={22} />
          </Link>

        </div>
      )}

      {/* Divider */}
      <div className="h-8 w-px bg-gray-200" />

      {/* Profile */}
      <div className="flex items-center gap-2.5">

        {/* Profile Image */}
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100">
          <Image
            src={user.profile_image?.path || "/profile.jpg"}
            alt={user.full_name || "Profile"}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>

        {/* Name + Logout */}
        <div className="hidden sm:block">
          <p className="max-w-32 truncate text-sm font-semibold text-gray-800">
            {user.full_name}
          </p>

          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-1 text-xs text-gray-400 transition hover:text-red-500"
          >
            <FiLogOut size={12} />
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default AuthSection;












