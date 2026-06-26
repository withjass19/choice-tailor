import {
  ShoppingBag,
  IndianRupee,
  Ruler,
  Scissors,
  Truck,
  Users,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "125",
    change: "18.5%",
    trend: "up",
    desc: "from last 30 days",
    icon: ShoppingBag,
    bg: "bg-blue-600",
  },
  {
    title: "Total Revenue",
    value: "₹2,45,000",
    change: "22.4%",
    trend: "up",
    desc: "from last 30 days",
    icon: IndianRupee,
    bg: "bg-green-600",
  },
  {
    title: "Pending Measurements",
    value: "12",
    change: "5.2%",
    trend: "down",
    desc: "from last 30 days",
    icon: Ruler,
    bg: "bg-orange-500",
  },
  {
    title: "Orders In Production",
    value: "18",
    change: "12.1%",
    trend: "up",
    desc: "from last 30 days",
    icon: Scissors,
    bg: "bg-purple-600",
  },
  {
    title: "Orders Shipped",
    value: "24",
    change: "20.0%",
    trend: "up",
    desc: "from last 30 days",
    icon: Truck,
    bg: "bg-yellow-500",
  },
  {
    title: "Total Customers",
    value: "342",
    change: "16.3%",
    trend: "up",
    desc: "from last 30 days",
    icon: Users,
    bg: "bg-cyan-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      {stats.map((item) => {
        const Icon = item.icon;
        const isUp = item.trend === "up";

        return (
          <div
            key={item.title}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${item.bg}`}
              >
                <Icon size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#061735]">
                  {item.title}
                </p>

                <h3 className="mt-1 font-serif text-3xl font-bold text-[#061735]">
                  {item.value}
                </h3>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-1 text-sm">
              {isUp ? (
                <ArrowUp size={16} className="text-green-600" />
              ) : (
                <ArrowDown size={16} className="text-red-600" />
              )}

              <span className={isUp ? "text-green-600" : "text-red-600"}>
                {item.change}
              </span>

              <span className="text-gray-500">{item.desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}