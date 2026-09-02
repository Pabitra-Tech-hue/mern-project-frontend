"use client";

import Input from "../../common/ui/input";
import Button from "../../common/ui/button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { brandSchema } from "@/schema/brand.schema";
import { TBrand } from "@/types/brand.types";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createBrand } from "@/api/brand.api";

const BrandForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TBrand>({
    resolver: yupResolver(brandSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: createBrand,

    onSuccess: (response) => {
      toast.success(
        response?.message ?? "Brand created"
      );
    },

    onError: (error: any) => {
      toast.error(
        error?.message ?? "Brand creation failed"
      );
    },
  });

  const onSubmit = (data: TBrand) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("logo", data.logo[0]);

    mutate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <Input
        id="name"
        label="Brand Name"
        name="name"
        placeholder="Enter brand name"
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
        {...register("logo")}
      />

      <Button
        label={
          isPending
            ? "Creating..."
            : "Create Brand"
        }
        type="submit"
      />
    </form>
  );
};

export default BrandForm;
