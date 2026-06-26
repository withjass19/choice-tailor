import {
  GripVertical,
  Pencil,
  MoreVertical,
  Shirt,
  Shield,
  Footprints,
  BadgeCheck,
  Package,
  IdCard,
  Eye,
  EyeOff,
} from "lucide-react";

const categories = [
  {
    name: "Uniforms",
    description: "Complete uniforms for all services and departments",
    subcategories: 5,
    products: 48,
    status: "Active",
    visibility: "Visible",
    order: 1,
    icon: Shirt,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Caps",
    description: "All types of caps and headgears",
    subcategories: 2,
    products: 16,
    status: "Active",
    visibility: "Visible",
    order: 2,
    icon: Shield,
    color: "bg-violet-100 text-violet-600",
  },
  {
    name: "Belts",
    description: "Belts and buckles for uniforms",
    subcategories: 2,
    products: 12,
    status: "Active",
    visibility: "Visible",
    order: 3,
    icon: Package,
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Badges",
    description: "Metal badges and embroidered badges",
    subcategories: 2,
    products: 18,
    status: "Active",
    visibility: "Visible",
    order: 4,
    icon: BadgeCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Shoes",
    description: "Uniform shoes and footwear",
    subcategories: 1,
    products: 8,
    status: "Active",
    visibility: "Visible",
    order: 5,
    icon: Footprints,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Name Plates",
    description: "Metal and acrylic name plates",
    subcategories: 1,
    products: 6,
    status: "Active",
    visibility: "Visible",
    order: 6,
    icon: IdCard,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Others",
    description: "Other accessories and misc items",
    subcategories: 1,
    products: 4,
    status: "Active",
    visibility: "Hidden",
    order: 7,
    icon: Package,
    color: "bg-gray-100 text-gray-600",
  },
];

export default function CategoriesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="border-b bg-gray-50">
          <tr className="text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="px-4 py-4"></th>
            <th className="px-4 py-4">Category</th>
            <th className="px-4 py-4">Description</th>
            <th className="px-4 py-4">Subcategories</th>
            <th className="px-4 py-4">Products</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4">Visibility</th>
            <th className="px-4 py-4">Sort Order</th>
            <th className="px-4 py-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <tr
                key={item.name}
                className="border-b transition hover:bg-gray-50"
              >
                <td className="px-4 py-5 text-gray-400">
                  <GripVertical size={18} />
                </td>

                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.color}`}
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#061735]">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </td>

                <td className="max-w-xs px-4 py-5 text-gray-600">
                  {item.description}
                </td>

                <td className="px-4 py-5 font-semibold">
                  {item.subcategories}
                </td>

                <td className="px-4 py-5 font-semibold">
                  {item.products}
                </td>

                <td className="px-4 py-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-5">
                  {item.visibility === "Visible" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      <Eye size={13} />
                      Visible
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                      <EyeOff size={13} />
                      Hidden
                    </span>
                  )}
                </td>

                <td className="px-4 py-5 font-semibold">
                  {item.order}
                </td>

                <td className="px-4 py-5">
                  <div className="flex justify-end gap-2">
                    <button className="rounded-lg border p-2 hover:bg-gray-100">
                      <Pencil size={16} />
                    </button>

                    <button className="rounded-lg border p-2 hover:bg-gray-100">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}