import {
  Eye,
  MoreVertical,
  MapPin,
  Phone,
  Pencil,
  Trash2,
  Ban,
  UserCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

import StatusBadge from "@/components/common/StatusBadge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function CustomersTable({
  customers = [],
  loading,
  refreshCustomers,
}) {
  const navigate = useNavigate();

  const blockCustomer = async (id) => {
    const { error } = await supabase
      .from("profiles")
      .update({ status: "Blocked" })
      .eq("id", id);

    if (error) return console.error(error);

    refreshCustomers();
  };

  const activateCustomer = async (id) => {
    const { error } = await supabase
      .from("profiles")
      .update({ status: "Active" })
      .eq("id", id);

    if (error) return console.error(error);

    refreshCustomers();
  };

  const deleteCustomer = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("profiles").delete().eq("id", id);

    if (error) return console.error(error);

    refreshCustomers();
  };

  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-6 text-sm text-gray-500">
        Loading customers...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] text-sm">
          <thead>
            <tr className="border-b bg-gray-50 text-left text-xs uppercase text-[#061735]">
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Contact</th>
              <th className="px-5 py-4">Location</th>
              <th className="px-5 py-4">Orders</th>
              <th className="px-5 py-4">Profiles</th>
              <th className="px-5 py-4">Total Spent</th>
              <th className="px-5 py-4">Customer Type</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Joined On</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item) => {
              const name = item.full_name || "Unknown User";
              const initials = name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <tr key={item.id} className="border-b last:border-b-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061735] text-xs font-bold text-white">
                        {initials}
                      </div>

                      <div>
                        <p className="font-semibold text-[#061735]">{name}</p>
                        <p className="text-xs text-gray-500">{item.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <p className="flex items-center gap-2 text-[#061735]">
                      <Phone size={14} />
                      {item.phone || "—"}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="flex items-start gap-2 text-[#061735]">
                      <MapPin size={14} className="mt-0.5" />
                      <span>
                        {item.city || "—"}, {item.state || ""}
                        <br />
                        <span className="text-gray-500">India</span>
                      </span>
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-semibold">{item.total_orders || 0}</p>
                    <button className="text-xs font-semibold text-blue-700">
                      View Orders
                    </button>
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-semibold">
                      {item.measurement_profiles || 0}
                    </p>
                    <button className="text-xs font-semibold text-blue-700">
                      View Profiles
                    </button>
                  </td>

                  <td className="px-5 py-4 font-bold">
                    ₹{Number(item.total_spent || 0).toLocaleString("en-IN")}
                  </td>

                  <td className="px-5 py-4">
                    <TypeBadge type={item.customer_type || "New"}>
                      {item.customer_type || "New"}
                    </TypeBadge>
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge status={item.status || "Active"}>
                      {item.status || "Active"}
                    </StatusBadge>
                  </td>

                  <td className="px-5 py-4">
                    {item.created_at
                      ? new Date(item.created_at).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "—"}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => navigate(`/admin/customers/${item.id}`)}
                        className="rounded-lg border p-2 hover:bg-gray-50"
                      >
                        <Eye size={17} />
                      </button>

                      <DropdownMenu>
                        <DropdownMenuTrigger className="rounded-lg border p-2 hover:bg-gray-50">
                          <MoreVertical size={18} />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-52">
                          <DropdownMenuItem
                            onClick={() =>
                              navigate(`/admin/customers/${item.id}`)
                            }
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View Customer
                          </DropdownMenuItem>

                          <DropdownMenuItem
                            onClick={() =>
                              navigate(`/admin/customers/${item.id}/edit`)
                            }
                          >
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit Customer
                          </DropdownMenuItem>

                          {item.status === "Blocked" ? (
                            <DropdownMenuItem
                              onClick={() => activateCustomer(item.id)}
                            >
                              <UserCheck className="mr-2 h-4 w-4" />
                              Activate Customer
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem
                              onClick={() => blockCustomer(item.id)}
                            >
                              <Ban className="mr-2 h-4 w-4" />
                              Block Customer
                            </DropdownMenuItem>
                          )}

                          <DropdownMenuSeparator />

                          <DropdownMenuItem
                            onClick={() => deleteCustomer(item.id)}
                            className="text-red-600 focus:text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Customer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              );
            })}

            {customers.length === 0 && (
              <tr>
                <td
                  colSpan="10"
                  className="px-5 py-10 text-center text-sm text-gray-500"
                >
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TypeBadge({ children, type }) {
  const styles = {
    Regular: "bg-blue-100 text-blue-700",
    New: "bg-purple-100 text-purple-700",
    VIP: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[type] || "bg-gray-100 text-gray-700"
      }`}
    >
      {children}
    </span>
  );
}