import { useFormContext } from "react-hook-form";

export default function BasicInformation() {
  const { register, watch } = useFormContext();

  const shortDescription = watch("shortDescription") || "";
  const detailedDescription = watch("detailedDescription") || "";

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">Basic Information</h2>

      <div className="mt-6 space-y-5">
        <Input
          label="Product Name *"
          placeholder="e.g. IAF Working Dress"
          {...register("productName", { required: true })}
        />

        <Input
          label="SKU (Stock Keeping Unit) *"
          placeholder="e.g. CT-P-1001"
          {...register("sku", { required: true })}
        />

        <Select label="Category *" {...register("category", { required: true })}>
          <option value="">Select category</option>
          <option value="IAF Uniforms">IAF Uniforms</option>
          <option value="Accessories">Accessories</option>
        </Select>

        <Select label="Sub Category" {...register("subCategory")}>
          <option value="">Select sub category</option>
          <option value="Service Uniform">Service Uniform</option>
          <option value="Flying Overall">Flying Overall</option>
          <option value="Combat Uniform">Combat Uniform</option>
        </Select>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#061735]">
            Short Description *
          </label>

          <textarea
            rows={3}
            maxLength={150}
            placeholder="e.g. Official IAF working dress with shirt and trouser."
            className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
            {...register("shortDescription", { required: true })}
          />

          <p className="mt-1 text-right text-xs text-gray-500">
            {shortDescription.length}/150
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#061735]">
            Detailed Description
          </label>

          <div className="overflow-hidden rounded-lg border">
            <div className="flex gap-4 border-b bg-gray-50 px-4 py-3 text-sm">
              <button type="button">Normal</button>
              <button type="button" className="font-bold">B</button>
              <button type="button" className="italic">I</button>
              <button type="button" className="underline">U</button>
              <button type="button">•</button>
              <button type="button">≡</button>
            </div>

            <textarea
              rows={7}
              maxLength={2000}
              placeholder="Write detailed description about the product..."
              className="w-full resize-none px-4 py-3 text-sm outline-none"
              {...register("detailedDescription")}
            />
          </div>

          <p className="mt-1 text-right text-xs text-gray-500">
            {detailedDescription.length}/2000
          </p>
        </div>
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

      <input
        {...props}
        className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
      />
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