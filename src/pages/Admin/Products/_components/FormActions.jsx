import { Save } from "lucide-react";

export default function FormActions({ loading }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-500">
          Dashboard › Products › Add Product
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[#061735]">
          Add New Product
        </h1>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="rounded-lg border bg-white px-6 py-3 text-sm font-semibold"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 rounded-lg bg-[#061735] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          <Save size={17} />
          {loading ? "Saving..." : "Save Product"}
        </button>
      </div>
    </div>
  );
}