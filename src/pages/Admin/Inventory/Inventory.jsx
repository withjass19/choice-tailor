import { Download, Plus } from "lucide-react";

import InventoryStats from "./_components/InventoryStats";
import InventoryFilters from "./_components/InventoryFilters";
import InventoryTabs from "./_components/InventoryTabs";
import InventoryTable from "./_components/InventoryTable";
import InventoryPagination from "./_components/InventoryPagination";

export default function Inventory() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-gray-500">
            Dashboard / Inventory
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#061735]">
            Inventory
          </h1>

          <p className="mt-2 text-gray-500">
            Manage stock levels for accessories and other items.
          </p>

        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3">
            <Download size={18}/>
            Export Inventory
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 text-white">
            <Plus size={18}/>
            Add Stock Item
          </button>

        </div>

      </div>

      <InventoryStats />

      <InventoryFilters />

      <div className="rounded-xl border bg-white">
        <InventoryTabs />
        <InventoryTable />
        <InventoryPagination />
      </div>

    </div>
  );
}