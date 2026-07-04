import { useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { supabase } from "@/lib/supabase";

export default function DeleteCategoryDialog({
  open,
  setOpen,
  category,
  refreshCategories,
}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!category) return;

    try {
      setLoading(true);

      const { error } = await supabase
        .from("categories")
        .delete()
        .eq("id", category.id);

      if (error) throw error;

      toast.success("Category deleted successfully.");
      refreshCategories();
      setOpen(false);
    } catch (error) {
      console.error("Delete category failed:", error);
      toast.error(error.message || "Failed to delete category.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <Trash2 size={20} />
            Delete Category
          </DialogTitle>

          <DialogDescription className="pt-3 text-sm text-gray-600">
            Are you sure you want to delete this category?
            <br />
            <br />
            <span className="font-semibold text-[#061735]">
              {category?.name}
            </span>
            <br />
            <br />
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-6">
          <button
            type="button"
            onClick={() => setOpen(false)}
            disabled={loading}
            className="rounded-lg border px-6 py-2"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}