import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";

const initialForm = {
  profile_name: "",
  chest: "",
  waist: "",
  shoulder: "",
  sleeve: "",
  neck: "",
  shirt_length: "",
  trouser_waist: "",
  hip: "",
  thigh: "",
  inseam: "",
  outseam: "",
  bottom: "",
  notes: "",
  is_default: false,
};

export default function AddMeasurementDialog({
  open,
  setOpen,
  refreshProfiles,
}) {
  const { user } = useAuth();

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toNumberOrNull = (value) => {
    if (value === "" || value === null || value === undefined) return null;
    return Number(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first.");
      return;
    }

    if (!form.profile_name.trim()) {
      toast.error("Profile name is required.");
      return;
    }

    try {
      setLoading(true);

      if (form.is_default) {
        await supabase
          .from("measurement_profiles")
          .update({ is_default: false })
          .eq("user_id", user.id);
      }

      const payload = {
        user_id: user.id,
        profile_name: form.profile_name,
        chest: toNumberOrNull(form.chest),
        waist: toNumberOrNull(form.waist),
        shoulder: toNumberOrNull(form.shoulder),
        sleeve: toNumberOrNull(form.sleeve),
        neck: toNumberOrNull(form.neck),
        shirt_length: toNumberOrNull(form.shirt_length),
        trouser_waist: toNumberOrNull(form.trouser_waist),
        hip: toNumberOrNull(form.hip),
        thigh: toNumberOrNull(form.thigh),
        inseam: toNumberOrNull(form.inseam),
        outseam: toNumberOrNull(form.outseam),
        bottom: toNumberOrNull(form.bottom),
        notes: form.notes,
        is_default: form.is_default,
      };

      const { error } = await supabase
        .from("measurement_profiles")
        .insert(payload);

      if (error) throw error;

      toast.success("Measurement profile created.");
      refreshProfiles();
      setForm(initialForm);
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to create profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value) setForm(initialForm);
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#061735]">
            Create Measurement Profile
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Profile Name *"
            name="profile_name"
            value={form.profile_name}
            onChange={handleChange}
            placeholder="Summer Uniform"
          />

          <div className="grid gap-4 md:grid-cols-3">
            <Input label="Chest" name="chest" value={form.chest} onChange={handleChange} />
            <Input label="Waist" name="waist" value={form.waist} onChange={handleChange} />
            <Input label="Shoulder" name="shoulder" value={form.shoulder} onChange={handleChange} />
            <Input label="Neck" name="neck" value={form.neck} onChange={handleChange} />
            <Input label="Sleeve" name="sleeve" value={form.sleeve} onChange={handleChange} />
            <Input label="Shirt Length" name="shirt_length" value={form.shirt_length} onChange={handleChange} />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Input label="Trouser Waist" name="trouser_waist" value={form.trouser_waist} onChange={handleChange} />
            <Input label="Hip" name="hip" value={form.hip} onChange={handleChange} />
            <Input label="Thigh" name="thigh" value={form.thigh} onChange={handleChange} />
            <Input label="Inseam" name="inseam" value={form.inseam} onChange={handleChange} />
            <Input label="Outseam" name="outseam" value={form.outseam} onChange={handleChange} />
            <Input label="Bottom" name="bottom" value={form.bottom} onChange={handleChange} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#061735]">
              Notes
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Any fitting instructions..."
              className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
            />
          </div>

          <label className="flex items-center gap-3 text-sm font-medium text-[#061735]">
            <input
              type="checkbox"
              name="is_default"
              checked={form.is_default}
              onChange={handleChange}
              className="accent-[#b89b3c]"
            />
            Set as default profile
          </label>

          <DialogFooter>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg border px-6 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-[#061735] px-6 py-2 font-semibold text-white disabled:opacity-60"
            >
              {loading ? "Saving..." : "Create Profile"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Input({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "in inches"}
        className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}