
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  getAllCategories,
  deleteCategory,
} from "@/api/category.api";

import Table from "./table";

const CategoryList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const { mutate: deleteMutate, isPending } = useMutation({
    mutationFn: deleteCategory,

    onSuccess: (response) => {
      toast.success(response?.message ?? "Category deleted");

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: (error: any) => {
      toast.error(error?.message ?? "Category deletion failed");
    },
  });

  if (isLoading) {
    return (
      <div className="mt-8 rounded-xl border bg-white p-8 text-center">
        <p className="text-sm text-gray-500">
          Loading categories...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-8 rounded-xl border border-red-100 bg-red-50 p-5">
        <p className="text-sm font-medium text-red-500">
          Failed to load categories
        </p>
      </div>
    );
  }

  const categories = data?.data || [];

  const columns = [
    {
      accessorKey: "name",
      header: "Category Name",
      cell: ({ row }: any) => (
        <div className="font-medium text-gray-800">
          {row.original.name}
        </div>
      ),
    },

    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }: any) => (
        <div className="max-w-[350px] truncate text-sm text-gray-500">
          {row.original.description || "No description"}
        </div>
      ),
    },

    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }: any) => {
        const image = row.original.image;

        return image?.path ? (
          <img
            src={image.path}
            alt={row.original.name}
            className="h-14 w-14 rounded-lg border border-gray-200 object-cover shadow-sm"
          />
        ) : (
          <span className="text-xs text-gray-400">
            No Image
          </span>
        );
      },
    },

    {
      id: "actions",
      header: "Action",
      cell: ({ row }: any) => (
        <button
          type="button"
          onClick={() => {
            if (
              confirm(
                "Are you sure you want to delete this category?"
              )
            ) {
              deleteMutate(row.original._id);
            }
          }}
          disabled={isPending}
          className="rounded-lg bg-red-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      ),
    },
  ];

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Category List
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Manage all your product categories
        </p>
      </div>

      {/* Category Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <Table
          data={categories}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default CategoryList;

