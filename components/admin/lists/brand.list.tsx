"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  getAllBrands,
  deleteBrand,
} from "@/api/brand.api";

import Table from "./table";

const BrandList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,
  });

  const { mutate: deleteMutate, isPending } =
    useMutation({
      mutationFn: deleteBrand,

      onSuccess: (response) => {
        toast.success(
          response?.message ?? "Brand deleted"
        );

        queryClient.invalidateQueries({
          queryKey: ["brands"],
        });
      },

      onError: (error: any) => {
        toast.error(
          error?.message ?? "Brand deletion failed"
        );
      },
    });

  if (isLoading) {
    return <p>Loading brands...</p>;
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Failed to load brands
      </p>
    );
  }

  const brands = data?.data || [];

  const columns = [
    {
      accessorKey: "name",
      header: "Brand Name",
    },

    {
      accessorKey: "description",
      header: "Description",
    },

    {
      accessorKey: "logo",
      header: "Logo",
      cell: ({ row }: any) => {
        const logo = row.original.logo;

        return logo?.path ? (
          <img
            src={logo.path}
            alt={row.original.name}
            className="h-12 w-12 rounded object-cover"
          />
        ) : (
          <span>No Logo</span>
        );
      },
    },

    {
      id: "actions",
      header: "Action",
      cell: ({ row }: any) => (
        <button
          onClick={() =>
            deleteMutate(row.original._id)
          }
          disabled={isPending}
          className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      ),
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">
        Brand List
      </h2>

      <p className="mb-4 text-gray-500">
        Manage all your brands
      </p>

      <Table
        data={brands}
        columns={columns}
      />
    </div>
  );
};

export default BrandList;