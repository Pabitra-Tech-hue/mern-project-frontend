"use client";

import Link from "next/link";
import ProductList from "@/components/admin/lists/product.list";

export default function ProductsPage() {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your products and inventory
          </p>
        </div>

        <Link href="/admin/products/add-new">
          <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
            + Add New Product
          </button>
        </Link>
      </div>

      {/* Product List */}
      <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <ProductList />
      </div>

    </div>
  );
}

