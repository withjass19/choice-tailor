import { Search, Filter, Calendar, ChevronDown } from "lucide-react";

export default function CustomerFilters() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr_1.1fr_auto]">
      <div className="relative">
        <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#061735]"
        />
        <input
          placeholder="Search by name, email or phone..."
          className="w-full rounded-lg border bg-white px-4 py-3 pr-11 text-sm outline-none"
        />
      </div>

      <SelectBox label="All Status" />
      <SelectBox label="All Cities" />
      <SelectBox label="All Customer Type" />

      <button className="flex items-center justify-center gap-2 rounded-lg border bg-white px-4 py-3 text-sm">
        <Calendar size={17} />
        10 Jun, 2024 - 10 Jul, 2024
        <ChevronDown size={16} />
      </button>

      <button className="flex items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
        <Filter size={17} />
        Filter
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