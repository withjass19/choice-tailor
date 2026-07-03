import { Search, ChevronDown } from "lucide-react";

export default function OrderFilters({
  search,
  setSearch,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="flex flex-col gap-4 p-5 lg:flex-row lg:justify-between">
      <div className="relative">
        <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by order ID..."
          className="w-full rounded-lg border px-4 py-3 pr-12 lg:w-[350px]"
        />
      </div>

      <button
        type="button"
        className="flex items-center gap-2 rounded-lg border px-4 py-3"
      >
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-transparent outline-none"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        <ChevronDown size={18} />
      </button>
    </div>
  );
}