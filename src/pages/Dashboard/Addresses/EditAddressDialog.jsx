import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const schema = yup.object({
  full_name: yup.string().required("Full name is required"),

  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required(),

  address_line: yup.string().required(),

  landmark: yup.string(),

  city: yup.string().required(),

  state: yup.string().required(),

  pincode: yup
    .string()
    .matches(/^[0-9]{6}$/, "Invalid pincode")
    .required(),

  address_type: yup.string().required(),
});

export default function EditAddressDialog({
  open,
  setOpen,
  address,
  refreshAddresses,
}) {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (address) {
      reset({
        full_name: address.full_name,
        phone: address.phone,
        address_line: address.address_line,
        landmark: address.landmark,
        city: address.city,
        state: address.state,
        pincode: address.pincode,
        address_type: address.address_type,
        is_default: address.is_default,
      });
    }
  }, [address, reset]);

  const onSubmit = async (values) => {
    try {
      setLoading(true);

      if (values.is_default) {
        await supabase
          .from("addresses")
          .update({
            is_default: false,
          })
          .eq("user_id", user.id);
      }

      const { error } = await supabase
        .from("addresses")
        .update({
          full_name: values.full_name,
          phone: values.phone,
          address_line: values.address_line,
          landmark: values.landmark,
          city: values.city,
          state: values.state,
          pincode: values.pincode,
          address_type: values.address_type,
          is_default: values.is_default,
        })
        .eq("id", address.id);

      if (error) throw error;

      toast.success("Address updated successfully.");

      refreshAddresses();

      setOpen(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

    return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);

        if (!value) reset();
      }}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#061735]">
            Edit Address
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                {...register("full_name")}
                className="w-full rounded-lg border p-3"
              />

              <p className="mt-1 text-xs text-red-500">
                {errors.full_name?.message}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone Number
              </label>

              <input
                {...register("phone")}
                className="w-full rounded-lg border p-3"
              />

              <p className="mt-1 text-xs text-red-500">
                {errors.phone?.message}
              </p>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Address
            </label>

            <textarea
              rows={3}
              {...register("address_line")}
              className="w-full rounded-lg border p-3"
            />

            <p className="mt-1 text-xs text-red-500">
              {errors.address_line?.message}
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Landmark
            </label>

            <input
              {...register("landmark")}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium">
                City
              </label>

              <input
                {...register("city")}
                className="w-full rounded-lg border p-3"
              />

              <p className="mt-1 text-xs text-red-500">
                {errors.city?.message}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                State
              </label>

              <input
                {...register("state")}
                className="w-full rounded-lg border p-3"
              />

              <p className="mt-1 text-xs text-red-500">
                {errors.state?.message}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Pincode
              </label>

              <input
                {...register("pincode")}
                className="w-full rounded-lg border p-3"
              />

              <p className="mt-1 text-xs text-red-500">
                {errors.pincode?.message}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Address Type
              </label>

              <select
                {...register("address_type")}
                className="w-full rounded-lg border p-3"
              >
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  {...register("is_default")}
                />

                <span className="text-sm font-medium">
                  Make this my default address
                </span>
              </label>
            </div>
          </div>

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
              {loading ? "Updating..." : "Update Address"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}