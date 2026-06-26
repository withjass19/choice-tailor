import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function CategoryPagination() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t bg-white px-6 py-5 lg:flex-row">
      <p className="text-sm text-gray-500">
        Showing 1 to 7 of 7 categories
      </p>

      <div className="flex items-center gap-3">
        {/* Per Page */}
        <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm">
          10 per page
          <ChevronDown size={16} />
        </button>

        {/* Previous */}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-gray-100">
          <ChevronLeft size={16} />
        </button>

        {/* Current */}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#061735] text-white">
          1
        </button>

        {/* Next */}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-gray-100">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}