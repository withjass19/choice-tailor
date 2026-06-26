import { Download, Plus } from "lucide-react";
import CustomerStats from "./_compomets/CustomerStats";
import CustomerFilters from "./_compomets/CustomerFilters";
import CustomersTable from "./_compomets/CustomersTable";
import CustomerPagination from "./_compomets/CustomerPagination";

export default function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">Dashboard › Customers</p>
          <h1 className="mt-3 text-3xl font-bold text-[#061735]">
            Customers
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage and view all your customers.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
            <Download size={17} />
            Export Customers
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 text-sm font-semibold text-white">
            <Plus size={17} />
            Add Customer
          </button>
        </div>
      </div>

      <CustomerStats />
      <CustomerFilters />

      <div>
        <CustomersTable />
        <CustomerPagination />
      </div>
    </div>
  );
}