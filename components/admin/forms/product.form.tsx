"use client";

import Input from "../../common/ui/input";
import Button from "../../common/ui/button";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { productSchema } from "@/schema/product.schema";
import { TProduct } from "@/types/product.types";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createProduct } from "@/api/product.api";
import { getAllBrands } from "@/api/brand.api";
import { getAllCategories } from "@/api/category.api";

const ProductForm = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      brand: "",
      category: "",
      is_featured: false,
      new_arrival: true,
    },
    resolver: yupResolver(productSchema),
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const brandResponse = await getAllBrands();
        const categoryResponse = await getAllCategories();

        setBrands(brandResponse?.data || []);
        setCategories(categoryResponse?.data || []);
      } catch (error) {
        console.log("Brand/Category error", error);
      }
    };

    loadData();
  }, []);

  const { isPending, mutate } = useMutation({
    mutationFn: createProduct,

    onSuccess: (response) => {
      console.log("on product success", response);

      toast.success(
        response.message ?? "Product created"
      );
    },

    onError: (error: any) => {
      console.log("on product error", error);

      toast.error(
        error?.message ?? "Product creation failed"
      );
    },
  });

  const onSubmit = (data: TProduct) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", String(data.price));
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("category", data.category);

    formData.append(
      "cover_image",
      data.cover_image[0]
    );

    if (data.images?.length) {
      Array.from(data.images).forEach((image) => {
        formData.append("images", image);
      });
    }

    formData.append(
      "is_featured",
      String(data.is_featured)
    );

    formData.append(
      "new_arrival",
      String(data.new_arrival)
    );

    mutate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >

      <Input
        id="name"
        label="Product Name"
        name="name"
        placeholder="Enter product name"
        type="text"
        register={register}
        error={errors?.name?.message}
      />

      <Input
        id="price"
        label="Price"
        name="price"
        placeholder="Enter product price"
        type="number"
        register={register}
        error={errors?.price?.message}
      />

      <Input
        id="description"
        label="Description"
        name="description"
        placeholder="Enter product description"
        type="text"
        register={register}
        error={errors?.description?.message}
      />

      {/* Brand */}
      <div>
        <label className="mb-1 block">
          Brand
        </label>

        <select
          {...register("brand")}
          className="w-full rounded border p-2"
        >
          <option value="">
            Select Brand
          </option>

          {brands.map((brand) => (
            <option
              key={brand._id}
              value={brand._id}
            >
              {brand.name}
            </option>
          ))}
        </select>

        {errors?.brand && (
          <p className="text-sm text-red-500">
            {errors.brand.message}
          </p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="mb-1 block">
          Category
        </label>

        <select
          {...register("category")}
          className="w-full rounded border p-2"
        >
          <option value="">
            Select Category
          </option>

          {categories.map((category) => (
            <option
              key={category._id}
              value={category._id}
            >
              {category.name}
            </option>
          ))}
        </select>

        {errors?.category && (
          <p className="text-sm text-red-500">
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Cover Image */}
      <div>
        <label className="mb-1 block">
          Cover Image
        </label>

        <input
          type="file"
          {...register("cover_image")}
        />

        {errors?.cover_image && (
          <p className="text-sm text-red-500">
            {errors.cover_image.message}
          </p>
        )}
      </div>

      {/* Other Images */}
      <div>
        <label className="mb-1 block">
          Other Images
        </label>

        <input
          type="file"
          multiple
          {...register("images")}
        />
      </div>

      {/* Featured */}
      <label>
        <input
          type="checkbox"
          {...register("is_featured")}
        />{" "}
        Featured Product
      </label>

      {/* New Arrival */}
      <label>
        <input
          type="checkbox"
          {...register("new_arrival")}
        />{" "}
        New Arrival
      </label>

      {/* Submit */}
      <div className="mt-3">
        <Button
          label={
            isPending
              ? "Creating..."
              : "Create Product"
          }
          type="submit"
        />
      </div>

    </form>
  );
};

export default ProductForm;