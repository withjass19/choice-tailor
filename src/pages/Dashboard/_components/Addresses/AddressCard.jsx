import { useState } from "react";
import {
  Home,
  Building2,
  MapPin,
  Phone,
  User,
  MoreVertical,
  Pencil,
  Trash2,
  CheckCircle,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

import EditAddressDialog from "./EditAddressDialog";
import DeleteAddressDialog from "./DeleteAddressDialog";

export default function AddressCard({
  item,
  refreshAddresses,
}) {
  const { user } = useAuth();

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const icon =
    item.address_type === "Work" ? (
      <Building2 size={22} />
    ) : (
      <Home size={22} />
    );

  const setDefaultAddress = async () => {
    try {
      if (item.is_default) return;

      // Remove old default

      await supabase
        .from("addresses")
        .update({
          is_default: false,
        })
        .eq("user_id", user.id);

      // Set new default

      const { error } = await supabase
        .from("addresses")
        .update({
          is_default: true,
        })
        .eq("id", item.id);

      if (error) throw error;

      toast.success("Default address updated.");

      refreshAddresses();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe1] text-[#b08018]">
              {icon}
            </div>

            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-2xl font-bold text-[#061735]">
                  {item.address_type}
                </h3>

                {item.is_default && (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                    Default
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Delivery Address
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-lg p-2 hover:bg-gray-100">
                <MoreVertical size={18} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setEditOpen(true)}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>

              {!item.is_default && (
                <DropdownMenuItem
                  onClick={setDefaultAddress}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Set Default
                </DropdownMenuItem>
              )}

              <DropdownMenuItem
                onClick={() => setDeleteOpen(true)}
                className="text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-6 space-y-4 text-sm text-[#061735]">
          <p className="flex gap-3">
            <User
              size={18}
              className="shrink-0 text-[#b89b3c]"
            />
            <span className="font-semibold">
              {item.full_name}
            </span>
          </p>

          <p className="flex gap-3">
            <Phone
              size={18}
              className="shrink-0 text-[#b89b3c]"
            />
            <span>{item.phone}</span>
          </p>

          <p className="flex gap-3 leading-relaxed">
            <MapPin
              size={18}
              className="mt-0.5 shrink-0 text-[#b89b3c]"
            />

            <span>
              {item.address_line}, {item.city},{" "}
              {item.state} - {item.pincode}

              <br />

              <span className="text-gray-500">
                Landmark: {item.landmark || "-"}
              </span>
            </span>
          </p>
        </div>
      </div>

      <EditAddressDialog
        open={editOpen}
        setOpen={setEditOpen}
        address={item}
        refreshAddresses={refreshAddresses}
      />

      <DeleteAddressDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        addressId={item.id}
        refreshAddresses={refreshAddresses}
      />
    </>
  );
}