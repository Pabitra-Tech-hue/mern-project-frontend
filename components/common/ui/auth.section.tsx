
"use client";

import { AuthContext, TUser } from "@/contexts/auth.context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { IoMdHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { Role } from "@/types/global.types";

const AuthSection = () => {
  //* using context
  const { user, isLoading, logout } = useContext(AuthContext);

  return (
    <div className="min-w-20">
      {isLoading && <p>Loading</p>}

      {!isLoading && user && (
        <UserProfile user={user} logout={logout} />
      )}

      {!isLoading && !user && <AuthButtons />}
    </div>
  );
};

const UserProfile = ({
  user: { full_name, profile_image, role },
  logout,
}: {
  user: TUser;
  logout: () => void;
}) => {
  return (
    <div className="flex items-center gap-5">

      {/* Icons */}
      {role !== Role.ADMIN && (
        <div className="flex items-center gap-3">

          {/* Wishlist */}
          <Link
            href="/client/wishlist"
            className="transition-transform duration-200 hover:scale-110"
          >
            <IoMdHeart
              size={28}
              className="mt-0.5 text-red-500"
            />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="transition-transform duration-200 hover:scale-110"
          >
            <HiShoppingBag
              size={26}
              className="text-primary"
            />
          </Link>

        </div>
      )}

      {/* User Profile */}
      <div className="flex items-center gap-2">

        {/* Profile Image */}
        <div className="h-14 w-14 overflow-hidden rounded-full border border-primary p-0.5">
          <Image
            src={profile_image?.path ?? "/profile.jpg"}
            alt="profile image"
            height={500}
            width={500}
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* User Info */}
        <div>
          {/* Name */}
          <p className="text-lg font-bold text-primary">
            {full_name}
          </p>

          {/* Logout */}
          <button
            onClick={logout}
            className="cursor-pointer text-md font-semibold text-red-500 transition hover:text-red-600"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

const AuthButtons = () => {
  return (
    <div className="flex gap-3">

      {/* Login */}
      <Link href="/login">
        <p
          className="
            min-w-30 cursor-pointer rounded-sm
            bg-teal-500 px-1 py-3
            text-center font-bold text-white
            transition-all duration-300
            hover:bg-teal-400
            active:bg-teal-600
          "
        >
          Login
        </p>
      </Link>

      {/* Sign Up */}
      <Link href="/login">
        <p
          className="
            min-w-30 cursor-pointer rounded-sm
            border border-teal-500 px-1 py-3
            text-center font-bold text-teal-500
            transition-all duration-300
            hover:bg-teal-400 hover:text-white
            active:bg-teal-600
          "
        >
          Sign Up
        </p>
      </Link>

    </div>
  );
};

export default AuthSection;

