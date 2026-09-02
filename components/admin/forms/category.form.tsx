"use client";

import Input from "../../common/ui/input";
import Button from "../../common/ui/button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { categorySchema } from "@/schema/category.schema";
import { TCategory } from "@/types/category.type";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createCategory } from "@/api/category.api";

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCategory>({
    resolver: yupResolver(categorySchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: createCategory,

    onSuccess: (response) => {
      toast.success(
        response?.message ?? "Category created"
      );
    },

    onError: (error: any) => {
      toast.error(
        error?.message ?? "Category creation failed"
      );
    },
  });

  const onSubmit = (data: TCategory) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    mutate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <Input
        id="name"
        label="Category Name"
        name="name"
        placeholder="Enter category name"
        type="text"
        register={register}
        error={errors.name?.message}
      />

      <Input
        id="description"
        label="Description"
        name="description"
        placeholder="Enter description"
        type="text"
        register={register}
        error={errors.description?.message}
      />

      <input
        type="file"
        {...register("image")}
      />

      <Button
        label={
          isPending
            ? "Creating..."
            : "Create Category"
        }
        type="submit"
      />
    </form>
  );
};

export default CategoryForm;