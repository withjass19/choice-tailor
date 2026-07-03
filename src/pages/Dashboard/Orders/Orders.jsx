import { useCallback, useEffect, useMemo, useState } from "react";
import { Headphones } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";

import OrderTabs from "./OrderTabs";
import OrderFilters from "./OrderFilters";
import OrderTable from "./OrderTable";
import OrderPagination from "./OrderPagination";
import OrderDetailsDialog from "./OrderDetailsDialog";

const PER_PAGE = 6;

export default function Orders() {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const [page, setPage] = useState(1);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const fetchOrders = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("orders")
        .select(`
          *,
          addresses (*),
          measurement_profiles (*),
          order_items (*),
          payments (*),
          order_status_history (*)
        `)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setOrders(data || []);
    } catch (error) {
      console.error("Orders fetch failed:", error);
      toast.error("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const filteredOrders = useMemo(() => {
    let result = [...orders];

    if (activeStatus !== "all") {
      result = result.filter((order) => order.order_status === activeStatus);
    }

    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter((order) =>
        order.order_number?.toLowerCase().includes(keyword),
      );
    }

    if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    return result;
  }, [orders, activeStatus, search, sortBy]);

  const totalPages = Math.ceil(filteredOrders.length / PER_PAGE);

  const paginatedOrders = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filteredOrders.slice(start, start + PER_PAGE);
  }, [filteredOrders, page]);

  const statusCounts = {
    all: orders.length,
    pending: orders.filter((o) => o.order_status === "pending").length,
    stitching: orders.filter((o) => o.order_status === "stitching").length,
    shipped: orders.filter((o) => o.order_status === "shipped").length,
    delivered: orders.filter((o) => o.order_status === "delivered").length,
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setDetailsOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Home / My Account / My Orders
          </p>

          <h1 className="mt-2 font-serif text-5xl font-bold text-[#061735]">
            My Orders
          </h1>

          <p className="mt-2 text-gray-600">
            Track and manage all your uniform orders in one place.
          </p>
        </div>

        <div className="rounded-xl bg-[#061735] p-5 text-white">
          <div className="flex items-center gap-3">
            <Headphones />

            <div>
              <h3 className="font-bold">Need Help?</h3>
              <p className="text-sm text-gray-300">Visit Help Center</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border bg-white shadow-sm">
        <OrderTabs
          activeStatus={activeStatus}
          setActiveStatus={(status) => {
            setActiveStatus(status);
            setPage(1);
          }}
          statusCounts={statusCounts}
        />

        <OrderFilters
          search={search}
          setSearch={(value) => {
            setSearch(value);
            setPage(1);
          }}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <OrderTable
          loading={loading}
          orders={paginatedOrders}
          onViewDetails={handleViewDetails}
        />

        <OrderPagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          totalOrders={filteredOrders.length}
        />
      </div>

      <OrderDetailsDialog
        open={detailsOpen}
        setOpen={setDetailsOpen}
        order={selectedOrder}
      />
    </>
  );
}