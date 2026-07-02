import { useCallback, useEffect, useMemo, useState } from "react";
import { Download, Plus } from "lucide-react";
import { supabase } from "@/lib/supabase";

import CustomerStats from "./_compomets/CustomerStats";
import CustomerFilters from "./_compomets/CustomerFilters";
import CustomersTable from "./_compomets/CustomersTable";
import CustomerPagination from "./_compomets/CustomerPagination";
// import { useAuth } from "@/context/AuthContext";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { customers: authCustomers } = useAuth();
  const [search, setSearch] = useState("");

  const fetchCustomers = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("role", "customer")
    .order("created_at", { ascending: false });

      if (error) throw error;

      setCustomers(data || []);
    } catch (error) {
      console.error("Customers fetch failed:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCustomers();
  }, [fetchCustomers]);

  const filteredCustomers = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) return customers;

    return customers.filter((customer) => {
      return (
        customer.full_name?.toLowerCase().includes(keyword) ||
        customer.email?.toLowerCase().includes(keyword) ||
        customer.phone?.toLowerCase().includes(keyword)
      );
    });
  }, [customers, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">Dashboard › Customers</p>

          <h1 className="mt-3 text-3xl font-bold text-[#061735]">Customers</h1>

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

      <CustomerStats customers={customers} />

      <CustomerFilters search={search} setSearch={setSearch} />

      <div>
        <CustomersTable
          customers={filteredCustomers}
          loading={loading}
          refreshCustomers={fetchCustomers}
        />

        <CustomerPagination totalCustomers={filteredCustomers.length} />
      </div>
    </div>
  );
}
