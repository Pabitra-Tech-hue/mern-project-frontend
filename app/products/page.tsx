
import { Metadata } from "next";
import ProductList from "@/components/admin/lists/product.list";

export const metadata: Metadata = {
  title: "Products | Nepali Pasal",
  description: "Browse all products at Nepali Pasal",
  keywords: ["products", "Nepali Pasal", "shopping"],
};

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 md:px-10 lg:px-14">

      {/* ================= HEADER ================= */}

      <div className="mx-auto mb-8 max-w-6xl text-center">

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Our Collection
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          Explore Our Products
        </h1>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500">
          Discover quality products carefully selected for your
          everyday needs. Find your favorites and shop with ease.
        </p>

      </div>

      {/* ================= PRODUCTS ================= */}

      <ProductList />

    </main>
  );
};

export default ProductsPage;