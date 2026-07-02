import { useCallback, useEffect, useState } from "react";
import {
  Plus,
  MapPin,
  Truck,
  ShieldCheck,
  Clock,
} from "lucide-react";

import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";

import AddressCard from "./AddressCard";
import AddAddressDialog from "./AddAddressDialog";

const benefits = [
  {
    title: "Fast Delivery",
    desc: "Quick uniform delivery across India",
    icon: <Truck />,
  },
  {
    title: "Secure Address",
    desc: "Your address details stay protected",
    icon: <ShieldCheck />,
  },
  {
    title: "Easy Reorder",
    desc: "Use saved address for future orders",
    icon: <Clock />,
  },
];

export default function Addresses() {
  const { user } = useAuth();

  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openAddDialog, setOpenAddDialog] = useState(false);

  const fetchAddresses = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("addresses")
        .select("*")
        .eq("user_id", user.id)
        .order("is_default", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;

      setAddresses(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  return (
    <>
      {/* Header */}

      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Home / My Account / Addresses
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold text-[#061735] lg:text-5xl">
            Saved Addresses
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your delivery addresses for faster checkout.
          </p>
        </div>

        <button
          onClick={() => setOpenAddDialog(true)}
          className="flex w-fit items-center gap-2 rounded-md bg-[#061735] px-6 py-3 text-sm font-bold text-white"
        >
          <Plus size={18} />
          Add New Address
        </button>
      </div>

      {/* Address List */}

      <div className="mt-8">
        {loading ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        ) : addresses.length === 0 ? (
          <div className="rounded-xl border bg-white py-16 text-center shadow-sm">
            <MapPin
              size={60}
              className="mx-auto text-[#b89b3c]"
            />

            <h2 className="mt-6 text-2xl font-bold text-[#061735]">
              No Address Found
            </h2>

            <p className="mt-2 text-gray-500">
              Add your first delivery address.
            </p>

            <button
              onClick={() => setOpenAddDialog(true)}
              className="mt-6 rounded-md bg-[#061735] px-6 py-3 text-sm font-bold text-white"
            >
              Add Address
            </button>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {addresses.map((item) => (
              <AddressCard
                key={item.id}
                item={item}
                refreshAddresses={fetchAddresses}
              />
            ))}
          </div>
        )}
      </div>

      {/* Delivery Note */}

      <div className="mt-8 rounded-xl border bg-[#f4f8ff] p-6 shadow-sm">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#061735] text-[#d4a52f]">
              <MapPin size={28} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#061735]">
                Delivery available across India
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Add multiple addresses and choose the delivery location while
                placing your order.
              </p>
            </div>
          </div>

          <button className="rounded-md border border-[#b89b3c] px-6 py-3 text-sm font-bold text-[#b08018]">
            Check Delivery Area
          </button>
        </div>
      </div>

      {/* Benefits */}

      <div className="mt-8 grid gap-4 rounded-xl border bg-white p-6 shadow-sm md:grid-cols-3">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 md:border-r md:last:border-r-0"
          >
            <div className="text-[#b89b3c]">
              {item.icon}
            </div>

            <div>
              <h3 className="font-bold text-[#061735]">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Address Dialog */}

      <AddAddressDialog
        open={openAddDialog}
        setOpen={setOpenAddDialog}
        refreshAddresses={fetchAddresses}
      />
    </>
  );
}