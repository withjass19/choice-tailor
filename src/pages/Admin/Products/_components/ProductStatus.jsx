import { useFormContext } from "react-hook-form";

export default function ProductStatus() {
  const { register, watch, setValue } = useFormContext();

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">Product Status</h2>

      <div className="mt-6 space-y-5">
        <Select label="Status" {...register("status")}>
          <option value="Active">Active</option>
          <option value="Draft">Draft</option>
          <option value="Archived">Archived</option>
          <option value="Out of Stock">Out of Stock</option>
        </Select>

        <Toggle
          name="featuredProduct"
          label="Featured Product"
          desc="Show this product in featured sections"
          watch={watch}
          setValue={setValue}
        />

        <Toggle
          name="bestSeller"
          label="Best Seller"
          desc="Mark this product as a best selling item"
          watch={watch}
          setValue={setValue}
        />

        <Toggle
          name="newArrival"
          label="New Arrival"
          desc="Show new arrival badge on product card"
          watch={watch}
          setValue={setValue}
        />

        <Toggle
          name="allowBackorders"
          label="Allow Backorders"
          desc="Customers can order even when stock is low"
          watch={watch}
          setValue={setValue}
        />
      </div>
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>

      <select
        {...props}
        className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
      >
        {children}
      </select>
    </div>
  );
}

function Toggle({ name, label, desc, watch, setValue }) {
  const value = watch(name);

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
      <div>
        <h4 className="text-sm font-semibold text-[#061735]">{label}</h4>
        <p className="mt-1 text-xs text-gray-500">{desc}</p>
      </div>

      <button
        type="button"
        onClick={() => setValue(name, !value)}
        className={`relative h-6 w-11 rounded-full ${
          value ? "bg-[#061735]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white ${
            value ? "right-1" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}