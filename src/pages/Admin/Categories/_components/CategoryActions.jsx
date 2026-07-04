import {
  MoreVertical,
  Pencil,
  Trash2,
  Copy,
  Archive,
  Eye,
  EyeOff,
  RotateCcw,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function CategoryActions({
  category,
  onEdit,
  onDelete,
  onDuplicate,
  onToggleVisibility,
  onArchive,
  onRestore,
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="rounded-lg border p-2 transition hover:bg-gray-100"
        >
          <MoreVertical size={16} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={() => onEdit(category)}>
          <Pencil className="mr-2 h-4 w-4" />
          Edit Category
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onDuplicate(category)}>
          <Copy className="mr-2 h-4 w-4" />
          Duplicate
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {category.show_on_homepage ? (
          <DropdownMenuItem onClick={() => onToggleVisibility(category)}>
            <EyeOff className="mr-2 h-4 w-4" />
            Hide Category
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => onToggleVisibility(category)}>
            <Eye className="mr-2 h-4 w-4" />
            Show Category
          </DropdownMenuItem>
        )}

        {category.status === "Archived" ? (
          <DropdownMenuItem onClick={() => onRestore(category)}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Restore
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => onArchive(category)}>
            <Archive className="mr-2 h-4 w-4" />
            Archive
          </DropdownMenuItem>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => onDelete(category)}
          className="text-red-600 focus:text-red-600"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Category
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}