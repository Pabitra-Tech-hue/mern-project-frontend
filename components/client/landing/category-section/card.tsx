import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { TCategory } from "@/types/ResponseCategory.types";

interface IProps {
  category: TCategory;
}

const CategoryCard = ({
  category: {
    name,
    image,
    description,
  },
}: IProps) => {
  return (
    <div className="relative w-full border border-gray-300 rounded-md group overflow-clip">

      {/* image */}
      <div className="w-full h-50 rounded-t-md overflow-clip">
        <Image
          src={image?.path}
          alt={name + "-image"}
          height={1000}
          width={1000}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.1]"
        />
      </div>

      {/* heart */}
      <button className="absolute top-2 right-2 z-10 cursor-pointer border border-primary h-10 aspect-square rounded-full flex justify-center items-center p-1 bg-primary/10">
        <FaRegHeart
          className="text-primary"
          size={20}
        />
      </button>

      {/* content */}
      <div className="p-2 pb-3 flex flex-col gap-2 mt-2">

        {/* name */}
        <p className="text-lg font-semibold text-gray-700">
          {name}
        </p>

        {/* description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {description}
        </p>

      </div>

    </div>
  );
};

export default CategoryCard;
