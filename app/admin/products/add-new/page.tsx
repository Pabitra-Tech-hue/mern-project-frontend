"use client";

import Link from "next/link";
import ProductForm from "@/components/admin/forms/product.form";

export default function AddNewProductPage() {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="mb-6 flex items-center gap-4">

        <Link
          href="/admin/products"
          className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100"
        >
          ← Back
        </Link>

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Add New Product
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Create a new product
          </p>
        </div>

      </div>

      {/* Form Card */}
      <div className="max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <ProductForm />
      </div>

    </div>
  );
}
