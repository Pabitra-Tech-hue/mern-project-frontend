import Link from "next/link";
import React from "react";
import NavLinks from "./links";
import AuthSection from "@/components/common/ui/auth.section";

const NavBar = () => {
  return (
    <header className="h-20 border-b border-gray-300 shadow flex items-center justify-between px-10 bg-white">

      {/* Logo */}
      <Link href="/">
        <h1 className="text-2xl font-bold text-teal-500">
          Nepali Pasal
        </h1>
      </Link>

      {/* Navigation Links */}
      <NavLinks />

      {/* User / Login */}
      <AuthSection />

    </header>
  );
};

export default NavBar;