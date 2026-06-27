import { useFormContext } from "react-hook-form";

export default function PricingStock() {
  const { register, watch, setValue } = useFormContext();
  const trackInventory = watch("trackInventory");

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">Pricing & Stock</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Input
          label="Price (₹) *"
          placeholder="e.g. 4250"
          type="number"
          {...register("price", { required: true, valueAsNumber: true })}
        />

        <Input
          label="Compare Price (₹)"
          placeholder="e.g. 5000"
          type="number"
          hint="MRP or original price"
          {...register("comparePrice", { valueAsNumber: true })}
        />

        <Input
          label="Cost Price (₹)"
          placeholder="e.g. 2500"
          type="number"
          hint="For internal use only"
          {...register("costPrice", { valueAsNumber: true })}
        />

        <Input
          label="Stock Quantity *"
          placeholder="e.g. 25"
          type="number"
          hint="Total available stock"
          {...register("stockQuantity", { required: true, valueAsNumber: true })}
        />

        <Input
          label="Low Stock Alert"
          placeholder="e.g. 5"
          type="number"
          hint="Alert when stock is below this"
          {...register("lowStockAlert", { valueAsNumber: true })}
        />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#061735]">
            Track Inventory
          </label>

          <button
            type="button"
            onClick={() => setValue("trackInventory", !trackInventory)}
            className={`relative mt-3 h-6 w-11 rounded-full ${
              trackInventory ? "bg-[#061735]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white ${
                trackInventory ? "right-1" : "left-1"
              }`}
            />
          </button>

          <span className="ml-3 text-sm font-medium">
            {trackInventory ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </div>
  );
}

function Input({ label, hint, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
      />

      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}