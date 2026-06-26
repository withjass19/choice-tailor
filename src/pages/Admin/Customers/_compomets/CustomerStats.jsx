import {
  Users,
  ShoppingBag,
  Ruler,
  IndianRupee,
  Star,
  ArrowUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Customers",
    value: "1,248",
    change: "18.4%",
    icon: Users,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Total Orders",
    value: "3,652",
    change: "16.7%",
    icon: ShoppingBag,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Measurement Profiles",
    value: "2,987",
    change: "22.1%",
    icon: Ruler,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    title: "Total Spent",
    value: "₹28,45,670",
    change: "20.3%",
    icon: IndianRupee,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Repeat Customers",
    value: "842",
    change: "15.6%",
    icon: Star,
    bg: "bg-red-100",
    color: "text-red-600",
  },
];

export default function CustomerStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.bg} ${item.color}`}
              >
                <Icon size={24} />
              </div>

              <div>
                <p className="text-xs font-semibold text-[#061735]">
                  {item.title}
                </p>

                <h3 className="mt-1 font-serif text-3xl font-bold text-[#061735]">
                  {item.value}
                </h3>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-1 text-sm">
              <ArrowUp size={16} className="text-green-600" />
              <span className="text-green-600">{item.change}</span>
              <span className="text-gray-500">from last 30 days</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}