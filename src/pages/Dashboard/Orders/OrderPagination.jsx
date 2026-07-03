export default function OrderPagination({
  page,
  totalPages,
  setPage,
  totalOrders,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t p-5">
      <p className="text-sm text-gray-500">
        Total Orders : {totalOrders}
      </p>

      <div className="flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="rounded border px-4 py-2 disabled:opacity-40"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`h-10 w-10 rounded ${
              page === index + 1
                ? "bg-[#061735] text-white"
                : "border"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="rounded border px-4 py-2 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}