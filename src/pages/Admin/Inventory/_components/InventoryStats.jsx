import { Package, CheckCircle, AlertTriangle, XCircle, IndianRupee } from "lucide-react";

const stats = [
  {
    title: "Total Items",
    value: "64",
    desc: "All inventory items",
    icon: Package,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "In Stock",
    value: "42",
    desc: "Items in good stock",
    icon: CheckCircle,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Low Stock",
    value: "15",
    desc: "Stock running low",
    icon: AlertTriangle,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    title: "Out of Stock",
    value: "7",
    desc: "Currently out of stock",
    icon: XCircle,
    bg: "bg-red-100",
    color: "text-red-600",
  },
  {
    title: "Total Inventory Value",
    value: "₹7,85,430",
    desc: "At cost price",
    icon: IndianRupee,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
];

export default function InventoryStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.bg} ${item.color}`}>
                <Icon size={24} />
              </div>

              <div>
                <p className="text-xs font-semibold text-[#061735]">{item.title}</p>
                <h3 className="mt-1 font-serif text-3xl font-bold text-[#061735]">
                  {item.value}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}