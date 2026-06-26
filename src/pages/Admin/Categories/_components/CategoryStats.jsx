import { Boxes, CircleCheck, Eye, EyeOff, FolderTree } from "lucide-react";

const stats = [
  {
    title: "Total Categories",
    value: "7",
    sub: "All product categories",
    icon: Boxes,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Active Categories",
    value: "7",
    sub: "Currently active",
    icon: CircleCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Visible on Store",
    value: "6",
    sub: "Visible to customers",
    icon: Eye,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Hidden from Store",
    value: "1",
    sub: "Not visible",
    icon: EyeOff,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Total Subcategories",
    value: "14",
    sub: "Across all categories",
    icon: FolderTree,
    color: "bg-blue-100 text-blue-600",
  },
];

export default function CategoryStats() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className="rounded-xl border bg-white p-5">
            <div className="flex gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.color}`}
              >
                <Icon size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold">{item.title}</p>

                <h3 className="mt-2 text-4xl font-bold">{item.value}</h3>

                <p className="mt-2 text-sm text-gray-500">{item.sub}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
