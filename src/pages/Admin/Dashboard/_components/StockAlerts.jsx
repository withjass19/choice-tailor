import { AlertTriangle } from "lucide-react";

export default function StockAlerts() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#061735]">Low Stock Alerts</h2>
        <button className="text-sm font-semibold text-blue-700">View All</button>
      </div>

      <div className="flex flex-col gap-4 rounded-lg border border-orange-200 bg-orange-50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-orange-700">
          <AlertTriangle size={24} />
          <p className="text-sm font-medium">
            5 items are running low on stock.
          </p>
        </div>

        <button className="rounded-md border border-orange-300 bg-white px-5 py-2 text-sm font-semibold text-orange-700">
          View Inventory
        </button>
      </div>
    </div>
  );
}