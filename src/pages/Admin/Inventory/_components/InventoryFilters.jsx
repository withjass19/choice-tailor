import { Search, Filter, RotateCcw, ChevronDown } from "lucide-react";

export default function InventoryFilters() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_auto_auto]">
      <div className="relative">
        <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#061735]"
        />
        <input
          placeholder="Search by item name, SKU..."
          className="w-full rounded-lg border bg-white px-4 py-3 pr-11 text-sm outline-none"
        />
      </div>

      <SelectBox label="All Categories" />
      <SelectBox label="All Stock Status" />
      <SelectBox label="All Suppliers" />

      <button className="flex items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
        <Filter size={17} />
        Filter
      </button>

      <button className="flex items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
        <RotateCcw size={17} />
        Reset
      </button>
    </div>
  );
}

function SelectBox({ label }) {
  return (
    <button className="flex items-center justify-between rounded-lg border bg-white px-4 py-3 text-sm">
      {label}
      <ChevronDown size={16} />
    </button>
  );
}