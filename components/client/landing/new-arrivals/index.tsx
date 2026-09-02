import Link from "next/link";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import NewArrivalsProductsList from "./list";

const NewArrivalsProductsSection = () => {
  return (
    <section className="px-30 py-10">

      {/* Heading */}
      <header className="flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-700">
            New Arrivals
          </h3>

          <p className="text-sm text-gray-500 -mt-1">
            Discover our latest products
          </p>
        </div>

        <Link href="/products">
          <div className="flex gap-1 items-center text-gray-700 font-semibold">
            <span className="text-sm font-semibold">
              View All
            </span>

            <IoChevronDown size={20} />
          </div>
        </Link>
      </header>

      {/* Products */}
      <NewArrivalsProductsList />

    </section>
  );
};

export default NewArrivalsProductsSection;

