import { useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DeleteMeasurementDialog({
  open,
  setOpen,
  profile,
  refreshProfiles,
}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const { error } = await supabase
        .from("measurement_profiles")
        .delete()
        .eq("id", profile.id);

      if (error) throw error;

      toast.success("Measurement profile deleted.");

      refreshProfiles();

      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to delete profile.");
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
            Delete Measurement Profile
          </DialogTitle>

          <DialogDescription className="pt-3 text-sm text-gray-600">
            Are you sure you want to delete this measurement profile?

            <br />
            <br />

            <span className="font-semibold text-[#061735]">
              {profile?.profile_name}
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