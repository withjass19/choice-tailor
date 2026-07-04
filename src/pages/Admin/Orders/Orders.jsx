import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Package,
  Ruler,
  CheckCircle,
  Scissors,
  BadgeCheck,
  Truck,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const summaryConfig = [
  { title: "All Orders", key: "all", icon: Package, color: "text-orange-600" },
  { title: "New", key: "pending", icon: Package, color: "text-green-600" },
  { title: "Measurement Pending", key: "measurement_pending", icon: Ruler, color: "text-blue-600" },
  { title: "Measurement Verified", key: "measurement_verified", icon: CheckCircle, color: "text-green-600" },
  { title: "In Production", key: "stitching", icon: Scissors, color: "text-red-500" },
  { title: "Quality Check", key: "quality_check", icon: BadgeCheck, color: "text-purple-600" },
  { title: "Shipped", key: "shipped", icon: Truck, color: "text-green-600" },
  { title: "Delivered", key: "delivered", icon: CheckCircle, color: "text-teal-600" },
  { title: "Cancelled", key: "cancelled", icon: XCircle, color: "text-red-600" },
];

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);

      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select(`
          *,
          addresses (*),
          measurement_profiles (*),
          order_items (*),
          payments (*)
        `)
        .order("created_at", { ascending: false });

        console.log("Fetched orders:", ordersData);

      if (ordersError) throw ordersError;

      const userIds = [
        ...new Set((ordersData || []).map((order) => order.user_id).filter(Boolean)),
      ];

      let profiles = [];

      if (userIds.length > 0) {
        const { data: profilesData, error: profilesError } = await supabase
          .from("profiles")
          .select("id, full_name, phone, email")
          .in("id", userIds);

        if (profilesError) throw profilesError;

        profiles = profilesData || [];
      }

      const mergedOrders = (ordersData || []).map((order) => ({
        ...order,
        profile: profiles.find((profile) => profile.id === order.user_id) || null,
      }));

      setOrders(mergedOrders);
    } catch (error) {
      console.error("Admin orders fetch failed:", error);
      toast.error(error.message || "Failed to load orders.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const filteredOrders = useMemo(() => {
    let result = [...orders];

    if (statusFilter !== "all") {
      result = result.filter((order) => order.order_status === statusFilter);
    }

    if (paymentFilter !== "all") {
      result = result.filter((order) => order.payment_status === paymentFilter);
    }

    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter((order) => {
        const customerName = order.profile?.full_name || "";
        const phone = order.profile?.phone || "";

        return (
          order.order_number?.toLowerCase().includes(keyword) ||
          customerName.toLowerCase().includes(keyword) ||
          phone.toLowerCase().includes(keyword)
        );
      });
    }

    return result;
  }, [orders, search, statusFilter, paymentFilter]);

  const getSummaryValue = (key) => {
    if (key === "all") return orders.length;

    if (key === "measurement_pending") {
      return orders.filter((order) => !order.measurement_profile_id).length;
    }

    if (key === "measurement_verified") {
      return orders.filter((order) => order.measurement_profile_id).length;
    }

    return orders.filter((order) => order.order_status === key).length;
  };

  const exportOrders = () => {
    if (filteredOrders.length === 0) {
      toast.error("No orders to export.");
      return;
    }

    const rows = filteredOrders.map((order) => {
      const firstItem = order.order_items?.[0];
      const customer = order.profile;

      return {
        order_number: order.order_number,
        customer_name: customer?.full_name || "",
        phone: customer?.phone || "",
        email: customer?.email || "",
        product: firstItem?.product_name || "",
        category: firstItem?.category || "",
        items: order.order_items?.length || 0,
        order_status: order.order_status,
        payment_status: order.payment_status,
        payment_method: order.payment_method || "",
        total_amount: order.total_amount || 0,
        date: new Date(order.created_at).toLocaleString("en-IN"),
      };
    });

    const headers = Object.keys(rows[0]);

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        headers
          .map((header) => `"${String(row[header]).replaceAll('"', '""')}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `choice-tailor-orders-${Date.now()}.csv`;
    link.click();

    URL.revokeObjectURL(url);

    toast.success("Orders exported successfully.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">Dashboard › Orders</p>

          <h1 className="mt-3 text-3xl font-bold text-[#061735]">Orders</h1>

          <p className="mt-1 text-sm text-gray-600">
            Manage and track all customer orders.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={exportOrders}
            className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold"
          >
            <Download size={17} />
            Export Orders
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 text-sm font-semibold text-white"
          >
            <Plus size={17} />
            Add Order
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
          {summaryConfig.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  if (item.key === "all") setStatusFilter("all");
                  if (!item.key.includes("measurement") && item.key !== "all") {
                    setStatusFilter(item.key);
                  }
                }}
                className={`border-r p-4 text-left last:border-r-0 ${
                  index === 0 ? "bg-[#fbf4ea]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className={item.color} />

                  <div>
                    <p className="text-xs font-semibold text-[#061735]">
                      {item.title}
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-[#061735]">
                      {getSummaryValue(item.key)}
                    </h3>
                  </div>
                </div>

                {index === 0 && (
                  <div className="mt-3 h-[2px] w-full bg-[#b89b3c]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="grid gap-4 border-b p-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
          <div className="relative">
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#061735]"
            />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by Order ID, Customer, Phone..."
              className="w-full rounded-lg border px-4 py-3 pr-11 text-sm outline-none"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-lg border px-4 py-3 text-sm outline-none"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cutting">Cutting</option>
            <option value="stitching">Stitching</option>
            <option value="quality_check">Quality Check</option>
            <option value="packed">Packed</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <select className="rounded-lg border px-4 py-3 text-sm outline-none">
            <option>All Products</option>
          </select>

          <select
            value={paymentFilter}
            onChange={(event) => setPaymentFilter(event.target.value)}
            className="rounded-lg border px-4 py-3 text-sm outline-none"
          >
            <option value="all">All Payment Status</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold"
          >
            <Filter size={17} />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1250px] text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-xs uppercase text-[#061735]">
                <th className="px-5 py-4">Order ID</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">Measurement</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Payment</th>
                <th className="px-5 py-4">Amount</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={9} className="px-5 py-10 text-center text-gray-500">
                    Loading orders...
                  </td>
                </tr>
              ) : filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-5 py-10 text-center text-gray-500">
                    No orders found.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => {
                  const firstItem = order.order_items?.[0];
                  const customer = order.profile;

                  return (
                    <tr key={order.id} className="border-b last:border-b-0">
                      <td className="px-5 py-4 font-bold">
                        {order.order_number}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061735] text-xs font-bold text-white">
                            {getInitials(customer?.full_name)}
                          </div>

                          <div>
                            <p className="font-semibold text-[#061735]">
                              {customer?.full_name || "Customer"}
                            </p>

                            <p className="text-xs text-gray-500">
                              {customer?.phone || "-"}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={firstItem?.image}
                            alt={firstItem?.product_name}
                            className="h-14 w-14 object-contain"
                          />

                          <div>
                            <p className="font-semibold text-[#061735]">
                              {firstItem?.product_name || "Product"}
                            </p>

                            <p className="text-xs text-gray-500">
                              {firstItem?.category || "-"}
                            </p>

                            <p className="text-xs text-gray-500">
                              {order.order_items?.length || 0} Item
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge
                          type={order.measurement_profile_id ? "Verified" : "Pending"}
                        >
                          {order.measurement_profile_id ? "Verified" : "Pending"}
                        </StatusBadge>

                        <p className="mt-1 text-xs text-gray-500">
                          Profile:{" "}
                          {order.measurement_profiles?.profile_name || "No Measurement"}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge type={order.order_status}>
                          {formatStatus(order.order_status)}
                        </StatusBadge>

                        <p className="mt-1 text-xs text-gray-500">
                          {formatStatus(order.order_status)}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge type={order.payment_status}>
                          {formatStatus(order.payment_status)}
                        </StatusBadge>

                        <p className="mt-1 text-xs text-gray-500">
                          {order.payment_method || "-"}
                        </p>
                      </td>

                      <td className="px-5 py-4 font-bold">
                        ₹{Number(order.total_amount || 0).toLocaleString("en-IN")}
                      </td>

                      <td className="px-5 py-4">
                        <p>
                          {new Date(order.created_at).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>

                        <p className="text-xs text-gray-500">
                          {new Date(order.created_at).toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            className="rounded-lg border px-4 py-2 text-sm font-semibold"
                          >
                            View Details
                          </button>

                          <button type="button">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            Showing {filteredOrders.length} of {orders.length} orders
          </p>

          <div className="flex items-center gap-3">
            <button type="button" className="rounded-lg border px-4 py-2 text-sm">
              10 per page
            </button>

            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-lg border">
              <ChevronLeft size={16} />
            </button>

            <button type="button" className="h-9 w-9 rounded-lg border bg-[#061735] text-sm text-white">
              1
            </button>

            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-lg border">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getInitials(name = "") {
  if (!name) return "CT";

  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatStatus(status = "") {
  return status ? status.replaceAll("_", " ") : "-";
}

function StatusBadge({ children, type }) {
  const styles = {
    Verified: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
    pending: "bg-orange-100 text-orange-700",
    paid: "bg-green-100 text-green-700",
    failed: "bg-red-100 text-red-700",
    refunded: "bg-red-100 text-red-700",
    confirmed: "bg-blue-100 text-blue-700",
    cutting: "bg-orange-100 text-orange-700",
    stitching: "bg-orange-100 text-orange-700",
    quality_check: "bg-purple-100 text-purple-700",
    packed: "bg-indigo-100 text-indigo-700",
    shipped: "bg-green-100 text-green-700",
    delivered: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
        styles[type] || "bg-gray-100 text-gray-700"
      }`}
    >
      {children}
    </span>
  );
}