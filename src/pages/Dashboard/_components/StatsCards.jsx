import {
  ShoppingBag,
  Ruler,
  MapPin,
  Package,
} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: 12,
    icon: <ShoppingBag />,
  },
  {
    title: "Measurement Profiles",
    value: 3,
    icon: <Ruler />,
  },
  {
    title: "Saved Addresses",
    value: 2,
    icon: <MapPin />,
  },
  {
    title: "Pending Orders",
    value: 2,
    icon: <Package />,
  },
];

export default function StatsCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-xl border p-5"
        >
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              {item.icon}
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h3 className="text-4xl font-bold">
                {item.value}
              </h3>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}