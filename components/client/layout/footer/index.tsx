
import Logo from "@/components/common/ui/logo";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-24 py-10 text-gray-300">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

        {/* Logo & Description */}
        <div>
          <Logo />
          <p className="mt-3 text-sm text-gray-400">
            Your trusted online shopping destination in Nepal.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-teal-400">
            Home
          </Link>

          <Link href="/products" className="hover:text-teal-400">
            Products
          </Link>

          <Link href="/about-us" className="hover:text-teal-400">
            About
          </Link>

          <Link href="/contact-us" className="hover:text-teal-400">
            Contact
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nepali Pasal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

