import { Boxes, CircleCheck, Eye, EyeOff, FolderTree } from "lucide-react";

export default function CategoryStats({ categories = [] }) {
  const totalCategories = categories.length;

  const activeCategories = categories.filter(
    (item) => item.status === "Active",
  ).length;

  const visibleCategories = categories.filter(
    (item) => item.show_on_homepage === true,
  ).length;

  const hiddenCategories = categories.filter(
    (item) => item.show_on_homepage === false,
  ).length;

  const totalSubcategories = categories.filter(
    (item) => item.parent_category_id,
  ).length;

  const stats = [
    {
      title: "Total Categories",
      value: totalCategories,
      sub: "All product categories",
      icon: Boxes,
      color: "bg-violet-100 text-violet-600",
    },
    {
      title: "Active Categories",
      value: activeCategories,
      sub: "Currently active",
      icon: CircleCheck,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Visible on Store",
      value: visibleCategories,
      sub: "Visible to customers",
      icon: Eye,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Hidden from Store",
      value: hiddenCategories,
      sub: "Not visible",
      icon: EyeOff,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Subcategories",
      value: totalSubcategories,
      sub: "Child categories",
      icon: FolderTree,
      color: "bg-blue-100 text-blue-600",
    },
  ];

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