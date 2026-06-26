import {
  ClipboardCheck,
  Scissors,
  Ruler,
  BadgeCheck,
  Truck,
  PackageCheck,
} from "lucide-react";

const stages = [
  {
    title: "Measurement Verification",
    value: 8,
    percent: 16,
    icon: ClipboardCheck,
    color: "bg-blue-600",
  },
  {
    title: "Cutting",
    value: 5,
    percent: 10,
    icon: Ruler,
    color: "bg-green-600",
  },
  {
    title: "Stitching",
    value: 12,
    percent: 24,
    icon: Scissors,
    color: "bg-orange-500",
  },
  {
    title: "Quality Check",
    value: 7,
    percent: 14,
    icon: BadgeCheck,
    color: "bg-purple-600",
  },
  {
    title: "Ready To Ship",
    value: 10,
    percent: 20,
    icon: PackageCheck,
    color: "bg-cyan-500",
  },
  {
    title: "Shipped",
    value: 24,
    percent: 48,
    icon: Truck,
    color: "bg-[#061735]",
  },
];

export default function ProductionOverview() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#061735]">
          Production Overview
        </h2>
        <button className="text-sm font-semibold text-blue-700">View All</button>
      </div>

      <div className="space-y-5">
        {stages.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100">
                <Icon size={17} className="text-[#061735]" />
              </div>

              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>{item.title}</span>
                  <span className="font-bold">{item.value}</span>
                </div>

                <div className="h-2 rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>

              <span className="w-10 text-right text-sm">{item.percent}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}