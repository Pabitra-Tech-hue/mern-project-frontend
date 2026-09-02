import Link from "next/link";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import CategoryList from "./list";

const CategorySection = () => {
  return (
    <section className="px-30 py-10">

      {/* heading */}
      <header className="flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-700">
            All Categories
          </h3>

          <p className="text-sm text-gray-500 -mt-1">
            Discover our featured categories
          </p>
        </div>

        <Link href={"#"}>
          <div className="flex gap-1 items-center text-gray-700 font-semibold">
            <span className="text-sm font-semibold">
              View All
            </span>

            <IoChevronDown size={20} />
          </div>
        </Link>
      </header>

      {/* list */}
      <CategoryList />

    </section>
  );
};

export default CategorySection;