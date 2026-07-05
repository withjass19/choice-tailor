import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export default function Pagination({
  page,
  setPage,
  totalItems,
  totalPages,
  pageSize,
  setPageSize,
  pageSizeOptions = [5, 10, 20, 50],
  label = "items",
  className,
}) {
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-4 border-t bg-white px-6 py-5 lg:flex-row",
        className
      )}
    >
      <p className="text-sm text-gray-500">
        Showing {start} to {end} of {totalItems} {label}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPage(1);
          }}
          className="rounded-lg border px-4 py-2 text-sm"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size} per page
            </option>
          ))}
        </select>

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-100"
        >
          <ChevronLeft size={16} />
        </button>

        <span className="rounded-lg bg-[#061735] px-4 py-2 text-sm font-semibold text-white">
          {page}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-100"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
