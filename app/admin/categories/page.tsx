import CategoryForm from "@/components/admin/forms/category.form";
import CategoryList from "@/components/admin/lists/category.list";

const CategoriesPage = () => {
  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Categories
      </h1>

      <CategoryForm />

      <div className="mt-8">
        <CategoryList />
      </div>
    </main>
  );
};

export default CategoriesPage;