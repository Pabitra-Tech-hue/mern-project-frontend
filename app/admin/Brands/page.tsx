import BrandForm from "@/components/admin/forms/brand.form";
import BrandList from "@/components/admin/lists/brand.list";

const BrandsPage = () => {
  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Brands
      </h1>

      <BrandForm />

      <div className="mt-8">
        <BrandList />
      </div>
    </main>
  );
};

export default BrandsPage;