import {
  GripVertical,
  Pencil,
  MoreVertical,
  Package,
  Eye,
  EyeOff,
  Star,
  Archive,
  Trash2,
  Copy,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CategoriesTable({
  categories = [],
  loading,
  onEdit,
  onDelete,
  onArchive,
  onDuplicate,
  onToggleVisibility,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="border-b bg-gray-50">
          <tr className="text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="px-4 py-4"></th>
            <th className="px-4 py-4">Category</th>
            <th className="px-4 py-4">Slug</th>
            <th className="px-4 py-4">Description</th>
            <th className="px-4 py-4">Featured</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4">Visibility</th>
            <th className="px-4 py-4">Sort Order</th>
            <th className="px-4 py-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={9} className="px-4 py-10 text-center text-gray-500">
                Loading categories...
              </td>
            </tr>
          ) : categories.length === 0 ? (
            <tr>
              <td colSpan={9} className="px-4 py-10 text-center text-gray-500">
                No categories found.
              </td>
            </tr>
          ) : (
            categories.map((item) => (
              <tr key={item.id} className="border-b transition hover:bg-gray-50">
                <td className="px-4 py-5 text-gray-400">
                  <GripVertical size={18} />
                </td>

                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f6efe1] text-[#b89b3c]">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full rounded-lg object-cover"
                        />
                      ) : (
                        <Package size={22} />
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#061735]">
                        {item.name}
                      </h3>

                      {item.parent_category_id && (
                        <p className="text-xs text-gray-500">Subcategory</p>
                      )}
                    </div>
                  </div>
                </td>

                <td className="px-4 py-5 text-gray-600">{item.slug}</td>

                <td className="max-w-xs px-4 py-5 text-gray-600">
                  {item.description || "-"}
                </td>

                <td className="px-4 py-5">
                  {item.featured ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                      <Star size={13} />
                      Featured
                    </span>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                      No
                    </span>
                  )}
                </td>

                <td className="px-4 py-5">
                  <StatusBadge status={item.status} />
                </td>

                <td className="px-4 py-5">
                  {item.show_on_homepage ? (
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
                  {item.display_order || 0}
                </td>

                <td className="px-4 py-5">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(item)}
                      className="rounded-lg border p-2 hover:bg-gray-100"
                    >
                      <Pencil size={16} />
                    </button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="rounded-lg border p-2 hover:bg-gray-100"
                        >
                          <MoreVertical size={16} />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className="w-52">
                        <DropdownMenuItem onClick={() => onDuplicate(item)}>
                          <Copy className="mr-2 h-4 w-4" />
                          Duplicate
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => onToggleVisibility(item)}>
                          {item.show_on_homepage ? (
                            <>
                              <EyeOff className="mr-2 h-4 w-4" />
                              Hide Category
                            </>
                          ) : (
                            <>
                              <Eye className="mr-2 h-4 w-4" />
                              Show Category
                            </>
                          )}
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => onArchive(item)}>
                          <Archive className="mr-2 h-4 w-4" />
                          Archive
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                          onClick={() => onDelete(item)}
                          className="text-red-600 focus:text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Hidden: "bg-red-100 text-red-700",
    Archived: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status || "-"}
    </span>
  );
}