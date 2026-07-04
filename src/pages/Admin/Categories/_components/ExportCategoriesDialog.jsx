import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ExportCategoriesDialog({
  open,
  setOpen,
  onExport,
}) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleExport = () => {
    if (!startDate || !endDate) {
      toast.error("Please select start and end date.");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      toast.error("Start date cannot be greater than end date.");
      return;
    }

    onExport("filtered", "custom", {
      start: startDate,
      end: endDate,
    });

    setOpen(false);
    setStartDate("");
    setEndDate("");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);

        if (!value) {
          setStartDate("");
          setEndDate("");
        }
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#061735]">
            Export Categories by Date
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#061735]">
              Start Date
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#061735]">
              End Date
            </label>

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
            />
          </div>
        </div>

        <DialogFooter>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleExport}
            className="rounded-lg bg-[#061735] px-5 py-2 font-semibold text-white"
          >
            Export
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}