import { Plus } from "lucide-react";

import CategoryStats from "./_components/CategoryStats";
import CategoryFilters from "./_components/CategoryFilters";
import CategoriesTable from "./_components/CategoriesTable";
import CategoryPagination from "./_components/CategoryPagination";

export default function Categories() {
  return (
    <div className="space-y-6">

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Dashboard / Categories
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#061735]">
            Categories
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your product categories and their settings.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 font-semibold text-white">
          <Plus size={18}/>
          Add Category
        </button>
      </div>

      <CategoryStats />

      <CategoryFilters />

      <div className="rounded-xl border bg-white">
        <CategoriesTable />
        <CategoryPagination />
      </div>

    </div>
  );
}