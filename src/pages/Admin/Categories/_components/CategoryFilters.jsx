import { Search, Filter, RotateCcw } from "lucide-react";

export default function CategoryFilters({
  search,
  setSearch,
  status,
  setStatus,
  visibility,
  setVisibility,
  featured,
  setFeatured,
  resetFilters,
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto_auto]">
      <div className="relative">
        <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by category name..."
          className="w-full rounded-lg border px-4 py-3 pr-10"
        />
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-lg border px-4 py-3"
      >
        <option value="all">All Status</option>
        <option value="Active">Active</option>
        <option value="Hidden">Hidden</option>
        <option value="Archived">Archived</option>
      </select>

      <select
        value={visibility}
        onChange={(e) => setVisibility(e.target.value)}
        className="rounded-lg border px-4 py-3"
      >
        <option value="all">All Visibility</option>
        <option value="visible">Visible</option>
        <option value="hidden">Hidden</option>
      </select>

      <select
        value={featured}
        onChange={(e) => setFeatured(e.target.value)}
        className="rounded-lg border px-4 py-3"
      >
        <option value="all">All Featured</option>
        <option value="featured">Featured</option>
        <option value="not_featured">Not Featured</option>
      </select>

      <button className="flex items-center justify-center gap-2 rounded-lg border px-5">
        <Filter size={18} />
        Filter
      </button>

      <button
        type="button"
        onClick={resetFilters}
        className="flex items-center justify-center gap-2 rounded-lg border px-5"
      >
        <RotateCcw size={18} />
        Reset
      </button>
    </div>
  );
}