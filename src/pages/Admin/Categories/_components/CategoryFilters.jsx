import { Search, Filter, RotateCcw, ChevronDown } from "lucide-react";

export default function CategoryFilters() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_auto_auto]">
      <div className="relative">
        <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        />

        <input
          placeholder="Search by category name..."
          className="w-full rounded-lg border px-4 py-3 pr-10"
        />
      </div>

      <button className="flex items-center justify-between rounded-lg border px-4 py-3">
        All Status
        <ChevronDown size={16} />
      </button>

      <button className="flex items-center gap-2 rounded-lg border px-5">
        <Filter size={18} />
        Filter
      </button>

      <button className="flex items-center gap-2 rounded-lg border px-5">
        <RotateCcw size={18} />
        Reset
      </button>
    </div>
  );
}
