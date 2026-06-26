import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function InventoryPagination() {
  return (
    <div className="flex flex-col gap-4 border-t bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-gray-600">Showing 1 to 10 of 64 items</p>

      <div className="flex flex-wrap items-center gap-2">
        <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm">
          10 per page
          <ChevronDown size={14} />
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg border">
          <ChevronLeft size={16} />
        </button>

        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`h-9 w-9 rounded-lg border text-sm ${
              page === 1 ? "bg-[#061735] text-white" : "bg-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button className="h-9 w-9 rounded-lg border">...</button>
        <button className="h-9 w-9 rounded-lg border">7</button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg border">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}