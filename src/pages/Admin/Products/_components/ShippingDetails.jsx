import { useFormContext } from "react-hook-form";

export default function ShippingDetails() {
  const { register } = useFormContext();

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">
        Shipping & Other Details
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Input label="Product Weight" placeholder="e.g. 0.8 kg" {...register("shippingWeight")} />
        <Input label="Package Length" placeholder="e.g. 40 cm" {...register("packageLength")} />
        <Input label="Package Width" placeholder="e.g. 30 cm" {...register("packageWidth")} />
        <Input label="Package Height" placeholder="e.g. 8 cm" {...register("packageHeight")} />

        <Select label="Shipping Class" {...register("shippingClass")}>
          <option value="Standard Shipping">Standard Shipping</option>
          <option value="Express Shipping">Express Shipping</option>
          <option value="Heavy Item Shipping">Heavy Item Shipping</option>
        </Select>

        <Input label="Delivery Time" placeholder="e.g. 5-7 working days" {...register("deliveryTime")} />

        <Select label="Return Policy" {...register("returnPolicy")}>
          <option value="7 Days Return">7 Days Return</option>
          <option value="10 Days Return">10 Days Return</option>
          <option value="No Return">No Return</option>
        </Select>

        <Input label="Warranty" placeholder="e.g. 30 days stitching warranty" {...register("warranty")} />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-[#061735]">
          Shipping Notes
        </label>
        <textarea
          rows={4}
          placeholder="Add shipping related notes..."
          className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
          {...register("shippingNotes")}
        />
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>
      <input {...props} className="w-full rounded-lg border px-4 py-3 text-sm outline-none" />
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>
      <select {...props} className="w-full rounded-lg border px-4 py-3 text-sm outline-none">
        {children}
      </select>
    </div>
  );
}