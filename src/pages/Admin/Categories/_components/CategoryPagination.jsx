import {
  ChevronLeft,
  ChevronRight,
  // ChevronDown,
} from "lucide-react";

export default function CategoryPagination({
  page,
  setPage,
  totalItems,
  totalPages,
  pageSize,
  setPageSize,
}) {
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t bg-white px-6 py-5 lg:flex-row">
      <p className="text-sm text-gray-500">
        Showing {start} to {end} of {totalItems} categories
      </p>

      <div className="flex items-center gap-3">
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPage(1);
          }}
          className="rounded-lg border px-4 py-2 text-sm"
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
          <option value={50}>50 per page</option>
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